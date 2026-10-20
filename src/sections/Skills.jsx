
import React from "react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Brain,
  Globe,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: <Code2 size={25} />,
    color: "purple",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "React Router",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: <Server size={25} />,
    color: "cyan",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "bcrypt",
      "CRUD Operations",
      "Middleware",
    ],
  },
  {
    title: "Database",
    icon: <Database size={25} />,
    color: "green",
    skills: [
      "MongoDB",
      "Mongoose",
      "MongoDB Atlas",
      "Database Design",
      "Schema Design",
    ],
  },
  {
    title: "Programming",
    icon: <Globe size={25} />,
    color: "pink",
    skills: [
      "JavaScript",
      "C++",
      "OOP",
      "Data Structures",
      "Problem Solving",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench size={25} />,
    color: "orange",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "AWS",
      "Vercel",
      "Azure",
      "VS Code",
      "Postman",
      "npm",
      "Docker",
      "Docker Hub",
      "Vite",
    ],
  },
  {
    title: "AI & APIs",
    icon: <Brain size={25} />,
    color: "blue",
    skills: [
      "LLM APIs",
      "Groq API",
      "Tavily",
      "AI Integration",
      "API Integration",
      "Tool Calling",
    ],
  },
];

const colorClasses = {
  purple: {
    icon: "bg-purple-500/10 text-purple-400",
    border: "hover:border-purple-500/40",
    badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-400",
    border: "hover:border-cyan-500/40",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  green: {
    icon: "bg-green-500/10 text-green-400",
    border: "hover:border-green-500/40",
    badge: "bg-green-500/10 text-green-300 border-green-500/20",
  },
  pink: {
    icon: "bg-pink-500/10 text-pink-400",
    border: "hover:border-pink-500/40",
    badge: "bg-pink-500/10 text-pink-300 border-pink-500/20",
  },
  orange: {
    icon: "bg-orange-500/10 text-orange-400",
    border: "hover:border-orange-500/40",
    badge: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-400",
    border: "hover:border-blue-500/40",
    badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Skills
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Technologies I{" "}
            <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-purple-500 to-cyan-400" />

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Technologies and tools I use to build modern, responsive,
            full-stack web applications and explore AI-powered solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => {
            const colors = colorClasses[category.color];

            return (
              <div
                key={category.title}
                className={`group rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-2 ${colors.border}`}
              >
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition duration-300 group-hover:scale-110 ${colors.icon}`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg border px-3 py-2 text-sm transition duration-200 hover:scale-105 ${colors.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-linear-to-r from-purple-500/10 via-slate-900/50 to-cyan-500/10 p-8">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Core Stack
            </p>

            <h3 className="mb-6 text-2xl font-bold sm:text-3xl">
              MERN Stack Development
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {["MongoDB", "Express.js", "React.js", "Node.js"].map(
                (technology) => (
                  <div
                    key={technology}
                    className="rounded-xl border border-white/10 bg-slate-900/70 px-5 py-3 text-sm font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
                  >
                    {technology}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

