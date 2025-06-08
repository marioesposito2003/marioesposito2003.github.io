# 📧 Configurazione EmailJS per il Portfolio

Questa guida ti spiega come configurare EmailJS per ricevere le email dal form di contatto del tuo portfolio.

## 🚀 Setup Rapido

### 1. Crea un account EmailJS
1. Vai su [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clicca "Sign Up" e crea un account gratuito
3. Verifica la tua email

### 2. Configura il servizio email
1. Nel dashboard EmailJS, vai su **"Email Services"**
2. Clicca **"Add New Service"**
3. Seleziona il tuo provider email (Gmail, Outlook, Yahoo, etc.)
4. Segui le istruzioni per collegare il tuo account email
5. **Copia il Service ID** che viene generato

### 3. Crea il template email
1. Vai su **"Email Templates"**
2. Clicca **"Create New Template"**
3. Usa questo template:

```
Oggetto: Nuovo messaggio dal portfolio - {{subject}}

Ciao Mario,

Hai ricevuto un nuovo messaggio dal tuo portfolio:

👤 Nome: {{from_name}}
📧 Email: {{from_email}}
📋 Oggetto: {{subject}}

💬 Messaggio:
{{message}}

---
Questo messaggio è stato inviato dal form di contatto del tuo portfolio.
```

4. **Copia il Template ID** che viene generato

### 4. Ottieni la Public Key
1. Vai su **"Account"** → **"General"**
2. Trova la sezione **"Public Key"**
3. **Copia la Public Key**

### 5. Configura il portfolio
1. Apri il file `src/config/emailjs.ts`
2. Sostituisci i placeholder con i tuoi valori:

```typescript
export const emailjsConfig = {
  serviceId: 'service_xxxxxxx',      // Il tuo Service ID
  templateId: 'template_xxxxxxx',    // Il tuo Template ID  
  publicKey: 'xxxxxxxxxxxxxxxxxx',   // La tua Public Key
};
```

## ✅ Test del Form

1. Avvia il portfolio: `npm run dev`
2. Vai alla sezione Contatti
3. Compila e invia il form
4. Controlla la tua email!

## 🔧 Alternative a EmailJS

Se preferisci altre soluzioni:

### **Formspree** (Semplice)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- campi del form -->
</form>
```

### **Netlify Forms** (Solo se usi Netlify)
```html
<form name="contact" netlify>
  <!-- campi del form -->
</form>
```

### **GetForm** (Gratuito)
```html
<form action="https://getform.io/f/YOUR_FORM_ID" method="POST">
  <!-- campi del form -->
</form>
```

## 🎯 Vantaggi EmailJS

- ✅ **Gratuito** fino a 200 email/mese
- ✅ **Funziona con siti statici** (GitHub Pages)
- ✅ **Configurazione flessibile**
- ✅ **Supporta allegati e template HTML**
- ✅ **Nessun server backend richiesto**

## 🛡️ Sicurezza

- ✅ Le chiavi sono public-safe (progettate per essere esposte)
- ✅ EmailJS ha protezioni anti-spam integrate
- ✅ Puoi limitare i domini autorizzati nel dashboard

## 📞 Supporto

Se hai problemi:
1. Controlla la console del browser per errori
2. Verifica che i campi del form abbiano i nomi corretti
3. Testa la configurazione nel dashboard EmailJS
4. Controlla la documentazione: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

---

**Una volta configurato, riceverai tutte le email dal tuo portfolio direttamente nella tua casella di posta! 📬** 