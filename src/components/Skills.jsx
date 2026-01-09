import { motion } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa"
import { SiC, SiCplusplus,SiMysql, SiMongodb, SiExpress ,SiJavascript, } from "react-icons/si"
import { VscCode } from "react-icons/vsc"
import {  FaGithub,FaDocker, FaJava } from "react-icons/fa"
import { SiSupabase, SiSpringboot, SiApachekafka } from "react-icons/si"

export default function Skills() {
  const skillCategories = [
    {
  title: "Languages",
  skills: [
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "SQL", icon: SiMysql, color: "#4479A1" },
  ],
},

    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
      ],
    },
    {
      title: "Backend",
      skills: [
       
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#ffffff" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
         { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      ],
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "VS Code", icon: VscCode, color: "#007ACC" },
         { name: "GitHub", icon: FaGithub, color: "#ffffff" },
         { name: "Docker", icon: FaDocker, color: "#2496ED" },
       { name: "Kafka", icon: SiApachekafka, color: "#ffffff" },
       
      ],
    },
  ]

  const additionalSkills = [
    "Three js",
    "REST APIs",
    "WebRTC",
    "Responsive Design",
    "Version Control",
    "CI/CD",
    "Front-End Development",
    "Cloud Basics",
  "System Design Basics",

  ]

  return (
    <section id="skills" className="px-6 md:px-16 pt-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-white text-center mb-6"
        style={{
          textShadow:
            "0 0 10px rgba(255,255,255,0.6), 0 0 30px rgba(34,211,238,0.4)",
        }}
      >
        Technical Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-gray-400 mb-5"
      >
        Technologies I use to build modern web applications
      </motion.p>

      {/* Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 max-w-6xl mx-auto ">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="rounded-2xl border border-white/10 p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-white mb-3 text-center">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ scale: 1.15 }}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      border: `2px solid ${skill.color}`,
                      boxShadow: `0 0 15px ${skill.color}55`,
                    }}
                  >
                    <skill.icon
                      className="text-3xl"
                      style={{ color: skill.color }}
                    />
                  </div>

                  <span className="text-xs text-gray-300 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-5 text-center"
      >
        <h3 className="text-2xl font-semibold text-white mb-5">
          Additional Technologies
        </h3>

        <div className="flex flex-wrap justify-center gap-4 text-white">
          {additionalSkills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{
                scale: 1.12,
                boxShadow: "0 0 25px rgba(59,130,246,0.9)",
              }}
              className="px-5 py-2 rounded-full text-sm cursor-pointer font-medium
             bg-blue-500/20 text-blue-400 border border-blue-400/40
             backdrop-blur-sm"
              style={{
                boxShadow: "0 0 15px rgba(59,130,246,0.6)",
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
