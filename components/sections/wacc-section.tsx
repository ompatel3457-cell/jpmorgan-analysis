"use client"

import { Scale, Percent, Calculator } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const capitalStructure = [
  { name: "Equity", value: 60, color: "hsl(var(--chart-1))" },
  { name: "Debt", value: 40, color: "hsl(var(--chart-2))" },
]

const waccComponents = [
  {
    label: "Weight of Equity (We)",
    value: "60%",
    description: "Proportion of equity in capital structure"
  },
  {
    label: "Cost of Equity (Re)",
    value: "9.78%",
    description: "From CAPM calculation"
  },
  {
    label: "Weight of Debt (Wd)",
    value: "40%",
    description: "Proportion of debt in capital structure"
  },
  {
    label: "Cost of Debt (Rd)",
    value: "5.5%",
    description: "Average interest rate on debt"
  },
  {
    label: "Tax Rate (T)",
    value: "21%",
    description: "Corporate tax rate"
  },
]

export function WACCSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Scale className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Cost of Capital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Weighted Average Cost of Capital
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            WACC represents the minimum return a company must earn to satisfy its investors and creditors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* WACC Formula */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                WACC Formula
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-xl p-6 mb-6">
                <div className="text-center">
                  <p className="text-lg text-muted-foreground mb-4">Weighted Average Cost of Capital</p>
                  <p className="text-xl sm:text-2xl font-mono font-bold text-foreground">
                    {"WACC = We×Re + Wd×Rd×(1-T)"}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {waccComponents.map((component, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div>
                      <span className="font-medium text-foreground">{component.label}</span>
                      <p className="text-sm text-muted-foreground">{component.description}</p>
                    </div>
                    <span className="text-lg font-semibold text-primary">{component.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Capital Structure Pie Chart */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-primary" />
                Capital Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={capitalStructure}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {capitalStructure.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                              <p className="font-semibold">{payload[0].name}</p>
                              <p className="text-sm text-muted-foreground">{payload[0].value}%</p>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center gap-6 mt-4">
                {capitalStructure.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-muted-foreground">{item.name} ({item.value}%)</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* WACC Calculation Result */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6 lg:p-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">WACC Calculation</h3>
              <div className="bg-background rounded-xl p-6 max-w-2xl mx-auto mb-6">
                <p className="text-muted-foreground mb-4">
                  WACC = We × Re + Wd × Rd × (1 - T)
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-xl font-semibold text-foreground">WACC =</span>
                  <span className="text-4xl font-bold text-primary">12.7%</span>
                </div>
              </div>
              <p className="text-muted-foreground max-w-xl mx-auto">
                This WACC of 12.7% represents the minimum return JPMorgan must earn on its investments 
                to satisfy all capital providers. Any project with returns above this hurdle rate creates value.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
