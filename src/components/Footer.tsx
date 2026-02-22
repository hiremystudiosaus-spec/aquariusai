"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <Link href="/" className="text-2xl font-bold tracking-tighter">
                        Aquarius<span className="text-accent-red">AI</span>
                    </Link>
                    <p className="text-white/40 text-sm mt-2 max-w-xs">
                        Pushing the boundaries of domain-specific artificial intelligence for a better future.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-10 text-sm font-medium text-white/60">
                    <Link href="#" className="hover:text-accent-red transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-accent-red transition-colors">Terms of Service</Link>
                    <Link href="#" className="hover:text-accent-red transition-colors">Documentation</Link>
                    <Link href="#" className="hover:text-accent-red transition-colors">Sitemap</Link>
                </div>

                <div className="flex items-center space-x-4">
                    <Link href="#" className="p-2 glass rounded-full hover:bg-accent-red/10 transition-colors">
                        <Twitter size={18} />
                    </Link>
                    <Link href="#" className="p-2 glass rounded-full hover:bg-accent-red/10 transition-colors">
                        <Github size={18} />
                    </Link>
                    <Link href="#" className="p-2 glass rounded-full hover:bg-accent-red/10 transition-colors">
                        <Linkedin size={18} />
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto text-center mt-12 pt-8 border-t border-white/5">
                <p className="text-white/20 text-xs uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} AquariusAI Intelligence Systems. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};
