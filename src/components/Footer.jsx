import React from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart,
  ArrowUp,
  Code,
  Coffee,
  ExternalLink,
  Zap
} from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Nduyy22",
      label: "GitHub",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/asep-sudrajat-514802376",
      label: "LinkedIn", 
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/asepsudrajat",
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      href: "mailto:asepsudrajat157@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ]

  const stats = [
    { icon: Code, label: 'Projects', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Zap, label: 'Lines of Code', value: '100K+' }
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Asep Sudrajat</h3>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate full-stack developer creating innovative solutions and beautiful 
              user experiences. Always excited to take on new challenges and learn cutting-edge technologies.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-sm">
                    <div className="p-3">
                      <div className="flex items-center space-x-2">
                        <stat.icon className="text-blue-400" size={16} />
                        <div>
                          <div className="text-sm font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 h-10 text-gray-400 ${social.color} transition-colors duration-300 hover:bg-gray-800 rounded-md`}
                  >
                    <social.icon size={20} />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center group text-gray-300 hover:text-white transition-colors p-0"
                  >
                    <ExternalLink 
                      size={14} 
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6">Let's Connect</h4>
            <div className="space-y-4">
              <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-sm">
                <div className="p-4">
                  <p className="text-gray-300 text-sm mb-3">
                    Ready to start your next project?
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-primary/90 h-9 px-3 py-2"
                  >
                    <Mail size={16} className="mr-2" />
                    Get In Touch
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-transparent bg-gray-800 text-gray-300 px-2.5 py-0.5 text-xs font-semibold">
                  Available for work
                </span>
                <span className="inline-flex items-center rounded-full border border-transparent bg-gray-800 text-gray-300 px-2.5 py-0.5 text-xs font-semibold">
                  Remote friendly
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white h-9 px-3 py-2"
          >
            <ArrowUp size={16} className="mr-2" />
            Back to Top
          </button>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {new Date().getFullYear()} Asep Sudrajat. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>and lots of</span>
              <Coffee className="text-yellow-600" size={16} />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
