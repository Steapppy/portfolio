// Client component for interactive resume page
'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Mail,
  MapPin,
  Linkedin,
  Calendar,
  Building,
  GraduationCap,
  Award,
  Code,
  Star,
  ShieldCheck,
  Phone,
  Globe
} from 'lucide-react'

const personalInfo = {
  name: 'Alouache Abdelmoula',
  title: 'Cybersecurity Engineering Student | Offensive Security',
  email: 'abdo.alouache123@gmail.com',
  phone: '(+212) 631653055',
  location: 'Rabat, Morocco',
  linkedin: 'linkedin.com/in/abdelmoula-alouache',
}

const professionalSummary = `Final-year Cybersecurity Engineering student at INPT with a strong focus on practical offensive security, including Active Directory security, Web application Security, and comprehensive vulnerability reporting.`

const experience = [

  {
    title: 'Cybersecurity & Infrastructure Engineer Intern',
    company: 'MCPharma',
    location: 'Bouskoura, Morocco',
    period: 'Jun 2025 - Aug 2025',
    achievements: [
      'Monitored the performance and security posture of critical IT infrastructure using Zabbix.',
      'Assisted in the migration to and deployment of a new Active Directory environment.',
      'Conducted an internal penetration test on the newly deployed Active Directory.',
    ],
  },
    {
    title: 'Red Team Engineer Intern',
    company: 'EncryptEdge Labs',
    location: 'Remote',
    period: 'Dec 2024 - Feb 2025',
    achievements: [
      'Conducted penetration tests on enterprise networks, focusing on Active Directory security.',
      'Utilized C2 frameworks such as Sliver for post-exploitation and persistence.',
      'Authored detailed penetration test reports, including technical findings, risk assessments, and remediation recommendations.',
    ],
  },
]

const education = [
  {
    degree: 'Cybersecurity Engineering Degree',
    school: 'National Institute of Posts and Telecommunications (INPT)',
    location: 'Rabat, Morocco',
    period: '2023 - 2026',
    details: [],
  },
  {
    degree: 'Preparatory Classes for Engineering Schools (CPGE)',
    school: 'Lycee Reda Slaoui',
    location: 'Agadir, Morocco',
    period: '2021 - 2023',
    details: [],
  },
]

const projects = [
    {
        title: 'Rust-based Remote Agent Framework (Research)',
        period: 'July 2025 - Present',
        technologies: ['Proxmox', 'Impacket', 'Active Directory', 'BloodHound', 'Rust', 'Tokio'],
        details: [
            'Built a custom remote agent framework in Rust to study secure, memory-safe native tooling.',
            'Implemented asynchronous agent/server communication with Tokio for scalability.',
            'Applied Rust’s safety features to mitigate common memory-related vulnerabilities.',
        ],
    },
    {
        title: 'Home Lab & Professional Penetration Testing Engagements',
        period: 'May 2024 - Present',
        technologies: ['Proxmox', 'Impacket', 'AD', 'BloodHound', 'Sliver', 'Burp Suite'],
        details: [
            'Established a virtualized Active Directory lab to execute advanced attacks and utilized C2 frameworks post-exploitation.',
            'Conducted vulnerability assessments on web applications, identifying critical flaws such as SQL injection and XSS.',
            'Authored multiple professional penetration testing reports detailing findings, risk, and remediation.',
        ],
    },
    {
        title: 'CTF & Hands-on Labs',
        period: 'January 2024 - Present',
        technologies: ['Active Directory', 'Linux', 'Web Exploitation', 'Privilege Escalation', 'Report Writing',],
        details: [
            'Engineered custom detection rules and decoders for Wazuh SIEM to identify advanced threats.',
            'Integrated CTI feeds to enrich security alerts and enable proactive threat hunting.',
            'Improved alert fidelity by correlating internal events with external threat intelligence.',
        ],
    },
]

const skills = {
  'Penetration Testing': ['Internal Network Attacks', 'Privilege Escalation', 'Lateral Movement'],
  'Active Directory Security': ['BloodHound', 'Mimikatz', 'Impacket', 'Kerberoasting', 'NTLM Relay'],
  'Network Security': ['Wireshark', 'TCP/IP', 'VLAN Attacks', 'Network Sniffing'],
  'Web Application Security': ['Burp Suite', 'OWASP Top 10', 'Curl'],
  'Programming Languages': ['Python', 'Rust', 'Java'],
  'Operating Systems' : ['Windows', 'Linux'],
  'Soft Skills': ['Critical Thinking', 'Problem-Solving', 'Communication', 'Creativity'],
}

const certifications = [
  'Practical Network Penetration Tester (PNPT) - TCM Security ',
  'Certified Red Team Analyst (CRTA) - CyberWarfare Labs',
  'Azure Security Engineer Associate (AZ 500) (In progress) - Microsoft',
]

const languages = [
    'Arabic: Native',
    'French: Proficient',
    'English: Fluent',
]


