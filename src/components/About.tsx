import { motion } from 'framer-motion';
import { Code2, Database, Package } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Code2 className="w-8 h-8" />}
            title="Backend Development"
            description="Expert in Laravel and PHP, creating robust and scalable web applications with modern architecture patterns."
          />
          <FeatureCard 
            icon={<Database className="w-8 h-8" />}
            title="Database Management"
            description="Proficient in Oracle, SQL Server, MySQL, and Access, ensuring optimal data structure and performance."
          />
          <FeatureCard 
            icon={<Package className="w-8 h-8" />}
            title="Frontend Technologies"
            description="Skilled in React, Three.js, jQuery, and modern CSS frameworks like Tailwind and Bootstrap."
          />
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="p-6 rounded-lg bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
  >
    <div className="text-blue-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default About;