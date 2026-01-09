import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Achievements from "./components/Journey"
import Contact from "./components/Contact"
import ThreeBackground from "./components/ThreeBackground"
import { Loader } from "@react-three/drei"

export default function App() {
  return (
   <div className="relative min-h-screen overflow-x-hidden">
  <ThreeBackground />
  <div className="relative z-10">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  </div>
   <Loader />
</div>
  )
}
