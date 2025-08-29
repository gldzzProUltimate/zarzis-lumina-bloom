import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

// ─── ENV ──────────────────────────────────────────────────────────────────────
dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT || 3001;

// ─── TRUST PROXY ──────────────────────────────────────────────────────────────
app.set('trust proxy', 1);

// ─── SECURITY ─────────────────────────────────────────────────────────────────
app.use(helmet());

// ─── CORS ──────────────────────────────────────────────────────────────────────
// Allow your Vercel frontend + your main domains
const allowedOrigins = [
  'https://zarzis-eponge.com',
  'https://www.zarzis-eponge.com',
  'https://zarzis-eponge.vercel.app',
  'https://www.zarzis-eponge.vercel.app',
  'https://zarzis-lumina-bloom.vercel.app',
  'http://localhost:8080',
  'http://localhost:5173'
];

const corsOptions = {
  origin: allowedOrigins,       // simple array form
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 204
};

// apply CORS to all routes (and preflight)
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// ─── JSON PARSING ─────────────────────────────────────────────────────────────
app.use(express.json());

// ─── RATE LIMIT ───────────────────────────────────────────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,     // 15 minutes
  max: 5,                       // limit each IP to 5 requests per window
  message: { success: false, message: 'Too many requests, please try again later.' }
});
// only rate-limit the email endpoint
app.use('/api/send-email', limiter);

// ─── MAILER SETUP ─────────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: 'mail.zarzis-eponge.com',  // LWS SMTP server
  port: 465,                       // SSL port for SMTP
  secure: true,                    // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
  debug: true
});

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ─── EMAIL TEMPLATES ─────────────────────────────────────────────────────────
// Email templates for different languages
const getEmailTemplate = (language, name, subject, message, company, country) => {
  // Default to English if language is not supported
  const lang = ['en', 'fr', 'ar'].includes(language) ? language : 'en';
  
  const templates = {
    // English template
    en: `<div style="font-family:Arial,sans-serif; max-width:600px; margin:0 auto;">
          <div style="text-align:center; margin-bottom:20px;">
            <img src="https://images.geant-beaux-arts.fr/out/pictures/generated/1500_1500/413327/Eponge+synth%C3%A9tique.jpg" alt="Zarzis Eponge Logo" style="max-width:150px;">
          </div>
          <h2 style="color:#8B5A3C; text-align:center;">Thank You for Contacting Zarzis Eponge!</h2>
          <p>Dear ${name},</p>
          <p>We've received your wholesale inquiry about "${subject}". Here are the details you provided:</p>
          <div style="background:#f9f9f9; padding:15px; border-left:4px solid #8B5A3C; margin:15px 0;">
            <p><strong>Company:</strong> ${company || 'Not specified'}</p>
            <p><strong>Country:</strong> ${country || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g,'<br>')}</p>
          </div>
          <p>Our Mediterranean sponge specialists will review your inquiry and respond within 24 hours with detailed information about our wholesale offerings.</p>
          <p>Best regards,</p>
          <p><strong>Zarzis Eponge Team</strong></p>
          <footer style="font-size:12px; color:#777; text-align:center; margin-top:30px; border-top:1px solid #eee; padding-top:20px;">
            © ${new Date().getFullYear()} Zarzis Eponge. All rights reserved.<br>
            ${process.env.EMAIL_USER} | www.zarzis-eponge.com
          </footer>
        </div>`,
    
    // French template
    fr: `<div style="font-family:Arial,sans-serif; max-width:600px; margin:0 auto;">
          <div style="text-align:center; margin-bottom:20px;">
            <img src="https://images.geant-beaux-arts.fr/out/pictures/generated/1500_1500/413327/Eponge+synth%C3%A9tique.jpg" alt="Zarzis Eponge Logo" style="max-width:150px;">
          </div>
          <h2 style="color:#8B5A3C; text-align:center;">Merci d'avoir contacté Zarzis Eponge !</h2>
          <p>Cher/Chère ${name},</p>
          <p>Nous avons bien reçu votre demande de gros concernant "${subject}". Voici les détails que vous avez fournis :</p>
          <div style="background:#f9f9f9; padding:15px; border-left:4px solid #8B5A3C; margin:15px 0;">
            <p><strong>Entreprise:</strong> ${company || 'Non spécifié'}</p>
            <p><strong>Pays:</strong> ${country || 'Non spécifié'}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g,'<br>')}</p>
          </div>
          <p>Nos spécialistes des éponges méditerranéennes examineront votre demande et vous répondront dans les 24 heures avec des informations détaillées sur nos offres de gros.</p>
          <p>Cordialement,</p>
          <p><strong>L'équipe Zarzis Eponge</strong></p>
          <footer style="font-size:12px; color:#777; text-align:center; margin-top:30px; border-top:1px solid #eee; padding-top:20px;">
            © ${new Date().getFullYear()} Zarzis Eponge. Tous droits réservés.<br>
            ${process.env.EMAIL_USER} | www.zarzis-eponge.com
          </footer>
        </div>`,
    
    // Arabic template (right-to-left)
    ar: `<div style="font-family:Arial,sans-serif; max-width:600px; margin:0 auto; direction:rtl; text-align:right;">
          <div style="text-align:center; margin-bottom:20px;">
            <img src="https://images.geant-beaux-arts.fr/out/pictures/generated/1500_1500/413327/Eponge+synth%C3%A9tique.jpg" alt="Zarzis Eponge Logo" style="max-width:150px;">
          </div>
          <h2 style="color:#8B5A3C; text-align:center;">شكراً لتواصلك مع زرزيس إسفنج!</h2>
          <p>عزيزي/عزيزتي ${name}،</p>
          <p>لقد استلمنا استفسارك حول الجملة بخصوص "${subject}". إليك التفاصيل التي قدمتها:</p>
          <div style="background:#f9f9f9; padding:15px; border-right:4px solid #8B5A3C; margin:15px 0;">
            <p><strong>الشركة:</strong> ${company || 'غير محدد'}</p>
            <p><strong>البلد:</strong> ${country || 'غير محدد'}</p>
            <p><strong>الرسالة:</strong></p>
            <p>${message.replace(/\n/g,'<br>')}</p>
          </div>
          <p>سيقوم متخصصو الإسفنج المتوسطي لدينا بمراجعة استفسارك والرد عليك خلال 24 ساعة بمعلومات مفصلة حول عروض الجملة لدينا.</p>
          <p>مع أطيب التحيات،</p>
          <p><strong>فريق زرزيس إسفنج</strong></p>
          <footer style="font-size:12px; color:#777; text-align:center; margin-top:30px; border-top:1px solid #eee; padding-top:20px;">
            © ${new Date().getFullYear()} زرزيس إسفنج. جميع الحقوق محفوظة.<br>
            ${process.env.EMAIL_USER} | www.zarzis-eponge.com
          </footer>
        </div>`
  };
  
  return templates[lang];
};

