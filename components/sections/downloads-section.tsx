"use client"

import { Download, FileSpreadsheet, FileCode, FileText, Presentation } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const downloads = [
  {
    icon: FileSpreadsheet,
    title: "Excel Model",
    description: "Complete financial model with all calculations, ratios, and data tables.",
    filename: "JPM_Financial_Model.xlsx",
    size: "2.4 MB",
    color: "bg-chart-2"
  },
  {
    icon: FileCode,
    title: "Python Notebook",
    description: "Jupyter notebook with Monte Carlo simulation and Prophet forecasting code.",
    filename: "JPM_Analysis.ipynb",
    size: "1.8 MB",
    color: "bg-chart-1"
  },
  {
    icon: FileText,
    title: "PDF Report",
    description: "Full written analysis report with executive summary and recommendations.",
    filename: "JPM_Analysis_Report.pdf",
    size: "4.2 MB",
    color: "bg-chart-4"
  },
  {
    icon: Presentation,
    title: "Presentation Slides",
    description: "PowerPoint presentation ready for academic submission or business presentation.",
    filename: "JPM_Presentation.pptx",
    size: "8.6 MB",
    color: "bg-chart-3"
  },
]

export function DownloadsSection() {
  return (
    <section id="downloads" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Download className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Download Project Files
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Access all project materials including the financial model, code, report, and presentation.
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloads.map((item, i) => (
            <Card key={i} className="group hover:shadow-lg transition-all border-border/50 overflow-hidden">
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-xl ${item.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 text-foreground`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>{item.filename}</span>
                  <span>{item.size}</span>
                </div>
                <Button className="w-full" variant="outline" disabled>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Note: Download functionality is simulated for this demo project. 
          In production, these would link to actual downloadable files.
        </p>
      </div>
    </section>
  )
}
