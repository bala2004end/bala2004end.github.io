import React from "react";

// Single-file React portfolio app (App.jsx)
// - Uses Tailwind CSS classes (setup instructions below)
// - Default export a React component

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 antialiased">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold">Balakrishnan M</h1>
            <p className="text-sm text-gray-300">Developer • PHP • Laravel • React • ML Enthusiast</p>
          </div>
          <nav className="space-x-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <section id="hero" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Developer focused on practical web systems and AI-driven tools.</h2>
            <p className="mt-4 text-gray-300">I build full-stack web apps with PHP/Laravel and modern front-ends using React. I also apply ML/agent tooling to real-world problems like construction monitoring and assistive robotics.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://github.com/bala2004end" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">GitHub</a>
              <a href="https://www.linkedin.com/in/balakrishnan-mahalingam-173367264/" target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-700 rounded hover:bg-gray-700">LinkedIn</a>
              <a href="/BALAKRISHNAN_M.pdf" download className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500">Download Resume</a>
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-800 to-gray-700 rounded-lg p-6">
            <h3 className="font-semibold">Contact</h3>
            <p className="text-sm text-gray-300 mt-2">Paramkudi, Tamil Nadu, India</p>
            <p className="text-sm text-gray-300">Phone: 6369861872</p>
            <p className="text-sm text-gray-300">Email: <a href="mailto:balav8253@gmail.com" className="underline">balav8253@gmail.com</a></p>
            <div className="mt-4 text-xs text-gray-400">Final year, B.E. CSE (Expected 2026) • CGPA: 7.03</div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-12">
          <h3 className="text-2xl font-bold mb-4">About</h3>
          <p className="text-gray-300">I am a developer with experience building and deploying full-stack web applications. I work with backend logic, REST APIs, MySQL and MongoDB, and use tools like Docker and Composer. I enjoy integrating ML and agent workflows into products to make them smarter and easier to use.</p>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Selected Projects</h3>

          <div className="space-y-6">
            <article className="p-6 bg-gray-800 rounded-lg">
              <h4 className="font-semibold">Construction Site Monitoring (AI-powered)</h4>
              <p className="text-sm text-gray-300 mt-2">An AI-powered gamified system to monitor construction site progress and worker activity. Used google-adk, Python, and MongoDB. I designed agent workflows and helped integrate LLM-based summaries for managers.</p>
              <div className="mt-3 text-xs text-gray-400">Tech: google-adk, Python, MongoDB • Repo: <a href="https://github.com/wolf2627/cons-moni" className="underline" target="_blank" rel="noreferrer">cons-moni</a></div>
            </article>

            <article className="p-6 bg-gray-800 rounded-lg">
              <h4 className="font-semibold">Vision & Voice-Controlled Wheelchair</h4>
              <p className="text-sm text-gray-300 mt-2">Smart assistive wheelchair using CNN-based eye movement detection and offline voice commands (Vosk). Integrated ultrasonic sensors for obstacle detection with Arduino, Raspberry Pi and Zigbee.</p>
              <div className="mt-3 text-xs text-gray-400">Tech: Machine Learning, Arduino, Zigbee • Contribution: Circuit design & Arduino code</div>
            </article>

            <article className="p-6 bg-gray-800 rounded-lg">
              <h4 className="font-semibold">ML-powered Wheelchair (Reinforcement Learning)</h4>
              <p className="text-sm text-gray-300 mt-2">Hands-free mobility system for tetraplegia using reinforcement learning and Zigbee communication.</p>
            </article>
          </div>
        </section>

        {/* Skills & Experience */}
        <section id="skills" className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Experience</h3>
            <div className="p-4 bg-gray-800 rounded">
              <h4 className="font-semibold">Developer Intern — Marlion Technologies (Jun 2025 - Jul 2025)</h4>
              <p className="text-sm text-gray-300 mt-2">Worked on a real-time construction site monitoring system to automate progress tracking and safety compliance. Applied prompt engineering to summarize daily logs into manager-friendly insights.</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Languages: PHP, Java, C++, Python</li>
              <li>Frameworks: Laravel, React</li>
              <li>Databases: MySQL, MongoDB</li>
              <li>Dev tools: Git, Docker, Composer</li>
              <li>Web: HTML, CSS, Bootstrap, Tailwind</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="p-3 bg-gray-800 rounded outline-none" placeholder="Your name" />
            <input className="p-3 bg-gray-800 rounded outline-none" placeholder="Your email" />
            <textarea className="p-3 col-span-1 md:col-span-2 bg-gray-800 rounded outline-none" rows={4} placeholder="Message"></textarea>
            <button className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500 col-span-1 md:col-span-2">Send Message</button>
          </form>

          <div className="mt-6 text-sm text-gray-400">Or email me at <a href="mailto:balav8253@gmail.com" className="underline">balav8253@gmail.com</a></div>
        </section>

        <footer className="text-center text-xs text-gray-500 py-6">© {new Date().getFullYear()} Balakrishnan M — Built with React + Tailwind</footer>
      </div>
    </div>
  );
}
