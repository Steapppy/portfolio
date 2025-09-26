"use client";

import { ShieldCheck, Target, Radar, Terminal, Network, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

// Trust elements updated for a cybersecurity profile
const trustElements = [
    {
        name: "Certified Red Team Analyst",
        icon: ShieldCheck,
        description:
            "Holder of the CRTA and in-progress PNPT certifications, demonstrating practical skills in offensive security.",
        color: "text-red-400",
        bgColor: "bg-red-400/10",
        borderColor: "border-red-400/20",
    },
    {
        name: "Hands-On Red Team Experience",
        icon: Target,
        description: "Gained practical experience as a Red Team Engineer Intern conducting penetration tests on enterprise Active Directory environments.",
        color: "text-red-400",
        bgColor: "bg-red-400/10",
        borderColor: "border-red-400/20",
    },
    {
        name: "SIEM & CTI Integration",
        icon: Radar,
        description:
            "Engineered custom detection rules for Wazuh SIEM and integrated Cyber Threat Intelligence feeds to enhance threat hunting capabilities.",
        color: "text-red-400",
        bgColor: "bg-red-400/10",
        borderColor: "border-red-400/20",
    },
    {
        name: "Secure Tool Development",
        icon: Terminal,
        description:
            "Researched and built a custom remote agent in Rust, focusing on memory-safe and secure native tooling for security operations.",
        color: "text-red-400",
        bgColor: "bg-red-400/10",
        borderColor: "border-red-400/20",
    },
    {
        name: "Dedicated Home Lab",
        icon: Network,
        description:
            "Actively maintains a virtualized Active Directory lab to practice advanced attacks and explore C2 frameworks post-exploitation.",
        color: "text-red-400",
        bgColor: "bg-red-400/10",
        borderColor: "border-red-400/20",
    },
    {
        name: "INPT Cybersecurity Engineering Student",
        icon: GraduationCap,
        description:
            "Final-year student pursuing an Engineering Degree in Cybersecurity from the National Institute of Posts and Telecommunications.",
        color: "text-red-400",
        bgColor: "bg-red-400/10",
        borderColor: "border-red-400/20",
    },
];

export function TrustStrip() {
    return (
        <section className="py-24 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4">
                <motion.div
                    className="text-center space-y-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Section Header */}
                    <div className="space-y-4">
                        <motion.h2
                            className="text-4xl lg:text-5xl font-bold tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Why Hire{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 animate-gradient">
                                Me?
                            </span>
                        </motion.h2>
                        <motion.h2
                            className="text-4xl font-bold tracking-tight text-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            A Foundation of Skill and Dedication
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            I am committed to delivering robust security solutions built on a foundation of proven skills, practical experience, and a drive to solve complex challenges.
                        </motion.p>
                    </div>

                    {/* Trust Badges Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trustElements.map((element, index) => (
                            <motion.div
                                key={element.name}
                                className="relative group p-6 rounded-xl bg-card/40 border border-primary/10 hover:border-red-500/30 hover:bg-card/60 transition-all duration-300 shadow-lg hover:shadow-red-500/10"
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 },
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`p-3 rounded-lg ${element.bgColor} border ${element.borderColor}`}
                                    >
                                        <element.icon
                                            className={`w-6 h-6 ${element.color}`}
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {element.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {element.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}