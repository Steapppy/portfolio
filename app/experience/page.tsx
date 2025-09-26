import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatedBackground } from '@/components/3d/animated-background'
import { 
  Calendar, 
  MapPin, 
  Building, 
  Code, 
  Users, 
  Award,
  ExternalLink,
  Download,
  ShieldCheck,
  Network,
  KeyRound,
  FileCode,
  Globe
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Experience | Alouache Abdelmoula - Cybersecurity Engineer',
  description: 'Explore my professional experience, education, and certifications in cybersecurity, red teaming, and penetration testing.',
}

const workExperience = [
  {
    title: 'Red Team Engineer Intern',
    company: 'EncryptEdge Labs',
    location: 'Remote',
    period: 'Dec 2024 - Feb 2025',
    type: 'Internship',
    description: 'Conducted simulated attacks on enterprise networks to identify and report security vulnerabilities, with a primary focus on Active Directory environments.',
    achievements: [
      'Executed penetration tests focusing on Active Directory security.',
      'Utilized Command & Control (C2) frameworks like Sliver for post-exploitation and persistence.',
      'Authored comprehensive penetration test reports detailing findings, risk assessments, and remediation strategies.',
      'Gained practical experience in adversary simulation and offensive security tactics.',
    ],
    technologies: ['Active Directory', 'Sliver C2', 'Penetration Testing', 'Post-Exploitation', 'Reporting'],
  },
  {
    title: 'Cybersecurity & Infrastructure Engineer Intern',
    company: 'MCPharma',
    location: 'Bouskoura, Morocco',
    period: 'Jun 2025 - Aug 2025',
    type: 'Internship',
    description: 'Assisted in monitoring critical IT infrastructure and supported the deployment and security assessment of a new Active Directory environment.',
    achievements: [
      'Monitored IT infrastructure performance and security using Zabbix.',
      'Participated in the migration and deployment of a new Active Directory environment.',
      'Conducted an internal penetration test on the newly deployed Active Directory to identify initial risks.',
      'Contributed to enhancing the overall security posture of the corporate network.',
    ],
    technologies: ['Zabbix', 'Active Directory', 'Infrastructure Security', 'Internal Penetration Testing'],
  },
]

const education = [
  {
    degree: 'Cybersecurity Engineering Degree',
    school: 'National Institute of Posts and Telecommunications (INPT)',
    location: 'Rabat, Morocco',
    period: '2023 - 2026',
    status: 'Current',
    description: 'Specializing in network security, ethical hacking, and defensive strategies to build a comprehensive understanding of modern cybersecurity challenges.',
    achievements: [
      'Focused on practical, hands-on labs for offensive and defensive security.',
      'Engaged in projects involving secure coding, network analysis, and vulnerability assessment.',
      'Actively seeking a PFE internship in offensive security.',
    ],
    coursework: ['Network Security', 'Cryptography', 'Ethical Hacking', 'Secure Coding', 'Digital Forensics', 'Risk Management'],
  },
  {
    degree: 'Preparatory Classes for Engineering Schools (CPGE)',
    school: 'Lycée Reda Slaoui',
    location: 'Agadir, Morocco',
    period: '2021 - 2023',
    status: 'Completed',
    description: 'Intensive two-year program focused on Mathematics and Physics, providing a strong analytical foundation for engineering studies.',
    achievements: [
      'Developed advanced problem-solving and critical-thinking skills.',
      'Successfully passed national competitive exams to enter a top engineering school (INPT).',
    ],
    coursework: ['Advanced Mathematics', 'Physics', 'Computer Science Fundamentals'],
  },
]

const certifications = [
  {
    title: 'Certified Red Team Analyst (CRTA)',
    issuer: 'CyberWarfare Labs',
    date: '2025',
    description: 'Hands-on certification focused on real-world red teaming tactics, techniques, and procedures (TTPs).',
  },
  {
    title: 'Practical Network Penetration Tester (PNPT)',
    issuer: 'TCM Security',
    date: 'In Progress',
    description: 'A practical certification that assesses the ability to perform a professional-level network penetration test from start to finish.',
  },
]

