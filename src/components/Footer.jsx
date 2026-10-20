
import { ArrowUp, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="/#home"
              className="group inline-flex items-center gap-3"
            >
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-purple-600 to-cyan-500 shadow-lg shadow-purple-500/20 transition duration-300 group-hover:scale-105">
                <span className="text-xl font-bold text-white">
                  N
                </span>

                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-wide">
                  Nida Ayub
                </h2>

                <p className="text-xs text-slate-400">
                  MERN Stack Developer
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              BS Computer Science student and MERN Stack Developer
              passionate about building modern, responsive and
              user-focused web applications.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/NIDA-Ayoub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
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
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.99H7.1v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0Z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:nidaayubnida@gmail.com"
                aria-label="Email"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
              >
                <Mail
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="/#home"
                  className="text-sm text-slate-400 transition hover:text-purple-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/#about"
                  className="text-sm text-slate-400 transition hover:text-purple-400"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/#skills"
                  className="text-sm text-slate-400 transition hover:text-purple-400"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="/#projects"
                  className="text-sm text-slate-400 transition hover:text-purple-400"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="/#education"
                  className="text-sm text-slate-400 transition hover:text-purple-400"
                >
                  Education
                </a>
              </li>

              <li>
                <a
                  href="/#contact"
                  className="text-sm text-slate-400 transition hover:text-purple-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="space-y-5">

              {/* Email */}
              <a
                href="mailto:nidaayub@example.com"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-purple-400"
                />

                <span className="text-sm leading-6 text-slate-400 transition group-hover:text-white">
                  nidaayub@example.com
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-cyan-400"
                />

                <span className="text-sm leading-6 text-slate-400">
                  Lahore, Pakistan
                </span>
              </div>

              {/* Let's Talk */}
              <a
                href="/#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan-400"
              >
                Let's Talk
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-slate-500">
            © {currentYear} Nida Ayub. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <p className="text-sm text-slate-500">
              Built with
              <span className="mx-1 text-purple-400">
                React
              </span>
              &
              <span className="mx-1 text-cyan-400">
                Tailwind CSS
              </span>
            </p>

            {/* Back To Top */}
            <a
              href="/#home"
              aria-label="Back to top"
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
            >
              <ArrowUp
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

