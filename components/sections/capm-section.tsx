"use client"

import { TrendingUp, Shield, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Scatter,
  ScatterChart,
  ZAxis,
} from "recharts"

const smlData = [
  { beta: 0, return: 4.5, name: "Risk-Free" },
  { beta: 0.5, return: 7.75, name: "" },
  { beta: 0.81, return: 9.78, name: "JPM" },
  { beta: 1.0, return: 11.0, name: "Market" },
  { beta: 1.5, return: 14.25, name: "" },
  { beta: 2.0, return: 17.5, name: "" },
]

const jpmPoint = [{ beta: 0.81, return: 9.78, name: "JPMorgan Chase" }]

const capmInputs = [
  { label: "Risk-Free Rate (Rf)", value: "4.5%", description: "10-Year US Treasury Yield" },
  { label: "Market Return (Rm)", value: "11.0%", description: "S&P 500 Historical Average" },
  { label: "Beta (β)", value: "0.81", description: "JPM Stock Beta" },
  { label: "Market Risk Premium", value: "6.5%", description: "Rm - Rf" },
]

export function CAPMSection() {
  return (
    <section id="models" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">CAPM & Beta Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Cost of Equity Analysis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Using the Capital Asset Pricing Model (CAPM) to determine the expected return on equity investment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* CAPM Formula Card */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                CAPM Formula
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-xl p-6 mb-6">
                <div className="text-center">
                  <p className="text-lg text-muted-foreground mb-4">Cost of Equity (Re)</p>
                  <p className="text-2xl font-mono font-bold text-foreground">
                    {"Re = Rf + β × (Rm - Rf)"}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {capmInputs.map((input, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div>
                      <span className="font-medium text-foreground">{input.label}</span>
                      <p className="text-sm text-muted-foreground">{input.description}</p>
                    </div>
                    <span className="text-lg font-semibold text-primary">{input.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Cost of Equity (Re)</span>
                  <span className="text-2xl font-bold text-primary">9.78%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Re = 4.5% + 0.81 × (11.0% - 4.5%) = 9.78%
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Security Market Line Chart */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Security Market Line (SML)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis
                      dataKey="beta"
                      type="number"
                      domain={[0, 2.2]}
                      name="Beta"
                      label={{ value: "Beta (β)", position: "bottom", offset: 0 }}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis
                      dataKey="return"
                      type="number"
                      domain={[0, 20]}
                      name="Return"
                      label={{ value: "Expected Return (%)", angle: -90, position: "insideLeft" }}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                              <p className="font-semibold">{payload[0].payload.name || "SML Point"}</p>
                              <p className="text-sm text-muted-foreground">Beta: {payload[0].payload.beta}</p>
                              <p className="text-sm text-muted-foreground">Return: {payload[0].payload.return}%</p>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <ReferenceLine
                      segment={[{ x: 0, y: 4.5 }, { x: 2, y: 17.5 }]}
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                    <Scatter
                      name="SML"
                      data={smlData}
                      fill="hsl(var(--primary))"
                      opacity={0.5}
                    />
                    <Scatter
                      name="JPMorgan"
                      data={jpmPoint}
                      fill="hsl(var(--accent))"
                    >
                      <ZAxis range={[200, 200]} />
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">Security Market Line</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-sm text-muted-foreground">JPMorgan Chase</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Beta Interpretation */}
        <Card className="border-border/50">
          <CardContent className="p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Beta = 0.81</h3>
                    <p className="text-muted-foreground">Lower than market volatility</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A beta of 0.81 indicates that JPMorgan Chase stock is <strong className="text-foreground">19% less volatile</strong> than 
                  the overall market. When the S&P 500 moves 10%, JPM typically moves only 8.1%. 
                  This defensive characteristic makes it attractive for risk-averse investors 
                  seeking stability with reasonable returns.
                </p>
              </div>
              <div className="lg:w-80 flex-shrink-0">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-muted/50">
                    <div className="text-2xl font-bold text-destructive mb-1">{"< 1"}</div>
                    <div className="text-xs text-muted-foreground">Defensive</div>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/10 border-2 border-primary">
                    <div className="text-2xl font-bold text-primary mb-1">0.81</div>
                    <div className="text-xs text-muted-foreground">JPM Beta</div>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50">
                    <div className="text-2xl font-bold text-accent mb-1">{"> 1"}</div>
                    <div className="text-xs text-muted-foreground">Aggressive</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
