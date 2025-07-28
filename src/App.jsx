import {
  Award,
  BookOpen,
  Calendar,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Data Store - Your actual CV information
const portfolioData = {
  personal: {
    name: "Sameera Jayakodi",
    title: "Full-Stack Developer",
    tagline: "Building Innovative Web & Mobile Solutions",
    bio: "Computer Science graduate with a strong passion for full-stack development and AI integration. Experienced in building responsive web applications using Spring Boot and the MERN stack. Focused, collaborative, and eager to contribute to innovative development teams.",
    location: "Homagama, Sri Lanka",
    email: "sameerajayakodi456@gmail.com",
    phone: "+94 770309842",
    github: "github.com/sameerajayakodi",
    linkedin: "linkedin.com/sameera-jayakodi",
  },
  skills: {
    languages: ["JavaScript", "Java", "Python", "SQL", "Dart", "PHP"],
    frontend: [
      "React.js",
      "React Native",
      "Flutter",
      "HTML/CSS",
      "Tailwind CSS",
      "Figma",
    ],
    backend: ["Node.js", "Express.js", "Spring Boot", "ASP.NET", "PHP"],
    databases: ["MySQL", "MongoDB", "SQL Server", "Firebase", "Firestore"],
    tools: [
      "GitHub",
      "AWS (EC2, RDS)",
      "Vercel",
      "JWT",
      "Clerk",
      "Cloudinary",
      "Git",
    ],
    other: ["REST APIs", "Agile", "Dialogflow", "UI/UX Design"],
  },
  experience: [
    {
      role: "Freelance React Developer",
      company: "Wemixt Software Company – Remote",
      period: "Feb 2025 – May 2025",
      achievements: [
        "Delivered a React.js website for Devisers Immigration within a 2-month deadline",
        "Met all client UX and functionality requirements",
        "Collaborated on agile sprints with PMs to deliver all client requirements",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "GoviMart – Full Stack Grocery Delivery",
      description:
        "Developed a full-stack grocery delivery app with user/admin dashboards, secure authentication, dynamic product management, and Stripe payment integration.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "Tailwind",
        "JWT",
      ],
      category: "Full-Stack",
      type: "Web Application",
    },
    {
      id: 2,
      title: "HireLink – AI Job Portal Platform",
      description:
        "Built AI-powered job portal for seekers, employers, and trainers with REST APIs and Chatbot integration using Gemini API.",
      tech: ["React", "Spring Boot", "MySQL", "AWS", "Gemini API"],
      category: "AI Integration",
      type: "Web Platform",
    },
    {
      id: 3,
      title: "Torva – Real-World Treasure Hunt",
      description:
        "Built a cross-platform mobile game with GPS-based treasure hunts, Google Maps integration, and real-time multiplayer features.",
      tech: [
        "Flutter",
        "Firebase",
        "Firestore",
        "Google Maps API",
        "Cloud Functions",
      ],
      category: "Mobile App",
      type: "Cross-Platform",
    },
    {
      id: 4,
      title: "Auction House Management System",
      description:
        "Implemented dynamic bidding system with user roles, auction monitoring, and JWT authentication with responsive UI design.",
      tech: [
        "React.js",
        "ASP.NET Core",
        "Entity Framework",
        "SQL Server",
        "Tailwind",
      ],
      category: "Full-Stack",
      type: "Web Application",
    },
    {
      id: 5,
      title: "Homomorphic Encryption Demo",
      description:
        "Created an interactive web app demonstrating homomorphic encryption with real-time visualizations and step-by-step simulations.",
      tech: ["Python", "Flask", "NumPy", "Chart.js", "Bootstrap"],
      category: "AI/Security",
      type: "Educational Tool",
    },
    {
      id: 6,
      title: "PHP Prescription Management",
      description:
        "Built a healthcare platform with multi-pharmacy quotations, drag-and-drop prescription upload, and role-based access control.",
      tech: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
      category: "Healthcare",
      type: "Web Platform",
    },
  ],
  education: [
    {
      degree: "BSC (HONS) COMPUTER SCIENCE",
      institution: "NSBM Green University",
      period: "Oct 2022 - Dec 2026",
      focus:
        "Software Engineering, Algorithms, Databases, AI, Cybersecurity, Cloud Computing",
    },
    {
      degree: "Advanced Fullstack Program",
      institution: "University of Moratuwa – ACPT",
      period: "Jun 2024 - Dec 2024",
      focus: "Practical training in web, mobile, and desktop app development",
    },
  ],
  certifications: [
    {
      title: "Trainee Fullstack Web Developer",
      organization: "University of Moratuwa",
      period: "Jun 2024 - Dec 2024",
    },
    {
      title: "Python Programming, Angular, Node.js",
      organization: "University of Moratuwa – Short Courses",
      period: "Jun 2022 - Dec 2023",
    },
  ],
};

// Animated Background Component
const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-30" />;
};

