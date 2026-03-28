export function Diferencias() {
  return (
    <section id="diferencias" className="w-full bg-black">
      <div className="w-full">
        <div className="flex min-h-[100svh] w-full flex-col overflow-hidden border-y border-white/10 bg-white/5 shadow-sm">
          <div className="flex items-center justify-between gap-4 bg-[#000099] px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-black/15">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                  aria-hidden="true"
                >
                  <path
                    d="M7 17L17 7M10 7H17V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-lg font-black uppercase tracking-tight text-white">
                Lo que nos diferencia
              </div>
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/90">
              Orca
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">
            <div
              data-scroll
              tabIndex={0}
              className="ls-reveal group relative flex h-full flex-col justify-between bg-white px-6 py-10 text-black outline-none transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-black/20 sm:px-10"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-black/60">
                  Cobertura
                </div>
                <div className="h-px flex-1 bg-black/10" />
              </div>
              <div className="mt-10">
                <div className="text-[clamp(2rem,4vw,3.25rem)] font-black uppercase leading-[0.92] tracking-[-0.04em]">
                  Cobertura nacional
                  <br />
                  con precisión internacional
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0">
                <div className="h-20 bg-gradient-to-t from-white via-white/95 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus:opacity-100 motion-reduce:transition-none" />
                <div className="px-6 pb-10 sm:px-10">
                  <div className="max-w-md translate-y-4 text-base leading-7 text-black/70 opacity-0 blur-[2px] transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0 group-focus:translate-y-0 group-focus:opacity-100 group-focus:blur-0 motion-reduce:transition-none">
                    En Orca no solo llegamos a tiempo: llegamos con exactitud.
                    Operamos en todo México y gestionamos entregas con estándares
                    internacionales, cuidando cada trayecto, sin importar la
                    complejidad del destino.
                  </div>
                </div>
              </div>
            </div>

            <div
              data-scroll
              tabIndex={0}
              className="ls-reveal group relative flex h-full flex-col justify-between bg-zinc-200 px-6 py-10 text-black outline-none transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-black/20 sm:px-10"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-black/60">
                  Carga
                </div>
                <div className="h-px flex-1 bg-black/10" />
              </div>
              <div className="mt-10">
                <div className="text-[clamp(2rem,4vw,3.25rem)] font-black uppercase leading-[0.92] tracking-[-0.04em]">
                  Carga especializada
                  <br />
                  en todo México
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0">
                <div className="h-20 bg-gradient-to-t from-zinc-200 via-zinc-200/95 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus:opacity-100 motion-reduce:transition-none" />
                <div className="px-6 pb-10 sm:px-10">
                  <div className="max-w-md translate-y-4 text-base leading-7 text-black/70 opacity-0 blur-[2px] transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0 group-focus:translate-y-0 group-focus:opacity-100 group-focus:blur-0 motion-reduce:transition-none">
                    Desde contenedores hasta carga sobredimensionada o materiales
                    regulados, coordinamos cada movimiento con seguridad,
                    eficiencia y personal capacitado. Tu carga, en buenas manos.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-scroll
            tabIndex={0}
            className="ls-reveal group relative border-t border-white/10 bg-black px-6 py-12 text-white outline-none transition-all duration-500 ease-out hover:shadow-lg focus-visible:ring-2 focus-visible:ring-white/20 sm:px-10"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
                Servicio
              </div>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="text-[clamp(2rem,4vw,3.25rem)] font-black uppercase leading-[0.92] tracking-[-0.04em]">
                  Servicio personalizado
                  <br />
                  para cada envío
                </div>
                <div className="pointer-events-none relative mt-4">
                  <div className="max-w-2xl translate-y-3 text-base leading-7 text-white/75 opacity-0 blur-[2px] transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0 group-focus:translate-y-0 group-focus:opacity-100 group-focus:blur-0 motion-reduce:transition-none">
                    No importa si es un solo paquete o una operación logística de
                    gran escala. Adaptamos cada servicio a tus necesidades,
                    ofreciendo seguimiento, asesoría y la atención que solo un
                    equipo comprometido puede dar.
                  </div>
                </div>
              </div>
              <div className="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
                <div
                  tabIndex={0}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/8 hover:shadow-md focus-visible:ring-2 focus-visible:ring-white/20"
                >
                  <div className="text-sm font-semibold text-white">
                    Seguimiento continuo
                  </div>
                  <div className="pointer-events-none mt-1">
                    <div className="translate-y-2 text-sm leading-6 text-white/70 opacity-0 blur-[2px] transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0 group-focus:translate-y-0 group-focus:opacity-100 group-focus:blur-0 motion-reduce:transition-none">
                      Estatus y acompañamiento en cada etapa.
                    </div>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/8 hover:shadow-md focus-visible:ring-2 focus-visible:ring-white/20"
                >
                  <div className="text-sm font-semibold text-white">
                    Asesoría dedicada
                  </div>
                  <div className="pointer-events-none mt-1">
                    <div className="translate-y-2 text-sm leading-6 text-white/70 opacity-0 blur-[2px] transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0 group-focus:translate-y-0 group-focus:opacity-100 group-focus:blur-0 motion-reduce:transition-none">
                      Atención personalizada según tu operación.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
