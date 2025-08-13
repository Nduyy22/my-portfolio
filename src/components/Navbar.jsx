import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, Code2, Zap, Rocket, Mail, Star } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import DarkModeToggle from './DarkModeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { isDark } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleMouseMove = (e) => {
      const rect = document.querySelector('nav')?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', id: 'home', icon: Rocket },
    { name: 'About', href: '#about', id: 'about', icon: Sparkles },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Zap },
    { name: 'Projects', href: '#projects', id: 'projects', icon: Code2 },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ]

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? `${isDark ? 'bg-black/40' : 'bg-white/40'} backdrop-blur-3xl shadow-2xl` 
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(30px) saturate(180%)' : 'none',
        background: scrolled 
          ? `linear-gradient(135deg, ${isDark 
              ? `rgba(0,0,0,0.5) 0%, rgba(15,23,42,0.4) 50%, rgba(0,0,0,0.5) 100%`
              : `rgba(255,255,255,0.5) 0%, rgba(248,250,252,0.4) 50%, rgba(255,255,255,0.5) 100%`
            }), radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${isDark 
              ? 'rgba(59, 130, 246, 0.15)' 
              : 'rgba(139, 92, 246, 0.1)'
            }, transparent 70%)`
          : 'transparent',
        borderBottom: scrolled ? `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` : 'none'
      }}
    >
      {/* Animated Glow Border */}
      {scrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      )}
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center py-4 lg:py-6">
          
          {/* Enhanced Logo Section - Fixed Spacing */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer group relative z-20"
            onClick={() => smoothScrollTo('home')}
          >
            {/* Logo Container */}
            <div className="flex items-center space-x-4">
              {/* Animated Logo Icon */}
              <motion.div 
                className="relative w-12 h-12 lg:w-14 lg:h-14"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 rounded-3xl ${isDark ? 'bg-blue-500/30' : 'bg-purple-500/30'} blur-xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Main Logo */}
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl border border-white/20">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  >
                    <Code2 className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </motion.div>
                  
                  {/* Floating Particles */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                    animate={{ 
                      y: [0, -8, 0],
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity 
                    }}
                  />
                  
                  <motion.div
                    className="absolute -bottom-1 -left-2 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                    animate={{ 
                      x: [0, 8, 0],
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: 0.8
                    }}
                  />
                </div>
              </motion.div>
              
              {/* Enhanced Logo Text */}
              <div className="flex flex-col justify-center">
                <motion.div
                  className="relative"
                  whileHover={{ 
                    textShadow: isDark 
                      ? '0 0 25px rgba(59, 130, 246, 0.8)' 
                      : '0 0 25px rgba(139, 92, 246, 0.6)'
                  }}
                >
                  <h1 className="text-xl lg:text-2xl font-bold">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                      Dev
                    </span>
                    <span className={isDark ? 'text-white' : 'text-gray-900'}>
                      Folio
                    </span>
                  </h1>
                  
                  {/* Dynamic Underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <motion.p 
                  className={`text-xs lg:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center mt-0.5`}
                  animate={{ 
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity 
                  }}
                >
                  <Star className="w-3 h-3 mr-1" />
                  Creative Developer
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id
              const IconComponent = item.icon
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => smoothScrollTo(item.id)}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="relative group"
                >
                  <div className={`relative px-4 lg:px-6 py-3 lg:py-3.5 rounded-2xl font-medium transition-all duration-500 text-sm lg:text-base overflow-hidden ${
                    isActive
                      ? 'text-white transform scale-105'
                      : scrolled 
                        ? `${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'}` 
                        : 'text-white/90 hover:text-white'
                  }`}>
                    
                    {/* Active State Background */}
                    {isActive && (
                      <>
                        <motion.div
                          layoutId="navActiveTab"
                          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-2xl"
                          transition={{ type: "spring", bounce: 0.25, duration: 0.8 }}
                        />
                        
                        {/* Glow Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Active Indicator */}
                        <motion.div
                          className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.6, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        />
                      </>
                    )}
                    
                    {/* Hover Effect */}
                    {!isActive && (
                      <motion.div
                        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                          isDark 
                            ? 'bg-gradient-to-r from-white/10 via-blue-500/20 to-purple-500/20' 
                            : 'bg-gradient-to-r from-blue-50/60 via-purple-50/60 to-pink-50/60'
                        }`}
                        whileHover={{ 
                          boxShadow: isDark 
                            ? '0 15px 35px rgba(59, 130, 246, 0.3)' 
                            : '0 15px 35px rgba(139, 92, 246, 0.2)'
                        }}
                      />
                    )}
                    
                    {/* Menu Content */}
                    <div className="relative z-10 flex items-center space-x-2">
                      <IconComponent className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    
                    {/* Bottom Border Animation */}
                    {!isActive && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"
                      />
                    )}
                  </div>
                </motion.button>
              )
            })}
            
            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="mx-2"
            >
              <DarkModeToggle />
            </motion.div>
            
            {/* Enhanced CTA Button */}
            <motion.button
              onClick={() => smoothScrollTo('contact')}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: isDark 
                  ? "0 25px 50px rgba(59, 130, 246, 0.4)" 
                  : "0 25px 50px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="ml-4 px-6 lg:px-8 py-3 lg:py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-2xl transition-all duration-300 text-sm lg:text-base min-h-[48px] flex items-center relative overflow-hidden group"
            >
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 rounded-2xl"
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 3
                }}
              />
              
              <span className="relative z-10 flex items-center space-x-2">
                <span>Hire Me</span>
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Rocket className="w-4 h-4" />
                </motion.div>
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <DarkModeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-2xl transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center backdrop-blur-xl ${
                scrolled 
                  ? `${isDark ? 'text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/10' : 'text-gray-700 hover:text-blue-600 bg-black/10 hover:bg-black/20 border border-black/10'}` 
                  : 'text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20'
              }`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`md:hidden border-t ${isDark ? 'border-white/10 bg-black/60' : 'border-black/10 bg-white/60'} backdrop-blur-3xl`}
          >
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id
                const IconComponent = item.icon
                
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => smoothScrollTo(item.id)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-full text-left px-6 py-4 rounded-2xl font-medium transition-all duration-300 flex items-center space-x-4 relative overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl transform scale-105'
                        : `${isDark ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 rounded-2xl"
                        animate={{
                          scale: [1, 1.02, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    )}
                    
                    <IconComponent className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">{item.name}</span>
                    
                    {isActive && (
                      <motion.div
                        className="absolute right-4 w-2 h-2 bg-yellow-400 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    )}
                  </motion.button>
                )
              })}
              
              <motion.button
                onClick={() => smoothScrollTo('contact')}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-2xl flex items-center justify-center space-x-3 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 rounded-2xl"
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Hire Me</span>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <Rocket className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
