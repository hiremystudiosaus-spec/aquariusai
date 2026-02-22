import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Models } from "@/components/Models";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent-red selection:text-white">
      <Navbar />
      <Hero />
      <Models />

      {/* Featured Section / AI Chat Preview */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-red/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
              Empowering Industries with <span className="text-accent-red">Context-Aware</span> AI
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed max-w-xl">
              AquariusAI isn't just another general-purpose model. It's a suite of specialized intelligences that understand the nuances of finance, medicine, and education. Each model is built with security, accuracy, and industry standards at its core.
            </p>
            <div className="space-y-4">
              {[
                "Privacy-first data processing",
                "Advanced reasoning and problem solving",
                "Seamless API integration",
                "Real-time industry insights"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-red" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full relative">
            {/* Animated Glow behind terminal */}
            <div className="absolute inset-0 bg-accent-red/10 blur-3xl rounded-full" />

            <div className="glass-red p-1 rounded-[32px] overflow-hidden relative z-10 shadow-2xl shadow-accent-red/10">
              <div className="bg-black/80 rounded-[31px] p-6 h-[400px] flex flex-col border border-white/5">
                <div className="flex items-center space-x-2 mb-6 border-b border-white/5 pb-4">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="ml-4 text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">AquariusAI Terminal v2.0.4</span>
                </div>
                <div className="flex-grow font-mono text-sm space-y-4 overflow-y-auto custom-scrollbar">
                  <p className="text-white/40"><span className="text-accent-red/60">$</span> init_model --target=fintech</p>
                  <p className="text-white/40"><span className="text-green-500/40">✓</span> Initialized FinTech Intelligence</p>
                  <p className="text-white/40"><span className="text-blue-500/40">i</span> Loading regulatory compliance datasets...</p>
                  <p className="text-white/80 mt-6 animate-pulse border-l-2 border-accent-red pl-4 py-1 bg-accent-red/5">
                    AquariusAI: Model ready. How can I assist with your portfolio analysis today?
                  </p>
                  <div className="pt-4 space-y-2">
                    <div className="p-3 glass rounded-xl border border-white/5 cursor-pointer hover:bg-white/5 transition-all text-xs text-white/60">
                      Predict market volatility for Q3 2026 based on recent Fed data.
                    </div>
                    <div className="p-3 glass rounded-xl border border-white/5 cursor-pointer hover:bg-white/5 transition-all text-xs text-white/60">
                      Generate a risk-assessment report for Emerging Markets.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      <Footer />
    </main>
  );
}
