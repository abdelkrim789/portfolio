import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4"
            >
              AG.DEV
            </motion.h3>
            <p className="text-gray-400">
              Crafting exceptional web experiences with passion and precision.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#cv" className="text-gray-400 hover:text-white transition-colors">
                  CV
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/abdelkrim789" icon={<Github className="w-5 h-5" />} />
              <SocialLink href="https://www.linkedin.com/in/abdelkrim-ghebouli-8257b72a8/" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="https://instagram.com/ka.34.rim__" icon={<Instagram className="w-5 h-5" />} />
              <SocialLink href="mailto:abdelkrimghebouli.34@gmail.com" icon={<Mail className="w-5 h-5" />} />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Abdelkrim Ghebouli
          </p>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </div>
    </footer>
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

export default Footer;