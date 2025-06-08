import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Una piattaforma e-commerce completa sviluppata con React e Node.js. Include gestione prodotti, carrello, pagamenti e dashboard admin.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/marioesposito2003/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Applicazione per la gestione delle attività con funzionalità di collaborazione in tempo reale e notifiche push.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Socket.io", "MongoDB", "TailwindCSS"],
      github: "https://github.com/marioesposito2003/task-manager",
      demo: "https://task-manager-demo.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "Weather Forecast Dashboard",
      description: "Dashboard meteorologica con grafici interattivi e previsioni dettagliate. Utilizza APIs esterne per dati in tempo reale.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Vuetify"],
      github: "https://github.com/marioesposito2003/weather-dashboard",
      demo: "https://weather-dashboard-demo.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Tool di analisi per social media con dashboard personalizzabili e report automatici. Integrazione con multiple piattaforme.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "FastAPI", "Redis", "Docker"],
      github: "https://github.com/marioesposito2003/social-analytics",
      demo: "https://social-analytics-demo.vercel.app",
      featured: true
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Questo stesso portfolio! Sviluppato con React, Framer Motion e TailwindCSS per una UX moderna e fluida.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Framer Motion", "TailwindCSS"],
      github: "https://github.com/marioesposito2003/portfolio",
      demo: "https://marioesposito2003.github.io",
      featured: false
    },
    {
      id: 6,
      title: "AI Chat Assistant",
      description: "Assistente conversazionale AI con interfaccia moderna. Supporta multiple lingue e context-aware responses.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["React", "OpenAI API", "Express.js", "WebSockets"],
      github: "https://github.com/marioesposito2003/ai-chat",
      demo: "https://ai-chat-demo.vercel.app",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Progetti in evidenza
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una selezione dei miei progetti più significativi, che dimostrano le mie competenze 
            in diverse tecnologie e la mia passione per lo sviluppo.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Codice</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Altri progetti
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 transition-colors duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 