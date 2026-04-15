# 📊 Financial Analysis of JPMorgan Chase & Co.

## 🏦 Project Overview

This project presents a comprehensive financial analysis of **JPMorgan Chase & Co.**, developed as part of the **DAB401 Final Group Project – Financial Modeling & Valuation**.

The website is designed as a modern, interactive financial dashboard that showcases key financial metrics, valuation models, and forecasting techniques used in real-world investment analysis.

---

## 🎯 Objectives

* Analyze the financial performance of JPMorgan Chase & Co.
* Apply financial modeling techniques such as CAPM, WACC, and DCF
* Evaluate risk using Beta and Monte Carlo simulation
* Forecast stock trends using time series models (Prophet)
* Present findings through an interactive web-based dashboard

---

## 🌐 Website Features

### 🏠 Home Page

* Project title and subtitle
* Clean hero section with finance-themed background
* Brief introduction to the project

### 🏦 Company Overview

* History and formation of JPMorgan Chase
* CEO: Jamie Dimon
* Global presence in 100+ countries
* Business model (consumer banking, investment banking, asset management)

### 📊 Financial Analysis

* Key financial ratios:

  * Net Profit Margin
  * Return on Equity (ROE)
  * Return on Assets (ROA)
  * Earnings Per Share (EPS)
  * Debt-to-Equity Ratio
  * Liquidity Ratios
* Dashboard-style visualization
* Interpretations for each metric

### 📈 CAPM & Beta Analysis

* Beta value: **0.81**
* CAPM formula explanation:
  [
  Cost\ of\ Equity = R_f + \beta (R_m - R_f)
  ]
* Inputs: risk-free rate, market return
* Visualization of risk vs return

### 💰 WACC Analysis

* Weighted Average Cost of Capital explanation
* Components:

  * Cost of Equity
  * Cost of Debt
* Formula:
  [
  WACC = W_e R_e + W_d R_d (1 - Tax)
  ]
* Final WACC: ~12–13%

### 📉 Valuation (DCF Model)

* Free Cash Flow: **-147,782,000**
* Growth rate assumption: **5%**
* Intrinsic value result (negative due to banking structure)
* Market price comparison: **311.91**
* Key insight: Limitations of DCF for banks

### 🎲 Monte Carlo Simulation

* 100 simulations of stock price
* 30-day forecast range
* Visualization of possible outcomes
* Risk and uncertainty interpretation

### 🔮 Prophet Forecasting

* Time series forecasting using Prophet model
* Trend and seasonality visualization
* Interactive chart

### 🧠 Final Recommendation

* Investment decision: **HOLD**
* Justification:

  * Strong profitability
  * Low beta (lower volatility)
  * DCF limitations in banking sector

### 📁 Download Section

Users can download:

* Excel financial model
* Python notebook (.ipynb)
* PDF report
* Presentation slides

---

## 🎨 Design & UI

* Modern fintech-inspired design
* Color palette: blue, white, dark gray
* Fully responsive layout
* Interactive charts and hover tooltips
* Smooth scrolling navigation

---

## 🧰 Technologies Used

* **Frontend:** HTML, CSS, JavaScript / React (optional)
* **Visualization:** Chart.js / Plotly
* **Data Analysis:** Python (Pandas, NumPy)
* **Forecasting:** Prophet
* **Simulation:** Monte Carlo (NumPy)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/jpm-financial-analysis.git
cd jpm-financial-analysis
```

### 2. Install Dependencies (if using React)

```bash
npm install
npm start
```

### 3. Open in Browser

If using static version:

```bash
open index.html
```

---

## 📦 Project Structure

```
├── index.html
├── css/
├── js/
├── data/
├── assets/
├── notebooks/
├── reports/
└── README.md
```

---

## ⚠️ Limitations

* DCF model is less suitable for banking institutions
* Forecasting models rely on historical data assumptions
* Monte Carlo simulation does not account for extreme market shocks

---

## 👥 Contributors

* Krupa Patel
* Om Patel
* Vishal Sharama

---

## 📜 License

This project is for academic purposes only.

---

## ⭐ Acknowledgements

* JPMorgan Chase financial reports
* Yahoo Finance / Macrotrends data
* Prophet by Meta
* Academic resources on financial modeling

---

## 💡 Future Improvements

* Add real-time stock data API
* Enhance interactivity with dashboards
* Deploy on Netlify or Vercel

---


