import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100 font-['Inter','system-ui','sans-serif']">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="inline-block bg-white text-neutral-900 px-3 py-2 font-black border-2 border-neutral-900 shadow-[6px_6px_0_0_#f97316]">Designer</a>
          <nav className="hidden sm:flex items-center gap-4">
            {[
              { href: '#projects', label: 'Projects' },
              { href: '#about', label: 'About' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="bg-neutral-900 text-white px-3 py-2 font-bold border-2 border-white hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[6px_6px_0_0_#ef4444]">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}
