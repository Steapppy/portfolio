"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Target, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectCard, ProjectData } from "@/components/ui/project-card";

// Projects updated to reflect your cybersecurity resume.
const projects: ProjectData[] = [
    {
        id: "rust-remote-agent",
        title: "Rust-based Remote Agent Framework",
        description: "A custom remote agent built with Rust, focusing on memory safety and scalable, asynchronous C2 communication using Tokio.",
        status: "Research",
        tags: ["Rust", "Tokio", "C2 Development", "Asynchronous Rust", "Active Directory"],
        icon: Terminal,
        color: "text-red-400",
        bgColor: "bg-red-400/10",
        borderColor: "border-red-400/20",
        image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?w=600&h=400&fit=crop&auto=format&q=80",
        liveHref: "", // No public links available (disabled)
    },
    {
        id: "ad-pentesting-lab",
        title: "AD Penetration Testing Lab",
        description: "Established a virtualized Active Directory lab to simulate advanced attacks, practice post-exploitation with C2 frameworks, and perform web vulnerability assessments.",
        status: "Ongoing",
        tags: ["Active Directory", "Sliver C2", "Burp Suite", "Penetration Testing", "Proxmox"],
        icon: Target,
        color: "text-rose-400",
        bgColor: "bg-rose-400/10",
        borderColor: "border-rose-400/20",
        image: "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?w=600&h=400&fit=crop&auto=format&q=80",
        liveHref: "", // No public links available (disabled)
    },
    {
        id: "siem-cti-integration",
        title: "SIEM Enhancement with CTI",
        description: "Engineered custom detection rules for Wazuh SIEM, integrating Cyber Threat Intelligence feeds to enrich security alerts and enable proactive threat hunting.",
        status: "Completed",
        tags: ["Wazuh SIEM", "CTI", "Python", "YARA", "Threat Hunting"],
        icon: ShieldCheck,
        color: "text-red-400",
        bgColor: "bg-red-400/10",
        borderColor: "border-red-400/20",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&auto=format&q=80",
        liveHref: "", // No public links available (disabled)
    },
];

export function FeaturedProjects() {
    return (
        <section className="py-24 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center space-y-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        My Featured{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 animate-gradient">
                            Projects
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        A selection of my work demonstrating practical skills in offensive security and cybersecurity engineering. 
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Updated Button */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Button asChild size="lg" className="font-semibold">
                        <Link href="/projects">
                            View All Projects <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}