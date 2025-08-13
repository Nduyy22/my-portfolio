import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Code, Sparkles, Zap, Rocket, Download, Play, MousePointer, Globe, Terminal, Coffee, Heart, Star, ArrowRight } from 'lucide-react'
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
  const { isDark } = useTheme()
  const controls = useAnimation()
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  const roles = [
    { title: 'Full Stack Developer', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { title: 'AI/ML Engineer', icon: Zap, color: 'from-purple-500 to-pink-500' }, 
    { title: 'Blockchain Developer', icon: Globe, color: 'from-green-500 to-emerald-500' },
    { title: 'UI/UX Designer', icon: Sparkles, color: 'from-orange-500 to-red-500' },
    { title: 'Creative Coder', icon: Terminal, color: 'from-indigo-500 to-purple-500' },
    { title: 'Problem Solver', icon: Rocket, color: 'from-pink-500 to-rose-500' }
  ]

  const achievements = [
    { number: "50+", label: "Projects Completed", icon: Rocket },
    { number: "3+", label: "Years Experience", icon: Star },
    { number: "∞", label: "Coffee Consumed", icon: Coffee },
    { number: "100%", label: "Passion Driven", icon: Heart }
  ]

  // Enhanced mouse tracking for 3D effects
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

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Real-time clock
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Auto rotate achievement cards
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

  // Enhanced typing animation with role objects
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
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.6 + 0.2
    }))
  }

  const [particles] = useState(generateParticles())

  // Animation variants for different elements
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
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

  return (
    <motion.section 
      ref={heroRef}
      id="home" 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}
      style={{ y, opacity, scale }}
    >
      {/* Revolutionary Background Effects */}
      
      {/* Dynamic Gradient Mesh */}
      <div className="absolute inset-0 opacity-60">
        <motion.div
          className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl ${
            isDark ? 'bg-blue-600' : 'bg-blue-300'
          }`}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`
          }}
        />
        <motion.div
          className={`absolute w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl ${
            isDark ? 'bg-purple-600' : 'bg-purple-300'
          }`}
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.8, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            right: `${mousePosition.x * 0.08}%`,
            bottom: `${mousePosition.y * 0.08}%`
          }}
        />
        <motion.div
          className={`absolute w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl ${
            isDark ? 'bg-pink-600' : 'bg-pink-300'
          }`}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.4, 0.9, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${50 + mousePosition.x * 0.05}%`,
            top: `${50 + mousePosition.y * 0.05}%`
          }}
        />
      </div>

      {/* Interactive Mouse Light */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, ${
            isDark 
              ? 'rgba(59, 130, 246, 0.15)' 
              : 'rgba(139, 92, 246, 0.1)'
          }, transparent 50%)`
        }}
      />

      {/* Floating Particles System */}
      <div className="absolute inset-0">
        {particles.slice(0, window.innerWidth < 768 ? 40 : 80).map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${isDark ? 'bg-blue-400/40' : 'bg-blue-300/50'}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(particle.id) * 30, 0],
              scale: [1, 1.5, 1],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
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

      {/* Revolutionary 3D Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className={`w-full h-full ${isDark ? 'bg-grid-white/[0.05]' : 'bg-grid-black/[0.05]'}`}
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
          }}
        />
      </div>
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
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

  const floatingVariants = {
    animate: {
      y: [0, -30, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section 
      ref={heroRef}
      id="home" 
      className={`min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}
    >
      
      {/* Interactive Mouse Gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark 
            ? `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 50%)`
            : `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.1), transparent 50%)`
        }}
      />
      
      {/* Enhanced Animated Particles */}
      <div className="absolute inset-0">
        {particles.slice(0, window.innerWidth < 768 ? 30 : 80).map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${isDark ? 'bg-blue-400/30' : 'bg-blue-300/40'}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(particle.id) * 20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1],
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

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-40 ${isDark ? 'bg-purple-600' : 'bg-purple-300'}`}
        />
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 80, -60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute bottom-20 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-40 ${isDark ? 'bg-blue-600' : 'bg-blue-300'}`}
        />
        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute top-1/2 left-1/2 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-30 ${isDark ? 'bg-pink-600' : 'bg-pink-300'}`}
        />
      </div>

      {/* Floating Icons */}
      <motion.div variants={floatingVariants} animate="animate" className="absolute top-20 left-10 hidden lg:block">
        <div className={`p-4 rounded-2xl shadow-2xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-xl`}>
          <Code className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
        </div>
      </motion.div>
      
      <motion.div 
        variants={floatingVariants} 
        animate="animate" 
        className="absolute top-40 right-20 hidden lg:block"
        style={{ animationDelay: '1s' }}
      >
        <div className={`p-4 rounded-2xl shadow-2xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-xl`}>
          <Sparkles className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
        </div>
      </motion.div>

      <motion.div 
        variants={floatingVariants} 
        animate="animate" 
        className="absolute bottom-40 left-20 hidden lg:block"
        style={{ animationDelay: '2s' }}
      >
        <div className={`p-4 rounded-2xl shadow-2xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-xl`}>
          <Zap className={`w-8 h-8 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
        </div>
      </motion.div>

      <motion.div 
        variants={floatingVariants} 
        animate="animate" 
        className="absolute bottom-20 right-10 hidden lg:block"
        style={{ animationDelay: '3s' }}
      >
        <div className={`p-4 rounded-2xl shadow-2xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-xl`}>
          <Rocket className={`w-8 h-8 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 w-full"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        {/* Enhanced Hero Card with Dynamic Shadows */}
        <motion.div 
          variants={itemVariants}
          className={`relative p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl backdrop-blur-2xl border overflow-hidden ${
            isDark 
              ? 'bg-gray-900/40 border-white/20 shadow-2xl' 
              : 'bg-white/40 border-black/20 shadow-2xl'
          }`}
          style={{
            transform: `perspective(1000px) rotateX(${scrollY * 0.05}deg) rotateY(${(mousePosition.x - 50) * 0.1}deg)`,
            boxShadow: isDark 
              ? `0 25px 50px -12px rgba(59, 130, 246, 0.4), 
                 inset 0 1px 0 rgba(255, 255, 255, 0.2),
                 0 0 100px rgba(59, 130, 246, 0.2)`
              : `0 25px 50px -12px rgba(139, 92, 246, 0.4), 
                 inset 0 1px 0 rgba(255, 255, 255, 0.5),
                 0 0 100px rgba(139, 92, 246, 0.2)`
          }}
          whileHover={{ 
            scale: 1.02,
            rotateY: (mousePosition.x - 50) * 0.2,
            boxShadow: isDark 
              ? `0 35px 70px -12px rgba(59, 130, 246, 0.6), 
                 inset 0 1px 0 rgba(255, 255, 255, 0.3),
                 0 0 150px rgba(59, 130, 246, 0.4)`
              : `0 35px 70px -12px rgba(139, 92, 246, 0.6), 
                 inset 0 1px 0 rgba(255, 255, 255, 0.7),
                 0 0 150px rgba(139, 92, 246, 0.4)`
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Dynamic Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl sm:rounded-3xl"
            style={{
              background: isDark
                ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1), transparent 70%)`
                : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.08), transparent 70%)`
            }}
          />
          {/* Enhanced Badge with Interactive Glow */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8 relative">
            <motion.span 
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 inline-flex items-center space-x-2 relative overflow-hidden ${
                isDark 
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                  : 'bg-blue-100 text-blue-800 border border-blue-200'
              }`}
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: isDark 
                  ? ['0 0 20px rgba(59, 130, 246, 0.3)', '0 0 40px rgba(59, 130, 246, 0.6)', '0 0 20px rgba(59, 130, 246, 0.3)']
                  : ['0 0 20px rgba(59, 130, 246, 0.2)', '0 0 40px rgba(59, 130, 246, 0.4)', '0 0 20px rgba(59, 130, 246, 0.2)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 relative z-10" />
              <span className="relative z-10">Welcome to my digital world</span>
            </motion.span>
          </motion.div>

          {/* Enhanced Main Title with Dynamic Gradient */}
          <motion.h1
            variants={itemVariants}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            <motion.span
              animate={{ 
                textShadow: isDark 
                  ? ['0 0 20px rgba(255,255,255,0.5)', '0 0 40px rgba(255,255,255,0.8)', '0 0 20px rgba(255,255,255,0.5)']
                  : ['0 0 20px rgba(0,0,0,0.3)', '0 0 40px rgba(0,0,0,0.5)', '0 0 20px rgba(0,0,0,0.3)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Hi, I'm{' '}
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block sm:inline relative"
              style={{
                backgroundSize: '200% 200%',
              }}
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)', 'hue-rotate(0deg)']
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Creative Developer
            </motion.span>
          </motion.h1>

          {/* Enhanced Typing Animation with Interactive Cursor */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8 relative">
            <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 relative inline-block"
                style={{
                  backgroundSize: '200% 200%',
                }}
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {text}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${text.length * 0.6}em` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
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
            
            {/* Floating Tech Icons around typing text */}
            <div className="absolute -top-4 -left-4 w-8 h-8 opacity-20">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className={`w-full h-full rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}
              />
            </div>
            
            <div className="absolute -top-2 -right-6 w-6 h-6 opacity-30">
              <motion.div
                animate={{
                  rotate: -360,
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`w-full h-full rounded-full ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}
              />
            </div>
          </motion.div>

          {/* Description - Better mobile text */}
          <motion.p
            variants={itemVariants}
            className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Passionate about creating beautiful, functional web experiences that make a difference. 
            I bring ideas to life through code, design, and innovation.
          </motion.p>

          {/* Enhanced Action Buttons with Advanced Effects */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-12"
          >
            {/* Primary Button with Liquid Animation */}
            <motion.button 
              className={`w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg relative overflow-hidden min-h-[48px] sm:min-h-[56px] shadow-2xl`}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 5,
                boxShadow: isDark 
                  ? '0 20px 40px rgba(59, 130, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.3)'
                  : '0 20px 40px rgba(59, 130, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {/* Liquid Bubble Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 rounded-xl sm:rounded-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1
                }}
              />
              
              <span className="relative z-10 flex items-center justify-center space-x-2">
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
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </span>
            </motion.button>
            
            {/* Secondary Button with Glass Morphism */}
            <motion.button 
              className={`w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 backdrop-blur-xl min-h-[48px] sm:min-h-[56px] relative overflow-hidden ${
                isDark 
                  ? 'border-white/30 text-white hover:border-blue-400 hover:text-blue-400 bg-white/10' 
                  : 'border-gray-300/50 text-gray-700 hover:border-blue-500 hover:text-blue-600 bg-white/70'
              }`}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ 
                scale: 1.05, 
                rotateX: -5,
                borderColor: isDark ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 0.6)',
                boxShadow: isDark 
                  ? '0 15px 30px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  : '0 15px 30px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow Effect on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 rounded-xl sm:rounded-2xl"
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <span className="relative z-10 flex items-center justify-center space-x-2">
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
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>

          {/* Social Links - Better mobile spacing */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 sm:space-x-6"
          >
            {[
              { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-800' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/asep-sudrajat-514802376', label: 'LinkedIn', color: 'hover:text-blue-600' },
              { icon: Mail, href: '#contact', label: 'Email', color: 'hover:text-red-500' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5, rotateZ: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 backdrop-blur-xl min-h-[48px] min-w-[48px] flex items-center justify-center ${isDark ? 'bg-gray-800/50 text-gray-300 hover:text-white hover:shadow-2xl' : 'bg-white/70 text-gray-600 hover:shadow-2xl'} ${social.color}`}
              >
                <social.icon size={window.innerWidth < 640 ? 24 : 28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className={`p-2 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-xl`}>
          <ChevronDown className={`${isDark ? 'text-white/70' : 'text-gray-500'}`} size={32} />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
