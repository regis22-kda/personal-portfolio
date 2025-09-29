# Personal Portfolio

A modern personal portfolio website built with **React**, **TypeScript**, and **Ant Design**, featuring smooth animations with **Framer Motion** and interactive effects with **tsparticles**.  

This site showcases my projects, CV, and technical skills as a frontend developer.

---

## Features
- Home page with hero section, animated background, and quick navigation  
- CV page with education, experience, and skills in a resume-like layout  
- Projects page displaying screenshots, descriptions, tags, and links to GitHub/demo  
- Modern UI with Ant Design and theme customization (light/dark)  
- Page transitions and hover animations using Framer Motion  
- Interactive particle background with tsparticles  

---

## Folder Structure
personal-portfolio/
├── src/
│ ├── components/
│ │ ├── Hero.tsx
│ │ └── shared/
│ │ ├── PageTransition.tsx
│ │ ├── SectionTitle.tsx
│ │ ├── TagList.tsx
│ │ └── CardItem.tsx
│ ├── pages/
│ │ ├── Home.tsx
│ │ ├── Projects.tsx
│ │ └── CV.tsx
│ ├── App.tsx
│ └── index.tsx
├── public/
│ └── index.html
├── package.json
└── README.md


---

## Tech Stack
- React 18 + TypeScript  
- Ant Design 5  
- React Router DOM 6  
- Framer Motion (animations)  
- tsparticles-slim (particle effects)  
- Jest + React Testing Library (unit tests)  

---

## Getting Started

### Prerequisites
- Node.js (>=16)  
- npm or yarn  

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/personal-portfolio.git

# Navigate into the project
cd personal-portfolio

# Install dependencies
npm install

Run the project
npm start


The app will be available at http://localhost:3000

Running Tests
npm test
