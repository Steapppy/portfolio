"use client";

// Button replaced with plain anchors to keep server/client markup stable
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Helper hook to check if component is mounted (client-side)
function useHasMounted() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    return hasMounted;
}

// Tech stack updated to reflect your cybersecurity skills
const techStack = [
    "Python",
    "Rust",
    "Active Directory",
    "Sliver C2",
    "Burp Suite",
    "Wazuh SIEM",
    "Penetration Testing",
    "CTI",
];

export function HeroSection() {
    const hasMounted = useHasMounted();
    // Always use motion components, but only enable animations after mount
    const MotionDiv = motion.div;
    const MotionH1 = motion.h1;
    const MotionP = motion.p;
    return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 bg-background">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            <div className="container-max">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column - Content */}
                    <MotionDiv
                        className="lg:col-span-7 space-y-8"
                        initial={hasMounted ? { opacity: 0, x: -50 } : false}
                        animate={hasMounted ? { opacity: 1, x: 0 } : undefined}
                        transition={hasMounted ? { duration: 0.8, ease: "easeOut" } : undefined}
                    >
                        <Badge
                            variant="secondary"
                            className="px-6 py-3 text-sm font-medium bg-gradient-to-r from-red-500/10 to-rose-500/10 text-red-400 border-red-400/20 hover:border-red-400/40 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                                <span>Seeking Red Team & Penetration Testing Roles</span>
                            </div>
                        </Badge>

                        <div className="space-y-6">
                            <MotionH1
                                className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter"
                                initial={hasMounted ? { opacity: 0, y: 20 } : false}
                                animate={hasMounted ? { opacity: 1, y: 0 } : undefined}
                                transition={hasMounted ? { duration: 0.6, delay: 0.1, ease: "easeOut" } : undefined}
                            >
                                <span className="block">Hi, I&#39;m Alouache Abdelmoula.</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 animate-gradient">
                                    Offensive Security Engineer.
                                </span>
                            </MotionH1>
                            <MotionP
                                className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                                initial={hasMounted ? { opacity: 0, y: 20 } : false}
                                animate={hasMounted ? { opacity: 1, y: 0 } : undefined}
                                transition={hasMounted ? { duration: 0.6, delay: 0.2, ease: "easeOut" } : undefined}
                            >
                                Final-year Cybersecurity Engineering student with a strong focus on practical offensive security, including Active Directory penetration testing and SIEM-CTI integration.
                            </MotionP>
                        </div>

                        {/* --- MODIFIED BUTTONS SECTION --- */}
                        <MotionDiv
                            className="flex flex-col sm:flex-row items-center gap-4"
                            initial={hasMounted ? { opacity: 0, y: 20 } : false}
                            animate={hasMounted ? { opacity: 1, y: 0 } : undefined}
                            transition={hasMounted ? { duration: 0.6, delay: 0.3, ease: "easeOut" } : undefined}
                        >
                            {/* Artistic "Get in Touch" Button */}
                            <MotionDiv
                                whileHover={hasMounted ? { scale: 1.05 } : undefined}
                                whileTap={hasMounted ? { scale: 0.95 } : undefined}
                                transition={hasMounted ? { type: "spring", stiffness: 400, damping: 17 } : undefined}
                            >
                                <a
                                    href="contact"
                                    className={
                                        `inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold
                                        p-0.5 relative group overflow-hidden rounded-lg bg-gradient-to-br from-red-500 to-rose-500
                                        shadow-lg shadow-red-500/30 hover:shadow-red-500/40 transition-shadow duration-300 w-full h-full`
                                    }
                                >
                                    <span className="flex items-center justify-center relative w-full h-full px-6 py-3 bg-background rounded-[7px] group-hover:bg-transparent transition-colors duration-300 ease-in-out">
                                        Get in Touch
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </a>
                            </MotionDiv>

                            {/* Standard Resume Button */}
                            <a href="/resume" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:shadow-md">
                                View Resume <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </MotionDiv>
                        {/* --- END OF MODIFIED SECTION --- */}
                        
                    </MotionDiv>

                    {/* Right Column - Visuals & Profile */}
                    <MotionDiv
                        className="lg:col-span-5 space-y-6"
                        initial={hasMounted ? { opacity: 0, x: 50 } : false}
                        animate={hasMounted ? { opacity: 1, x: 0 } : undefined}
                        transition={hasMounted ? { duration: 0.8, delay: 0.2, ease: "easeOut" } : undefined}
                    >
                        <MotionDiv
                            className="rounded-lg overflow-hidden border-2 border-red-500/20 shadow-xl"
                            initial={hasMounted ? { opacity: 0, scale: 0.9 } : false}
                            animate={hasMounted ? { opacity: 1, scale: 1 } : undefined}
                            transition={hasMounted ? { duration: 0.5, delay: 0.4, ease: "easeOut" } : undefined}
                        >
                            <img
                                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW44MGVkOHdhbzljNGs5OHVhazF2cnp1cnAwMHJjdmd6OGtrc24yMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TOWeGr70V2R1K/giphy.gif"
                                alt="Cybersecurity terminal animation"
                                className="w-full h-auto object-cover"
                            />
                        </MotionDiv>

                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-center text-sm font-semibold text-muted-foreground mb-4">
                                CORE SKILLS & TOOLS
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {techStack.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="px-3 py-1 text-xs font-mono">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
}