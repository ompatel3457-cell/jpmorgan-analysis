"use client"

import { BarChart3, TrendingUp, TrendingDown, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const financialRatios = [
  {
    category: "Profitability",
    metrics: [
      {
        name: "Net Profit Margin",
        value: "33.2%",
        trend: "up",
        interpretation: "JPMorgan maintains excellent profit margins, converting over a third of revenue into net income. This indicates strong operational efficiency and pricing power."
      },
      {
        name: "Return on Equity (ROE)",
        value: "15.8%",
        trend: "up",
        interpretation: "A healthy ROE demonstrates effective use of shareholder capital. Above the industry average of 10-12%, indicating superior profitability."
      },
      {
        name: "Return on Assets (ROA)",
        value: "1.2%",
        trend: "neutral",
        interpretation: "While seemingly low, this ROA is strong for banking. Banks typically have ROA of 1-2% due to high leverage and asset base."
      },
    ]
  },
  {
    category: "Per Share",
    metrics: [
      {
        name: "Earnings Per Share (EPS)",
        value: "$16.23",
        trend: "up",
        interpretation: "Strong EPS growth reflects consistent profitability and effective capital allocation, benefiting shareholders through increased earnings."
      },
    ]
  },
  {
    category: "Leverage",
    metrics: [
      {
        name: "Debt-to-Equity Ratio",
        value: "1.8x",
        trend: "neutral",
        interpretation: "Moderate leverage typical for major banks. Well-managed debt levels provide financial flexibility while maintaining regulatory compliance."
      },
    ]
  },
  {
    category: "Liquidity",
    metrics: [
      {
        name: "Current Ratio",
        value: "1.05",
        trend: "neutral",
        interpretation: "Adequate liquidity to meet short-term obligations. Banks typically operate with lower current ratios due to their business model."
      },
      {
        name: "Liquidity Coverage Ratio (LCR)",
        value: "112%",
        trend: "up",
        interpretation: "Exceeds the 100% regulatory requirement, indicating strong ability to withstand 30-day liquidity stress scenarios."
      },
    ]
  }
]

export function FinancialAnalysisSection() {
  return (
    <section id="analysis" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Financial Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Key Financial Ratios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive analysis of JPMorgan Chase&apos;s financial performance through critical metrics and ratios.
          </p>
        </div>

        {/* Ratios Grid */}
        <TooltipProvider>
          <div className="space-y-8">
            {financialRatios.map((category, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.category} Ratios
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.metrics.map((metric, j) => (
                    <Card key={j} className="group hover:shadow-md transition-all border-border/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                          {metric.name}
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="w-4 h-4 text-muted-foreground/50 hover:text-primary transition-colors" />
                            </TooltipTrigger>
                            <TooltipContent side="top" className="max-w-xs">
                              <p className="text-sm">{metric.interpretation}</p>
                            </TooltipContent>
                          </Tooltip>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2">
                          <span className="text-3xl font-bold text-foreground">{metric.value}</span>
                          {metric.trend === "up" && (
                            <TrendingUp className="w-5 h-5 text-accent" />
                          )}
                          {metric.trend === "down" && (
                            <TrendingDown className="w-5 h-5 text-destructive" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
                          {metric.interpretation}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TooltipProvider>

        {/* Summary Card */}
        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardContent className="p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Financial Health Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  JPMorgan Chase demonstrates strong financial fundamentals across all key metrics. 
                  The combination of industry-leading profitability ratios, conservative leverage, 
                  and robust liquidity positions the company well for sustained growth and resilience 
                  against economic headwinds.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
