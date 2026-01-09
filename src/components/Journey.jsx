import { motion } from "framer-motion"
import { FaGraduationCap, FaCode, FaCertificate, FaTrophy } from "react-icons/fa"

export default function Journey() {
  const milestones = [
    {
      year: "2022",
      title: "Started B.Tech in Computer Science",
      description:
        "Began my journey in computer science, building strong fundamentals in programming and problem-solving.",
      icon: FaGraduationCap,
      color: "#22d3ee",
    },
    {
      year: "2023",
      title: "Web Development Foundations",
      description:
        "Learned HTML, CSS, JavaScript, and React by building responsive and interactive web projects.",
      icon: FaCode,
      color: "#a855f7",
    },
    {
      year: "2024",
      title: "Full-Stack & Advanced Tech",
      description:
        "Worked with Node.js, Express, Supabase, Docker, Git, and cloud tech to build and deploy full-stack apps.",
      icon: FaCertificate,
      color: "#4ade80",
    },
    {
      year: "2025",
      title: "Problem Solving Achievements",
      description:
        "Solved 100+ LeetCode and 200+ GFG problems, strengthening DSA and algorithmic thinking.",
      icon: FaTrophy,
      color: "#facc15",
    },
    {
      year: "2026",
      title: "B.Tech Graduation",
      description:
        "Graduating with strong full-stack skills and hands-on project experience.",
      icon: FaGraduationCap,
      color: "#fb7185",
    },
  ]

  const topItems = milestones.filter((_, i) => i % 2 === 0)
  const bottomItems = milestones.filter((_, i) => i % 2 !== 0)

  return (
    <section id="journey" className="px-6 md:px-16 py-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center text-white mb-6"
        style={{
          textShadow:
            "0 0 15px rgba(255,255,255,0.8), 0 0 40px rgba(34,211,238,0.6)",
        }}
      >
        My Journey
      </motion.h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
        A timeline of my learning, achievements, and growth as a developer
      </p>

      <div className="relative max-w-9x5 mx-auto">
        {/* ================= TOP CARDS ================= */}
        <div className="grid grid-cols-5 gap-10 mb-3">
          {milestones.map((item, index) =>
            index % 2 === 0 ? (
              <TimelineCard key={item.year} item={item} />
            ) : (
              <div key={index} />
            )
          )}
        </div>

        {/* ================= LINE + DOTS ================= */}
        <div className="relative grid grid-cols-5 items-center mb-5">
          <div
            className="absolute left-0 right-0 h-[2px]"
            style={{
              background: "white",
              boxShadow:
                "0 0 20px white, 0 0 40px rgba(34,211,238,0.7)",
            }}
          />

          {milestones.map((item) => (
            <span
              key={item.year}
              className="mx-auto w-4 h-4 rounded-full z-10 "
              style={{
                backgroundColor: item.color,
                boxShadow: `0 0 20px ${item.color}, 0 0 40px ${item.color}`,
              }}
            />
          ))}
        </div>

        {/* ================= BOTTOM CARDS ================= */}
        <div className="grid grid-cols-5 gap-10 mt-5">
          {milestones.map((item, index) =>
            index % 2 !== 0 ? (
              <TimelineCard key={item.year} item={item} />
            ) : (
              <div key={index} />
            )
          )}
        </div>
      </div>
    </section>
  )
}

/* ================= CARD COMPONENT ================= */

function TimelineCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex justify-center"
    >
      <div
        className="w-60 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center"
        style={{ boxShadow: `0 0 25px ${item.color}40` }}
      >
        <item.icon
          className="text-3xl mx-auto mb-3 "
          style={{
            color: item.color,
            filter: `drop-shadow(0 0 10px ${item.color})`,
          }}
        />
        <h3 className="text-lg font-semibold text-white ">
          {item.title}
        </h3>
        <p className="text-sm text-gray-400 ">{item.description}</p>
        <span
          className="text-sm font-bold "
          style={{ color: item.color }}
        >
          {item.year}
        </span>
      </div>
    </motion.div>
  )
}
