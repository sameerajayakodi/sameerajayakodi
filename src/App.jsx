import { useState } from "react";
import profileImage from "./assets/profile.jpg";
<assets />;
const App = () => {
  const [activeFile, setActiveFile] = useState("about.js");
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showVisualPortfolio, setShowVisualPortfolio] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Hi! 👋 Want to know about Sameera's portfolio?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const [terminalLines, setTerminalLines] = useState([
    { type: "command", prompt: "portfolio@dev:~$", text: "npm start" },
    { type: "output", text: "Starting development server..." },
    { type: "output", text: "✓ Portfolio compiled successfully!" },
    { type: "cursor", prompt: "portfolio@dev:~$", text: "_" },
  ]);

  // ----------------------
  // CV DATA
  // ----------------------
  const aboutMe = {
    name: "Sameera Jayakodi",
    title: "Full Stack Developer | React & Node.js",
    summary:
      "Computer Science undergraduate skilled in MERN stack, Spring Boot, and cloud deployments. Experienced in delivering full-stack projects like GoviMart and HireLink with AI integrations.",
    location: "Homagama, Sri Lanka",
    email: "sameerajayakodi456@gmail.com",
    github: "https://github.com/sameerajayakodi",
    linkedin: "https://linkedin.com/in/sameera-jayakodi-6a3a81226/",
  };

  const skills = {
    languages: ["JavaScript", "Java", "Python", "SQL", "Dart"],
    frontend: ["React.js", "React Native", "Tailwind CSS", "Figma"],
    backend: ["Node.js", "Express.js", "Spring Boot", "ASP.NET Core", "PHP"],
    databases: ["MySQL", "MongoDB", "SQL Server"],
    tools: ["GitHub", "AWS", "Vercel", "JWT", "Cloudinary"],
  };

  const projects = [
    {
      name: "HireLink – AI Job Platform",
      description:
        "Multi-role platform for job seekers, employers, and trainers with AI-powered features.",
      tech: ["React", "Spring Boot", "MySQL", "AWS", "Gemini API"],
      link: "https://github.com/sameerajayakodi/hirelink-client",
    },
    {
      name: "GoviMart – Grocery Delivery App",
      description:
        "Full-stack grocery delivery web application with dashboards and Stripe integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/sameerajayakodi/govimart-client",
    },
    {
      name: "Torva – Treasure Hunt Mobile App",
      description:
        "Cross-platform mobile game with GPS treasure hunts and Firebase backend.",
      tech: ["Flutter", "Firebase", "Google Maps API"],
      link: "https://github.com/sameerajayakodi/Torva",
    },
  ];

  // ----------------------
  // FILE CONTENTS
  // ----------------------
  const fileContents = {
    "about.js": {
      content: `// About Me
class Developer {
  constructor() {
    this.name = "${aboutMe.name}";
    this.title = "${aboutMe.title}";
    this.location = "${aboutMe.location}";
    this.email = "${aboutMe.email}";
  }

  getSummary() {
    return "${aboutMe.summary}";
  }
}

const me = new Developer();
console.log(me.getSummary());`,
      language: "javascript",
    },
    "skills.json": {
      content: JSON.stringify(skills, null, 2),
      language: "json",
    },
    "projects.html": {
      content: projects
        .map(
          (p) =>
            `<div class="project">
  <h3>${p.name}</h3>
  <p>${p.description}</p>
  <p><b>Tech:</b> ${p.tech.join(", ")}</p>
</div>`
        )
        .join("\n\n"),
      language: "html",
    },
    "README.md": {
      content: `# Sameera Jayakodi Portfolio

Full-stack developer experienced in MERN and Spring Boot. Explore my projects and skills below.`,
      language: "markdown",
    },
  };

  const files = [
    { name: "about.js", icon: "🟨", type: "javascript" },
    { name: "skills.json", icon: "🟧", type: "json" },
    { name: "projects.html", icon: "🟥", type: "html" },
    { name: "README.md", icon: "⬜", type: "markdown" },
  ];

  // Syntax highlighting
  const highlightSyntax = (code, language) => {
    const keywordPatterns = {
      javascript:
        /(class|constructor|function|const|let|var|return|this|new|console)/g,
      json: /("[\w\s-]+")(?=\s*:)/g,
      html: /(<\/?[\w\s="/.':;#-\/\?]+>)/g,
      markdown: /(#{1,6}\s+.+)/g,
    };
    return code
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(
        keywordPatterns[language],
        '<span class="text-blue-400">$1</span>'
      );
  };

  const generateLineNumbers = (content) =>
    Array.from({ length: content.split("\n").length }, (_, i) => i + 1);

  // Run button logic
  const handleRun = () => {
    setIsRunning(true); // Switch button to Stop
    setShowGuide(false);
    setTerminalOpen(true);
    setTerminalLines([
      { type: "command", prompt: "portfolio@dev:~$", text: "npm run build" },
    ]);
    setTimeout(() => {
      setTerminalLines((prev) => [
        ...prev,
        { type: "output", text: "Building portfolio..." },
      ]);
    }, 500);
    setTimeout(() => {
      setTerminalLines((prev) => [
        ...prev,
        { type: "output", text: "✓ Build complete." },
        { type: "command", prompt: "portfolio@dev:~$", text: "npm start" },
        { type: "output", text: "Launching portfolio..." },
      ]);
    }, 1500);
    setTimeout(() => {
      setShowVisualPortfolio(true);
      setTerminalOpen(false);
    }, 3000);
  };

  // Stop button logic
  const handleStop = () => {
    setIsRunning(false);
    setShowVisualPortfolio(false);
    setTerminalOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Chatbot send message
  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    setChatMessages((prev) => [...prev, { sender: "user", text: userInput }]);
    setUserInput("");

    // Simulate bot reply
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thanks for your message! I'll respond shortly.",
        },
      ]);
    }, 1000);
  };

  const currentFile = fileContents[activeFile];

  return (
    <div className="h-screen bg-gray-900 text-gray-300 font-mono flex flex-col relative">
      {/* Guide popup */}
      {showGuide && !showVisualPortfolio && (
        <div className="absolute top-3 left-3 bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-bounce z-20">
          👉 Click the green RUN button to view portfolio
        </div>
      )}

      {/* Menu Bar */}
      <div className="bg-gray-700 h-9 flex items-center px-3 border-b border-gray-800">
        {["File", "Edit", "View"].map((item) => (
          <div
            key={item}
            className="px-3 py-2 text-sm hover:bg-gray-600 rounded cursor-pointer"
          >
            {item}
          </div>
        ))}
        {/* Buttons on Right */}
        <div className="ml-auto mr-3 flex gap-2">
          {!isRunning ? (
            <div
              className="bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded cursor-pointer font-bold"
              onClick={handleRun}
            >
              ▶ Run
            </div>
          ) : (
            <div
              className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded cursor-pointer font-bold"
              onClick={handleStop}
            >
              ■ Stop
            </div>
          )}
        </div>
      </div>

      {/* Toggle views */}
      {!showVisualPortfolio ? (
        <>
          {/* Code Editor View */}
          <div className="flex flex-1 overflow-hidden">
            {/* Activity Bar */}
            <div className="w-12 bg-gray-800 flex flex-col items-center py-2 border-r border-gray-700">
              {/* Explorer toggle */}
              <div
                className={`w-8 h-8 my-1 flex items-center justify-center cursor-pointer rounded hover:bg-gray-700 ${
                  sidebarOpen ? "bg-blue-600" : ""
                }`}
                onClick={toggleSidebar}
              >
                📁
              </div>
            </div>

            {/* Sidebar */}
            {sidebarOpen && (
              <div className={`w-60 bg-gray-800 border-r border-gray-700`}>
                <div className="bg-gray-700 px-4 py-2 text-xs uppercase text-gray-400 font-bold">
                  Explorer
                </div>
                {files.map((file) => (
                  <div
                    key={file.name}
                    className={`px-4 py-1 cursor-pointer ${
                      activeFile === file.name ? "bg-blue-900" : ""
                    }`}
                    onClick={() => setActiveFile(file.name)}
                  >
                    {file.icon} {file.name}
                  </div>
                ))}
              </div>
            )}

            {/* Code content */}
            <div className="flex-1 flex flex-col">
              <div className="bg-gray-700 flex border-b border-gray-800 px-4 py-2">
                <span>{activeFile}</span>
              </div>
              <div className="flex-1 bg-gray-900 flex overflow-hidden">
                <div className="text-gray-500 text-sm py-4 px-2 bg-gray-900 border-r border-gray-800">
                  {generateLineNumbers(currentFile.content).map((num) => (
                    <div key={num}>{num}</div>
                  ))}
                </div>
                <div className="flex-1 p-4 overflow-auto">
                  <pre className="leading-5 text-sm whitespace-pre-wrap">
                    <code
                      dangerouslySetInnerHTML={{
                        __html: highlightSyntax(
                          currentFile.content,
                          currentFile.language
                        ),
                      }}
                    />
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal */}
          {terminalOpen && (
            <div className="h-48 bg-gray-900 border-t border-gray-700 p-3 overflow-auto text-sm">
              {terminalLines.map((line, i) => (
                <div key={i}>
                  {line.type === "command" && (
                    <>
                      <span className="text-blue-400">{line.prompt}</span>{" "}
                      <span className="text-orange-300">{line.text}</span>
                    </>
                  )}
                  {line.type === "output" && (
                    <span className="text-gray-300">{line.text}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          {/* Visual Portfolio */}
          <div className="p-6 overflow-auto flex-1">
            {/* Profile Header */}
            <div className="flex items-center gap-6 mb-6">
              <img
                src={profileImage}
                alt="Profile"
                className="w-20 h-20 rounded-full border-2 border-blue-500 shadow-lg object-cover"
              />
              <div>
                <h1 className="text-3xl text-white font-bold">
                  {aboutMe.name}
                </h1>
                <p className="text-gray-400">{aboutMe.title}</p>
                <p className="text-sm text-gray-500">{aboutMe.location}</p>
              </div>
            </div>

            <p className="text-gray-400 mb-6">{aboutMe.summary}</p>

            {/* Skills Section */}
            <h2 className="text-xl text-white mt-6 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {Object.values(skills)
                .flat()
                .map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
            </div>

            {/* Projects Section */}
            <h2 className="text-xl text-white mt-6 mb-3">Projects</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg flex items-center justify-between"
                >
                  <div className="flex-1 pr-3">
                    <h3 className="text-lg text-blue-400">{p.name}</h3>
                    <p className="text-gray-300 text-sm mt-1">
                      {p.description}
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      {p.tech.join(", ")}
                    </p>
                    <a
                      href={p.link}
                      target="_blank"
                      className="text-orange-400 text-sm mt-2 inline-block"
                    >
                      View Project →
                    </a>
                  </div>
                  <img
                    src={`/images/project-${i + 1}.png`}
                    alt={p.name}
                    className="w-24 h-24 object-cover rounded border border-gray-600"
                  />
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <h2 className="text-xl text-white mt-6 mb-3">Contact</h2>
            <div className="text-gray-300 space-y-1">
              <p>Email: {aboutMe.email}</p>
              <p>
                GitHub:{" "}
                <a
                  href={aboutMe.github}
                  className="text-blue-400"
                  target="_blank"
                >
                  {aboutMe.github}
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href={aboutMe.linkedin}
                  className="text-blue-400"
                  target="_blank"
                >
                  {aboutMe.linkedin}
                </a>
              </p>
            </div>
          </div>
        </>
      )}

      {/* Chatbot */}
      <div className="absolute bottom-4 right-4">
        {!chatOpen ? (
          <button
            className="bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-500"
            onClick={() => setChatOpen(true)}
          >
            💬
          </button>
        ) : (
          <div className="bg-gray-800 w-64 h-80 rounded-lg shadow-lg flex flex-col">
            <div className="bg-blue-600 text-white p-2 flex justify-between">
              <span>Chatbot</span>
              <button onClick={() => setChatOpen(false)}>✖</button>
            </div>
            <div className="flex-1 p-2 overflow-auto text-sm">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-1 ${
                    msg.sender === "bot" ? "text-green-400" : "text-white"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="p-2 border-t border-gray-700 flex">
              <input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 text-black text-sm p-1 rounded"
                placeholder="Type message..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-2 ml-1 rounded"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
