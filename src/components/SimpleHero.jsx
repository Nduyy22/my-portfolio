import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const SimpleHero = () => {
  const { isDark } = useTheme()
  
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800'
    }`}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Available for new opportunities
            </motion.span>
          </div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Asep Sudrajat
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed px-4">
              Full Stack Developer specializing in{' '}
              <span className="text-blue-400 font-medium">AI</span>,{' '}
              <span className="text-purple-400 font-medium">Blockchain</span>, and{' '}
              <span className="text-green-400 font-medium">Financial Technology</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              Building innovative solutions for financial security and autonomous systems 
              with cutting-edge technology and modern development practices.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-base sm:text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-h-[48px] flex items-center justify-center"
            >
              <span className="flex items-center justify-center">
                View My Work
                <ExternalLink className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium text-base sm:text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 min-h-[48px] flex items-center justify-center"
            >
              Get In Touch
            </button>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-4 sm:space-x-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { icon: Github, href: "https://github.com/Nduyy22", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/asep-sudrajat-514802376", label: "LinkedIn" },
              { icon: Mail, href: "mailto:asepsudrajat157@gmail.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="group p-3 sm:p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-gray-300 hover:text-white hover:bg-white/20 min-w-[48px] min-h-[48px] flex items-center justify-center"
                aria-label={social.label}
              >
                <social.icon size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-gray-400" size={32} />
        </motion.div>
      </div>
    </section>
  )
}

export default SimpleHero
