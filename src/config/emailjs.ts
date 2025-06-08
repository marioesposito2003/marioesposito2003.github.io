// Configurazione EmailJS
// Per configurare EmailJS:
// 1. Vai su https://www.emailjs.com/
// 2. Crea un account gratuito
// 3. Crea un servizio email (Gmail, Outlook, etc.)
// 4. Crea un template email
// 5. Ottieni le chiavi e sostituiscile qui sotto

export const emailjsConfig = {
  serviceId: 'service_0t030xk',      // Service ID di Mario
  templateId: 'template_wv6gq9r',    // Template ID di Mario
  publicKey: '8PwkTaCecu3fwZGBb',     // Public Key di Mario
};

// Template EmailJS consigliato:
/*
Oggetto: Nuovo messaggio dal portfolio - {{subject}}

Ciao Mario,

Hai ricevuto un nuovo messaggio dal tuo portfolio:

Nome: {{from_name}}
Email: {{from_email}}
Oggetto: {{subject}}

Messaggio:
{{message}}

---
Questo messaggio è stato inviato dal form di contatto del tuo portfolio.
*/ 