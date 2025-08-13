import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Filter, Star, Zap, Code2, Rocket } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)
  const { isDark } = useTheme()

  const projects = [
    {
      id: 1,
      title: "FintelliGuard AI Ecosystem",
      description: "AI-as-a-Service Platform for Financial Security developed for BI-OJK Hackathon 2025. A comprehensive solution for detecting and preventing financial threats using advanced AI algorithms.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      technologies: ["TypeScript", "React", "Node.js", "AI/ML", "Financial APIs"],
      category: "fullstack",
      github: "https://github.com/Nduyy22/fintelligard-ai-ecosystem",
      demo: "https://github.com/Nduyy22/fintelligard-ai-ecosystem",
      featured: true,
      difficulty: "Expert",
      status: "Completed",
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Eremos - Autonomous Swarm Agents",
      description: "Lightweight framework for deploying autonomous swarm agents that detect early on-chain activity across Solana blockchain. Advanced crypto monitoring and analysis system.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      technologies: ["TypeScript", "Solana", "Web3", "Blockchain", "Agent Systems"],
      category: "blockchain",
      github: "https://github.com/Nduyy22/Eremos",
      demo: "https://github.com/Nduyy22/Eremos",
      featured: true,
      difficulty: "Expert",
      status: "Active",
      gradient: "from-green-500 via-teal-500 to-blue-500"
    },
    {
      id: 3,
      title: "JuliaOS - AI Framework",
      description: "Open Source AI & Swarm Intelligence Framework built with Julia. Cutting-edge framework for building intelligent systems and swarm-based applications.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["Julia", "AI/ML", "Swarm Intelligence", "Open Source"],
      category: "ai",
      github: "https://github.com/Nduyy22/JuliaOS",
      demo: "https://github.com/Nduyy22/JuliaOS",
      featured: true,
      difficulty: "Expert",
      status: "Open Source",
      gradient: "from-purple-500 via-pink-500 to-red-500"
    },
    {
      id: 4,
      title: "Nosana Agent Challenge",
      description: "Nosana Builders' Challenge: Agent 101. Advanced agent system for distributed computing and blockchain integration with focus on decentralized infrastructure.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      technologies: ["TypeScript", "Distributed Computing", "Blockchain", "Agent Systems"],
      category: "blockchain",
      github: "https://github.com/Nduyy22/agent-challenge",
      demo: "https://github.com/Nduyy22/agent-challenge",
      featured: false,
      difficulty: "Advanced",
      status: "Completed",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500"
    },
    {
      id: 5,
      title: "Wallet-NDuy",
      description: "Advanced cryptocurrency wallet generator with enhanced security features. Built on modern wallet generation principles with additional security layers.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop",
      technologies: ["HTML", "JavaScript", "Cryptocurrency", "Security", "Wallet"],
      category: "crypto",
      github: "https://github.com/Nduyy22/wallet-nduy",
      demo: "https://github.com/Nduyy22/wallet-nduy",
      featured: false,
      difficulty: "Intermediate",
      status: "Stable",
      gradient: "from-yellow-500 via-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Coding Projects Collection",
      description: "Collection of various coding projects and experiments showcasing different programming concepts, algorithms, and development techniques.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "Various Languages", "Algorithms", "Web Development"],
      category: "frontend",
      github: "https://github.com/Nduyy22/coding",
      demo: "https://github.com/Nduyy22/coding",
      featured: false,
      difficulty: "Beginner",
      status: "Learning",
      gradient: "from-pink-500 via-rose-500 to-purple-500"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code2 },
    { id: 'frontend', name: 'Frontend', icon: Eye },
    { id: 'fullstack', name: 'Full Stack', icon: Zap },
    { id: 'blockchain', name: 'Blockchain', icon: Github },
    { id: 'ai', name: 'AI/ML', icon: Star },
    { id: 'crypto', name: 'Crypto', icon: Rocket }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
      rotateY: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section id="projects" className={`py-20 lg:py-28 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'}`}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 ${isDark ? 'bg-purple-600' : 'bg-purple-300'}`}></div>
        <div className={`absolute bottom-1/4 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 ${isDark ? 'bg-blue-600' : 'bg-blue-300'}`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-10 ${isDark ? 'bg-pink-600' : 'bg-pink-300'}`}></div>
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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center px-6 py-3 rounded-2xl text-sm font-semibold mb-6 backdrop-blur-xl ${isDark ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'bg-purple-100 text-purple-800 border border-purple-200'}`}
          >
            <Rocket className="w-4 h-4 mr-2" />
            Featured Work & Projects
          </motion.div>
          
          <motion.h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            My Latest{' '}
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Creations
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className={`text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Innovative solutions spanning AI, blockchain, fintech, and cutting-edge web technologies
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Buttons - Better mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-12 sm:mb-16 lg:mb-20 px-4"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-xs sm:text-sm lg:text-base transition-all duration-300 backdrop-blur-xl min-h-[40px] sm:min-h-[44px] flex items-center ${
                filter === category.id 
                  ? `bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl ${isDark ? 'shadow-blue-500/25' : 'shadow-blue-500/50'}` 
                  : `${isDark ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20' : 'bg-white/70 border border-black/10 text-gray-700 hover:bg-white hover:border-black/20'} hover:shadow-lg`
              }`}
              onClick={() => setFilter(category.id)}
            >
              <span className="flex items-center space-x-1 sm:space-x-2">
                <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="whitespace-nowrap">{category.name}</span>
              </span>
              
              {filter === category.id && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid - Better mobile layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-0"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
                whileHover={{ 
                  y: -15, 
                  rotateY: 8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 30 }
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group perspective-1000"
              >
                <div className={`relative h-full rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden ${
                  isDark 
                    ? 'bg-gray-800/30 border-white/10 hover:border-white/20' 
                    : 'bg-white/70 border-black/10 hover:border-black/20'
                } shadow-xl hover:shadow-2xl`}>
                  
                  {/* Image Container with Enhanced Effects - Mobile optimized */}
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-gray-900/80 via-transparent to-transparent' : 'from-black/60 via-transparent to-transparent'} opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                    
                    {/* Status Badges - Mobile friendly */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-col space-y-1 sm:space-y-2">
                      {project.featured && (
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs font-semibold shadow-lg`}
                        >
                          <Star className="w-2 h-2 sm:w-3 sm:h-3 mr-1 fill-current" />
                          Featured
                        </motion.span>
                      )}
                      
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className={`inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold backdrop-blur-xl ${
                          project.status === 'Active' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : project.status === 'Completed'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}
                      >
                        {project.status}
                      </motion.span>
                      
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold backdrop-blur-xl ${
                          project.difficulty === 'Expert' 
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : project.difficulty === 'Advanced'
                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}
                      >
                        {project.difficulty}
                      </motion.span>
                    </div>
                    
                    {/* Action Buttons - Mobile friendly */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex space-x-1 sm:space-x-2">
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`backdrop-blur-xl p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 min-h-[36px] min-w-[36px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-white/90 hover:bg-white text-gray-800'}`}
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink size={window.innerWidth < 640 ? 16 : 18} />
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`backdrop-blur-xl p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 min-h-[36px] min-w-[36px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-white/90 hover:bg-white text-gray-800'}`}
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github size={window.innerWidth < 640 ? 16 : 18} />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content Section - Mobile optimized */}
                  <div className="p-4 sm:p-6 lg:p-8 relative z-10">
                    <div className="mb-4 sm:mb-6">
                      <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {project.title}
                      </h3>
                      <p className={`leading-relaxed line-clamp-2 sm:line-clamp-3 text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {project.description}
                      </p>
                    </div>

                    {/* Enhanced Technology Tags - Mobile friendly */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                      {project.technologies.slice(0, window.innerWidth < 640 ? 3 : 4).map((tech, index) => (
                        <motion.span 
                          key={tech} 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className={`px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 rounded-lg sm:rounded-full text-xs sm:text-sm font-medium transition-all duration-200 backdrop-blur-xl ${isDark ? 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20' : 'bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200'}`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > (window.innerWidth < 640 ? 3 : 4) && (
                        <span className={`px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 rounded-lg sm:rounded-full text-xs sm:text-sm font-medium ${isDark ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                          +{project.technologies.length - (window.innerWidth < 640 ? 3 : 4)}
                        </span>
                      )}
                    </div>

                    {/* Enhanced Action Buttons - Mobile optimized */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                      <motion.button 
                        whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-1 bg-gradient-to-r ${project.gradient} text-white px-4 py-3 lg:px-6 lg:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex items-center justify-center min-h-[44px] sm:min-h-[48px] text-sm sm:text-base shadow-lg hover:shadow-xl`}
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Live Demo
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-1 sm:flex-initial backdrop-blur-xl border-2 px-4 py-3 lg:px-6 lg:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex items-center justify-center min-h-[44px] sm:min-h-[48px] text-sm sm:text-base ${isDark ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' : 'bg-white/70 border-gray-200 text-gray-700 hover:bg-white hover:border-gray-300'}`}
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Code
                      </motion.button>
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-20 -z-10`}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className={`rounded-3xl backdrop-blur-xl border p-8 lg:p-12 ${isDark ? 'bg-gray-800/30 border-white/10' : 'bg-white/70 border-black/10'}`}>
            <motion.h3 
              className={`text-2xl lg:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
            >
              Ready to bring your ideas to life?
            </motion.h3>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Let's collaborate and create something amazing together
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[56px] relative overflow-hidden"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center">
                <span>Let's Create Together</span>
                <Rocket className="w-5 h-5 ml-2" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
