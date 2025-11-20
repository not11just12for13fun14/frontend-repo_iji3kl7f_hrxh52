import { Menu, Mail, FileText, Github, Linkedin } from "lucide-react";

const HeaderNavbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition">
              YR
            </div>
            <div>
              <p className="text-white font-semibold leading-tight">Yuvraj Raisinghani</p>
              <p className="text-xs text-blue-200/80 leading-tight">Product Manager</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-blue-200/80">
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="mailto:yuvrajraisinghani@example.com" className="p-2 rounded-lg hover:bg-white/10 text-blue-200 hover:text-white transition" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-blue-200 hover:text-white transition" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-blue-200 hover:text-white transition" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#resume" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white transition border border-white/10">
              <FileText size={18} />
              <span>Resume</span>
            </a>
            <button className="md:hidden p-2 rounded-lg hover:bg-white/10 text-blue-200 hover:text-white transition" aria-label="Menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavbar;