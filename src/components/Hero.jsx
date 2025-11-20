const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(59,130,246,0.35),transparent),radial-gradient(400px_200px_at_90%_20%,rgba(34,211,238,0.35),transparent)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-blue-100 border border-white/10">
              Available for full-time roles
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Product Manager crafting user-centric solutions
            </h1>
            <p className="mt-5 text-blue-100/90 leading-relaxed">
              I’m Yuvraj Raisinghani, a product leader focused on discovering real customer problems,
              building lovable solutions, and driving measurable outcomes across the product lifecycle.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium hover:bg-blue-50 transition">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/15 border border-white/10 transition">
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-400/30 border border-white/10 p-2">
              <div className="w-full h-full rounded-xl bg-slate-900/60 grid place-items-center text-center p-8">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mb-5" />
                <p className="text-white text-lg font-medium">Yuvraj Raisinghani</p>
                <p className="text-blue-200/80 text-sm">Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;