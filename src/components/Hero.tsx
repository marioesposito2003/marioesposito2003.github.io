import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Mario 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Esposito
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Studente di Informatica & Sviluppatore
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Appassionato di tecnologie moderne e sviluppo web. Creo esperienze digitali innovative con un focus su performance e user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="https://github.com/marioesposito2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/mario-esposito"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="mailto:mario.esposito.dev@gmail.com"
              className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 text-white hover:text-purple-300 transition-colors duration-300"
            >
              <span>Scopri di più</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 