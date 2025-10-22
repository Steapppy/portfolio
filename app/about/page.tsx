import { Metadata } from 'next'
import Image from 'next/image' // Added Image import
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { AnimatedBackground } from '@/components/3d/animated-background'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  ShieldCheck,
  BrainCircuit,
  Code2,
  Users,
  Lightbulb,
  Globe,
  BookOpen,
  ExternalLink,
  MapPin,
  MessageSquare,
  Target
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Alouache Abdelmoula - Cybersecurity Engineer',
  description: 'Learn about Alouache Abdelmoula&apos;s journey as a Cybersecurity Engineering student, his passion for offensive security, and the skills that drive his work.',
}

const skills = [
  { category: 'Penetration Testing', items: ['Internal Network Attacks', 'Privilege Escalation', 'Lateral Movement'] },
  { category: 'Active Directory Security', items: ['BloodHound', 'Mimikatz', 'Impacket', 'Kerberoasting', 'NTLM Relay'] },
  { category: 'Web Application Security', items: ['Burp Suite', 'OWASP Top 10', 'SQL Injection', 'XSS'] },
  { category: 'Network Security', items: ['Wireshark', 'TCP/IP', 'VLAN Attacks', 'Network Sniffing'] },
  { category: 'SIEM & Threat Intelligence', items: ['Wazuh', 'VirusTotal API', 'Sigma/YARA Rules', 'Osquery'] },
  { category: 'Programming Languages', items: ['Python', 'Rust', 'Java'] },
]

const achievements = [
  {
    title: 'Practical Network Penetration Tester (PNPT)',
    description: 'Earned the PNPT certification from TCM Security, demonstrating my ability to perform penetration tests on professional environments.',
    icon: ShieldCheck,
    year: '2025',
  },
  {
    title: 'Certified Red Team Analyst (CRTA)',
    description: 'Earned the CRTA certification from Cyber Warfare Labs, validating practical red teaming skills.',
    icon: ShieldCheck,
    year: '2025',
  },
 
]

const values = [
  {
    title: 'Critical Thinking',
    description: 'I approach every security challenge with a methodical and analytical mindset, deconstructing complex systems to uncover hidden vulnerabilities.',
    icon: BrainCircuit,
    gradient: 'from-red-500/20 to-rose-500/20',
  },
  {
    title: 'Problem-Solving',
    description: 'Beyond identifying issues, I am driven to find effective and robust solutions, providing clear recommendations for remediation.',
    icon: ShieldCheck,
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Creativity',
    description: 'Offensive security requires thinking like an adversary. I leverage creative and unconventional approaches to simulate real-world threats.',
    icon: Lightbulb,
    gradient: 'from-red-500/20 to-rose-500/20',
  },
  {
    title: 'Communication',
    description: 'Translating complex technical findings into clear, actionable reports is key. I prioritize clear communication with both technical and non-technical stakeholders.',
    icon: MessageSquare,
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Badge variant="outline" className="mr-3 text-primary border-primary/30">About Me</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      Rabat, Morocco
                    </div>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Securing Infrastructures Through an Offensive Mindset
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    I am a final-year Cybersecurity Engineering student at INPT with a deep focus on practical offensive security. My work involves Active Directory penetration testing, SIEM-CTI integration, and creating comprehensive vulnerability reports to strengthen digital defenses.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg">
                      <Link href="/contact">Let&apos;s Connect</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/resume" target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Resume
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 md:p-8">
                    {/* --- IMAGE ADDED HERE --- */}
                    <Image
                      src="/reda.jpeg"
                      alt="Alouache Abdelmoula"
                      width={400}
                      height={500}
                      className="w-full h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  {/* Floating Stats */}
                  <div className="absolute -bottom-6 -left-6 bg-card border rounded-lg p-4 shadow-lg">
                    <div className="flex items-center">
                      <ShieldCheck className="w-8 h-8 text-primary mr-3" />
                      <div>
                        <p className="text-2xl font-bold">2</p>
                        <p className="text-sm text-muted-foreground">Certifications</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 bg-card border rounded-lg p-4 shadow-lg">
                    <div className="flex items-center">
                      <Code2 className="w-8 h-8 text-primary mr-3" />
                      <div>
                        <p className="text-2xl font-bold">3+</p>
                        <p className="text-sm text-muted-foreground">Core Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  My journey into technology began with a curiosity for how systems work, which quickly evolved into a passion for cybersecurity. I started by building a foundational knowledge in programming and networking, which naturally led me to explore how to both build and break digital environments.
                </p>
                <p>
                  During my studies at INPT, I focused on turning theory into practice. This led me to create a dedicated home lab where I could simulate enterprise networks and execute advanced attacks in a controlled setting. Projects like developing a secure remote agent in Rust and enhancing SIEM capabilities with threat intelligence allowed me to dive deep into the technical details of modern security challenges.
                </p>
                <p>
                  My internship as a Red Team Engineer was a pivotal experience, allowing me to apply my skills to real-world enterprise networks and understand the true impact of vulnerabilities. Today, I am driven by the constant challenge of staying one step ahead of threats and am eager to contribute my offensive security skills to a forward-thinking team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skillGroup) => (
                  <Card key={skillGroup.category} className="hover:shadow-md transition-shadow bg-card/50">
                    <CardHeader><CardTitle className="text-lg">{skillGroup.category}</CardTitle></CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What Drives Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={value.title} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-card/50">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <CardContent className="relative p-8">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-6">
                          <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <value.icon className="w-7 h-7 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((achievement) => (
                  <Card key={achievement.title} className="hover:shadow-md transition-shadow bg-card/50">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <achievement.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold">{achievement.title}</h3>
                            <Badge variant="outline" className="text-xs">{achievement.year}</Badge>
                          </div>
                          <p className="text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Personal Touch */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Beyond the Code</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                When I&apos;m not immersed in security research, I enjoy exploring new technologies, contributing to the security community, and staying current with the evolving threat landscape.
              </p>
              <div className="flex justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>3 Languages</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>Continuous Learner</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Team Player</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}