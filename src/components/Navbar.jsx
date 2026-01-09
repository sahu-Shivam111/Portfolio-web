import { useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [open, setopen] = useState(false)

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <div className="w-full max-w-5xl backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg">

        <h1 className="relative text-lg font-bold select-none text-white ">
          <span className="absolute inset-0 text-cyan-400 blur-md opacity-70  drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] ">
            SHIVAM
          </span>
          <span className="relative ">
            SHIVAM
          </span>
          <span className="text-magenta-400 ml-1 drop-shadow-[0_0_8px_rgba(236,72,153,0.9)]">
            SAHU
          </span>
        </h1>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6  text-white">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="relative group
    text-white
    transition-all duration-300
    hover:scale-110
    drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]
    hover:drop-shadow-[0_0_18px_rgba(255,255,255,1)]"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setopen(!open)}
          className="md:hidden text-cyan-400 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 w-[90%] max-w-sm backdrop-blur-xl bg-black/80 border border-cyan-400/20 rounded-xl p-4 text-center space-y-4"
        >
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setopen(false)}
              className="block text-white
  transition-all duration-300
  hover:scale-110
  hover:text-white
  drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]
  hover:drop-shadow-[0_0_16px_rgba(255,255,255,1)]"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
