import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-graphite px-6 text-center text-warm-white">
      <div>
        <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-avocado">404</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">Page not found</h1>
        <p className="mt-4 text-white/60">The requested Avocado.ai page is unavailable.</p>
        <Link className="mt-8 inline-flex rounded-full bg-avocado px-5 py-3 text-sm font-bold text-graphite" href="/zh-Hant">Return home</Link>
      </div>
    </main>
  );
}
