"use client"

import { Building2, Globe, Users, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const companyInfo = [
  {
    icon: Building2,
    title: "Founded & Merged",
    description: "JPMorgan Chase was formed in 2000 through the merger of J.P. Morgan & Co. and Chase Manhattan Corporation, combining over 200 years of banking heritage."
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Led by Jamie Dimon as Chairman and CEO since 2005, guiding the company through economic challenges and establishing it as a global financial leader."
  },
  {
    icon: Globe,
    title: "Global Presence",
    description: "Operating in over 100 countries with approximately 300,000 employees worldwide, serving millions of consumers, businesses, and institutions."
  },
  {
    icon: Briefcase,
    title: "Business Model",
    description: "Diversified across Consumer Banking, Corporate & Investment Banking, Commercial Banking, and Asset & Wealth Management segments."
  }
]

const businessSegments = [
  { name: "Consumer & Community Banking", percentage: 45, color: "bg-chart-1" },
  { name: "Corporate & Investment Bank", percentage: 35, color: "bg-chart-2" },
  { name: "Commercial Banking", percentage: 12, color: "bg-chart-3" },
  { name: "Asset & Wealth Management", percentage: 8, color: "bg-chart-4" },
]

export function CompanySection() {
  return (
    <section id="company" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Company Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Understanding JPMorgan Chase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"The world's most valuable bank by market capitalization, with a legacy spanning over two centuries of financial innovation."}
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {companyInfo.map((item, i) => (
            <Card key={i} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Business Segments */}
        <Card className="border-border/50">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Revenue Distribution by Segment</h3>
            <div className="space-y-4">
              {businessSegments.map((segment, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{segment.name}</span>
                    <span className="text-sm text-muted-foreground">{segment.percentage}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${segment.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${segment.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Facts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {[
            { value: "1799", label: "Founded" },
            { value: "$3.9T", label: "Total Assets" },
            { value: "300K+", label: "Employees" },
            { value: "100+", label: "Countries" },
          ].map((fact, i) => (
            <div key={i} className="text-center p-6 rounded-xl bg-muted/50">
              <div className="text-3xl font-bold text-foreground mb-1">{fact.value}</div>
              <div className="text-sm text-muted-foreground">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
