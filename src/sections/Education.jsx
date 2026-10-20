
import React from "react";
import { GraduationCap, BookOpen, CalendarDays } from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Education
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            My{" "}
            <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-purple-500 to-cyan-400" />

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            My academic background and the knowledge that shaped my journey
            toward becoming a software developer.
          </p>
        </div>

        {/* Education Card */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-linear-to-b from-purple-500 via-cyan-400 to-transparent md:block" />

          <div className="relative md:pl-16">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-8 hidden h-12 w-12 items-center justify-center rounded-full border border-purple-500/40 bg-slate-950 text-purple-400 shadow-lg shadow-purple-500/20 md:flex">
              <GraduationCap size={25} />
            </div>

            {/* Main Card */}
            <div className="group rounded-3xl border border-white/10 bg-white/3 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/5 md:p-9">
              {/* Top */}
              <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-sm text-purple-300">
                    <BookOpen size={16} />
                    Currently Studying
                  </div>

                  <h3 className="text-2xl font-bold sm:text-3xl">
                    BS Computer Science
                  </h3>

                  <p className="mt-2 text-lg font-medium text-cyan-400">
                   Arid Institute of Management Sciences, Lahore
                  </p>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CalendarDays size={17} />
                  <span>Undergraduate</span>
                </div>
              </div>

              {/* Divider */}
              <div className="mb-7 h-px bg-white/10" />

              {/* Details */}
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-slate-900/50 p-5">
                  <p className="mb-2 text-sm text-slate-500">
                    Degree
                  </p>

                  <p className="font-semibold text-white">
                    BS Computer Science
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-slate-900/50 p-5">
                  <p className="mb-2 text-sm text-slate-500">
                    CGPA
                  </p>

                  <p className="font-semibold text-cyan-400">
                    3.7 / 4.0
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-slate-900/50 p-5">
                  <p className="mb-2 text-sm text-slate-500">
                    Field
                  </p>

                  <p className="font-semibold text-white">
                    Computer Science
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mt-7">
                <p className="leading-7 text-slate-400">
                  I am developing a strong foundation in computer science,
                  software development, databases, web technologies, and
                  problem solving. Alongside my academic studies, I am
                  building practical projects using the MERN stack and
                  exploring AI and modern web technologies.
                </p>
              </div>

              {/* Relevant Areas */}
              <div className="mt-7">
                <p className="mb-3 text-sm font-semibold text-slate-300">
                  Relevant Areas
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "MERN Stack",
                    "Database Systems",
                    "Software Engineering",
                    "Data Structures",
                    "Object-Oriented Programming",
                    "AI & LLMs",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/4 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-linear-to-r from-cyan-500/5 to-purple-500/5 p-6 text-center">
          <p className="text-slate-300">
            🎓{" "}
            <span className="font-semibold text-white">
              Focused on continuous learning
            </span>{" "}
            and turning academic knowledge into real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;

