# 📊 AG Grid Dashboard

A modern, responsive dashboard built using React and AG Grid with clean architecture and production-ready structure.

---

## 🚀 Live Demo
[https://your-vercel-link.vercel.app](https://ag-grid-dashboard-por9.vercel.app/)

---

## 📦 GitHub Repository
[https://github.com/nandan-bhuva/ag-grid-dashboard](https://github.com/nandan-bhuva/ag-grid-dashboard)

---

## ✨ Features

- ⚡ AG Grid integration (sorting, filtering, pagination)
- 🎨 Dynamic Theme Switcher (Quartz, Balham, Material)
- 📱 Fully Responsive (mobile + desktop optimized)
- 📊 Employee data dashboard
- 🧩 Clean folder structure (scalable architecture)
- 🔍 Column filters + global search
- 🚫 Pivot mode disabled for simplified UX
- 📌 Conditional sidebar (hidden on mobile)

---

## 🏗️ Tech Stack

- React.js
- AG Grid (Community + Enterprise features)
- CSS (custom responsive design)
- React Router
- Vercel (deployment)

---

## 📂 Project Structure

```text
src/
├── components/
│ ├── common/
│ │ ├── Header.jsx
│ │ └── Footer.jsx
│ └── grid/
│ └── EmployeeGrid.jsx
│
├── pages/
│ └── Dashboard.jsx
│
├── services/
│ └── employeeService.js
│
├── data/
│ └── employees.json
│
├── styles/
│ └── global.css
│
├── App.js
└── index.js
```
---

## ⚙️ Installation & Setup

```bash
# Clone repo
git clone https://github.com/your-username/ag-grid-dashboard.git

# Go to folder
cd ag-grid-dashboard

#Install 
npm install

# Check dependencies
npm install ag-grid-community ag-grid-react
npm install ag-grid-enterprise
npm install react-router-dom

# Run project
npm start
