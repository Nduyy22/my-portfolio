import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  MessageCircle,
  Clock,
  Globe,
  Linkedin
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "asepsudrajat157@gmail.com",
      href: "mailto:asepsudrajat157@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+62 897-8189-653",
      href: "tel:+6289781896536",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/asep-sudrajat-514802376",
      href: "https://www.linkedin.com/in/asep-sudrajat-514802376",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Indonesia",
      href: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "GitHub",
      value: "github.com/Nduyy22",
      href: "https://github.com/Nduyy22",
      color: "from-orange-500 to-red-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="text-blue-600 mr-2 w-6 h-6 sm:w-8 sm:h-8" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Get In Touch
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 px-4 lg:px-0"
          >
            <div className="space-y-4 lg:space-y-6">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 mb-8">
                  I'm always open to discussing new opportunities, creative ideas, 
                  or potential collaborations. Feel free to reach out!
                </p>
              </motion.div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <div className="bg-white hover:shadow-lg transition-all duration-300 rounded-lg border shadow-sm">
                    <div className="p-4 lg:p-6">
                      <a href={info.href} className="flex items-center space-x-3 lg:space-x-4">
                        <div className={`p-2 lg:p-3 rounded-lg bg-gradient-to-r ${info.color} shadow-lg`}>
                          <info.icon className="text-white w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm lg:text-base">{info.title}</h4>
                          <p className="text-gray-600 text-sm lg:text-base break-all">{info.value}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={itemVariants}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border shadow-sm">
                  <div className="p-4 lg:p-6">
                    <Clock className="text-blue-600 mb-3 w-6 h-6 lg:w-7 lg:h-7" />
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">Response Time</h4>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                      I typically respond within 24 hours during business days
                    </p>
                    <span className="inline-flex items-center rounded-full border border-transparent bg-green-100 text-green-800 px-2.5 py-0.5 text-xs font-semibold transition-colors mt-2">
                      Available
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white shadow-xl rounded-lg border">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Send me a message</h3>
              </div>
              <div className="p-6 pt-0">
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-600">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or idea..."
                        required
                        className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm lg:text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-primary/90 h-11 lg:h-12 px-6 lg:px-8 py-2 min-h-[48px]"
                    >
                      <Send className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
