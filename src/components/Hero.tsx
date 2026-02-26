"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative min-h-screen pt-40 pb-20 flex flex-col items-center justify-center overflow-hidden bg-aquarius-moving">

            <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto flex flex-col items-center">
                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
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

                {/* Hero Image / Dashboard Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="mt-20 w-full relative group perspective-[2000px]"
                >
                    <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 bg-black/40 backdrop-blur-3xl shadow-2xl shadow-accent-red/20 transform transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                        {/* Glow effect behind the image inside the border */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-red/10 via-transparent to-transparent opacity-50" />

                        <Image
                            src="/909shots_so.png"
                            alt="AquariusAI Dashboard Interface"
                            width={1600}
                            height={900}
                            className="w-full h-auto object-cover rounded-[1.8rem] md:rounded-[2.8rem] border border-white/10"
                            priority
                        />

                        {/* Bottom fade for a seamless blend */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </div>

        </section>
    );
};
