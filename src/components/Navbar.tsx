"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mx-auto mt-4 glass rounded-full max-w-7xl"
        >
            <Link href="/" className="text-2xl font-bold tracking-tighter">
                Aquarius<span className="text-accent-red">AI</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                <Link href="#models" className="hover:text-accent-red transition-colors">Intelligence</Link>
                <Link href="#fintech" className="hover:text-accent-red transition-colors">FinTech</Link>
                <Link href="#meditech" className="hover:text-accent-red transition-colors">MediTech</Link>
                <Link href="#edutech" className="hover:text-accent-red transition-colors">EduTech</Link>
            </nav>

            <div className="flex items-center space-x-4">
                <button className="px-5 py-2 text-sm font-semibold text-white glass-red rounded-full hover:bg-accent-red/20 transition-all">
                    Launch App
                </button>
            </div>
        </motion.header>
    );
};
