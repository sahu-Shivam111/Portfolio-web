🌐 Personal Portfolio – Shivam Sahu

This is my personal developer portfolio website, designed to showcase my skills, projects, and experience as a Full Stack Developer & AI Enthusiast.

The portfolio combines modern frontend design, interactive 3D elements, and smooth animations to create a unique and professional user experience.

✨ Features

⚡ Modern and responsive UI

🎨 Smooth animations using Framer Motion

🌌 Interactive 3D background using Three.js

🖥️ 3D desktop model rendered with React Three Fiber

📩 Working contact form with EmailJS integration

🔐 Secure environment variable usage for API keys

📄 Resume download option

🌙 Dark-themed futuristic design

🛠️ Tech Stack
Frontend

React (Vite)

Tailwind CSS

Framer Motion

React Icons

3D & Animation

Three.js

@react-three/fiber

@react-three/drei

Contact & Email

EmailJS (Frontend email service)

Hosting

Vercel

🧠 How I Built This Portfolio
1️⃣ Project Setup

Initialized the project using Vite + React

Configured Tailwind CSS for utility-first styling

Organized the project into reusable components

2️⃣ 3D Background & Models

Used React Three Fiber to render Three.js inside React

Added animated particle systems for a futuristic background

Loaded a GLB 3D desktop model using useGLTF

Applied custom materials and emissive textures to the model screen

Optimized lighting and camera settings for performance

3️⃣ Animations & Interactions

Implemented smooth scroll and reveal animations using Framer Motion

Added hover glow effects and interactive UI transitions

Used pointer-based rotation for subtle 3D interactivity

4️⃣ Contact Form & Email Integration

Integrated EmailJS to send emails directly from the frontend

Used controlled React state for form handling

Secured API keys using environment variables

Added success and error handling for better UX

5️⃣ Performance & Deployment

Optimized assets and models for fast loading

Ensured only one WebGL context runs at a time

Deployed the project on Vercel for reliable hosting and fast CDN delivery

📁 Project Structure
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Journey.jsx
│   ├── Contact.jsx
│   ├── ThreeBackground.jsx
│   └── DesktopModel.jsx
│
├── App.jsx
├── main.jsx
└── index.css

🔐 Environment Variables

EmailJS keys are stored securely using environment variables:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

🚀 Live Demo

🔗 Live Website: https://portfolio-web-self-sigma-58.vercel.app/

📬 Contact

Email: shivamsahudev1@gmail.com

GitHub: https://github.com/sahu-Shivam111

📜 License

This project is personal and proprietary.
Feel free to take inspiration, but please do not copy directly without permission.
