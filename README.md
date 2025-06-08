# 🚀 Portfolio di Mario Esposito

Un portfolio moderno e responsivo sviluppato con React, TypeScript, TailwindCSS e Framer Motion.

## ✨ Caratteristiche

- **Design Moderno**: Interfaccia pulita e minimal con animazioni fluide
- **Responsive**: Ottimizzato per desktop, tablet e mobile
- **Performance**: Build ottimizzato con Vite per caricamenti veloci
- **Accessibilità**: Semantic HTML e navigazione keyboard-friendly
- **Animazioni**: Transizioni fluide con Framer Motion

## 🛠️ Tecnologie Utilizzate

- **React 19** - Framework JavaScript
- **TypeScript** - Tipizzazione statica
- **TailwindCSS** - Framework CSS utility-first
- **Framer Motion** - Libreria per animazioni
- **Lucide React** - Icone moderne
- **Vite** - Build tool veloce

## 🎨 Sezioni

- **Hero Section**: Introduzione con nome, ruolo e social links
- **Chi Sono**: Descrizione professionale e competenze
- **Progetti**: Showcase di progetti con tecnologie e link
- **Contatti**: Form di contatto e informazioni

## 🚀 Avvio Veloce

1. **Installa le dipendenze**
   ```bash
   npm install
   ```

2. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

3. **Build per produzione**
   ```bash
   npm run build
   ```

4. **Deploy su GitHub Pages**
   ```bash
   npm run deploy
   ```

## 📱 Responsive Design

Il portfolio è completamente responsive e si adatta a:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🎯 Performance

- ⚡ Caricamento veloce con Vite
- 🎨 CSS ottimizzato con Purge
- 📷 Immagini ottimizzate
- 🔄 Lazy loading per componenti

## 🌐 Deploy

Il portfolio è configurato per il deploy automatico su GitHub Pages. 
Puoi visitarlo all'indirizzo: [https://marioesposito2003.github.io](https://marioesposito2003.github.io)

## 📄 Licenza

Questo progetto è sotto licenza MIT. Sentiti libero di usarlo come ispirazione per il tuo portfolio!

---

**Mario Esposito** - [GitHub](https://github.com/marioesposito2003) - [LinkedIn](https://linkedin.com/in/mario-esposito)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
