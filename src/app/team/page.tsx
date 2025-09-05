"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, ChevronDown, ChevronUp } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const allTeamMembers = [
  { 
    name: "Sarah Johnson", 
    role: "CEO & Founder", 
    experience: "15+ years in ERP solutions",
    department: "Leadership",
    bio: "Visionary leader with extensive experience in enterprise software and business transformation."
  },
  { 
    name: "Michael Chen", 
    role: "CTO", 
    experience: "12+ years in enterprise software",
    department: "Technology",
    bio: "Technology expert focused on scalable architecture and innovative solutions."
  },
  { 
    name: "Emily Rodriguez", 
    role: "Head of Implementation", 
    experience: "10+ years in project management",
    department: "Operations",
    bio: "Implementation specialist ensuring smooth ERP deployments and client success."
  },
  { 
    name: "David Kim", 
    role: "Lead Developer", 
    experience: "8+ years in ERP development",
    department: "Engineering",
    bio: "Full-stack developer passionate about creating robust and user-friendly ERP systems."
  },
  { 
    name: "Lisa Thompson", 
    role: "Customer Success Manager", 
    experience: "7+ years in client relations",
    department: "Customer Success",
    bio: "Dedicated to ensuring client satisfaction and long-term success with our solutions."
  },
  { 
    name: "James Wilson", 
    role: "Security Architect", 
    experience: "9+ years in cybersecurity",
    department: "Security",
    bio: "Security expert ensuring enterprise-grade protection for all our systems and data."
  },
  { 
    name: "Maria Garcia", 
    role: "UX/UI Designer", 
    experience: "6+ years in user experience design",
    department: "Design",
    bio: "Creative designer focused on creating intuitive and engaging user interfaces."
  },
  { 
    name: "Alex Turner", 
    role: "Data Analyst", 
    experience: "5+ years in business intelligence",
    department: "Analytics",
    bio: "Data specialist helping clients make informed decisions through advanced analytics."
  },
  { 
    name: "Rachel Brown", 
    role: "Marketing Director", 
    experience: "8+ years in B2B marketing",
    department: "Marketing",
    bio: "Marketing strategist driving growth and brand awareness in the ERP space."
  }
]

export default function TeamPage() {
  const [showAll, setShowAll] = useState(false)
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  
  const departments = ["All", ...Array.from(new Set(allTeamMembers.map(member => member.department)))]
  const visibleMembers = showAll ? allTeamMembers : allTeamMembers.slice(0, 3)
  const filteredMembers = selectedDepartment === "All" 
    ? visibleMembers 
    : visibleMembers.filter(member => member.department === selectedDepartment)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Meet Our Team
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Our <span className="text-primary">Expert Team</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Experienced professionals dedicated to your success. Our diverse team brings together expertise from technology, business, and customer success to deliver exceptional ERP solutions.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our diverse team of experts is committed to delivering exceptional ERP solutions
            </p>
            
            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept)}
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:rotate-1 hover:bg-gradient-to-br hover:from-[#591E4F] hover:via-[#A62985] hover:to-[#D9B0CE] hover:text-white group relative overflow-hidden">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                    <Users className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-white transition-colors duration-500">{member.name}</CardTitle>
                  <CardDescription className="text-secondary font-medium group-hover:text-white/90 transition-colors duration-500">{member.role}</CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
                    {member.department}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2 group-hover:text-white/90 transition-colors duration-500">{member.experience}</p>
                  <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors duration-500">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dive More Button */}
          {!showAll && (
            <div className="text-center mt-12">
              <Button 
                onClick={() => setShowAll(true)}
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Dive More
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Show Less Button */}
          {showAll && (
            <div className="text-center mt-12">
              <Button 
                onClick={() => setShowAll(false)}
                variant="outline"
                size="lg"
              >
                Show Less
                <ChevronUp className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team CTA */}
      {/* <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We&apos;re always looking for talented individuals to join our growing team. 
            Explore career opportunities and be part of our mission to transform businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Submit Resume
            </Button>
          </div>
        </div>
      </section> */}
      
      <Footer />
    </div>
  )
}
