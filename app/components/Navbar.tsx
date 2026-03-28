import Link from "next/link";

export function Navbar() {
  const navItemClassName =
    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25";

  const contactClassName =
    "inline-flex items-center rounded-md border border-white/30 bg-white/0 px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-white hover:text-black hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25";

  return (
    <header className="fixed left-0 top-0 z-40 w-full  bg-black backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-0">
          <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 sm:justify-end">
            <Link href="/#inicio" className={navItemClassName}>
              Inicio <span className="text-zinc-400"></span>
            </Link>
            <Link href="/#servicios" className={navItemClassName}>
              Servicios <span className="text-zinc-400"></span>
            </Link>
          </nav>

          <div className="flex justify-center px-2">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-white"
            >
              Orca
            </Link>
          </div>

          <nav className="flex w-full items-center justify-center gap-3 sm:justify-between">
            <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 sm:justify-start">
              <Link href="/#nosotros" className={navItemClassName}>
                Nosotros <span className="text-zinc-400"></span>
              </Link>
              <Link href="/#galeria" className={navItemClassName}>
                Galería <span className="text-zinc-400"></span>
              </Link>
            </div>
            <Link href="/#contacto" className={contactClassName}>
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
