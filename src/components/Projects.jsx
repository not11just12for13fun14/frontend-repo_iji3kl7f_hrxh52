const projects = [
  {
    title: "Onboarding Revamp",
    subtitle: "Activation uplift",
    description:
      "Redesigned onboarding flow after discovery and funnel analysis. Introduced progressive profiling, checklist, and empty-state cues.",
    outcomes: ["+18% activation", "-22% support tickets", "+9 NPS in first week"],
  },
  {
    title: "Pricing & Packaging",
    subtitle: "Monetization",
    description:
      "Ran pricing experiments across three tiers and paywall positioning. Partnered with finance to model LTV and CAC payback.",
    outcomes: ["+11% ARPA", "-1.6pt churn", "Faster sales cycles"],
  },
  {
    title: "Analytics Instrumentation",
    subtitle: "Data foundation",
    description:
      "Defined event taxonomy, set up CDP + product analytics, shipped dashboards for self-serve insights.",
    outcomes: ["Time-to-insight -60%", "Trust in data +30%", "Experiment velocity +2x"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Selected Projects</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-blue-200/80 text-sm">{p.subtitle}</p>
              <p className="mt-3 text-blue-100/90">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.outcomes.map((o) => (
                  <span key={o} className="px-2.5 py-1 rounded-full text-xs bg-white/10 text-blue-100 border border-white/10">
                    {o}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;