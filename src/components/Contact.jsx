export default function Contact() {
  return (
    <section id="contact" className="w-full bg-neutral-950 text-neutral-100 border-t-2 border-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Let’s work</h2>
          <span className="text-sm font-black px-3 py-1 bg-white text-neutral-900 border-2 border-neutral-900 shadow-[6px_6px_0_0_#f97316] select-none">Open for projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="border-2 border-white bg-neutral-900 p-6 shadow-[10px_10px_0_0_#ef4444]">
              <p className="text-lg font-semibold">Tell me about your project:</p>
              <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="col-span-1 sm:col-span-1 bg-white text-neutral-900 px-4 py-3 font-bold border-2 border-neutral-900 placeholder-neutral-600" placeholder="Name"/>
                <input className="col-span-1 sm:col-span-1 bg-white text-neutral-900 px-4 py-3 font-bold border-2 border-neutral-900 placeholder-neutral-600" placeholder="Email"/>
                <input className="sm:col-span-2 bg-white text-neutral-900 px-4 py-3 font-bold border-2 border-neutral-900 placeholder-neutral-600" placeholder="Project type / budget"/>
                <textarea rows={4} className="sm:col-span-2 bg-white text-neutral-900 px-4 py-3 font-bold border-2 border-neutral-900 placeholder-neutral-600" placeholder="What are we building?"/>
                <button type="submit" className="sm:col-span-2 bg-white text-neutral-900 px-6 py-3 font-black border-2 border-neutral-900 shadow-[8px_8px_0_0_#f97316] hover:translate-x-1 hover:translate-y-1 transition-transform">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-4">
            <a href="mailto:designer@example.com" className="block border-2 border-white bg-neutral-900 px-5 py-4 font-bold shadow-[8px_8px_0_0_#f97316] hover:translate-x-1 hover:translate-y-1 transition-transform">
              designer@example.com
            </a>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Instagram', href: '#' },
                { label: 'Dribbble', href: '#' },
                { label: 'Behance', href: '#' },
                { label: 'LinkedIn', href: '#' },
              ].map((s) => (
                <a key={s.label} href={s.href} className="border-2 border-white bg-neutral-900 px-4 py-3 font-bold shadow-[6px_6px_0_0_#ef4444] hover:translate-x-1 hover:translate-y-1 transition-transform">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between text-sm text-neutral-400">
          <span>© {new Date().getFullYear()} Your Name</span>
          <span className="font-black">Built in a neo‑brutalist style</span>
        </div>
      </div>
    </section>
  );
}
