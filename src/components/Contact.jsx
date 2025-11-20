import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl font-bold">Let’s build something great</h3>
              <p className="text-blue-200/90 mt-2">Open to product roles and collaborations. Reach out and I’ll respond quickly.</p>
            </div>
            <a href="mailto:yuvrajraisinghani@example.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-blue-50 transition">
              <Mail size={18} />
              <span>Email Yuvraj</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;