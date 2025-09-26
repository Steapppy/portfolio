'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AnimatedBackground } from '@/components/3d/animated-background'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Calendar,
  Clock,
  Send,
  CheckCircle,
  Shield,
  Target,
  DatabaseZap,
  Linkedin,
  Phone,
} from 'lucide-react'

const contactMethods = [
  {
    title: 'Email',
    value: 'abdo.alouache123@gmail.com',
    icon: Mail,
    action: 'mailto:abdo.alouache123@gmail.com',
    primary: true,
  },
  {
    title: 'Phone',
    value: '+212 631653055',
    icon: Phone,
    action: 'tel:+212631653055',
    primary: false,
  },
  {
    title: 'Location',
    value: 'Rabat, Morocco',
    icon: MapPin,
    action: null,
    primary: false,
  },
]

const expertiseAreas = [
  {
    title: 'Active Directory Penetration Testing',
    description: 'Identifying and exploiting vulnerabilities within AD environments using tools like BloodHound, Impacket, and Mimikatz.',
    icon: Shield,
  },
  {
    title: 'Red Teaming & Post-Exploitation',
    description: 'Simulating advanced adversaries, leveraging C2 frameworks (Sliver), and maintaining persistence in compromised networks.',
    icon: Target,
  },
  {
    title: 'SIEM & Threat Intelligence',
    description: 'Enhancing detection capabilities by integrating CTI feeds with SIEMs like Wazuh and authoring custom detection rules.',
    icon: DatabaseZap,
  },
]

const faqItems = [
    {
        question: "What type of PFE internship are you looking for?",
        answer: "I am seeking a role in offensive security, such as a Red Team Operator, Penetration Tester, or Security Analyst, where I can apply my skills in network and Active Directory security."
    },
    {
        question: "What is your availability for an internship?",
        answer: "My PFE internship period is from February to June 2026, aligning with my expected graduation. I am available for a full-time commitment during this period and can start interviews immediately."
    },
    {
        question: "What are your key technical strengths?",
        answer: "My core strengths are in Active Directory penetration testing, post-exploitation techniques using C2 frameworks, and enhancing SIEM capabilities with threat intelligence. I am also proficient in Python and Rust for tooling."
    },
    {
        question: "Do you have practical, hands-on experience?",
        answer: "Yes. Beyond my academic projects, I have interned as a Red Team Engineer, managed a complex home lab for attack simulation, and conducted professional penetration tests."
    }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', projectType: 'internship' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }
  
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } },
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background relative overflow-x-hidden flex items-center justify-center">
        <div className="fixed top-0 left-0 w-full h-full -z-10"><AnimatedBackground /></div>
        <motion.div initial="hidden" animate="show" variants={FADE_UP_ANIMATION_VARIANTS} className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto text-center bg-card/50 backdrop-blur-lg border border-border p-8 rounded-xl">
            <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Message Sent Successfully!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              <Button variant="outline" asChild><Link href="/">Back to Home</Link></Button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10"><AnimatedBackground /></div>
      <div className="relative z-10">
        <motion.section initial="hidden" animate="show" variants={FADE_UP_ANIMATION_VARIANTS} className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 text-primary border-primary/30">Cybersecurity Engineering Student</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Let&apos;s Secure the Future, Together.
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                I am a final-year student actively seeking a challenging <strong>PFE internship</strong> to apply my practical offensive security skills in a professional setting.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={FADE_UP_ANIMATION_VARIANTS} className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="bg-card/50 backdrop-blur-lg border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl">Get in Touch</CardTitle>
                      <CardDescription>
                        Have an internship opportunity or a question? Please fill out the form.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your full name" />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="your.email@example.com" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium mb-2">Inquiry Type</label>
                          <select id="projectType" name="projectType" value={formData.projectType} onChange={handleInputChange} className="w-full px-3 py-2 border border-input bg-background rounded-md">
                            <option value="internship">PFE Internship Opportunity</option>
                            <option value="collaboration">Collaboration Proposal</option>
                            <option value="general">General Question</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                          <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Brief description of your inquiry" />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                          <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder="Please provide details about the opportunity..." />
                        </div>
                        <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-400 hover:to-rose-400 text-white" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" /> Submitting...</>
                          ) : (
                            <><Send className="w-4 h-4 mr-2" /> Send Message</>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-8">
                  {[...Array(3)].map((_, i) => <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={{...FADE_UP_ANIMATION_VARIANTS, show: {...FADE_UP_ANIMATION_VARIANTS.show, transition: { ...FADE_UP_ANIMATION_VARIANTS.show.transition, delay: i * 0.1 }}}}>
                    {i === 0 && <Card className="bg-card/50 backdrop-blur-lg border-border/50">
                        <CardHeader><CardTitle>Contact Information</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                        {contactMethods.map((method) => (
                            <div key={method.title} className="flex items-start">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${method.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                <method.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold">{method.title}</h4>
                                {method.action ? (
                                <Link href={method.action} className="text-sm text-primary hover:underline">{method.value}</Link>
                                ) : (
                                <p className="text-sm text-muted-foreground">{method.value}</p>
                                )}
                            </div>
                            </div>
                        ))}
                        </CardContent>
                    </Card>}
                    {i === 1 && <Card className="bg-card/50 backdrop-blur-lg border-border/50">
                        <CardHeader><CardTitle>Professional Profile</CardTitle></CardHeader>
                        <CardContent>
                        <Button variant="outline" className="w-full justify-start" asChild>
                            <Link href="https://linkedin.com/in/abdelmoula-alouache" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4 mr-2" /> LinkedIn Profile
                            </Link>
                        </Button>
                        </CardContent>
                    </Card>}
                    {i === 2 && <Card className="bg-card/50 backdrop-blur-lg border-border/50">
                        <CardHeader><CardTitle>Key Expertise</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                        {expertiseAreas.map((service) => (
                            <div key={service.title} className="flex items-start">
                            <service.icon className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-sm">{service.title}</h4>
                                <p className="text-xs text-muted-foreground">{service.description}</p>
                            </div>
                            </div>
                        ))}
                        </CardContent>
                    </Card>}
                    </motion.div>)}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={FADE_UP_ANIMATION_VARIANTS} className="py-16 bg-card/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}