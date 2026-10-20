import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-purple-500/40">
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-slate-900">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-linear-to-br from-purple-900/30 to-cyan-900/30">
            <span className="text-5xl font-bold text-white/10">N</span>
          </div>
        )}

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 opacity-0 transition duration-300 group-hover:opacity-100">
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-105"
          >
            View Details
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>

        <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-400">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-white/4 px-2.5 py-1 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 4 && (
            <span className="rounded-md border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-xs text-purple-300">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to={`/projects/${project.id}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:border-purple-500/40 hover:bg-purple-500/10"
          >
            Details
            <ArrowUpRight size={16} />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-400"
              aria-label={`${project.title} GitHub repository`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4.5 w-4.5"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-400"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
