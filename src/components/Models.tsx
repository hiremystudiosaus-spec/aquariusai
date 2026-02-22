"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, HeartPulse, GraduationCap, ArrowUpRight } from "lucide-react";

const models = [
    {
        id: "fintech",
        title: "FinTech Model",
        description: "Advanced financial analysis, risk assessment, and market prediction with unprecedented accuracy.",
        icon: Landmark,
        color: "from-red-500/20 to-black",
    },
    {
        id: "meditech",
        title: "MediTech Model",
        description: "Specialized intelligence for diagnostics, drug discovery, and personalized patient care plans.",
        icon: HeartPulse,
        color: "from-red-600/20 to-black",
    },
    {
        id: "edutech",
        title: "EduTech Model",
        description: "Adaptive learning pathways, automated grading, and cognitive support for students and educators.",
        icon: GraduationCap,
        color: "from-red-700/20 to-black",
    },
];

export const Models = () => {
    return (
        <section id="models" className="py-24 px-6 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Core Industry Models</h2>
                    <p className="text-white/50 max-w-2xl mx-auto">
                        Our three core available models are fine-tuned on industry-specific datasets to provide accurate and reliable intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {models.map((model, index) => (
                        <motion.div
                            key={model.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-3xl glass-red border-white/5 group hover:border-accent-red/30 transition-all duration-500 flex flex-col h-full`}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-accent-red/10 flex items-center justify-center mb-6 text-accent-red group-hover:scale-110 transition-transform">
                                <model.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                            <p className="text-white/60 mb-8 flex-grow leading-relaxed">
                                {model.description}
                            </p>
                            <button className="flex items-center text-sm font-bold uppercase tracking-wider text-accent-red hover:text-white transition-colors group">
                                Deep Dive <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
