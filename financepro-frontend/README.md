# 💰 FinancePro Dashboard

A modern, full-stack personal finance dashboard to track income, expenses, budgets and savings - in one clear view.

Built as a learning project to show full-stack development with React and Java Spring Boot.

**Live Demo:** Frontend runs on `http://localhost:3000`

---

## ✨ What can the app do?

- **Dashboard Overview:** Total balance, monthly income, expenses and savings at a glance
- **Transactions:** Add, view and filter income & expenses (Salary, Rent, Shopping, etc.)
- **Budget Tracking:** See how much of your budget is used per category
- **Savings Goals:** Track progress for goals like "Emergency Fund" or "Vacation"
- **Recent Activity:** Latest transactions with date, category and amount
- **Responsive Design:** Works on desktop, tablet and mobile
- **German UI:** Interface in German, amounts in Euro (€)

Example data shown in demo:
- Salary: Soft Outlet Metzingen
- Rent: Metzingen Mitte
- Shopping: REWE Metzingen

---

## 🛠️ Tech Stack

**Frontend:**
- React.js (Create React App)
- TypeScript
- CSS / Tailwind-style styling
- Responsive UI

**Backend:**
- Java 17+
- Spring Boot
- Spring Data JPA
- REST API
- H2 / In-Memory Database

**Tools:**
- Git & GitHub
- VS Code / IntelliJ IDEA
- npm
- Maven

---

## 📁 Project Structure
financepro-dashboard/
├── financepro-frontend/   # React Frontend (Port 3000)
│   ├── src/
│   │   ├── App.tsx
│   │   ├── components/
│   │   └── data/
│   └── package.json
│
└── financepro-backend/    # Java Spring Boot Backend (Port 8080)
    ├── src/main/java/com/financepro/
    │   └── FinanceproApplication.java
    └── pom.xml




---

## 🚀 How to Run the Project

You need: Node.js, Java 17+, and npm installed.

### 1. Start Backend (Java)

```bash
cd financepro-backend
./mvnw spring-boot:run


cd financepro-frontend
npm install
npm start


🧠 What I Learned From This Project
Building a full-stack app from scratch (Frontend + Backend)
Creating REST APIs with Spring Boot
State management and components in React
Connecting Frontend and Backend
Working with Git, branches and GitHub
Debugging, fixing build errors and deployment


👨‍💻 Author
Muhammad NabiAspiring Full-Stack Developer / Web App Developer
Location: Metzingen / Reutlingen, Germany
Focus: React, Java, Spring Boot, Web Applications
GitHub: https://github.com/MuhammadNabi-88


📌 Future ImprovementsReal login / user authentication
Connect Frontend to Backend via real API (instead of mock data)
Charts for income vs. expenses
Export transactions as CSV / PDFDark Mode


# FinancePro - Banking Dashboard

Modern Banking Dashboard built with React, TypeScript, Tailwind CSS and Recharts.

**Features:**
- Kontostand, Einnahmen/Ausgaben, Sparquote
- Umsatz Tabelle with Search & Filter (Soll/Haben)
- Einnahmen vs Ausgaben Chart + Ausgaben nach Kategorie
- Add Transaction (Neue Buchung) + CSV Export
- Responsive Design

**Tech:** React, TypeScript, Tailwind, Recharts, Lucide Icons
**Live Demo:** []