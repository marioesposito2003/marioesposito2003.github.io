import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Code, Users, Target, Lightbulb, Wrench } from 'lucide-react';

// Dati dettagliati dei progetti
const projectsData = {
  'ecommerce-platform': {
    id: 1,
    title: "E-commerce Platform",
    subtitle: "Piattaforma di vendita online completa",
    description: "Una piattaforma e-commerce completa sviluppata con React e Node.js. Include gestione prodotti, carrello, pagamenti e dashboard admin.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    duration: "3 mesi",
    team: "Progetto individuale",
    overview: "Questo progetto rappresenta una soluzione completa per il commercio elettronico, progettata per offrire un'esperienza utente fluida sia per i clienti che per gli amministratori. La piattaforma include tutte le funzionalità essenziali per gestire un negozio online moderno.",
    features: [
      "Sistema di autenticazione sicuro con JWT",
      "Gestione catalogo prodotti con filtri avanzati",
      "Carrello della spesa con persistenza",
      "Integrazione pagamenti con Stripe",
      "Dashboard amministrativa completa",
      "Sistema di recensioni e valutazioni",
      "Gestione ordini e spedizioni",
      "Responsive design per tutti i dispositivi"
    ],
    challenges: [
      "Implementazione di un sistema di pagamenti sicuro",
      "Ottimizzazione delle performance per cataloghi di grandi dimensioni",
      "Gestione dello stato complesso dell'applicazione",
      "Implementazione di filtri di ricerca avanzati"
    ],
    learnings: [
      "Approfondimento dell'architettura REST API",
      "Gestione sicura dei dati sensibili",
      "Ottimizzazione delle query al database",
      "Implementazione di pattern di design scalabili"
    ]
  },
  'task-manager': {
    id: 2,
    title: "Task Management App",
    subtitle: "Gestione collaborativa delle attività",
    description: "Applicazione per la gestione delle attività con funzionalità di collaborazione in tempo reale e notifiche push.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop",
    technologies: ["Next.js", "Socket.io", "MongoDB", "TailwindCSS"],
    duration: "2 mesi",
    team: "Progetto individuale",
    overview: "Un'applicazione web per la gestione delle attività che enfatizza la collaborazione in tempo reale. Progettata per team che necessitano di coordinare il lavoro in modo efficiente e trasparente.",
    features: [
      "Creazione e gestione di task con priorità",
      "Collaborazione in tempo reale con Socket.io",
      "Sistema di notifiche push",
      "Assegnazione di task ai membri del team",
      "Timeline e calendario integrati",
      "Sistema di commenti sui task",
      "Dashboard con statistiche e progressi",
      "Export dei dati in vari formati"
    ],
    challenges: [
      "Implementazione della sincronizzazione in tempo reale",
      "Gestione degli stati concorrenti",
      "Ottimizzazione delle performance con molti utenti",
      "Design di un'interfaccia intuitiva per la collaborazione"
    ],
    learnings: [
      "Programmazione con WebSockets",
      "Gestione degli stati distribuiti",
      "Pattern di design per applicazioni real-time",
      "Ottimizzazione delle performance client-server"
    ]
  },
  'weather-dashboard': {
    id: 3,
    title: "Weather Forecast Dashboard",
    subtitle: "Dashboard meteorologica interattiva",
    description: "Dashboard meteorologica con grafici interattivi e previsioni dettagliate. Utilizza APIs esterne per dati in tempo reale.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&h=600&fit=crop",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Vuetify"],
    duration: "1 mese",
    team: "Progetto individuale",
    overview: "Una dashboard completa per il monitoraggio delle condizioni meteorologiche con visualizzazioni grafiche interattive e previsioni dettagliate per diverse località.",
    features: [
      "Previsioni meteo in tempo reale",
      "Grafici interattivi con Chart.js",
      "Ricerca per città e coordinate GPS",
      "Visualizzazione di mappe meteorologiche",
      "Storico delle condizioni meteo",
      "Allerte meteorologiche personalizzate",
      "Confronto tra diverse località",
      "Widget personalizzabili"
    ],
    challenges: [
      "Integrazione e gestione di API esterne",
      "Visualizzazione efficace di grandi quantità di dati",
      "Gestione degli errori di rete",
      "Ottimizzazione delle chiamate API"
    ],
    learnings: [
      "Integrazione con API REST esterne",
      "Visualizzazione dati con Chart.js",
      "Gestione del caching e della performance",
      "Design responsive per dashboard complesse"
    ]
  },
  'social-analytics': {
    id: 4,
    title: "Social Media Analytics",
    subtitle: "Analisi avanzata dei social media",
    description: "Tool di analisi per social media con dashboard personalizzabili e report automatici. Integrazione con multiple piattaforme.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    technologies: ["React", "Python", "FastAPI", "Redis", "Docker"],
    duration: "4 mesi",
    team: "Progetto individuale",
    overview: "Un sistema completo per l'analisi dei social media che raccoglie, elabora e visualizza metriche da diverse piattaforme social, offrendo insights preziosi per strategie di marketing digitale.",
    features: [
      "Integrazione con multiple piattaforme social",
      "Dashboard personalizzabili e interattive",
      "Report automatici schedulati",
      "Analisi del sentiment dei post",
      "Tracking delle performance dei contenuti",
      "Identificazione dei trend emergenti",
      "Sistema di alerting intelligente",
      "Export dei dati e report PDF"
    ],
    challenges: [
      "Integrazione con API di diverse piattaforme social",
      "Elaborazione di grandi volumi di dati",
      "Implementazione di algoritmi di machine learning",
      "Gestione della scalabilità con Docker"
    ],
    learnings: [
      "Architettura microservizi con FastAPI",
      "Elaborazione dati con Python",
      "Deployment con Docker e containerizzazione",
      "Integrazione di servizi di machine learning"
    ]
  },
  'portfolio': {
    id: 5,
    title: "Portfolio Website",
    subtitle: "Sito portfolio personale",
    description: "Questo stesso portfolio! Sviluppato con React, Framer Motion e TailwindCSS per una UX moderna e fluida.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Framer Motion", "TailwindCSS"],
    duration: "2 settimane",
    team: "Progetto individuale",
    overview: "Il mio portfolio personale progettato per showcasare le mie competenze e progetti in modo elegante e professionale, con un focus particolare sull'esperienza utente e le animazioni fluide.",
    features: [
      "Design moderno e responsive",
      "Animazioni fluide con Framer Motion",
      "Sezioni per progetti, competenze e contatti",
      "Form di contatto funzionante",
      "Ottimizzazione SEO",
      "Deployment automatico su GitHub Pages",
      "Performance ottimizzate",
      "Accessibilità WCAG compliant"
    ],
    challenges: [
      "Bilanciamento tra estetica e performance",
      "Implementazione di animazioni performanti",
      "Ottimizzazione per i motori di ricerca",
      "Cross-browser compatibility"
    ],
    learnings: [
      "Animazioni avanzate con Framer Motion",
      "Ottimizzazione delle performance web",
      "Best practices per l'accessibilità",
      "Deployment e CI/CD con GitHub Actions"
    ]
  },
  'ai-chat': {
    id: 6,
    title: "AI Chat Assistant",
    subtitle: "Assistente conversazionale intelligente",
    description: "Assistente conversazionale AI con interfaccia moderna. Supporta multiple lingue e context-aware responses.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    technologies: ["React", "OpenAI API", "Express.js", "WebSockets"],
    duration: "2 mesi",
    team: "Progetto individuale",
    overview: "Un assistente conversazionale intelligente che utilizza l'API di OpenAI per fornire risposte contestuali e naturali, con un'interfaccia utente moderna e intuitiva.",
    features: [
      "Conversazioni naturali con AI",
      "Supporto per multiple lingue",
      "Interfaccia chat moderna e intuitiva",
      "Gestione del contesto conversazionale",
      "Risposta in tempo reale",
      "Salvataggio dello storico conversazioni",
      "Personalizzazione del comportamento AI",
      "Sistema di feedback per miglioramenti"
    ],
    challenges: [
      "Integrazione efficace con l'API OpenAI",
      "Gestione del contesto nelle conversazioni lunghe",
      "Ottimizzazione dei costi API",
      "Implementazione di risposte in streaming"
    ],
    learnings: [
      "Integrazione con servizi AI avanzati",
      "Gestione efficiente delle API esterne",
      "Design di interfacce conversazionali",
      "Ottimizzazione delle performance per applicazioni real-time"
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  if (!projectId || !projectsData[projectId as keyof typeof projectsData]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Progetto non trovato</h1>
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Torna alla home</span>
          </Link>
        </div>
      </div>
    );
  }

  const project = projectsData[projectId as keyof typeof projectsData];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Torna al portfolio</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl"
            >
              {project.subtitle}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-8 h-8 text-purple-600 mr-3" />
                Panoramica del Progetto
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.overview}
              </p>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Code className="w-8 h-8 text-purple-600 mr-3" />
                Funzionalità Principali
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Challenges */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Wrench className="w-8 h-8 text-purple-600 mr-3" />
                Sfide Tecniche
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg"
                  >
                    <p className="text-gray-700">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Learnings */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Lightbulb className="w-8 h-8 text-purple-600 mr-3" />
                Cosa Ho Imparato
              </h2>
              <div className="space-y-4">
                {project.learnings.map((learning, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg"
                  >
                    <p className="text-gray-700">{learning}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 sticky top-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dettagli Progetto</h3>
              
              <div className="space-y-6">
                {/* Duration */}
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500">Durata</p>
                    <p className="font-semibold text-gray-900">{project.duration}</p>
                  </div>
                </div>

                {/* Team */}
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500">Team</p>
                    <p className="font-semibold text-gray-900">{project.team}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <p className="text-sm text-gray-500 mb-3">Tecnologie Utilizzate</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;