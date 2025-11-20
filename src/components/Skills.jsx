const skills = [
  {
    category: "Product Craft",
    items: [
      "Discovery interviews",
      "Roadmapping & prioritization (RICE)",
      "Experiment design",
      "OKRs & KPI definition",
      "GTM & launch planning",
    ],
  },
  {
    category: "Data & Tools",
    items: [
      "SQL, GA4, Mixpanel",
      "Amplitude, Segment",
      "A/B testing",
      "Figma collaboration",
      "Jira, Notion"
    ],
  },
  {
    category: "Leadership",
    items: [
      "Stakeholder management",
      "Cross-functional alignment",
      "Narrative storytelling",
      "Hiring & mentoring",
      "Agile rituals"
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Skills</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div key={s.category} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-white font-semibold">{s.category}</p>
              <ul className="mt-3 space-y-2 text-blue-100/90 list-disc list-inside">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;