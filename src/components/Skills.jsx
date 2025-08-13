import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Database, 
  Palette, 
  Globe, 
  Settings,
  Zap,
  Monitor,
  Brain,
  Shield,
  Cpu,
  Star
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Skills = () => {
  const { isDark } = useTheme()
  const [hoveredCard, setHoveredCard] = useState(null)
  
  // Enhanced Progress Bar Component with glow effect
  const ProgressBar = ({ name, level, delay = 0, color }) => {
    return (
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-between items-center mb-2">
          <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{name}</span>
          <div className="flex items-center space-x-1">
            <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{level}%</span>
            {level >= 85 && <Star className="w-3 h-3 text-yellow-500 fill-current" />}
          </div>
        </div>
        <div className={`w-full rounded-full h-3 overflow-hidden backdrop-blur-sm ${
          isDark ? 'bg-gray-700/50' : 'bg-gray-200/50'
        }`}>
          <motion.div
            className={`h-3 bg-gradient-to-r ${color} rounded-full relative`}
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: delay, ease: "easeOut" }}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${color} rounded-full opacity-50 blur-sm`}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    )
  }
  const skills = [
    {
      category: "AI & Machine Learning",
      icon: Brain,
      color: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      description: "Building intelligent systems and neural networks",
      technologies: [
        { name: "Machine Learning", level: 88 },
        { name: "Neural Networks", level: 82 },
        { name: "Deep Learning", level: 78 },
        { name: "Computer Vision", level: 75 },
        { name: "NLP", level: 80 },
        { name: "TensorFlow", level: 85 }
      ]
    },
    {
      category: "Blockchain & Web3", 
      icon: Shield,
      color: "from-green-500 via-emerald-500 to-lime-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      description: "Decentralized applications and smart contracts",
      technologies: [
        { name: "Solana", level: 92 },
        { name: "Smart Contracts", level: 88 },
        { name: "Web3.js", level: 85 },
        { name: "DeFi Protocols", level: 80 },
        { name: "Crypto Trading", level: 90 },
        { name: "Blockchain Security", level: 85 }
      ]
    },
    {
      category: "Full Stack Development",
      icon: Code,
      color: "from-purple-500 via-pink-500 to-rose-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      description: "End-to-end web application development",
      technologies: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "GraphQL", level: 80 }
      ]
    },
    {
      category: "DevOps & Cloud",
      icon: Settings,
      color: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      description: "Scalable infrastructure and deployment",
      technologies: [
        { name: "Docker", level: 88 },
        { name: "AWS/Azure", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "CI/CD Pipelines", level: 87 },
        { name: "Microservices", level: 83 },
        { name: "Monitoring", level: 85 }
      ]
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      color: "from-indigo-500 via-blue-500 to-cyan-500",
      bgGradient: "from-indigo-500/10 to-blue-500/10",
      description: "Cross-platform mobile applications",
      technologies: [
        { name: "React Native", level: 90 },
        { name: "Flutter", level: 75 },
        { name: "iOS Development", level: 80 },
        { name: "Android", level: 85 },
        { name: "Expo", level: 88 },
        { name: "Mobile UI/UX", level: 85 }
      ]
    },
    {
      category: "UI/UX Design",
      icon: Palette,
      color: "from-pink-500 via-rose-500 to-red-500",
      bgGradient: "from-pink-500/10 to-rose-500/10",
      description: "Beautiful and intuitive user experiences",
      technologies: [
        { name: "Figma", level: 90 },
        { name: "Design Systems", level: 88 },
        { name: "Prototyping", level: 85 },
        { name: "User Research", level: 80 },
        { name: "Interaction Design", level: 87 },
        { name: "Accessibility", level: 85 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section id="skills" className={`py-20 lg:py-28 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 ${isDark ? 'bg-blue-600' : 'bg-blue-300'}`}></div>
        <div className={`absolute bottom-20 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 ${isDark ? 'bg-purple-600' : 'bg-purple-300'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            <div className={`p-4 rounded-2xl backdrop-blur-xl ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
              <Cpu className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
          </motion.div>
          
          <motion.h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Technical{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>
          
          <motion.p 
            className={`text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Mastering cutting-edge technologies to build innovative solutions that shape the future
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-0"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={cardVariants}
              whileHover={{ 
                y: window.innerWidth < 768 ? -5 : -10, 
                rotateY: window.innerWidth < 768 ? 2 : 5,
                scale: window.innerWidth < 768 ? 1.01 : 1.02,
                transition: { type: "spring", stiffness: 300, damping: 30 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border transition-all duration-500 ${
                isDark 
                  ? 'bg-gray-800/30 border-white/10 hover:border-white/20' 
                  : 'bg-white/70 border-black/10 hover:border-black/20'
              } shadow-xl hover:shadow-2xl`}
              style={{
                background: hoveredCard === index 
                  ? `linear-gradient(135deg, ${isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.8)'}, ${isDark ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)'})`
                  : undefined
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.bgGradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Icon and Title - Mobile optimized */}
              <div className="relative z-10 flex items-center mb-4 sm:mb-6">
                <motion.div 
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg`}
                  whileHover={{ scale: window.innerWidth < 768 ? 1.05 : 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <skill.icon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                </motion.div>
                <div className="ml-3 sm:ml-4">
                  <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {skill.category}
                  </h3>
                  <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1 line-clamp-2`}>
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Technologies - Mobile friendly */}
              <div className="relative z-10 space-y-3 sm:space-y-4">
                {skill.technologies.map((tech, techIndex) => (
                  <ProgressBar
                    key={tech.name}
                    name={tech.name}
                    level={tech.level}
                    delay={techIndex * 0.1}
                    color={skill.color}
                  />
                ))}
              </div>

              {/* Bottom Gradient Line */}
              <motion.div
                className={`relative z-10 mt-6 sm:mt-8 h-1 bg-gradient-to-r ${skill.color} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />

              {/* Glow Effect */}
              <AnimatePresence>
                {hoveredCard === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl sm:rounded-3xl blur-xl opacity-20 -z-10`}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Stats Section - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 sm:mt-20 lg:mt-28 px-4 sm:px-0"
        >
          <div className={`rounded-2xl sm:rounded-3xl backdrop-blur-xl border p-6 sm:p-8 lg:p-12 ${isDark ? 'bg-gray-800/30 border-white/10' : 'bg-white/70 border-black/10'}`}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { number: "100+", label: "Projects Delivered", icon: Code, color: "from-blue-500 to-cyan-500" },
                { number: "5+", label: "Years Experience", icon: Zap, color: "from-purple-500 to-pink-500" },
                { number: "30+", label: "Technologies Mastered", icon: Settings, color: "from-green-500 to-emerald-500" },
                { number: "99%", label: "Client Satisfaction", icon: Star, color: "from-yellow-500 to-orange-500" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: window.innerWidth < 768 ? 1.05 : 1.1, y: window.innerWidth < 768 ? -2 : -5 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer"
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <motion.div
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className={`text-sm sm:text-base font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-tight`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
