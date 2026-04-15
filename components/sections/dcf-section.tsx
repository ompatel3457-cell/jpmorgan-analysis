"use client"

import { DollarSign, AlertTriangle, Calculator, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const dcfInputs = [
  { label: "Free Cash Flow (FCF)", value: "-$147,782,000", note: "Negative due to banking operations" },
  { label: "Growth Rate (g)", value: "5%", note: "Assumed perpetual growth" },
  { label: "Discount Rate (WACC)", value: "12.7%", note: "Weighted average cost of capital" },
  { label: "Terminal Value", value: "N/A", note: "Cannot calculate with negative FCF" },
]

export function DCFSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Valuation Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            DCF Valuation Analysis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discounted Cash Flow analysis and its limitations for financial institutions.
          </p>
        </div>

        {/* DCF Formula */}
        <Card className="mb-8 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              DCF Formula (Gordon Growth Model)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 rounded-xl p-6">
              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-4">Intrinsic Value</p>
                <p className="text-2xl font-mono font-bold text-foreground">
                  {"V = FCF × (1 + g) / (r - g)"}
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Where: V = Intrinsic Value, FCF = Free Cash Flow, g = Growth Rate, r = Discount Rate
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* DCF Inputs */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Model Inputs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dcfInputs.map((input, i) => (
                  <div key={i} className="flex justify-between items-start p-4 rounded-lg bg-muted/30">
                    <div>
                      <span className="font-medium text-foreground">{input.label}</span>
                      <p className="text-sm text-muted-foreground">{input.note}</p>
                    </div>
                    <span className={`text-lg font-semibold ${input.value.includes("-") ? "text-destructive" : "text-primary"}`}>
                      {input.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Market Comparison */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Market Price Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center p-6 rounded-xl bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Current Market Price</p>
                  <p className="text-4xl font-bold text-foreground">$311.91</p>
                  <p className="text-sm text-muted-foreground mt-2">As of latest trading session</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-accent/10 text-center">
                    <p className="text-sm text-muted-foreground mb-1">52-Week High</p>
                    <p className="text-xl font-semibold text-foreground">$338.67</p>
                  </div>
                  <div className="p-4 rounded-lg bg-destructive/10 text-center">
                    <p className="text-sm text-muted-foreground mb-1">52-Week Low</p>
                    <p className="text-xl font-semibold text-foreground">$197.23</p>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Market Cap</span>
                    <span className="font-semibold text-foreground">$680B+</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* DCF Limitation Alert */}
        <Alert className="bg-amber-500/10 border-amber-500/30">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          <AlertTitle className="text-foreground">DCF Limitation for Banks</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            <p className="mb-4">
              Traditional DCF models are <strong className="text-foreground">not ideal for valuing banks</strong> due to several unique characteristics:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-foreground">Negative Free Cash Flow:</strong> Banks often report negative FCF because their primary operations involve lending deposits, which shows as cash outflow.</li>
              <li><strong className="text-foreground">Debt as Operating Asset:</strong> For banks, debt (deposits) is an operating item, not a financing item, making traditional FCF calculations misleading.</li>
              <li><strong className="text-foreground">Regulatory Capital Requirements:</strong> Banks must maintain specific capital ratios, affecting how they deploy cash.</li>
              <li><strong className="text-foreground">Alternative Methods Preferred:</strong> Dividend Discount Model (DDM) or Residual Income Model are better suited for bank valuation.</li>
            </ul>
          </AlertDescription>
        </Alert>

        {/* Conclusion Card */}
        <Card className="mt-8 border-border/50">
          <CardContent className="p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Valuation Conclusion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While the DCF model produces unreliable results for JPMorgan due to negative free cash flows,
                  the market price of $311.91 reflects investor confidence in the bank&apos;s strong fundamentals,
                  diversified business model, and consistent dividend payments. Alternative valuation methods
                  suggest the stock is fairly valued relative to peers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
