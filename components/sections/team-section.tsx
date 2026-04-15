"use client"

import { Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Krupa Patel",
    role: "Financial Analysis & CAPM",
  },
  {
    name: "Om Patel",
    role: "DCF Valuation & WACC",
  },
  {
    name: "Vishal Sharma",
    role: "Monte Carlo & Prophet Forecasting",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Group Members
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            DAB401 Final Group Project - Financial Modeling & Valuation
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, i) => (
            <Card key={i} className="group hover:shadow-lg transition-all border-border/50 text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
