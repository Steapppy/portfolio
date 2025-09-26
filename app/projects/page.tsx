import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Github, Calendar, Clock, Code, Target, ShieldAlert, Hammer } from 'lucide-react'
import { AnimatedBackground } from '@/components/3d/animated-background'

export const metadata: Metadata = {
  title: 'Projects | Alouache Abdelmoula - Cybersecurity Engineer',
  description: 'A portfolio of my cybersecurity projects, demonstrating practical skills in red teaming, tool development, and threat intelligence.',
}

const projects = [
  {
    id: 'homelab-pentest',
    title: 'Home Lab & Professional Penetration Testing Engagements',
    description: 'Established a virtualized Active Directory lab to execute advanced attacks and utilized C2 frameworks for post-exploitation.',
    image: null,
    imageGradient: 'from-red-500 to-rose-600',
    tags: ['Proxmox', 'Active Directory', 'BloodHound', 'Sliver C2', 'Burp Suite', 'Pentesting'],
    category: 'Red Teaming',
    status: 'Ongoing',
    timeline: 'Continuous',
    year: '2024 - Present',
    client: 'Personal Lab & Engagements',
    featured: true,
    links: [{ type: 'document', url: '#' }],
  },
  {
    id: 'rust-c2-framework',
    title: 'Rust-based Remote Agent Framework',
    description: 'Building a custom command & control (C2) agent in Rust to research memory-safe offensive tooling and asynchronous communication.',
    image: null,
    imageGradient: 'from-orange-500 to-amber-600',
    tags: ['Rust', 'Tokio', 'C2 Framework', 'Asynchronous API', 'Memory Safety', 'Offensive Security'],
    category: 'Tool Development',
    status: 'In Progress',
    timeline: 'Ongoing Research',
    year: '2024 - Present',
    client: 'Personal Research',
    featured: true,
    links: [{ type: 'document', url: '#' }],
  },
  {
    id: 'siem-cti-integration',
    title: 'SIEM Enhancement with Cyber Threat Intelligence',
    description: 'Engineered custom detection rules and decoders for Wazuh SIEM to identify advanced threats by integrating CTI feeds for proactive threat hunting.',
    image: null,
    imageGradient: 'from-blue-500 to-cyan-600',
    tags: ['Wazuh (SIEM)', 'VirusTotal API', 'Python', 'Sigma/YARA', 'Threat Hunting', 'Linux'],
    category: 'Threat Intelligence',
    status: 'Completed',
    timeline: '3 months',
    year: '2025',
    client: 'Academic Project',
    featured: true,
    links: [{ type: 'document', url: '#' }],
  },
  {
    id: 'search-project',
    title: 'Search (HTB)— Project Report',
    description: 'Internal penetration test of the “Search” environment to evaluate internal Active Directory security and identify attack paths to domain compromise.',
    image: null,
    imageGradient: 'from-purple-500 to-indigo-600',
    tags: ['Active Directory', 'Kerberos', 'SMB', 'BloodHound', 'Impacket'],
    category: 'Red Teaming',
    status: 'Completed',
    timeline: '3 days',
    year: '2025',
    client: 'Internal Assessment',
    featured: true,
    links: [{ type: 'document', url: 'https://drive.google.com/file/d/1ilfc2eiaBoHSfVz4DkGuKkyRlK6qfqUX/view?usp=drive_link' }],
  },
  {
    id: 'puppet-project',
    title: 'Puppet (Vulnlab)— Project Report',
    description: 'Internal penetration test focused on an environment using Puppet (configuration management) to determine whether automation tooling and infrastructure could be abused for lateral movement and domain takeover.',
    image: null,
    imageGradient: 'from-green-500 to-teal-600',
    tags: ['Puppet', 'Sliver C2', 'Mimikatz', 'BloodHound', 'Privilege Escalation'],
    category: 'Tool Development',
    status: 'Completed',
    timeline: '3 days',
    year: '2025',
    client: 'Internal Assessment',
    featured: true,
    links: [{ type: 'document', url: 'https://drive.google.com/file/d/1LgfUEDni6Gw12uMM7fWeN2xwY1z-uDaF/view?usp=drive_link' }],
  },
  {
    id: 'htb-office',
    title: 'Medium — HTB Office Walkthrough',
    description: 'A write-up / walkthrough of a Hack The Box Active Directory exercise called Office. The post documents the author’s step-by-step offensive workflow from recon to full domain compromise and explains several real-world AD techniques.',
    image: null,
    imageGradient: 'from-yellow-500 to-amber-600',
    tags: ['Hack The Box', 'Active Directory', 'Kerberos', 'GPO Abuse', 'Credential Extraction'],
    category: 'Threat Intelligence',
    status: 'Completed',
    timeline: 'N/A',
    year: '2025',
    client: 'Personal Project',
    featured: true,
    links: [{ type: 'document', url: 'https://medium.com/@abdo.alouache123/htb-office-walkthrough-9f1a2638027f' }],
  },
]

