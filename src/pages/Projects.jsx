import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            My Work
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            All Projects
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            A collection of my MERN stack, web development and AI projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </main>
  );
};

export default Projects;