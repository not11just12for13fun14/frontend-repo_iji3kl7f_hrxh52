const experiences = [
  {
    company: "Acme Corp",
    role: "Product Manager",
    period: "2022 — Present",
    impact: [
      "Led cross-functional squad to launch onboarding redesign, improving activation by 18%",
      "Defined KPI framework and instrumentation plan; reduced time-to-insight by 60%",
      "Drove roadmap prioritization using RICE; increased NPS from 21 to 37"
    ]
  },
  {
    company: "Nova Labs",
    role: "Associate Product Manager",
    period: "2020 — 2022",
    impact: [
      "Shipped self-serve billing; decreased churn by 12% for SMB segment",
      "Ran >20 discovery interviews to validate problem framing and JTBD",
      "Partnered with design to create UX patterns library; improved delivery speed"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Experience</h2>
        <div className="mt-8 grid gap-6">
          {experiences.map((exp) => (
            <div key={exp.company} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="text-white font-semibold">{exp.company}</p>
                <p className="text-blue-200/80 text-sm">{exp.period}</p>
              </div>
              <p className="text-blue-200 mt-1">{exp.role}</p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-blue-100/90">
                {exp.impact.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;