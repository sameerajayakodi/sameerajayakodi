import auctionHouse from "./auctionHouse.jpeg";
import govimart from "./govimart.png";
import hireLink from "./hireLink.png";
import hireSphere from "./hireSphere.png";
import homomorphic101 from "./homomorphic101.png";
import kittyCare from "./kittyCare.png";
import knucklesView from "./knucklesView.png";
import prescriptionSystem from "./prescriptionManagement.png";
import torva from "./torva.jpeg";

export const aboutMe = {
  name: "Sameera Jayakodi",
  title: "Full Stack Software Engineer",
  summary: `Computer Science graduate with a strong interest in software engineering and full-stack
development. Experienced in building responsive web applications using Spring Boot and the MERN
stack. Proficient in JavaScript, React, Node.js, and databases, with a solid understanding of UI/UX
design and modern development practices. Focused, collaborative, and eager to contribute to
innovative development teams.
`,
  location: "Homagama, Sri Lanka",
  email: "sameerajayakodi456@gmail.com",
  github: "https://github.com/sameerajayakodi",
  linkedin: "https://linkedin.com/in/sameera-jayakodi-6a3a81226/",
};

export const skills = {
  languages: ["JavaScript", "Java", "Python", "SQL", "Dart"],
  frontend: ["React.js", "React Native", "Tailwind CSS", "Figma"],
  backend: ["Node.js", "Express.js", "Spring Boot", "ASP.NET Core", "PHP"],
  databases: ["MySQL", "MongoDB", "SQL Server"],
  tools: ["GitHub", "AWS", "Vercel", "JWT", "Cloudinary"],
};

export const projects = [
  {
    name: "HireLink – AI Job Platform",
    description:
      "Multi-role platform for job seekers, employers, and trainers with AI-powered features.",
    tech: ["React", "Spring Boot", "MySQL", "AWS", "Gemini API"],
    link: "https://github.com/sameerajayakodi/hirelink-client",
    image: hireLink,
  },
  {
    name: "GoviMart – Grocery Delivery App",
    description:
      "Full-stack grocery delivery app with dashboards and Stripe integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://github.com/sameerajayakodi/govimart-client",
    image: govimart,
  },
  {
    name: "Kitty Care – Petshop POS System",
    description:
      "JavaFX GUI-based POS system with JDBC backend for order and inventory tracking using MVC pattern.",
    tech: ["Java", "JavaFX", "MySQL", "MVC"],
    link: "",
    image: kittyCare,
  },
  {
    name: "Knuckles View – Hotel Management System",
    description:
      "Hotel management system with 3NF schema, SQL procedures, triggers, and views.",
    tech: ["MySQL", "SQL Procedures", "Triggers", "Views"],
    link: "https://github.com/sameerajayakodi/knuckles_view_hotel_client",
    image: knucklesView,
  },
  {
    name: "Homomorphic 101 – Homomorphic Encryption Demo",
    description:
      "Interactive web app demonstrating homomorphic encryption with real-time visualizations.",
    tech: [
      "Python",
      "Flask",
      "NumPy",
      "HTML5",
      "Bootstrap",
      "JavaScript",
      "Chart.js",
    ],
    link: "https://homomorphic-101.vercel.app/",
    image: homomorphic101,
  },

  {
    name: "Auction House – Auction Management System",
    description:
      "Auction platform with dynamic bidding, user roles, JWT authentication, and React/Tailwind UI.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "ASP.NET Core",
      "Entity Framework",
      "SQL Server",
    ],
    link: "",
    image: auctionHouse,
  },
  {
    name: "HireSphere – Job Portal Web Application",
    description:
      "MERN-based job portal with Clerk authentication, Cloudinary media uploads, and REST APIs.",
    tech: ["React", "Node.js", "MongoDB", "Clerk Auth", "Vite", "Atlas"],
    link: "https://github.com/sameerajayakodi/hire-sphere-client",
    image: hireSphere,
  },

  {
    name: "Torva – Treasure Hunt Mobile App",
    description:
      "Cross-platform mobile game with GPS treasure hunts, Firebase auth, leaderboards, and multiplayer features.",
    tech: [
      "Flutter",
      "Firebase",
      "Google Maps API",
      "Firestore",
      "Cloud Functions",
    ],
    link: "https://github.com/sameerajayakodi/Torva",
    image: torva,
  },
  {
    name: "PHP Prescription Management System",
    description:
      "Full-stack healthcare platform with multi-pharmacy quotations, secure role-based access, and email notifications.",
    tech: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/sameerajayakodi/medical-prescription-upload-system",
    image: prescriptionSystem,
  },
];

// ----------------------
// FILE CONTENTS
// ----------------------
export const fileContents = {
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

  // Newly added files
  "styles.css": {
    content: `/* Global Styles */
body {
  font-family: 'Inter', sans-serif;
  background-color: #0d1117;
  color: #e6edf3;
  margin: 0;
  padding: 0;
}
.project {
  border: 1px solid #30363d;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
}`,
    language: "css",
  },

  "server.ts": {
    content: `import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Server is running with TypeScript!");
});

app.listen(PORT, () => {
  console.log(\`Server listening on port \${PORT}\`);
});`,
    language: "typescript",
  },

  "database.sql": {
    content: `-- Create Projects Table
CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  tech_stack VARCHAR(255),
  link VARCHAR(255)
);

-- Insert Example
INSERT INTO projects (name, description, tech_stack, link)
VALUES ('HireLink – AI Job Platform', 'Multi-role job platform with AI features', 'React, Spring Boot, MySQL', 'https://github.com/sameerajayakodi/hirelink-client');`,
    language: "sql",
  },

  Dockerfile: {
    content: `# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install

# Copy project files
COPY . .

# Build and serve
RUN npm run build
CMD ["npm", "start"]`,
    language: "docker",
  },

  "package.json": {
    content: `{
  "name": "sameera-portfolio",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "start": "vite preview"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "vite": "^4.0.0"
  }
}`,
    language: "json",
  },

  "app.py": {
    content: `from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Flask App Running!"

if __name__ == "__main__":
    app.run(debug=True)`,
    language: "python",
  },

  "main.java": {
    content: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello from Java Portfolio!");
  }
}`,
    language: "java",
  },

  "index.php": {
    content: `<?php
echo "Welcome to Sameera's PHP Portfolio!";
?>`,
    language: "php",
  },
};

export const files = [
  { name: "about.js", icon: "📜", type: "javascript" }, // Script scroll
  { name: "skills.json", icon: "🗂️", type: "json" }, // Folder/files
  { name: "projects.html", icon: "🌐", type: "html" }, // Web/Globe
  { name: "README.md", icon: "📖", type: "markdown" }, // Book/Docs
  { name: "styles.css", icon: "🎨", type: "css" }, // Palette for styles
  { name: "server.ts", icon: "⚙️", type: "typescript" }, // Gear for backend
  { name: "database.sql", icon: "🗄️", type: "sql" }, // Database cabinet
  { name: "Dockerfile", icon: "🐳", type: "docker" }, // Docker whale
  { name: "package.json", icon: "📦", type: "node" }, // Box for packages
  { name: "app.py", icon: "🐍", type: "python" }, // Snake for Python
  { name: "main.java", icon: "☕", type: "java" }, // Coffee for Java
  { name: "index.php", icon: "🐘", type: "php" }, // Elephant for PHP
];
