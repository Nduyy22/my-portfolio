import React from 'react'
import { motion } from 'framer-motion'
import { User, Heart, Code, ExternalLink } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const About = () => {
  const { isDark } = useTheme()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  }

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <section id="about" className={`py-24 relative transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${
        isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
          >
            <User className="w-4 h-4 mr-2" />
            About Me
          </motion.div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Passionate About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Innovative developer specializing in AI, blockchain, and financial technology solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8 px-4 lg:px-0">
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-center lg:text-left ${
                isDark ? 'text-white' : 'text-gray-900'
              }">
                Building the Future with{' '}
                <span className="text-blue-600">Code</span> &{' '}
                <span className="text-purple-600">Innovation</span>
              </h3>

              <div className="space-y-4 lg:space-y-6 text-base lg:text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }">
                <p>
                  I'm <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Asep Sudrajat</span>, a passionate Full Stack Developer specializing in 
                  cutting-edge technologies like AI, blockchain, and financial security systems. 
                  My journey spans from building autonomous agent systems to developing 
                  comprehensive fintech solutions for hackathons and real-world applications.
                </p>

                <p>
                  With deep expertise in <span className="font-semibold text-blue-600">TypeScript</span>, 
                  <span className="font-semibold text-green-600"> JavaScript</span>, 
                  <span className="font-semibold text-purple-600"> Julia</span>, and modern web technologies, 
                  I create solutions that bridge the gap between complex technical challenges and user-friendly experiences.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-4 lg:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 transition-all duration-300"
              >
                <div className="flex items-center mb-3 lg:mb-4">
                  <div className="p-2 lg:p-3 bg-blue-600 rounded-xl">
                    <Code className="text-white w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <h4 className="text-lg lg:text-xl font-bold text-gray-900 ml-3 lg:ml-4">AI & Blockchain</h4>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  Building intelligent systems and decentralized solutions for modern challenges
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-4 lg:p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 transition-all duration-300"
              >
                <div className="flex items-center mb-3 lg:mb-4">
                  <div className="p-2 lg:p-3 bg-purple-600 rounded-xl">
                    <Heart className="text-white w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <h4 className="text-lg lg:text-xl font-bold text-gray-900 ml-3 lg:ml-4">Financial Security</h4>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  Developing robust fintech solutions for secure and innovative financial systems
                </p>
              </motion.div>
            </div>

            <motion.div className="flex flex-wrap gap-2 lg:gap-4 pt-4 lg:pt-6 justify-center lg:justify-start">
              {['FintelliGuard AI', 'Solana Agents', 'Julia Framework', 'Crypto Wallets'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 lg:px-4 py-1 lg:py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full font-medium text-xs lg:text-sm border border-gray-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center w-full sm:w-auto mt-6 lg:mt-8 px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[48px]"
            >
              Let's Collaborate
              <ExternalLink className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
            </motion.a>
          </motion.div>

          <motion.div variants={imageVariants} className="relative px-4 lg:px-0 mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-md">
              {/* Main profile container */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-blue-400 rounded-3xl opacity-20 blur-2xl"
                />
                
                {/* Profile Image */}
                <div className="relative bg-white p-4 lg:p-6 rounded-3xl shadow-2xl">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
                    <img
                      src="https://avatars.githubusercontent.com/u/197459083?v=4"
                      alt="Asep Sudrajat - Full Stack Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 p-3 sm:p-4 bg-blue-600 text-white rounded-2xl shadow-xl"
                >
                  <Code className="w-6 h-6 sm:w-7 sm:h-7" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-3 sm:p-4 bg-purple-600 text-white rounded-2xl shadow-xl"
                >
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
                </motion.div>

                {/* Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -right-8 top-16 sm:-right-12 sm:top-20 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-blue-600">6+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -left-8 bottom-16 sm:-left-12 sm:bottom-20 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-purple-600">5+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Technologies</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
