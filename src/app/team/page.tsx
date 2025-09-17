"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ChevronDown, ChevronUp } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

// const allTeamMembers = [
//   {
//     name: "Dhruvil Chovatiya ",
//     role: "Software developer ",
//     experience: "1+",
//     department: "Development ",
//     bio: "",
//     image: "https://drive.google.com/thumbnail?id=1M9Oqw7sLfeQs-cdAQ6Yo1kPQZhcFz3-i",
//   },


// ];

const allTeamMembers = [
  {
    name: "Jaydeep Vachhani",
    role: "Chief Technology Officer",
  },

  {
    name: "Mayurkumar Pansheriya",
    role: "Managing Director",
  },
  {
    name: "Krishna Kachhad",
    role: "Software Developer",
    department: "Odoo, ERPnext",
    image: "https://drive.google.com/thumbnail?id=1i1uWV9qLJiRIGh94JYAaTmOcNaJFimDl"
  },

  {
    name: "Dhruvkumar Mashru",
    role: "Software Developer",
    department: "Odoo, ERPnext",
    image:  "https://drive.google.com/thumbnail?id=1M-CiH6Ipdfy41m8AG_T4bMO2ViQ4lWp5"
  },
  {
    name: "Meet Tank",
    role: "Software Developer",
    department: "Odoo, ERPnext",
     image: "https://drive.google.com/thumbnail?id=1t4bpbwR6NO91CvcXvuMiAl9KHl2dZ2QG"
  },
  {
    name: "Yashvi Kothiya",
    role: "Software Developer",
    department: "Odoo, ERPnext",
    image: "https://drive.google.com/thumbnail?id=1JcZyW4wc0cwRdMP3DTqSR12ulnwBWeqs"
  },
  {
    name: "Bhumika Siddhapura",
    role: "Software Developer",
    department: "Odoo, ERPnext",
  },
  {
    name: "Sagrika Dobariya",
    role: "Software Developer",
    department: "Odoo, ERPnext",
    image: "https://drive.google.com/thumbnail?id=1Tg6UREb1IbucC1pcV50uzciiVvJqI7Gj"
  },
  {
    name: "Prashant Panchani",
    role: "Software Developer",
    department: "Odoo, ERPnext",
    image:"https://drive.google.com/thumbnail?id=1M9Oqw7sLfeQs-cdAQ6Yo1kPQZhcFz3-i"
  },
  {
    name: "Mihir Mehta",
    role: "Software Developer",
    department: "Odoo, ERPnext",
     image: "https://drive.google.com/thumbnail?id=1AzkADLpVJeVr5S4WAlhdjz8uIDULu4Su"
  },
  {
    name: "Dhruvil Chovatiya",
    role: "Software Developer",
    department: "Odoo, ERPnext",
    image: "https://drive.google.com/thumbnail?id=1wyNYa6P7GZ52nOLq9M08Jbf_xOARJjtl"
  },
  {
    name: "Prince Senjaliya",
    role: "Software Developer",
    department: "Odoo, ERPnext",
  },
  {
    name: "Saloni Parmar",
    role: "Software Developer",
    department: "Full Stack Developer",
  },
  {
    name: "Krishna Hothi",
    role: "Software Developer",
    department: "Full Stack Developer",
  },
  {
    name: "Kishan Sachania",
    role: "Software Developer",
    department: "Full Stack Developer",
    image:"https://drive.google.com/thumbnail?id=12dx7nZdfdUFoxl8yRxT8M6EBQNo25I40"
  },
];

export default function TeamPage() {
  const [showAll, setShowAll] = useState(false);
  const [imageErrors, setImageErrors] = useState(new Set<string>());

  const visibleMembers = showAll ? allTeamMembers : allTeamMembers.slice(0, 3);

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
            Experienced professionals dedicated to your success. Our diverse
            team brings together expertise from technology, business, and
            customer success to deliver exceptional ERP solutions.
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
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our diverse team of experts is committed to delivering exceptional
              ERP solutions
            </p>

            {/* Department Filter */}
            {/* <div className="flex flex-wrap justify-center gap-2 mb-8">
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
            </div> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center border-border/50 hover:shadow-lg transition-all duration-500 hover:scale-105  hover:bg-gradient-to-br hover:from-[#591E4F] hover:via-[#A62985] hover:to-[#D9B0CE] hover:text-white group relative overflow-hidden"
              >
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500 overflow-hidden">
                    {member?.image && !imageErrors.has(member.name) ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full object-top"
                        onError={() => {
                          console.log("Image failed to load:", member?.image);
                          setImageErrors((prev) =>
                            new Set(prev).add(member.name)
                          );
                        }}
                        onLoad={() => {
                          console.log(
                            "Image loaded successfully:",
                            member.image
                          );
                        }}
                      />
                    ) : (
                      <Users className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-500" />
                    )}
                    {/* <Users className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-500" /> */}
                  </div>
                  <CardTitle className="text-lg group-hover:text-white transition-colors duration-500">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-secondary font-medium group-hover:text-white/90 transition-colors duration-500">
                    {member.role}
                  </CardDescription>
                  <Badge
                    variant="secondary"
                    className="w-fit mx-auto group-hover:bg-white/20 group-hover:text-white transition-colors duration-500"
                  >
                    {member.department}
                  </Badge>
                </CardHeader>
                <CardContent>
                  {/* <p className="text-sm text-muted-foreground mb-2 group-hover:text-white/90 transition-colors duration-500">
                    {member.experience} Years of Experience
                  </p>
                  <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors duration-500">
                    {member.bio}
                  </p> */}
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
  );
}
