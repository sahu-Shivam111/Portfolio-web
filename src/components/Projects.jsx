import { useState } from "react"
import { motion } from "framer-motion"
import {
   FaHospital,
    FaChess,
    FaQrcode,
  FaShoppingCart,
  FaTasks,
  FaCloudSun,
  FaVideo,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa"

export default function Projects() {
  const [activeproject, setactiveproject] = useState(null)

  const projects = [
     {
      id: 1,
      name: "Blood Bank Management System",
      description: "Donor, inventory, and request management system",
      stack: ["React", "Supabase"],
      icon: FaHospital,
      color: "#ff005dff",
      demoLink: "https://bloodbank-amber.vercel.app/",
      sourceLink: "https://github.com/sahu-Shivam111/blood_bank",
    },
    {
      id: 2,
      name: "Chess Game",
      description: "Interactive chess game with rules logic",
      stack: ["JavaScript" ," Chess Engine"],
      icon:FaChess,
      color: "white",
      demoLink: "https://chess-game-4cel.onrender.com/",
      sourceLink: "https://github.com/sahu-Shivam111/chess-game",
    },
    {
      id: 3,
      name: "Video Chat Platform",
      description: "WebRTC based multi-peer video chat with modern UI",
      stack: ["WebRTC", "Node.js", "Socket.io"],
      icon: FaVideo,
      color: "#ff9ff3",
      demoLink: "https://video-call-app-mkev.onrender.com/",
      sourceLink: "https://github.com/sahu-Shivam111/video-call-ap",
    },

   
    {
      id: 4,
      name: "E-Commerce Website",
      description: "Secure login, product catalog, cart system and order flow",
      stack: ["HTML", "CSS", "JavaScript" ,"React"],
      icon: FaShoppingCart,
      color: "#00ffff",
      demoLink: "https://694c58a51d20c7f519e6c6d0--fluffy-lokum-d11c5f.netlify.app/",
      sourceLink: "https://github.com/sahu-Shivam111/React-site",
    },
    {
      id: 5,
      name: "Weather App",
      description: "Real-time weather updates using public API",
      stack: ["React", "API", "CSS"],
      icon: FaCloudSun,
      color: "#2782ddff",
      demoLink: "https://react-weather-app-1lcy.vercel.app/",
      sourceLink: "https://github.com/sahu-Shivam111/React-Weather-app",
    },
    {
      id: 6,
      name: "QR Code Generator",
      description: "Generate QR codes instantly",
      stack: ["HTML", "CSS", "JavaScript" ],
      icon: FaQrcode,
      color: "#000000d6",
      demoLink: "https://sahu-shivam111.github.io/QR-Code-Generator/",
      sourceLink: "https://github.com/sahu-Shivam111/QR-Code-Generator",
    },
    {
      id: 7,
      name: "To-Do List Web App",
      description: "Responsive task manager with local storage support",
      stack: ["HTML", "CSS", "JavaScript"],
      icon: FaTasks,
      color: "#ff6b6b",
      demoLink: "https://sahu-shivam111.github.io/TO-DO-LIST/",
      sourceLink: "https://github.com/sahu-Shivam111/TO-DO-LIST",
    },
   
  ]

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 md:px-12 py-24 overflow-hidden scroll-mt-50"
    >
      {/* Heading */}
      <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.9)]">
        Projects
      </h2>

      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-5">
        A collection of projects showcasing my frontend, backend, and real-time
        web development skills
      </p>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => {
          const Icon = project.icon

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
            >
              {/* Icon */}
              <div className="h-48 relative flex items-center justify-center overflow-hidden">
                <div
                  className="absolute w-40 h-40 rounded-full blur-3xl opacity-40"
                  style={{ backgroundColor: project.color }}
                />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  whileHover={{ scale: 1.15, rotateX: 12, rotateY: -12 }}
                  className="relative z-10 w-24 h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Icon
                    className="text-5xl"
                    style={{
                      color: project.color,
                      filter: `drop-shadow(0 0 14px ${project.color})`,
                      transform: "translateZ(40px)",
                    }}
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm mb-6">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold text-white bg-white/10 border border-cyan-400/40 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 ">
            

                  <a
                    href={project.sourceLink}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.demoLink}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
