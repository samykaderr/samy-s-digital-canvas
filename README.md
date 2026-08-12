# Samy's Digital Canvas

Create a futuristic, award-winning-style portfolio website for Samy Achouche (GitHub: 

samykaderr), a software engineering student at Université Abderahmane Mira de Bejaia 

(3ème année Licence Informatique) specializing in full-stack development. Personal 

tagline/motto to feature somewhere prominent: "The way to find solution is just thinking 

out of the Box."

TECH STACK

- React + Vite + TypeScript

- Tailwind CSS

- Framer Motion for animations/transitions

- React Three Fiber + drei for 3D hero element

- Lucide icons

DESIGN DIRECTION

- Dark theme (#0a0a0f base) with electric blue → violet → cyan gradient accents

- Glassmorphism cards, soft glow on hover

- Custom cursor with trailing effect

- Scroll-triggered reveal animations (fade + slide + slight 3D tilt)

- Magnetic hover micro-interactions on buttons/cards

- Bold modern heading font (Space Grotesk style), clean body sans

- Subtle animated grid or particle background

3D / ANIMATION

- Hero: interactive 3D wireframe object (torus knot or abstract shape) reacting to mouse 

  parallax, built with React Three Fiber

- Terminal-style staggered text reveal on page load

- Framer Motion whileInView reveals per section

- Project cards with 3D tilt-on-hover

- Skill icons with subtle float/orbit animation

REAL CONTENT TO USE

Name: Samy Achouche

Role: Full-Stack Software Engineer (Student) — Java/Spring Boot & React

Location: Bejaia, Algeria

GitHub: github.com/samykaderr

Bio: Computer science student at Université Abderahmane Mira de Bejaia, currently gaining 

hands-on experience through internships in software development and network/security 

administration. Passionate about building real, deployable software rather than just 

theory — believes in thinking outside the box to solve problems.

SKILLS (group into categories)

- Languages: Java, JavaScript/TypeScript, SQL

- Backend: Spring Boot, REST APIs, JPA/Hibernate

- Frontend: React, Vite, Tailwind CSS

- Databases: MySQL, PostgreSQL

- Tools & Other: Git/GitHub, JSON Schema (Ajv/networknt), VBA, Azure fundamentals (AZ-104 

  in progress), Active Directory & networking basics

FEATURED PROJECTS (use these instead of placeholders)

1. Edoc-Soummam — A dynamic document generation engine built during a software 

   development internship. Spring Boot 3.2 backend, React 19 + Vite frontend, MySQL 

   database. Implements a three-layer architecture (Data Schema / UI Schema / 

   DocumentTypeConfig) with JSON Schema Draft-07 validation on both frontend (Ajv) and 

   backend (networknt) for fully configurable, dynamic document templates.

   Tags: Spring Boot, React, MySQL, JSON Schema

2. BloodLink — A blood donation management platform (mobile + web) designed for the 

   Algerian healthcare context, connecting donors, hospitals, and blood banks in real time.

   Tags: Full-stack, Healthcare, Mobile

3. Stock Management System — A full-stack inventory/stock management application built 

   with Spring Boot, React, and PostgreSQL/MySQL, covering JPA entities, service layer, 

   REST controllers, and a complete admin dashboard.

   Tags: Spring Boot, React, PostgreSQL

4. Mini Compilateur — A mini JavaScript compiler built in Java, performing lexical 

   analysis and syntax parsing with try/catch error handling.

   Tags: Java, Compilers, Algorithms

5. University Transport Management App — A desktop application (Java) helping students 

   consult transport routes and giving admins centralized management tools.

   Tags: Java, Desktop App

Each project card should link to: https://github.com/samykaderr (use this as the base 

GitHub link, I'll update individual repo links after)

SECTIONS

1. Hero: "Samy Achouche" + role tagline + short intro line + 3D animated object + CTA 

   buttons ("View Projects", "Get in Touch") + scroll indicator

2. About: short bio (above), animated stat counters (e.g. "3+ Projects Shipped", 

   "2 Internships Completed", "Full-Stack Focus")

3. Skills: grouped glass cards by category (above)

4. Projects: grid of the 5 featured projects above with tags, hover reveal, GitHub links

5. Experience/Education: vertical timeline — Licence Informatique (Université de Bejaia, 

   ongoing) → Network/Security Administration Internship → Software Development Internship 

   (Edoc-Soummam)

6. Contact: glass-card form (name, email, message) + links to GitHub (samykaderr), 

   LinkedIn (placeholder), email (placeholder)

7. Footer: minimal, animated gradient line

FUNCTIONALITY

- Fully responsive, 3D degrades gracefully on mobile

- Sticky navbar (transparent → solid on scroll)

- Branded preloader animation

- Dark mode only

- Respect prefers-reduced-motion

Build this as one cohesive, polished, portfolio-quality site — prioritize animation 

smoothness and visual coherence.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/de059e0b-2925-451a-8529-65f3dd7584cc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
