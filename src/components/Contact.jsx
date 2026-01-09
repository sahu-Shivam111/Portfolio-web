import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from "emailjs-com"

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  
} from "react-icons/fa"
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")
  

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
  e.preventDefault()
  setIsSubmitting(true)

  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: formData.name,
      time: new Date().toLocaleString(),
      message: formData.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then(() => {
    setIsSubmitting(false)
    setSubmitStatus("success")
    setFormData({ name: "", email: "", message: "" })
  })
  .catch((err) => {
    setIsSubmitting(false)
    alert("Failed to send message ❌")
    console.error(err)
  })
}


  

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/sahu-Shivam111",
      color: "text-gray-300 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/shivam-sahu-b66569372/",
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      name: "LeetCode",
      icon: SiLeetcode,
      url: "https://leetcode.com/u/Shivam_Sahu1/",
      color: "text-orange-400 hover:text-orange-300",
    },
    {
      name: "GeeksforGeeks",
      icon: SiGeeksforgeeks,
      url: "https://www.geeksforgeeks.org/profile/shivamsahkyef",
      color: "text-green-400 hover:text-green-300",
    },
  ]

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "shivamsahudev1@gmail.com",
      color: "text-cyan-400",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 8989963911",
      color: "text-purple-400",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "India",
      color: "text-green-400",
    },
  ]

  return (
    <section id="contact" className="px-6 md:px-16 py-20 ">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center text-white mb-6"
        style={{
          textShadow:
            "0 0 15px rgba(255,255,255,0.7), 0 0 40px rgba(34,211,238,0.6)",
        }}
      >
        Get In Touch
      </motion.h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
        Let's collaborate and create something amazing together
      </p>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white resize-none"
          />

         <button
  disabled={isSubmitting}
  className="
    w-full py-4 rounded-lg font-bold text-white
    bg-gradient-to-r from-sky-400 to-cyan-400
    shadow-[0_0_25px_rgba(56,189,248,0.6)]
    hover:shadow-[0_0_45px_rgba(56,189,248,0.9)]
    hover:scale-[1.04]
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
  "
>
  {isSubmitting ? "Sending..." : "Send Message"}
</button>


          {submitStatus === "success" && (
            <p className="text-green-400 text-center">
              ✓ Message sent successfully
            </p>
          )}
        </form>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex gap-4 items-center mb-4">
                <info.icon className={`text-2xl ${info.color}`} />
                <div>
                  <p className="text-white">{info.title}</p>
                  <p className="text-gray-400 text-sm">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2
             border border-white/10 p-4 rounded-lg
             transition-all duration-300
            hover:shadow-[0_0_25px_currentColor]
            hover:shadow-[0_0_55px_rgba(56,189,248,1)]
    hover:scale-[1.05]"
                style={{
                  boxShadow: "0 0 0 transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 25px currentColor"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 transparent"
                }}
              >
                <s.icon className={`text-2xl ${s.color}`} />
                <span className="text-white text-sm">{s.name}</span>
              </a>

            ))}
          </div>
<a
  href="/shivam resume.pdf"
  download
  className="
    w-full block text-center py-4 rounded-xl font-bold text-white
    bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500
    shadow-[0_0_30px_rgba(56,189,248,0.7)]
    hover:shadow-[0_0_55px_rgba(56,189,248,1)]
    hover:scale-[1.05]
    transition-all duration-300
  "
>
  Download Resume
</a>


        </div>
      </div>
    </section>
  )
}