// Navigation Component
const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-12 lg:px-24 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-white">SJ</div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors duration-300 hover:text-white ${
                  activeSection === item.id ? "text-white" : "text-gray-400"
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button className="px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors duration-300">
            Book a call
          </button>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = ({ data }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Innovation", "Excellence", "Creativity", "Impact"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="max-w-5xl mx-auto px-12 lg:px-24 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-medium">
              Available for work
            </span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 text-white">
          {data.personal.name}
        </h1>

        <div className="text-2xl md:text-4xl font-bold mb-8 h-12">
          <span className="text-gray-200">Full-Stack Developer</span>
        </div>

        <div className="text-xl md:text-2xl font-medium mb-12 h-8">
          <span className="text-gray-400">
            Crafting digital experiences with{" "}
          </span>
          <span key={currentWord} className="text-white animate-pulse">
            {words[currentWord]}
          </span>
        </div>

        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {data.personal.bio}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-8 py-4 bg-white text-black rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gray-200">
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <ExternalLink className="w-5 h-5" />
              View Projects
            </span>
          </button>

          <button className="px-8 py-4 border-2 border-white/20 rounded-xl font-semibold text-gray-300 hover:border-white hover:text-white transition-all duration-300">
            Download CV
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{data.personal.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Phone className="w-4 h-4" />
            <span className="text-sm">{data.personal.phone}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = ({ skills }) => {
  const skillCategories = [
    { name: "Languages", skills: skills.languages },
    { name: "Frontend", skills: skills.frontend },
    { name: "Backend", skills: skills.backend },
    { name: "Databases", skills: skills.databases },
    { name: "Tools/DevOps", skills: skills.tools },
    { name: "Other", skills: skills.other },
  ];

  return (
    <section id="about" className="py-20 mt-12 px-12 lg:px-24 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1 text-white">
                  {category.name}
                </h3>
                <div className="w-12 h-1 bg-white rounded-full"></div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Full-Stack",
    "AI Integration",
    "Mobile App",
    "Healthcare",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            A showcase of my recent work in full-stack development and AI
            integration
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-black"
                    : "bg-white/10 text-gray-400 hover:text-white hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-400">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 bg-white/10 px-2 py-1 rounded">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gray-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 text-gray-400 rounded text-xs border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition-colors duration-300">
                    <ExternalLink className="w-3 h-3" />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-white/20 text-gray-400 rounded-lg text-sm hover:border-white/40 transition-colors duration-300">
                    <Github className="w-3 h-3" />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience & Education Section
const ExperienceSection = ({ experience, education, certifications }) => {
  return (
    <section id="experience" className="py-20 px-12 lg:px-24 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
          Experience & Education
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <Users className="w-6 h-6 text-white" />
              Work Experience
            </h3>

            {experience.map((exp, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-white mb-1">
                        {exp.role}
                      </h4>
                      <p className="text-gray-300 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-white" />
              Education
            </h3>

            {education.map((edu, index) => (
              <div key={index} className="relative mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-300 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-400 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </p>
                  <p className="text-gray-300 text-sm">{edu.focus}</p>
                </div>
              </div>
            ))}

            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-3 mt-8">
              <Award className="w-5 h-5 text-white" />
              Certifications
            </h4>

            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4"
              >
                <h5 className="font-bold text-white text-sm mb-1">
                  {cert.title}
                </h5>
                <p className="text-gray-300 text-sm mb-1">
                  {cert.organization}
                </p>
                <p className="text-xs text-gray-400">{cert.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = ({ personal }) => {
  return (
    <section id="contact" className="py-20 px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
          Let's Work Together
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss how we can build
          something amazing together.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href={`mailto:${personal.email}`}
            className="group flex flex-col items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Email</h3>
              <p className="text-gray-400 text-sm">{personal.email}</p>
            </div>
          </a>

          <a
            href={`https://${personal.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
              <Github className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">GitHub</h3>
              <p className="text-gray-400 text-sm">View my code</p>
            </div>
          </a>

          <a
            href={`https://${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Let's connect</p>
            </div>
          </a>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © 2025 {personal.name}. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

// Main App Component
export default function SameeraPortfolio() {
  return (
    <div className="bg-black text-white min-h-screen relative">
      <AnimatedBackground />
      <Navigation />

      <HeroSection data={portfolioData} />
      <SkillsSection skills={portfolioData.skills} />
      <ProjectsSection projects={portfolioData.projects} />
      <ExperienceSection
        experience={portfolioData.experience}
        education={portfolioData.education}
        certifications={portfolioData.certifications}
      />
      <ContactSection personal={portfolioData.personal} />
    </div>
  );
}