export default function ResumePage() {
  useEffect(() => {
    document.title = 'Resume | Alouache Abdelmoula - Cybersecurity Engineer'
  }, [])

  return (
    <div className="min-h-screen relative bg-transparent print:bg-white">
      <AnimatedBackground variant="resume" />

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-xl opacity-40 group-hover:opacity-60 transition-opacity print:hidden" />
          <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/60 shadow-xl print:border-0 print:shadow-none print:bg-white print:backdrop-blur-none">
          <div className="p-8 print:p-6">
            {/* Personal Info Header */}
            <header className="text-center mb-10 print:mb-6">
              <h1 className="text-4xl font-bold text-foreground mb-2">{personalInfo.name}</h1>
              <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-5">{personalInfo.title}</h2>
              
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1.5" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">{personalInfo.email}</a>
                </div>
                 <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1.5" />
                  {personalInfo.phone}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1.5" />
                  {personalInfo.location}
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <Link
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <Linkedin className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="tracking-wide">{personalInfo.linkedin}</span>
                </Link>
              </div>

              <div className="mt-6 flex justify-center gap-4 print:hidden">
                <Button size="sm" variant="outline" onClick={() => window.print()} className="text-xs">Print / PDF</Button>
                <Button size="sm" asChild className="text-xs">
                  <a href={`mailto:${personalInfo.email}`}>Contact Me</a>
                </Button>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center">
                <Star className="w-5 h-5 mr-2 text-primary drop-shadow" />
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {professionalSummary}
              </p>
            </section>

            <Separator className="my-8" />

            {/* Experience */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Building className="w-5 h-5 mr-2 text-primary" />
                Professional Experience
              </h3>
              <div className="relative pl-4 sm:pl-6 before:content-[''] before:absolute before:top-0 before:left-1 before:w-px before:h-full before:bg-border">
                {experience.map((job, index) => (
                  <div key={index} className="relative pb-10 last:pb-0 pl-2 sm:pl-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                        <div className="flex flex-wrap items-center text-muted-foreground text-xs gap-x-3 gap-y-1">
                          <span className="inline-flex items-center"><Building className="w-3.5 h-3.5 mr-1" />{job.company}</span>
                          <span className="inline-flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" />{job.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-1 sm:mt-0">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {job.period}
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/60">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            
            <Separator className="my-8" />

            {/* Projects Section */}
            <section className="mb-10">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <ShieldCheck className="w-5 h-5 mr-2 text-primary" />
                    Projects
                </h3>
                <div className="relative pl-4 sm:pl-6 before:content-[''] before:absolute before:top-0 before:left-1 before:w-px before:h-full before:bg-border">
                    {projects.map((project, index) => (
                        <div key={index} className="relative pb-10 last:pb-0 pl-2 sm:pl-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                                <div className="flex items-center text-xs text-muted-foreground mt-1 sm:mt-0">
                                    <Calendar className="w-3.5 h-3.5 mr-1" />
                                    {project.period}
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-1.5 my-2">
                                {project.technologies.map(tech => (
                                    <Badge key={tech} variant="secondary" className="text-[10px] tracking-wide uppercase rounded-md bg-muted/70 hover:bg-muted">{tech}</Badge>
                                ))}
                            </div>
                            <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-muted-foreground">
                                {project.details.map((detail, idx) => (
                                    <li key={idx} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/60">{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <Separator className="my-8" />

            {/* Education */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                Education
              </h3>
              <div className="relative pl-4 sm:pl-6 before:content-[''] before:absolute before:top-0 before:left-1 before:w-px before:h-full before:bg-border">
                {education.map((edu, index) => (
                  <div key={index} className="relative pb-10 last:pb-0 pl-2 sm:pl-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h4 className="text-base font-semibold text-foreground">{edu.degree}</h4>
                        <div className="flex flex-wrap items-center text-muted-foreground text-xs gap-x-3 gap-y-1">
                          <span className="inline-flex items-center"><Building className="w-3.5 h-3.5 mr-1" />{edu.school}</span>
                          <span className="inline-flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" />{edu.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-1 sm:mt-0">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Skills */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Code className="w-5 h-5 mr-2 text-primary" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-foreground mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-1">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-[10px] tracking-wide uppercase rounded-md bg-muted/70 hover:bg-muted">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Certifications & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <section>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Certifications
                </h3>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{cert}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-primary" />
                  Languages
                </h3>
                <ul className="space-y-2">
                  {languages.map((lang, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{lang}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Footer */}
            <footer className="mt-14 pt-8 border-t border-border/60 text-center">
              <p className="text-sm text-muted-foreground">
                References available upon request
              </p>
            </footer>
          </div>
        </div>
      </div>
      </div>{/* end container */}

      {/* Additional Actions */}
      <section className="py-16 bg-card print:hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in working together? I&apos;d love to discuss how my skills and experience 
              can contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
  </div>
  )
}