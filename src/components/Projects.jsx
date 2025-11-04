export default function Projects() {
  const items = [
    { title: 'Red Shift', tag: 'Brand + Web', accent: 'from-red-500 to-orange-500' },
    { title: 'Mono Grid', tag: 'Editorial', accent: 'from-neutral-200 to-neutral-400' },
    { title: 'Tilted UI', tag: 'Product', accent: 'from-amber-400 to-orange-500' },
    { title: 'Vector Noise', tag: 'Poster Series', accent: 'from-fuchsia-500 to-pink-500' },
    { title: 'Hard Edge', tag: 'Identity', accent: 'from-emerald-400 to-teal-500' },
    { title: 'Night Signal', tag: 'Art Direction', accent: 'from-sky-400 to-cyan-400' },
  ];

  return (
    <section id="projects" className="relative w-full bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Selected Work</h2>
          <span className="text-sm md:text-base font-bold px-3 py-1 border-2 border-white select-none shadow-[6px_6px_0_0_#ef4444]">2022—2025</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <article
              key={p.title}
              className="group relative border-2 border-white bg-neutral-900 overflow-hidden shadow-[10px_10px_0_0_#f97316] hover:translate-x-1 hover:translate-y-1 transition-transform"
            >
              <div className={`h-48 sm:h-56 md:h-60 bg-gradient-to-br ${p.accent} opacity-90`} />

              <div className="p-5">
                <h3 className="text-2xl font-extrabold leading-tight">{p.title}</h3>
                <p className="mt-1 text-sm font-semibold text-neutral-300">{p.tag}</p>

                <div className="mt-4 flex gap-2">
                  <span className="inline-block bg-white text-neutral-900 text-xs font-black px-2 py-1 border-2 border-neutral-900">Case Study</span>
                  <span className="inline-block bg-transparent text-white text-xs font-black px-2 py-1 border-2 border-white">Preview</span>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
