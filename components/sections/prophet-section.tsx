"use client"

import { useMemo } from "react"
import { LineChartIcon, Calendar, TrendingUp, Waves } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from "recharts"

// Generate Prophet-style forecast data
function generateProphetData() {
  const startDate = new Date("2024-01-01")
  const historicalData = []
  const forecastData = []
  
  let price = 280
  const trend = 0.15 // Slight upward trend
  
  // Historical data (past 180 days)
  for (let i = 0; i < 180; i++) {
    const date = new Date(startDate)
    date.setDate(date.getDate() + i)
    
    // Add seasonality and noise
    const dayOfWeek = date.getDay()
    const seasonality = Math.sin((i / 30) * Math.PI * 2) * 5
    const weekendEffect = (dayOfWeek === 0 || dayOfWeek === 6) ? -2 : 0
    const noise = (Math.random() - 0.5) * 8
    
    price = price + trend + seasonality * 0.1 + noise
    price = Math.max(price, 250)
    
    historicalData.push({
      date: date.toISOString().split("T")[0],
      price: price,
      type: "historical"
    })
  }
  
  // Forecast data (next 60 days)
  const lastPrice = price
  for (let i = 0; i < 60; i++) {
    const date = new Date(startDate)
    date.setDate(date.getDate() + 180 + i)
    
    const trendComponent = lastPrice + (i * 0.2)
    const seasonality = Math.sin(((180 + i) / 30) * Math.PI * 2) * 3
    const uncertainty = i * 0.15
    
    forecastData.push({
      date: date.toISOString().split("T")[0],
      forecast: trendComponent + seasonality,
      upper: trendComponent + seasonality + uncertainty * 3,
      lower: trendComponent + seasonality - uncertainty * 3,
      type: "forecast"
    })
  }
  
  return { historicalData, forecastData }
}

export function ProphetSection() {
  const { historicalData, forecastData } = useMemo(() => generateProphetData(), [])
  
  const combinedData = useMemo(() => {
    const lastHistorical = historicalData[historicalData.length - 1]
    return [
      ...historicalData.map(d => ({
        date: d.date,
        price: d.price,
        forecast: null,
        upper: null,
        lower: null,
      })),
      {
        date: lastHistorical.date,
        price: lastHistorical.price,
        forecast: lastHistorical.price,
        upper: lastHistorical.price,
        lower: lastHistorical.price,
      },
      ...forecastData.map(d => ({
        date: d.date,
        price: null,
        forecast: d.forecast,
        upper: d.upper,
        lower: d.lower,
      }))
    ]
  }, [historicalData, forecastData])

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <LineChartIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Time Series Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Prophet Forecasting
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Machine learning-based time series forecasting with trend and seasonality decomposition.
          </p>
        </div>

        {/* Main Forecast Chart */}
        <Card className="mb-8 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              60-Day Price Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={combinedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <defs>
                    <linearGradient id="uncertaintyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                      <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={formatDate}
                    tick={{ fontSize: 11 }}
                    interval={29}
                  />
                  <YAxis 
                    domain={['auto', 'auto']}
                    tickFormatter={(value) => `$${value.toFixed(0)}`}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload
                        return (
                          <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
                            <p className="font-semibold mb-2">{formatDate(label)}</p>
                            {data.price !== null && (
                              <p className="text-sm">
                                <span className="text-muted-foreground">Actual: </span>
                                <span className="text-foreground font-medium">${data.price.toFixed(2)}</span>
                              </p>
                            )}
                            {data.forecast !== null && data.price === null && (
                              <>
                                <p className="text-sm">
                                  <span className="text-muted-foreground">Forecast: </span>
                                  <span className="text-accent font-medium">${data.forecast.toFixed(2)}</span>
                                </p>
                                <p className="text-sm">
                                  <span className="text-muted-foreground">Range: </span>
                                  <span className="text-foreground">${data.lower.toFixed(2)} - ${data.upper.toFixed(2)}</span>
                                </p>
                              </>
                            )}
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="upper"
                    stroke="none"
                    fill="url(#uncertaintyGradient)"
                  />
                  <Area
                    type="monotone"
                    dataKey="lower"
                    stroke="none"
                    fill="hsl(var(--background))"
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={false}
                    connectNulls={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="forecast"
                    stroke="hsl(var(--accent))"
                    strokeWidth={2}
                    strokeDasharray="6 3"
                    dot={false}
                    connectNulls={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="upper"
                    stroke="hsl(var(--accent))"
                    strokeWidth={1}
                    strokeDasharray="2 2"
                    dot={false}
                    opacity={0.5}
                  />
                  <Line
                    type="monotone"
                    dataKey="lower"
                    stroke="hsl(var(--accent))"
                    strokeWidth={1}
                    strokeDasharray="2 2"
                    dot={false}
                    opacity={0.5}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-primary" />
                <span className="text-sm text-muted-foreground">Historical Price</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 border-t-2 border-dashed border-accent" />
                <span className="text-sm text-muted-foreground">Forecast</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-accent/20" />
                <span className="text-sm text-muted-foreground">Uncertainty Interval</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Decomposition Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
                Trend Component
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The underlying long-term direction of JPMorgan&apos;s stock price, filtering out 
                short-term fluctuations and noise.
              </p>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Trend Direction</span>
                  <span className="font-semibold text-accent">Moderately Bullish</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  The model identifies a positive trend with an expected daily appreciation 
                  of approximately 0.06%.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Waves className="w-5 h-5 text-primary" />
                Seasonality Component
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Recurring patterns in the stock price driven by quarterly earnings, 
                market cycles, and investor behavior.
              </p>
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Pattern Detected</span>
                  <span className="font-semibold text-primary">Monthly Cycle</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Price tends to peak mid-month and dip at month-end, likely reflecting 
                  institutional rebalancing patterns.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
