export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-zinc-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[620px] w-[620px] rounded-full bg-zinc-950/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(0,0,0,0.06),rgba(0,0,0,0)_60%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20">
        <div className="w-full">
          <div className="mx-auto w-full max-w-2xl rounded-3xl border border-black/10 bg-white/80 p-8 shadow-2xl shadow-black/10 backdrop-blur md:p-12">
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.16)]" />
                <span className="text-sm font-semibold tracking-wide text-zinc-900">
                  Tutto Negoce
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2 text-sm font-semibold text-red-700">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-25" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                </span>
                Site Web en Développement
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-balance text-4xl font-black tracking-tight sm:text-6xl">
                TUTTO{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  NEGOCE
                </span>
              </h1>

              <p className="mt-5 text-pretty text-lg leading-relaxed text-zinc-600 sm:text-xl">
                Marchand en Gros Pneumatiques
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4">
                  <div className="text-sm font-semibold text-zinc-900">
                    Qualité
                  </div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Sélection premium
                  </div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4">
                  <div className="text-sm font-semibold text-zinc-900">
                    Volume
                  </div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Vente en gros
                  </div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4">
                  <div className="text-sm font-semibold text-zinc-900">
                    Réactivité
                  </div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Devis rapide
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-zinc-600">
                <span className="rounded-full border border-black/10 bg-black/[0.03] px-4 py-2">
                  Disponible bientôt
                </span>
                <span className="rounded-full border border-black/10 bg-black/[0.03] px-4 py-2">
                  Design modernisé
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-2xl text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} Tutto Negoce. Tous droits réservés.
          </div>
        </div>
      </div>
    </main>
  );
}
