import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
          >
            AG.DEV
          </motion.div>
          
          <div className="flex space-x-6">
            <SocialLink href="https://github.com/abdelkrim789" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://www.linkedin.com/in/abdelkrim-ghebouli-8257b72a8/" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="https://instagram.com/ka.34.rim__" icon={<Instagram className="w-5 h-5" />} />
            <SocialLink href="mailto:abdelkrimghebouli.34@gmail.com" icon={<Mail className="w-5 h-5" />} />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, y: -2 }}
    whileTap={{ scale: 0.9 }}
    className="text-white/70 hover:text-white transition-colors"
  >
    {icon}
  </motion.a>
);

export default Navbar;