const categories = ['All', 'Red Teaming', 'Tool Development', 'Threat Intelligence']

const getProjectIcon = (category: string) => {
  switch (category) {
    case 'Red Teaming':
      return <Target className="w-8 h-8" />
    case 'Tool Development':
      return <Hammer className="w-8 h-8" />
    case 'Threat Intelligence':
      return <ShieldAlert className="w-8 h-8" />
    default:
      return <Code className="w-8 h-8" />
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Red Teaming':
      return <Target className="w-4 h-4" />
    case 'Tool Development':
      return <Hammer className="w-4 h-4" />
    case 'Threat Intelligence':
      return <ShieldAlert className="w-4 h-4" />
    default:
      return <Code className="w-4 h-4" />
  }
}

export default function ProjectsPage() {
  const getLinkDetails = (type: string) => {
    switch (type) {
      case 'github':
        return { text: 'View on GitHub', icon: <Github className="w-4 h-4" /> }
      default:
        return {
          text: 'View Report',
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h4m-2 8h6a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          ),
        }
    }
  }

  const categoryCounts: Record<string, number> = Object.fromEntries(
    categories.map((c) => [
      c,
      c === 'All' ? projects.length : projects.filter((p) => p.category === c).length,
    ])
  )

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Cybersecurity Projects
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A showcase of my hands-on work in offensive security. These projects reflect my passion for building tools, simulating threats, and enhancing defensive capabilities.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="text-sm">
                  {projects.length} Hands-On Projects
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Offensive Security Focus
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Practical Application
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="All" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="h-auto rounded-full bg-background/50 supports-[backdrop-filter]:bg-background/60 backdrop-blur border border-primary/10 shadow-sm p-1 gap-1">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all
                               hover:text-foreground hover:bg-background/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30
                               data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-primary/20"
                    >
                      <span className="flex items-center gap-2">
                        <span className="opacity-80">{getCategoryIcon(category)}</span>
                        <span>{category}</span>
                        <span
                          className="ml-1 inline-flex items-center justify-center text-[10px] font-semibold px-2 py-0.5 rounded-full
                                     bg-primary/10 text-primary group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground"
                        >
                          {categoryCounts[category]}
                        </span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects
                      .filter((project) => category === 'All' || project.category === category)
                      .map((project) => (
                        <Card key={project.id} className="flex flex-col overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                          <div className="relative overflow-hidden">
                            <div className={`w-full h-60 bg-gradient-to-br ${project.imageGradient} flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300 relative`}>
                              <div className="text-white text-center p-4 z-10">
                                <div className="mb-3 opacity-80">
                                  {getProjectIcon(project.category)}
                                </div>
                                <h3 className="font-bold text-base mb-1 line-clamp-2">{project.title}</h3>
                                <p className="text-xs opacity-80">{project.category}</p>
                              </div>
                              <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                            <div className="absolute top-4 left-4">
                              <Badge
                                variant={project.status === 'Completed' ? 'default' : 'secondary'}
                                className="text-xs"
                              >
                                {project.status}
                              </Badge>
                            </div>
                          </div>

                          <div className="flex flex-col flex-grow">
                            <CardHeader>
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {project.category}
                                </Badge>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {project.year}
                                </div>
                              </div>
                              <CardTitle className="text-xl">{project.title}</CardTitle>
                              <CardDescription className="text-sm">
                                {project.description}
                              </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-grow">
                              <div className="mb-4">
                                <div className="flex items-center text-xs text-muted-foreground mb-2">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {project.timeline}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Type: {project.client}
                                </p>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {project.tags.slice(0, 4).map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                                {project.tags.length > 4 && (
                                  <Badge variant="secondary" className="text-xs">
                                    +{project.tags.length - 4}
                                  </Badge>
                                )}
                              </div>
                            </CardContent>

                            <CardFooter className="flex-wrap gap-x-4 gap-y-2 border-t pt-4 mt-auto">
                              {project.links && project.links.length > 0 ? (
                                project.links.map((link) => {
                                  const details = getLinkDetails(link.type)
                                  const isPlaceholder = !link.url || link.url === '#'
                                  if (isPlaceholder) {
                                    // Render disabled label when the URL is missing or just a placeholder
                                    return (
                                      <div
                                        key={link.type}
                                        className="inline-flex items-center text-sm font-medium text-muted-foreground opacity-60 cursor-not-allowed"
                                        aria-disabled={true}
                                        title="No public document available"
                                      >
                                        {details.icon}
                                        <span className="ml-2">{details.text}</span>
                                      </div>
                                    )
                                  }

                                  return (
                                    <Link
                                      key={link.type}
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                                    >
                                      {details.icon}
                                      <span className="ml-2">{details.text}</span>
                                    </Link>
                                  )
                                })
                              ) : (
                                <p className="text-sm text-muted-foreground italic">No public links available.</p>
                              )}
                            </CardFooter>
                          </div>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Interested in My Work?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s connect. I&apos;m actively seeking internship opportunities where I can contribute my skills and continue to learn from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/experience">View My Experience</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}