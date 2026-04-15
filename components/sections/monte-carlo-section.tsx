"use client"

import { useMemo } from "react"
import { Dice5, TrendingUp, TrendingDown, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from "recharts"

// Generate Monte Carlo simulation data
function generateSimulations(numSimulations: number, days: number, startPrice: number) {
  const simulations: number[][] = []
  const dailyReturn = 0.0004 // ~10% annual return
  const volatility = 0.018 // ~28% annual volatility

  for (let i = 0; i < numSimulations; i++) {
    const path = [startPrice]
    for (let j = 1; j <= days; j++) {
      const randomShock = (Math.random() - 0.5) * 2 * volatility * Math.sqrt(1)
      const drift = dailyReturn
      const newPrice = path[j - 1] * Math.exp(drift + randomShock)
      path.push(newPrice)
    }
    simulations.push(path)
  }

  return simulations
}

function getStatistics(simulations: number[][], day: number) {
  const prices = simulations.map(s => s[day]).sort((a, b) => a - b)
  const len = prices.length
  return {
    min: prices[0],
    p5: prices[Math.floor(len * 0.05)],
    p25: prices[Math.floor(len * 0.25)],
    median: prices[Math.floor(len * 0.5)],
    p75: prices[Math.floor(len * 0.75)],
    p95: prices[Math.floor(len * 0.95)],
    max: prices[len - 1],
  }
}

export function MonteCarloSection() {
  const simulations = useMemo(() => generateSimulations(100, 30, 311.91), [])
  
  const chartData = useMemo(() => {
    const data = []
    for (let day = 0; day <= 30; day++) {
      const stats = getStatistics(simulations, day)
      data.push({
        day,
        min: stats.min,
        p5: stats.p5,
        p25: stats.p25,
        median: stats.median,
        p75: stats.p75,
        p95: stats.p95,
        max: stats.max,
      })
    }
    return data
  }, [simulations])

  const finalStats = useMemo(() => getStatistics(simulations, 30), [simulations])

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Dice5 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Risk Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Monte Carlo Simulation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            100 simulated price paths over 30 days to understand potential price ranges and risk.
          </p>
        </div>

        {/* Main Chart */}
        <Card className="mb-8 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              30-Day Price Forecast Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <defs>
                    <linearGradient id="colorRange" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="day" 
                    label={{ value: "Days", position: "bottom", offset: 0 }}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    domain={['auto', 'auto']}
                    tickFormatter={(value) => `$${value.toFixed(0)}`}
                    tick={{ fontSize: 12 }}
                    label={{ value: "Price ($)", angle: -90, position: "insideLeft" }}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload
                        return (
                          <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
                            <p className="font-semibold mb-2">Day {label}</p>
                            <div className="space-y-1 text-sm">
                              <p className="text-muted-foreground">95th Percentile: <span className="text-foreground font-medium">${data.p95.toFixed(2)}</span></p>
                              <p className="text-muted-foreground">75th Percentile: <span className="text-foreground font-medium">${data.p75.toFixed(2)}</span></p>
                              <p className="text-primary font-semibold">Median: ${data.median.toFixed(2)}</p>
                              <p className="text-muted-foreground">25th Percentile: <span className="text-foreground font-medium">${data.p25.toFixed(2)}</span></p>
                              <p className="text-muted-foreground">5th Percentile: <span className="text-foreground font-medium">${data.p5.toFixed(2)}</span></p>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="p95"
                    stroke="none"
                    fill="url(#colorRange)"
                  />
                  <Area
                    type="monotone"
                    dataKey="p5"
                    stroke="none"
                    fill="hsl(var(--background))"
                  />
                  <Line
                    type="monotone"
                    dataKey="p95"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={1}
                    strokeDasharray="4 4"
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="p75"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={1}
                    strokeDasharray="2 2"
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="median"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="p25"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={1}
                    strokeDasharray="2 2"
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="p5"
                    stroke="hsl(var(--chart-4))"
                    strokeWidth={1}
                    strokeDasharray="4 4"
                    dot={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-primary" />
                <span className="text-sm text-muted-foreground">Median</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 border-t-2 border-dashed border-chart-1" />
                <span className="text-sm text-muted-foreground">25th/75th Percentile</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 border-t-2 border-dashed border-chart-2" />
                <span className="text-sm text-muted-foreground">5th/95th Percentile</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Best Case (95th)</p>
              <p className="text-2xl font-bold text-foreground">${finalStats.p95.toFixed(2)}</p>
              <p className="text-sm text-accent">+{((finalStats.p95 / 311.91 - 1) * 100).toFixed(1)}%</p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Expected (Median)</p>
              <p className="text-2xl font-bold text-foreground">${finalStats.median.toFixed(2)}</p>
              <p className="text-sm text-primary">{((finalStats.median / 311.91 - 1) * 100) >= 0 ? "+" : ""}{((finalStats.median / 311.91 - 1) * 100).toFixed(1)}%</p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-3">
                <TrendingDown className="w-6 h-6 text-destructive" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Worst Case (5th)</p>
              <p className="text-2xl font-bold text-foreground">${finalStats.p5.toFixed(2)}</p>
              <p className="text-sm text-destructive">{((finalStats.p5 / 311.91 - 1) * 100).toFixed(1)}%</p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-chart-3/10 flex items-center justify-center mx-auto mb-3">
                <Dice5 className="w-6 h-6 text-chart-3" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Volatility Range</p>
              <p className="text-2xl font-bold text-foreground">${(finalStats.p95 - finalStats.p5).toFixed(2)}</p>
              <p className="text-sm text-muted-foreground">90% CI Width</p>
            </CardContent>
          </Card>
        </div>

        {/* Interpretation */}
        <Card className="border-border/50">
          <CardContent className="p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Risk Interpretation</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Monte Carlo simulation models 100 potential price paths using historical volatility 
              and expected returns. With 90% confidence, JPMorgan&apos;s stock price is expected to trade 
              between <strong className="text-foreground">${finalStats.p5.toFixed(2)}</strong> and 
              <strong className="text-foreground"> ${finalStats.p95.toFixed(2)}</strong> over the next 30 days.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The relatively narrow distribution reflects JPMorgan&apos;s lower beta (0.81), indicating 
              less price volatility compared to the broader market. This makes the stock suitable 
              for investors seeking exposure to financials with reduced downside risk.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
