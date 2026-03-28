export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-black bg-cover bg-center"
      aria-label="Sección principal"
      style={{ backgroundImage: "url(/fondo.jpg)", backgroundPosition: "50% 35%" }}
    >
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[calc(100svh-64px)] w-full max-w-none flex-col justify-between px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
        <h1
          className="w-full pr-2 font-black uppercase leading-[0.82] tracking-[-0.06em] text-white"
        >
          <span className="block text-[clamp(4.5rem,14vw,11.5rem)]">
            Transportes
          </span>
          <span className="block text-[clamp(4.5rem,14vw,11.5rem)]">Orca</span>
        </h1>

        <div className="absolute bottom-6 right-4 w-[360px] max-w-[calc(100%-2rem)] sm:right-6 sm:w-[560px]">
          <div className="grid grid-cols-2 gap-4">
            <div />
            <div
              data-scroll
              className="ls-reveal relative min-h-[160px] rounded-2xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur"
            >
              <div className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-md bg-white text-xs font-semibold text-black">
                3
              </div>
              <div className="mt-8 text-sm font-semibold text-white">Seguridad</div>
              <div className="mt-1 text-sm leading-6 text-white/75">
                Protocolos y monitoreo en ruta.
              </div>
            </div>
            <div
              data-scroll
              className="ls-reveal relative min-h-[140px] rounded-2xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur"
            >
              <div className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-md bg-white text-xs font-semibold text-black">
                1
              </div>
              <div className="mt-8 text-sm font-semibold text-white">Envíos</div>
              <div className="mt-1 text-sm leading-6 text-white/75">
                Cobertura nacional con entregas puntuales.
              </div>
            </div>
            <div
              data-scroll
              className="ls-reveal relative min-h-[140px] rounded-2xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur"
            >
              <div className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-md bg-white text-xs font-semibold text-black">
                2
              </div>
              <div className="mt-8 text-sm font-semibold text-white">Rastreo</div>
              <div className="mt-1 text-sm leading-6 text-white/75">
                Seguimiento y trazabilidad de tu carga.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
