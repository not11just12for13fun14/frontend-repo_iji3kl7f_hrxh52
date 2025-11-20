import HeaderNavbar from "./components/HeaderNavbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_10%_0%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_300px_at_90%_10%,rgba(34,211,238,0.12),transparent)]" />

      <HeaderNavbar />
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <footer className="py-10 text-center text-blue-300/70 border-t border-white/10">
          <p>© {new Date().getFullYear()} Yuvraj Raisinghani • Product Manager</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
