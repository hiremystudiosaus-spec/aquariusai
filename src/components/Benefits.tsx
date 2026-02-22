"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Landmark,
    ShieldCheck,
    BarChart4,
    HeartPulse,
    Microscope,
    UserRoundCheck,
    GraduationCap,
    BrainCircuit,
    LayoutGrid
} from "lucide-react";

const benefitsData = [
    {
        category: "FinTech Benefits",
        icon: Landmark,
        description: "Empowering financial institutions with secure, high-precision intelligence.",
        benefits: [
            {
                title: "Regulatory Compliance",
                text: "Automated tracking of global financial regulations and real-time compliance auditing.",
                icon: ShieldCheck
            },
            {
                title: "Risk Analysis",
                text: "Advanced risk modeling with sub-second latency for high-frequency trading and lending.",
                icon: BarChart4
            }
        ]
    },
    {
        category: "MediTech Benefits",
        icon: HeartPulse,
        description: "Accelerating patient care and research with specialized clinical models.",
        benefits: [
            {
                title: "HIPAA Compliant",
                text: "Military-grade encryption and privacy-first data handling for sensitive patient records.",
                icon: Microscope
            },
            {
                title: "Precision Medicine",
                text: "Tailored AI diagnostics based on complex genomic and phenotypic datasets.",
                icon: UserRoundCheck
            }
        ]
    },
    {
        category: "EduTech Benefits",
        icon: GraduationCap,
        description: "Revolutionizing the classroom with adaptive and cognitive AI support.",
        benefits: [
            {
                title: "Cognitive Support",
                text: "Real-time analysis of student engagement and cognitive load for better learning outcomes.",
                icon: BrainCircuit
            },
            {
                title: "Adaptive Scaling",
                text: "Seamlessly scale personalized curriculum across thousands of students simultaneously.",
                icon: LayoutGrid
            }
        ]
    }
];

export const Benefits = () => {
    return (
        <section id="benefits" className="py-24 px-6 relative overflow-hidden bg-black">
            {/* Subtle Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-red/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                    >
                        Core <span className="text-accent-red">Benefits</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        Tailored AI solutions designed to solve high-stakes challenges in critical global industries.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {benefitsData.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-accent-red/10 flex items-center justify-center text-accent-red">
                                    <category.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{category.category}</h3>
                                    <div className="h-0.5 w-12 bg-accent-red mt-1" />
                                </div>
                            </div>
                            <p className="text-white/40 text-sm mb-8 leading-relaxed">
                                {category.description}
                            </p>

                            <div className="space-y-6">
                                {category.benefits.map((benefit, bIdx) => (
                                    <div key={benefit.title} className="p-6 rounded-2xl glass border-white/5 hover:border-accent-red/20 transition-all group">
                                        <div className="flex items-start space-x-4">
                                            <div className="mt-1 text-accent-red group-hover:scale-110 transition-transform">
                                                <benefit.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white/90 mb-2">{benefit.title}</h4>
                                                <p className="text-xs text-white/50 leading-relaxed">
                                                    {benefit.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
