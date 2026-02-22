"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Megaphone, Target, BarChart2 } from "lucide-react";

export const Marketing = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-black">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[400px] bg-accent-red/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-red p-12 md:p-20 rounded-[48px] border border-white/5 relative overflow-hidden"
                >
                    {/* Subtle grid pattern overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent-red/10 border border-accent-red/20 mb-8">
                            <Megaphone className="w-4 h-4 text-accent-red" />
                            <span className="text-xs font-bold uppercase tracking-widest text-accent-red">Marketing Solutions</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white">
                            Need <span className="text-accent-red">Promotional</span> Marketing?
                        </h2>

                        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                            Take your intelligence models to the global stage. Our specialized marketing teams help AI-driven startups and enterprises reach the right decision-makers in FinTech, Healthcare, and Education.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
                            <div className="flex flex-col items-center space-y-2">
                                <Target className="w-6 h-6 text-accent-red/60" />
                                <span className="text-sm font-medium text-white/80">Targeted Campaigns</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <BarChart2 className="w-6 h-6 text-accent-red/60" />
                                <span className="text-sm font-medium text-white/80">Growth Analytics</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <Megaphone className="w-6 h-6 text-accent-red/60" />
                                <span className="text-sm font-medium text-white/80">Brand Authority</span>
                            </div>
                        </div>

                        <button className="group relative inline-flex items-center space-x-3 bg-accent-red hover:bg-accent-red-hover text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-accent-red/20 hover:scale-105">
                            <span>GET STARTED NOW</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </motion.div>

                <p className="mt-12 text-white/30 text-sm italic">
                    Join 50+ AI companies scaling their industry presence with AquariusAI Marketing Services.
                </p>
            </div>
        </section>
    );
};
