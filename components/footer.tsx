import { TrendingUp } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg">JPM Analysis</span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md">
              A comprehensive financial analysis of JPMorgan Chase & Co. created as part of the 
              DAB401 Final Group Project on Financial Modeling & Valuation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Sections</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#home", label: "Home" },
                { href: "#company", label: "Company Overview" },
                { href: "#analysis", label: "Financial Analysis" },
                { href: "#models", label: "Valuation Models" },
                { href: "#conclusion", label: "Recommendation" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#downloads", label: "Excel Model" },
                { href: "#downloads", label: "Python Notebook" },
                { href: "#downloads", label: "PDF Report" },
                { href: "#downloads", label: "Presentation" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            DAB401 Financial Modeling & Valuation - Final Group Project
          </p>
          <p className="text-sm text-slate-500">
            Disclaimer: For educational purposes only. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
