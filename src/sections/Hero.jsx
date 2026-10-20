
import {
  ArrowRight,
  Sparkles,
  
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-20"
    >
      {/* ================= Background ================= */}

      {/* Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 animate-pulse rounded-full bg-purple-700/20 blur-[120px]" />

        <div
          className="absolute -right-40 top-40 h-96 w-96 animate-pulse rounded-full bg-cyan-600/20 blur-[120px]"
          style={{ animationDelay: "1.5s" }}
        />

        <div
          className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]"
        />
      </div>

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Top Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-purple-500/70 to-transparent" />

      {/* ================= Content ================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ================= Left Content ================= */}

          <div className="max-w-3xl">

            {/* Available Badge */}
            <div className="mb-7 inline-flex animate-[fadeIn_0.8s_ease-out] items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              Open to Internship & Junior Opportunities
            </div>

            {/* Small Intro */}
            <div className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              <Sparkles className="h-4 w-4" />
              Hello, I'm
            </div>

            {/* Name */}
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Nida
              <span className="block bg-linear-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Ayub.
              </span>
            </h1>

            {/* Developer Title */}
            <h2 className="mt-5 text-2xl font-semibold text-slate-200 sm:text-3xl">
              MERN Stack{" "}
              <span className="text-purple-400">Developer</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I build modern, responsive and user-focused web applications
              using the{" "}
              <span className="font-medium text-slate-200">
                MERN Stack
              </span>
              . I'm passionate about turning ideas into clean, scalable and
              meaningful digital experiences.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              {/* Projects Button */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
              >
                View My Projects

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/10 hover:text-white"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-9 flex items-center gap-4">

              <span className="text-sm text-slate-500">
                Connect with me
              </span>

              <div className="h-px w-10 bg-slate-800" />

              {/* GitHub */}
              <a
                href="https://github.com/NIDA-Ayoub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.13c-3.19.69-3.86-1.35-3.86-1.35-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.18v3.23c0 .3.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nidaayub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.99H7.1v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 .77 24 1.72V22.28C24 23.23 23.21 24 22.23 24Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ================= Right Visual ================= */}

          <div className="relative hidden h-125 items-center justify-center lg:flex">

            {/* Outer Glow */}
            <div className="absolute h-80 w-80 animate-pulse rounded-full bg-purple-600/10 blur-3xl" />

            {/* Rotating Ring */}
            <div className="absolute h-80 w-80 animate-[spin_20s_linear_infinite] rounded-full border border-purple-500/20" />

            <div className="absolute h-64 w-64 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-cyan-500/20 border-dashed" />

            {/* Main Card */}
            <div className="relative flex h-72 w-72 rotate-3 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-purple-900/30 backdrop-blur-xl transition-transform duration-500 hover:rotate-0">

              {/* Inner Gradient */}
              <div className="absolute inset-3 rounded-2xl bg-linear-to-br from-purple-600/10 via-transparent to-cyan-500/10" />

              {/* N Logo */}
              <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-linear-to-br from-purple-600 to-cyan-500 shadow-2xl shadow-purple-500/30">
                <span className="text-7xl font-black text-white">
                  N
                </span>
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-12 top-10 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-2 shadow-xl backdrop-blur-md">
                <p className="text-xs text-slate-400">
                  Stack
                </p>
                <p className="font-semibold text-cyan-400">
                  MERN
                </p>
              </div>

              <div className="absolute -bottom-8 -left-10 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-2 shadow-xl backdrop-blur-md">
                <p className="text-xs text-slate-400">
                  Passion
                </p>
                <p className="font-semibold text-purple-400">
                  Web Development
                </p>
              </div>
            </div>

            {/* Floating Dots */}
            <div className="absolute left-12 top-16 h-3 w-3 animate-bounce rounded-full bg-purple-400 shadow-lg shadow-purple-500/50" />

            <div
              className="absolute bottom-20 right-12 h-3 w-3 animate-bounce rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"
              style={{ animationDelay: "0.8s" }}
            />

            <div
              className="absolute right-20 top-4 h-2 w-2 animate-pulse rounded-full bg-fuchsia-400"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 md:flex">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>

          <div className="h-8 w-5 rounded-full border border-slate-700 p-1">
            <div className="mx-auto h-1.5 w-1.5 animate-bounce rounded-full bg-purple-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
