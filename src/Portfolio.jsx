import { Github, Linkedin } from "lucide-react";
import "./Layout.css";
import React from 'react';

function ProyectoCard({ titulo, fecha, descripcion, rol, link }) {
  return (
    <div className="shadow-lg border border-blue-100 rounded-xl p-4">
      <h3 className="text-xl font-bold text-blue-800">{titulo}</h3>
      <p className="text-gray-600 text-sm mb-2">{fecha}</p>
      <p className="text-gray-700">{descripcion}</p>
      <p className="text-sm text-blue-600">Role: {rol}</p>
      <a
        className="text-blue-600 hover:underline mt-2 inline-block"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="layout-container">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-blue-800">Steven Josué Pérez Aguilar</h1>
          <p className="text-blue-600">Computer Engineering Student | Freelance Developer</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/StevenProgrammer01" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-blue-700 hover:text-blue-900" />
            </a>
            <a href="http://www.linkedin.com/in/steven-josué-pérez-aguilar-b153a2266" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-blue-700 hover:text-blue-900" />
            </a>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">About Me</h2>
          <p className="text-gray-700">
            I am a proactive and communicative computer engineering student from the Technological Institute of Costa Rica,
            currently in my second year. I'm passionate about building web systems and looking for remote freelance
            opportunities where I can contribute and grow professionally.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Technical Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Programming: Python, JavaScript, C++, Java, Kotlin, C#</li>
            <li>Web/Mobile: HTML, CSS, React, Node.js, Flutter, Dart, Tailwind CSS, Crow, Flask, FastAPI, Django, Android Studio </li>
            <li>Version Control: Git / GitHub / Gitlab</li>
            <li>Databases: MySQL, MongoDB, SQL Server, PostgreSQL, FireBase</li>
            <li>Data Science & Machine Learning: Pandas, Numpy, Scikit Learn, TensorFlow, PyTorch, OpenCV, Matplotlib, Seaborn, SciPy</li>
            <li>Tools: Figma, Google Colab, Google Cloud Platform, Docker, Linux, Windows, Office 365, LibreOffice</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Key Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProyectoCard
              titulo="WhatsApp + Dialog Flow Integration"
              fecha="May 2025"
              descripcion="Developed an API using Python and Flask to integrate a Dialog Flow chatbot with WhatsApp through Twilio."
              rol="Developer"
              link="https://github.com/StevenTEC295/whatsappAgent"
            />
            <ProyectoCard
              titulo="CREATUS-SMG"
              fecha="May 2025"
              descripcion="System of Gas Control for the CREATUS company Arduino C++ code for an ESP32 microcontroller, and data visualization with C# server"
              rol="Developer"
              link="https://github.com/StevenProgrammer01/CREATUS-SMG.git"
            />
            <ProyectoCard
              titulo="WhatsApp + Dialog Flow Integration"
              fecha="May 2025"
              descripcion="Developed an API using Python and Flask to integrate a Dialog Flow chatbot with WhatsApp through Twilio."
              rol="Developer"
              link="https://github.com/StevenTEC295/whatsappAgent"
            />

            <ProyectoCard
              titulo="WhatsApp + Dialog Flow Integration"
              fecha="May 2025"
              descripcion="Developed an API using Python and Flask to integrate a Dialog Flow chatbot with WhatsApp through Twilio."
              rol="Developer"
              link="https://github.com/StevenTEC295/whatsappAgent"
            />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Contact</h2>
          <p className="text-gray-700">Email: <a className="text-blue-600" href="mailto:steven.josspa@gmail.com">steven.josspa@gmail.com</a></p>
          <p className="text-gray-700">Phone: +506 88194763</p>
          <p className="text-gray-700">Availability: Evenings and weekends</p>
          <p className="text-gray-700">Languages: Spanish (Native), English (B2)</p>
        </section>
      </div>
    </div>
  );
} 