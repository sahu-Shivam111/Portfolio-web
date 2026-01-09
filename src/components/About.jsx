import { motion } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaNodeJs
} from "react-icons/fa"
import { SiWebrtc } from "react-icons/si"

export default function About() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "MySQL", icon: <FaDatabase className="text-green-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
    { name: "WebRTC", icon: <SiWebrtc className="text-purple-400" /> },
  ]

  return (
    <section
      id="about"
      className="relative min-h-screen px-10 md:px-20 pt-24 overflow-hidden  "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[22rem] h-[22rem] bg-pink-500/20 blur-3xl rounded-full" />
      </div>

      {/* Heading */}
      <motion.h2
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative text-center text-5xl md:text-6xl font-extrabold   mt-20 mb-20  "
>
  {/* Glow layer */}
  <span className="absolute inset-0 text-white-400 blur-xl opacity-60  mb-20">
    About Me
  </span>

  {/* Main text */}
  <span
    className="relative bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400
               bg-clip-text text-transparent text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.7)] mb-20"
  >
    About Me
  </span>
</motion.h2>


      {/* Intro Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-10
                   bg-white/5 backdrop-blur-xl
                   border border-white/10
                   rounded-3xl p-10 md:p-10
                   text-center shadow-xl"
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m a <span className="text-cyan-400 font-semibold">passionate full-stack developer</span>
          who loves building modern, interactive, and performance-focused web experiences.
          I work with <span className="text-white font-medium">HTML, CSS, JavaScript, React, MySQL, Node.js, and WebRTC</span>,
          and I’m currently exploring <span className="text-cyan-300">AI integrations</span> and
          <span className="text-cyan-300"> 3D web experiences</span>.
          <br /><br />
          
          Alongside development, I have a <span className="text-white font-medium">strong foundation in Data Structures and Algorithms</span>, with consistent 
          <span className="text-white font-medium"> problem-solving</span> practice that sharpens my logical thinking and code efficiency. I believe in learning by building — pushing limits,
           refining user experiences, and writing clean, scalable, and maintainable code.
        </p>
      </motion.div>

      
    </section>
  )
}
