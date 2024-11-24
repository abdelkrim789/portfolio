import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { useSpring } from '@react-spring/three';
import { Float, PerspectiveCamera } from '@react-three/drei';

const projects = [
  {
    id: 1,
    title: "DoctorKom",
    description: "A comprehensive healthcare services web application facilitating patient-doctor interactions.",
    tech: ["Laravel", "Bootstrap", "Tailwind", "MySQL"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    links: { demo: "#", github: "#" }
  },
  {
    id: 2,
    title: "Gradient Generator",
    description: "Dynamic CSS gradient generation tool with real-time preview and code export.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&q=80",
    links: { demo: "#", github: "#" }
  },
  {
    id: 3,
    title: "Timer by JS",
    description: "Interactive timer application with sleek UI and multiple timing modes.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1502570149819-b2260483d302?auto=format&fit=crop&q=80",
    links: { demo: "#", github: "#" }
  },
  {
    id: 4,
    title: "Space K",
    description: "Space-themed creative project showcasing interactive animations and 3D elements.",
    tech: ["JavaScript", "React"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    links: { demo: "#", github: "#" }
  },
  {
    id: 5,
    title: "Olives",
    description: "Advanced web development project (In Progress)",
    tech: ["React", "Tailwind", "MySQL"],
    image: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&q=80",
    links: { demo: "#", github: "#" }
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length);
  };

  return (
    <section className="min-h-screen bg-black relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="relative h-[600px] w-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <ProjectCard project={projects[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <mesh>
              <torusGeometry args={[8, 0.5, 16, 100]} />
              <meshStandardMaterial color="#3b82f6" wireframe />
            </mesh>
          </Float>
          <ambientLight intensity={0.5} />
        </Canvas>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gradient-to-b from-white/10 to-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10"
  >
    <div className="relative h-64">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href={project.links.demo}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Demo
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href={project.links.github}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
        >
          <Github className="w-4 h-4" />
          Code
        </motion.a>
      </div>
    </div>
  </motion.div>
);

export default Projects;