import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-neutral-950 text-neutral-100">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for depth (won't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(255,255,255,0.06),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-block select-none bg-white text-neutral-900 px-3 py-1 text-xs font-black tracking-widest uppercase border-2 border-neutral-900 shadow-[6px_6px_0_0_#ef4444]">
          Neo‑Brutalist Portfolio
        </span>
        <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[0.95]">
          Bold Ideas. Strong Type.
          <br />
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 bg-clip-text text-transparent">Design that hits hard.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-200">
          I craft unapologetically striking visuals, purposeful layouts, and type-driven identities.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="group inline-flex items-center gap-2 bg-white text-neutral-900 px-6 py-3 font-bold border-2 border-neutral-900 shadow-[8px_8px_0_0_#ef4444] hover:translate-x-1 hover:translate-y-1 transition-transform">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 font-bold border-2 border-white/90 shadow-[8px_8px_0_0_#f97316] hover:translate-x-1 hover:translate-y-1 transition-transform">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
