import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import projects from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackToProjects = () => {
    navigate("/", { state: { scrollToProjects: true } });
  };

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Project Not Found</h1>

          <p className="mb-6 text-slate-400">
            The project you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 font-medium transition hover:bg-purple-500"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <button
          onClick={handleBackToProjects}
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </button>

        {/* Project Image */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-auto max-h-137.5 w-full object-cover"
            />
          ) : (
            <div className="flex h-80 items-center justify-center bg-linear-to-br from-purple-900/30 to-cyan-900/30">
              <span className="text-7xl font-bold text-white/10">N</span>
            </div>
          )}
        </div>

        {/* Category */}
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          {project.category}
        </span>

        {/* Title */}
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">{project.title}</h1>

        {/* Description */}
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-10">
          <h2 className="mb-5 text-2xl font-bold">Technologies Used</h2>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-white/10 bg-white/4 px-4 py-2 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* What I Built */}
        <div className="mt-12">
          <h2 className="mb-5 text-2xl font-bold">Project Highlights</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Responsive user interface",
              "REST API integration",
              "Database integration",
              "CRUD functionality",
              "Reusable components",
              "Modern development practices",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 p-4"
              >
                <CheckCircle2 size={20} className="shrink-0 text-cyan-400" />

                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4.75 w-4.75"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
              </svg>
              View GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-300 transition hover:scale-105"
            >
              <ExternalLink size={19} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
