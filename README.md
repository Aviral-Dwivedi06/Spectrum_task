Spectrum Task – Physics Association Website

This repository contains the source code for the Physics Association at BITS Hyderabad’s official website. It is a modern one-page responsive website built with React, Vite, and Tailwind CSS, designed to showcase the association’s vision, research activities, and articles in an engaging and interactive way. The project emphasizes clean component-based architecture, smooth UI/UX, and deployment readiness.

Features:

React + Vite for fast development and optimized builds

Tailwind CSS for responsive and modern styling

Starfield background for a cosmic theme

Component-wise rendering with modular code structure

Responsive design that works on desktop, tablet, and mobile

Custom animations and hover effects for interactivity

Easy deployment via GitHub Pages and Vercel

Tech Stack: React with Vite as the bundler, Tailwind CSS for styling, GitHub Pages and Vercel for deployment.

Getting Started:
Step 1: Clone the repository using
git clone https://github.com/Aviral-Dwivedi06/Spectrum_task.git

cd Spectrum_task

Step 2: Install dependencies using
npm install

Step 3: Run the development server using
npm run dev
Open http://localhost:5173
 in your browser to preview the project.

Deployment on GitHub Pages:

Install gh-pages package with
npm install gh-pages --save-dev

In package.json add:
"homepage": "https://<your-username>.github.io/Spectrum_task"
"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
}

Deploy with
npm run deploy

Your site will be live at https://<your-username>.github.io/Spectrum_task

Deployment on Vercel:

Push your code to GitHub.

Go to vercel.com, import the repository, and deploy.

Automatic builds and deployments will happen on every push.

Live Demo:
The website is live at https://spectrum-task.vercel.app/
