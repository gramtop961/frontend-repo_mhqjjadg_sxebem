export default function About() {
  return (
    <section id="about" className="w-full bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">About</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-xl md:text-2xl leading-relaxed font-semibold">
              I am a designer focused on impactful visuals and ruthless clarity. My work blends strong typography with hard-edged layouts and bold color to create memorable brand experiences.
            </p>
            <p className="mt-6 text-lg text-neutral-300">
              From identity systems and product interfaces to editorial and motion, I build design that communicates quickly and sticks. I believe constraints sharpen outcomes — so I lean into them.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-black uppercase tracking-wider">Capabilities</h3>
            <ul className="space-y-2">
              {['Brand Identity','Web/UI Systems','Editorial & Type','Art Direction','Motion & Prototyping'].map((item) => (
                <li key={item} className="flex items-center justify-between border-2 border-white px-3 py-2 bg-neutral-900 shadow-[6px_6px_0_0_#ef4444]">
                  <span className="font-bold">{item}</span>
                  <span className="text-xs font-black bg-white text-neutral-900 px-2 py-1 border-2 border-neutral-900">Available</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
