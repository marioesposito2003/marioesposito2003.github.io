import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form.current!,
        emailjsConfig.publicKey
      );
      
      console.log('Email inviata:', result.text);
      setIsSubmitted(true);
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      
      // Reset dopo 5 secondi
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Errore invio email:', error);
      alert('Errore nell\'invio del messaggio. Riprova più tardi.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mario.esposito.dev@gmail.com",
      href: "mailto:mario.esposito.dev@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "mario-esposito",
      href: "https://linkedin.com/in/mario-esposito"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "marioesposito2003",
      href: "https://github.com/marioesposito2003"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Località",
      value: "Napoli, Italia",
      href: null
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Telefono",
      value: "Disponibile su richiesta",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Parliamone insieme
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hai un progetto interessante in mente? Vuoi collaborare o semplicemente fare una chiacchierata? 
            Sono sempre aperto a nuove opportunità e connessioni.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Informazioni di contatto
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                    <div className="text-purple-300">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? "_blank" : undefined}
                        rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="text-white hover:text-purple-300 transition-colors duration-300 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <h4 className="text-xl font-semibold text-white mb-4">
                Seguimi sui social
              </h4>
              <div className="flex space-x-4">
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
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Invia un messaggio
            </h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="from_name" className="block text-gray-300 text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="mario.esposito.dev@gmail.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Oggetto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Di cosa vuoi parlare?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Scrivi qui il tuo messaggio..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading || isSubmitted}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Invio in corso...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Messaggio inviato!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Invia messaggio</span>
                  </>
                )}
              </button>
            </form>
            
            <p className="text-gray-400 text-sm mt-4 text-center">
              Ti risponderò entro 24 ore! 🚀
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 