export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl font-black">
          TUTTO <span className="text-red-500">NEGOCE</span>
        </h1>

        <p className="mt-4 text-gray-400 text-xl">
          Marchand en Gros Pneumatiques
        </p>

        <div className="mt-8 inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-3 rounded-full">
          Site Web en Développement
        </div>
      </div>
    </main>
  );
}
