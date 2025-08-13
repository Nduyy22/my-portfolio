import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Code, Sparkles, Zap, Rocket, Download, Play, MousePointer, Globe, Terminal, Coffee, Heart, Star, ArrowRight, Clock, MapPin, Briefcase } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [scrollY, setScrollY] = useState(0)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeCard, setActiveCard] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const { isDark } = useTheme()
  const controls = useAnimation()
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98])

  const roles = [
    { title: 'Full Stack Developer', icon: Code, color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-500/10' },
    { title: 'AI/ML Engineer', icon: Zap, color: 'from-purple-500 to-pink-500', bg: 'bg-purple-500/10' }, 
    { title: 'Blockchain Developer', icon: Globe, color: 'from-green-500 to-emerald-500', bg: 'bg-green-500/10' },
    { title: 'UI/UX Designer', icon: Sparkles, color: 'from-orange-500 to-red-500', bg: 'bg-orange-500/10' },
    { title: 'Creative Coder', icon: Terminal, color: 'from-indigo-500 to-purple-500', bg: 'bg-indigo-500/10' },
    { title: 'Problem Solver', icon: Rocket, color: 'from-pink-500 to-rose-500', bg: 'bg-pink-500/10' }
  ]

  const achievements = [
    { number: "50+", label: "Projects Completed", icon: Rocket, color: "text-blue-500" },
    { number: "3+", label: "Years Experience", icon: Star, color: "text-purple-500" },
    { number: "∞", label: "Coffee Consumed", icon: Coffee, color: "text-orange-500" },
    { number: "100%", label: "Passion Driven", icon: Heart, color: "text-red-500" }
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Nduyy22', color: 'hover:bg-gray-800 hover:text-white' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/asep-sudrajat-514802376', color: 'hover:bg-blue-600 hover:text-white' },
    { icon: Mail, label: 'Email', href: 'mailto:asepsudrajat157@gmail.com', color: 'hover:bg-red-500 hover:text-white' }
  ]

  // Enhanced effects and animations
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }

    const handleScroll = () => setScrollY(window.scrollY)
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    const cardRotate = setInterval(() => {
      setActiveCard(prev => (prev + 1) % achievements.length)
    }, 3000)

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove)
      }
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timer)
      clearInterval(cardRotate)
    }
  }, [achievements.length])

  // Enhanced typing animation
  useEffect(() => {
    let timer = setTimeout(() => {
      const currentRole = roles[loopNum % roles.length].title
      
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      } else if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1))
        setTypingSpeed(50)
      } else {
        setText(currentRole.substring(0, text.length + 1))
        setTypingSpeed(100)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, roles])

  // Floating particles generator
  const generateParticles = () => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 8 + 5,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.6 + 0.2
    }))
  }

  const [particles] = useState(generateParticles())

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  }

  const cardVariants = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: { 
      rotateY: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    },
    hover: { 
      scale: 1.05, 
      rotateY: 5,
      transition: { duration: 0.3 }
    }
  }

  const currentRole = roles[loopNum % roles.length]

  return (
    <motion.section 
      ref={heroRef}
      id="home" 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}
      style={{ y, opacity, scale }}
    >
      {/* Revolutionary Background System */}
      
      {/* Dynamic Gradient Mesh with Mouse Interaction */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl ${
            isDark ? 'bg-blue-600' : 'bg-blue-300'
          }`}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.3, 0.8, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${10 + mousePosition.x * 0.1}%`,
            top: `${10 + mousePosition.y * 0.1}%`
          }}
        />
        <motion.div
          className={`absolute w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl ${
            isDark ? 'bg-purple-600' : 'bg-purple-300'
          }`}
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.7, 1.4, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            right: `${10 + mousePosition.x * 0.08}%`,
            bottom: `${10 + mousePosition.y * 0.08}%`
          }}
        />
        <motion.div
          className={`absolute w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl ${
            isDark ? 'bg-pink-600' : 'bg-pink-300'
          }`}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.5, 0.8, 1]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${50 + mousePosition.x * 0.05}%`,
            top: `${50 + mousePosition.y * 0.05}%`
          }}
        />
      </div>

      {/* Interactive Mouse Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, ${
            isDark 
              ? 'rgba(59, 130, 246, 0.15)' 
              : 'rgba(139, 92, 246, 0.1)'
          }, transparent 60%)`
        }}
      />

      {/* Advanced Floating Particles */}
      <div className="absolute inset-0">
        {particles.slice(0, window.innerWidth < 768 ? 30 : 60).map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${isDark ? 'bg-blue-400/30' : 'bg-blue-300/40'}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.sin(particle.id * 0.5) * 40, 0],
              scale: [1, 1.5, 1],
              opacity: [particle.opacity, particle.opacity * 1.8, particle.opacity],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className={`w-full h-full ${isDark ? 'bg-grid-white/[0.02]' : 'bg-grid-black/[0.02]'}`}
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: window.innerWidth < 768 ? '40px 40px' : '60px 60px',
            transform: window.innerWidth < 768 
              ? `perspective(800px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`
              : `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center min-h-screen py-16 sm:py-20"
        >
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Status Bar */}
            <motion.div 
              variants={itemVariants}
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 rounded-2xl backdrop-blur-xl ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-white/50 border border-white/30'
              }`}
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Available for work</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-gray-400/30" />
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Indonesia</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-gray-400/30" />
              <div className="flex items-center space-x-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
                <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {currentTime.toLocaleTimeString('en-US', { hour12: false })}
                </span>
              </div>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div variants={itemVariants}>
                <motion.span 
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium inline-flex items-center space-x-2 ${
                    isDark ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Welcome to my digital universe</span>
                  <span className="sm:hidden">Welcome!</span>
                </motion.span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                <motion.span
                  animate={{ 
                    textShadow: isDark 
                      ? ['0 0 20px rgba(255,255,255,0.5)', '0 0 40px rgba(255,255,255,0.8)', '0 0 20px rgba(255,255,255,0.5)']
                      : ['0 0 20px rgba(0,0,0,0.3)', '0 0 40px rgba(0,0,0,0.5)', '0 0 20px rgba(0,0,0,0.3)']
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Hey, I'm{' '}
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent block sm:inline"
                  style={{ backgroundSize: '200% 200%' }}
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)', 'hue-rotate(0deg)']
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  Asep Sudrajat
                </motion.span>
              </motion.h1>

              {/* Dynamic Role Display */}
              <motion.div 
                variants={itemVariants} 
                className="space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className={`p-3 rounded-2xl ${currentRole.bg}`}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity 
                    }}
                  >
                    <div className={`w-6 h-6 rounded bg-gradient-to-r ${currentRole.color} flex items-center justify-center`}>
                      <currentRole.icon className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                  <div>
                    <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      I'm a{' '}
                      <motion.span 
                        className={`bg-gradient-to-r ${currentRole.color} bg-clip-text text-transparent relative inline-block`}
                        style={{ backgroundSize: '200% 200%' }}
                        animate={{ 
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        {text}
                        <motion.div
                          className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${currentRole.color} origin-left`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: text.length / currentRole.title.length }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.span>
                      <motion.span
                        animate={{ 
                          opacity: [1, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 0.8, 
                          repeat: Infinity,
                          times: [0, 0.5, 1]
                        }}
                        className="text-blue-600 ml-1 inline-block"
                        style={{
                          textShadow: isDark ? '0 0 10px rgba(59, 130, 246, 0.8)' : '0 0 5px rgba(59, 130, 246, 0.5)'
                        }}
                      >
                        |
                      </motion.span>
                    </h2>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className={`text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-3xl ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Crafting digital experiences with{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                  cutting-edge technology
                </span>{' '}
                and{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  creative innovation
                </span>
                . Let's build something extraordinary together.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-center justify-center lg:justify-start"
            >
              {/* Primary CTA */}
              <motion.button 
                className={`group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-base sm:text-lg relative overflow-hidden shadow-2xl`}
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: isDark 
                    ? '0 25px 50px rgba(59, 130, 246, 0.4)' 
                    : '0 25px 50px rgba(59, 130, 246, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                {/* Liquid Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 rounded-2xl"
                  animate={{
                    scale: isHovered ? [1, 1.05, 1] : 1,
                    rotate: isHovered ? [0, 2, -2, 0] : 0
                  }}
                  transition={{
                    duration: 2,
                    repeat: isHovered ? Infinity : 0,
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
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 2
                  }}
                />
                
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <span>Explore My Work</span>
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                      rotate: [0, 15, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>
              
              {/* Secondary CTA */}
              <motion.button 
                className={`group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 backdrop-blur-xl relative overflow-hidden ${
                  isDark 
                    ? 'border-white/30 text-white hover:border-blue-400 hover:text-blue-400 bg-white/10' 
                    : 'border-gray-300/50 text-gray-700 hover:border-blue-500 hover:text-blue-600 bg-white/70'
                }`}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: isDark 
                    ? '0 20px 40px rgba(59, 130, 246, 0.2)' 
                    : '0 20px 40px rgba(59, 130, 246, 0.15)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 rounded-2xl"
                  animate={{
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <span>Let's Connect</span>
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Mail className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4"
            >
              <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Follow me:
              </span>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`p-2 sm:p-3 rounded-xl transition-all duration-300 ${
                      isDark ? 'bg-white/10 hover:bg-white/20 text-gray-300' : 'bg-black/10 hover:bg-black/20 text-gray-600'
                    } ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Visual Elements */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            
            {/* Achievement Cards */}
            <motion.div 
              variants={itemVariants}
              className="space-y-3 sm:space-y-4"
            >
              <h3 className={`text-base sm:text-lg font-semibold text-center lg:text-left ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Achievements
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className={`p-4 sm:p-6 rounded-2xl backdrop-blur-xl text-center relative overflow-hidden ${
                      activeCard === index 
                        ? isDark ? 'bg-white/20 border border-white/30' : 'bg-white/60 border border-white/50'
                        : isDark ? 'bg-white/10 border border-white/20' : 'bg-white/40 border border-white/30'
                    }`}
                    animate={{
                      scale: activeCard === index ? 1.05 : 1,
                      y: activeCard === index ? -5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Active Card Glow */}
                    {activeCard === index && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl"
                        animate={{
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    )}
                    
                    <div className="relative z-10">
                      <achievement.icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 ${achievement.color}`} />
                      <div className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {achievement.number}
                      </div>
                      <div className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {achievement.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div 
              variants={itemVariants}
              className={`p-4 sm:p-6 rounded-2xl backdrop-blur-xl ${
                isDark ? 'bg-white/10 border border-white/20' : 'bg-white/40 border border-white/30'
              }`}
            >
              <h3 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center lg:text-left ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {['React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'AWS'].map((tech, index) => (
                  <motion.span
                    key={index}
                    className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium ${
                      isDark ? 'bg-white/20 text-gray-300' : 'bg-black/10 text-gray-700'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    animate={{
                      y: [0, -2, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Floating Action Card */}
            <motion.div
              variants={itemVariants}
              className={`p-4 sm:p-6 rounded-2xl backdrop-blur-xl relative overflow-hidden ${
                isDark ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/20' : 'bg-gradient-to-br from-blue-100/60 to-purple-100/60 border border-white/40'
              }`}
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-center space-y-3 sm:space-y-4">
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <div>
                  <h4 className={`text-sm sm:text-base font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Ready to collaborate?
                  </h4>
                  <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Let's create something amazing together
                  </p>
                </div>
                <motion.button
                  className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Project
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className={`p-2 sm:p-3 rounded-full backdrop-blur-xl ${
              isDark ? 'bg-white/10 border border-white/20 text-white' : 'bg-white/40 border border-white/30 text-gray-900'
            }`}
            animate={{
              y: [0, 6, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
