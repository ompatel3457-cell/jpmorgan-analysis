"use client"

import { Target, TrendingUp, Shield, AlertTriangle, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const analysisFactors = [
  {
    icon: TrendingUp,
    title: "Strong Profitability",
    description: "Industry-leading ROE of 15.8% and net profit margin of 33.2% demonstrate exceptional operational efficiency.",
    sentiment: "positive"
  },
  {
    icon: Shield,
    title: "Low Beta Risk",
    description: "Beta of 0.81 indicates defensive characteristics with 19% less volatility than the market average.",
    sentiment: "positive"
  },
  {
    icon: CheckCircle,
    title: "Robust Capital Position",
    description: "Strong liquidity ratios and conservative leverage ensure resilience against economic downturns.",
    sentiment: "positive"
  },
  {
    icon: AlertTriangle,
    title: "DCF Limitation",
    description: "Traditional valuation methods yield unreliable results due to negative free cash flows typical in banking.",
    sentiment: "neutral"
  },
]

export function RecommendationSection() {
  return (
    <section id="conclusion" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Investment Decision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Final Recommendation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Based on comprehensive financial analysis, valuation models, and risk assessment.
          </p>
        </div>

        {/* Main Recommendation Card */}
        <Card className="mb-12 border-2 border-primary/30 bg-primary/5">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-chart-5/20 mb-6">
                <span className="text-4xl font-bold text-chart-5">HOLD</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Recommendation: HOLD Position
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                JPMorgan Chase demonstrates strong fundamentals and defensive characteristics, 
                making it suitable for long-term portfolio holdings. However, the current valuation 
                appears fairly priced, limiting immediate upside potential.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Decision Framework */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-accent/30 bg-accent/5">
            <CardHeader>
              <CardTitle className="text-accent text-center">BUY Signal</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Price drops below $280 (10% discount)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Dividend yield exceeds 3%
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Market-wide correction opportunity
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-chart-5/50 bg-chart-5/10 border-2">
            <CardHeader>
              <CardTitle className="text-chart-5 text-center">HOLD Signal</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-5 mt-0.5 flex-shrink-0" />
                  <span>Strong profitability metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-5 mt-0.5 flex-shrink-0" />
                  <span>Fair market valuation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-5 mt-0.5 flex-shrink-0" />
                  <span>Stable dividend payments</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-destructive text-center">SELL Signal</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  Price exceeds $350 (12%+ premium)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  Significant regulatory concerns
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  Material deterioration in ratios
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Factors */}
        <h3 className="text-xl font-semibold text-foreground mb-6">Key Analysis Factors</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {analysisFactors.map((factor, i) => (
            <Card key={i} className="border-border/50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    factor.sentiment === "positive" ? "bg-accent/10" : "bg-muted"
                  }`}>
                    <factor.icon className={`w-6 h-6 ${
                      factor.sentiment === "positive" ? "text-accent" : "text-muted-foreground"
                    }`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{factor.title}</h4>
                    <p className="text-sm text-muted-foreground">{factor.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