// Get email subject based on language
const getEmailSubject = (language) => {
  const subjects = {
    en: 'Thank you for contacting Zarzis Eponge - Mediterranean Sponges',
    fr: 'Merci d\'avoir contacté Zarzis Eponge - Éponges Méditerranéennes',
    ar: 'شكراً لتواصلك مع زرزيس إسفنج - إسفنج البحر المتوسط'
  };
  
  return subjects[language] || subjects.en;
};

// ─── ENDPOINTS ────────────────────────────────────────────────────────────────
app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message, company, country, language } = req.body;
  // Default to English if no language is provided
  const userLanguage = language || 'en';
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All required fields must be provided' });
  }
  
  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }
  
  if (message.length > 5000) {
    return res.status(400).json({ success: false, message: 'Message is too long' });
  }

  try {
    await transporter.verify();

    // → Org notification (always in English for staff)
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Zarzis Eponge Contact Form: ${subject}`,
      html: `<div style="font-family:Arial,sans-serif; max-width:600px; margin:0 auto;">
               <h2 style="color:#8B5A3C;">New Wholesale Inquiry - Zarzis Eponge</h2>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Company:</strong> ${company || 'Not specified'}</p>
               <p><strong>Country:</strong> ${country || 'Not specified'}</p>
               <p><strong>Subject:</strong> ${subject}</p>
               <p><strong>Language:</strong> ${userLanguage}</p>
               <div style="background:#f9f9f9; padding:15px; border-left:4px solid #8B5A3C;">
                 <h3>Message:</h3>
                 ${message.replace(/\n/g,'<br>')}
               </div>
             </div>`
    });

    // → Confirmation to sender in their preferred language
    await transporter.sendMail({
      from: `"Zarzis Eponge" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: getEmailSubject(userLanguage),
      html: getEmailTemplate(userLanguage, name, subject, message, company, country)
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('Error sending email:', err);
    let msg = 'Failed to send email';

    if (err.code === 'EENVELOPE' && err.response?.includes('Domain not found')) {
      msg = 'Email domain not found.';
    } else if (err.code === 'EAUTH') {
      msg = 'Authentication failed.';
    } else if (['ESOCKET','ECONNECTION'].includes(err.code)) {
      msg = 'Connection to email server failed.';
    }

    res.status(500).json({
      success: false,
      message: msg,
      ...(process.env.NODE_ENV === 'development' && { error: err.message })
    });
  }
});

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'Zarzis Eponge API' }));

// 404 + generic error
app.use((_req, res) => res.status(404).json({ success: false, message: 'Not found' }));
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// ─── START ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Zarzis Eponge API Server running on port ${PORT}`);
});