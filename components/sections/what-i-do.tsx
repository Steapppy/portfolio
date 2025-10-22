"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bug, Radar, Code, CheckCircle } from "lucide-react"; // Updated icons
import { motion } from "framer-motion";

// Services updated to reflect Alouache Abdelmoula's cybersecurity engineering profile.
const services = [
    {
        icon: Bug, // Changed from BrainCircuit to Bug
        title: "Offensive Security & Red Teaming",
        description:
            "Practical experience in penetration testing, focusing on Active Directory attacks, and vulnerability assessments. Skilled in simulating real-world adversaries to identify and remediate security gaps.",
        features: [
            "Active Directory Penetration Testing",
            "Web Application Penetration Tester",
            "Privilege Escalation & Lateral Movement",
            "Vulnerability Reporting & Risk Assessment",

        ],
        color: "text-gradient", // Gradient text for boldness
        bgColor: "bg-gradient-to-br from-red-700 via-red-500 to-red-900", // Gradient background for aesthetic appeal
        borderColor: "border-red-700/50", // Aesthetic deep red border
    },
    {
        icon: Radar, // Changed from Server to Radar
        title: "SIEM & Threat Intelligence",
        description:
            "Enhancing detection and response by integrating Cyber Threat Intelligence (CTI) with SIEM platforms like Wazuh. Experienced in custom rule engineering, alert enrichment, and proactive threat hunting.",
        features: [
            "Wazuh SIEM & Custom Detection Rules",
            "CTI Feed Integration (VirusTotal API)",
            "Threat Hunting & Alert Correlation",
            "Security Infrastructure Monitoring with Zabbix",
        ],
        color: "text-gradient", // Gradient text for boldness
        bgColor: "bg-gradient-to-br from-red-700 via-red-500 to-red-900", // Gradient background for aesthetic appeal
        borderColor: "border-red-700/50", // Aesthetic deep red border
    },
    {
        icon: Code, // Changed from Cloud to Code
        title: "Technical & Programming Skills",
        description:
            "Strong foundation in Python, Rust, and Java for security tooling, automation, and research. Adept at building custom frameworks, such as a remote agent in Rust, for secure and memory-safe solutions.",
        features: [
            "Python, Rust & Java",
            "Custom Remote Agent Development",
            "Web & Network Security",
            "SIEM Rule Scripting & Integration",
        ],
        color: "text-gradient", // Gradient text for boldness
        bgColor: "bg-gradient-to-br from-red-700 via-red-500 to-red-900", // Gradient background for aesthetic appeal
        borderColor: "border-red-700/50", // Aesthetic deep red border
    },
];

export function WhatIDo() {
    return (
        <section className="py-24 bg-background/70 backdrop-blur-lg">
            <div className="container mx-auto max-w-7xl px-4">
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
                        My Engineering{" "}
                        <span
                            suppressHydrationWarning
                            className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-500 to-red-900 animate-gradient"
                            style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}
                        >
                            Specialties
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        As a final-year Cybersecurity Engineering student, I focus on practical offensive security, threat intelligence integration, and building secure, custom tooling.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="h-full"
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2 + index * 0.1,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                        >
                            <Card
                                className={`h-full flex flex-col bg-card/50 border-2 ${service.borderColor} hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-primary/10`}
                            >
                                <CardHeader className="flex-shrink-0">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className={`p-3 rounded-lg border ${service.borderColor} ${service.bgColor}`}
                                        >
                                            <service.icon
                                                className={`w-7 h-7 ${service.color}`}
                                            />
                                        </div>
                                        <CardTitle
                                            className={`text-2xl font-bold ${service.color}`}
                                        >
                                            {service.title}
                                        </CardTitle>
                                    </div>
                                    <CardDescription className="text-base text-muted-foreground">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex-grow flex flex-col justify-end pt-4">
                                    <div className="space-y-3">
                                        {service.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-3"
                                            >
                                                <CheckCircle
                                                    className={`w-5 h-5 ${service.color}`}
                                                />
                                                <span className="text-sm text-foreground">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}