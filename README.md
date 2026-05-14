
# 🚀 Compound Doubler

A sleek, high-performance web utility that visualizes the power of **exponential growth**. Input a starting amount and watch it snowball through iterative doubling cycles.

Whether you're exploring the "Penny Doubling" riddle or visualizing compound returns, this tool calculates and formats large-scale financial growth instantly.

## ✨ Features

* **Iterative Logic:** Unlike simple interest, this tool uses a cumulative loop to double the *result* of each previous cycle.
* **Real-time Formatting:** Uses the `Intl.NumberFormat` API to handle everything from ₦100 to ₦100 Trillion with proper currency symbols and commas.
* **FinTech Aesthetic:** A modern, dark-mode interface built with CSS variables and a glassmorphism-inspired result area.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.

## 🛠️ Tech Stack

* **HTML5:** Semantic structure for accessibility and SEO.
* **CSS3:** Custom properties (variables) and Flexbox for a crisp, responsive layout.
* **JavaScript (ES6):** Efficient loop-based calculations and dynamic DOM manipulation.

## 🧮 How the Math Works

The app takes your **Starting Balance** ($P$) and the **Number of Cycles** ($n$). It performs an iterative doubling operation:

$$Result = P \times 2^n$$

For example, if you start with *₦100** and double it **10 times**:

1. Cycle 1: ₦200
2. Cycle 2: ₦400
...
3. **Final: ₦102,400**

## 🚀 Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/compound-doubler.git

```


2. **Open the project:**
Simply open `index.html` in any modern web browser.

## 📂 Project Structure

```text
├── index.html   # Core structure and UI components
├── style.css    # Dark-mode styling and layout
└── script.js    # Doubling logic and currency formatting

```




```

```
