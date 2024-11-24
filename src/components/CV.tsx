import { motion } from 'framer-motion';
import { BookOpen, Briefcase, GraduationCap, Languages } from 'lucide-react';

const CV = () => {
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
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ExperienceCard
              icon={<Briefcase className="w-6 h-6" />}
              title="Shipping Agency Trainee"
              duration="3 Months"
              description="Gained practical experience in shipping logistics and operations management."
            />
            
            <ExperienceCard
              icon={<GraduationCap className="w-6 h-6" />}
              title="Business Idea Master's Student"
              duration="Current"
              description="Currently pursuing Master's degree, focusing on innovative business strategies and entrepreneurship."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-6 rounded-lg bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Languages className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Languages</h3>
              </div>
              <div className="space-y-4">
                <LanguageBar language="Arabic" level="Native" progress={100} />
                <LanguageBar language="English" level="Native" progress={100} />
                <LanguageBar language="French" level="Intermediate" progress={60} />
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Certifications</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Information Systems and Software Engineering</li>
                <li>• Full Stack Web Development</li>
                <li>• Database Management Systems</li>
                <li>• Modern JavaScript Frameworks</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ icon, title, duration, description }: {
  icon: React.ReactNode;
  title: string;
  duration: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="p-6 rounded-lg bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="text-blue-400">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{duration}</p>
      </div>
    </div>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const LanguageBar = ({ language, level, progress }: {
  language: string;
  level: string;
  progress: number;
}) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-white">{language}</span>
      <span className="text-gray-400">{level}</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-blue-500 rounded-full"
      />
    </div>
  </div>
);

export default CV;