const skills = {
  technical: {
    "Penetration Testing": ['Internal Network Attacks', 'Privilege Escalation', 'Lateral Movement'],
    "Active Directory Security": ['BloodHound', 'Mimikatz', 'Impacket', 'Kerberoasting', 'NTLM Relay'],
    "Network Security": ['Wireshark', 'TCP/IP', 'VLAN Attacks', 'Network Sniffing'],
    "Web Application Security": ['Burp Suite', 'OWASP Top 10', 'SQL Injection', 'XSS'],
    "Programming Languages": ['Python', 'Rust', 'Java'],
  },
  soft: [
    'Critical Thinking', 'Problem-Solving', 'Communication', 'Creativity', 'Adaptability', 'Report Writing'
  ],
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>
      
      <div className="relative z-10">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Professional Background
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                An overview of my journey in cybersecurity, from rigorous academic training to hands-on experience in real-world offensive security engagements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/resume">
                    <Download className="w-4 h-4 mr-2" />
                    View Resume
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="experience" className="w-full">
                <div className="flex justify-center mb-12">
                  <TabsList className="grid w-full max-w-md grid-cols-4">
                    <TabsTrigger value="experience">Work</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="certifications">Certs</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="experience">
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
                    {workExperience.map((job, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div>
                              <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                                <div className="flex items-center"><Building className="w-4 h-4 mr-1.5" />{job.company}</div>
                                <div className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" />{job.location}</div>
                                <div className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" />{job.period}</div>
                              </div>
                            </div>
                            <Badge variant="secondary" className="flex-shrink-0">{job.type}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-muted-foreground">{job.description}</p>
                          <div>
                            <h4 className="font-semibold mb-3">Key Achievements</h4>
                            <ul className="space-y-2 text-sm">
                              {job.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-[7px] flex-shrink-0" />
                                  <span className="text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Skills & Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech) => (<Badge key={tech} variant="secondary">{tech}</Badge>))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="education">
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
                    {education.map((edu, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className="pb-4">
                           <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div>
                              <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                                <div className="flex items-center"><Building className="w-4 h-4 mr-1.5" />{edu.school}</div>
                                <div className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" />{edu.location}</div>
                                <div className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" />{edu.period}</div>
                              </div>
                            </div>
                            <Badge variant={edu.status === 'Current' ? 'default' : 'secondary'} className="flex-shrink-0">{edu.status}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-muted-foreground">{edu.description}</p>
                          <div>
                            <h4 className="font-semibold mb-3">Highlights</h4>
                            <ul className="space-y-2 text-sm">
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-[7px] flex-shrink-0" />
                                  <span className="text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course) => (<Badge key={course} variant="outline">{course}</Badge>))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="certifications">
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {certifications.map((cert, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex-1 pr-4">
                                <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                                <div className="flex items-center text-sm text-muted-foreground mb-2"><Award className="w-4 h-4 mr-1.5" />{cert.issuer}</div>
                                <div className="flex items-center text-sm text-muted-foreground"><Calendar className="w-4 h-4 mr-1.5" />{cert.date}</div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent><p className="text-sm text-muted-foreground">{cert.description}</p></CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="skills">
                  <div className="space-y-12">
                    <h2 className="text-3xl font-bold text-center mb-8">Skills & Competencies</h2>
                    <div>
                      <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(skills.technical).map(([category, skillList]) => (
                          <Card key={category}>
                            <CardHeader><CardTitle className="text-base">{category}</CardTitle></CardHeader>
                            <CardContent>
                              <div className="flex flex-wrap gap-2">
                                {skillList.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                     <div>
                      <h3 className="text-2xl font-bold text-center mb-8">Soft Skills</h3>
                      <div className="flex flex-wrap justify-center gap-3">
                        {skills.soft.map((skill) => <Badge key={skill} variant="outline" className="text-md py-1 px-3">{skill}</Badge>)}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Bolster Your Security Team?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                With a strong foundation in offensive security and proven hands-on experience, I am ready to contribute to your team's success and help secure your digital assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Discuss an Opportunity
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/resume">
                    View My Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}