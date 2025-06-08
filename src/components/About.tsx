import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, TailwindCSS, Next.js"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      description: "RESTful APIs, GraphQL, WebSockets"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "React Native, Flutter, Progressive Web Apps"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Chi sono
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sono uno studente di Informatica presso l'Università di Napoli Federico II, 
              appassionato di sviluppo software e tecnologie emergenti. La mia curiosità mi spinge 
              costantemente a esplorare nuove tecnologie e metodologie di sviluppo.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Attualmente mi sto specializzando nello sviluppo web full-stack, con particolare 
              interesse per l'ecosistema React e le tecnologie cloud. Amo creare soluzioni 
              eleganti e performanti che migliorano l'esperienza utente.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
            >
              <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Sempre in crescita
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Credo nell'apprendimento continuo e nell'importanza di rimanere aggiornati 
              sulle ultime tendenze tecnologiche. Ogni progetto è un'opportunità per crescere 
              e migliorare le mie competenze.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 