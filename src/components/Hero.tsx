"use client";

import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-aquarius-moving">
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-widest uppercase border border-accent-red/30 rounded-full text-accent-red glass-red">
                        Pioneering the Future of Intelligence
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
                        AquariusAI <br />
                        <span className="text-gradient-red">Intelligence Model</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                        The next generation of specialized AI intelligence models tailored for the world's most critical industries: FinTech, MediTech, and EduTech.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all text-sm uppercase tracking-wider w-full sm:w-auto">
                            Start Chatting
                        </button>
                        <button className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm uppercase tracking-wider w-full sm:w-auto">
                            Explore Models
                        </button>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};
