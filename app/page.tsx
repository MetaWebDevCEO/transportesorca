import { Hero } from "./components/Hero";
import { Diferencias } from "./components/Diferencias";

export default function Home() {
  return (
    <div
      data-scroll-section
      className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans dark:bg-black"
    >
      <main className="w-full flex-1 bg-white dark:bg-black">
        <div style={{ paddingTop: 60 }}>
          <Hero />
        </div>
        <Diferencias />
      </main>
    </div>
  );
}
