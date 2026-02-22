"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Rocket, HelpCircle } from "lucide-react";

const plans = [
    {
        name: "Free",
        price: "0",
        description: "Perfect for testing the waters of AI intelligence.",
        credits: "1,000 credits/mo",
        features: [
            "Access to basic models",
            "Web interface access",
            "Community support",
            "Standard generation speed",
        ],
        buttonText: "Get Started",
        highlight: false,
    },
    {
        name: "Pro",
        price: "49",
        description: "For professionals needing consistent AI power.",
        credits: "10,000 credits/mo",
        features: [
            "Access to all specialized models",
            "Full API access",
            "Priority customer support",
            "Enhanced generation speed",
            "Early access to new features",
        ],
        buttonText: "Upgrade to Pro",
        highlight: true,
    },
    {
        name: "Scale",
        price: "199",
        description: "Designed for high-growth teams and companies.",
        credits: "50,000 credits/mo",
        features: [
            "High-speed generation tier",
            "Advanced API configurations",
            "Dedicated account manager",
            "Team collaboration tools",
            "Custom analytics dashboard",
        ],
        buttonText: "Scale Now",
        highlight: false,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Maximum performance for global enterprises.",
        credits: "Unlimited Credits*",
        features: [
            "Custom model fine-tuning",
            "Air-gapped deployment options",
            "Enterprise-grade security (SOC2)",
            "24/7 dedicated support team",
            "SLA guaranteed uptime",
        ],
        buttonText: "Contact Sales",
        highlight: false,
        contact: true,
    },
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 px-6 relative overflow-hidden bg-black">
            {/* Decorative Orbs */}
            <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-accent-red/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent-red/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                    >
                        Transparent <span className="text-accent-red">Pricing</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        Simple credit-based plans tailored to your processing needs. No hidden fees, just pure intelligence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-[32px] transition-all duration-300 ${plan.highlight
                                    ? "glass-red border-accent-red/30 shadow-xl shadow-accent-red/10 scale-105 z-20"
                                    : "glass border-white/5 hover:border-white/10"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-red text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-white/40 text-sm leading-relaxed h-12">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline space-x-1">
                                    <span className="text-4xl font-bold">
                                        {plan.price === "Custom" ? "" : "$"}
                                        {plan.price}
                                    </span>
                                    {plan.price !== "Custom" && (
                                        <span className="text-white/40 text-sm">/mo</span>
                                    )}
                                </div>
                                <div className="mt-2 inline-flex items-center space-x-2 text-accent-red text-xs font-mono uppercase tracking-wider">
                                    <Zap className="w-3 h-3" />
                                    <span>{plan.credits}</span>
                                </div>
                            </div>

                            <div className="flex-grow space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start space-x-3 group">
                                        <Check className="w-4 h-4 text-accent-red mt-0.5 shrink-0" />
                                        <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${plan.highlight
                                        ? "bg-accent-red text-white hover:bg-accent-red-hover shadow-lg shadow-accent-red/20"
                                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                                    }`}
                            >
                                {plan.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-white/40 text-sm flex items-center justify-center space-x-2">
                        <HelpCircle className="w-4 h-4" />
                        <span>Need more credits? <button className="text-accent-red hover:underline">Buy add-on credits</button> starting from $10/k</span>
                    </p>
                </div>
            </div>
        </section>
    );
};
