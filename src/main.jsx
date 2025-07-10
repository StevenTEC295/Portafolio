import { Github, Linkedin } from "lucide-react";
import "./Layout.css";

export default function Portfolio() {
  return (
    <div className="layout-container">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-blue-800">Steven Josué Pérez Aguilar</h1>
          <p className="text-blue-600">Computer Engineering Student | Freelance Developer</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/StevenProgrammer01" target="_blank">
              <Github className="w-6 h-6 text-blue-700 hover:text-blue-900" />
            </a>
            <a href="http://www.linkedin.com/in/steven-josué-pérez-aguilar-b153a2266" target="_blank">
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
            <li>Web: HTML, CSS, React, Node.js</li>
            <li>Version Control: Git / GitHub</li>
            <li>Databases: MySQL, MongoDB</li>
            <li>Tools: Figma, REST APIs, Docker, Flask, Pandas, TensorFlow, Scikit Learn</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Key Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="shadow-lg border border-blue-100 rounded-xl p-4">
              <h3 className="text-xl font-bold text-blue-800">Gas Control System (CREATUS)</h3>
              <p className="text-gray-600 text-sm mb-2">2024 - Currently</p>
              <p className="text-gray-700">
                Designed a system to monitor the environment of an underwater habitat using C++ for microcontroller control,
                and C# for the desktop interface. Integrated Oxygen, CO2, Humidity, and Temperature sensors.
              </p>
              <p className="text-sm text-blue-600 mt-2">Role: Developer and Electronic Engineer</p>
            </div>

            <div className="shadow-lg border border-blue-100 rounded-xl p-4">
              <h3 className="text-xl font-bold text-blue-800">WhatsApp + Dialog Flow Integration</h3>
              <p className="text-gray-600 text-sm mb-2">May 2025</p>
              <p className="text-gray-700">
                Developed an API using Python and Flask to integrate a Dialog Flow chatbot with WhatsApp through Twilio.
              </p>
              <p className="text-sm text-blue-600">Role: Developer</p>
              <a
                className="text-blue-600 hover:underline mt-2 inline-block"
                href="https://github.com/StevenTEC295/whatsappAgent"
                target="_blank"
              >
                View on GitHub
              </a>
            </div>
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
