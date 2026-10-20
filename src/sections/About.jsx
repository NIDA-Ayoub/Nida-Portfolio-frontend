
import React from "react";
import { Code2, GraduationCap, Rocket, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Get to Know{" "}
            <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-purple-500 to-cyan-400" />
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Side */}
          <div>
            <h3 className="mb-5 text-2xl font-bold sm:text-3xl">
              Hi, I'm <span className="text-cyan-400">Nida Ayub</span>
            </h3>

            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                I am a{" "}
                <span className="font-semibold text-white">
                  BS Computer Science student
                </span>{" "}
                at the{" "}
                <span className="font-semibold text-white">
                  University of Arid Agriculture, Institute of Management
                  Sciences, Lahore
                </span>
                , with a current CGPA of{" "}
                <span className="font-semibold text-cyan-400">3.7/4.0</span>.
              </p>

              <p>
                I am a passionate{" "}
                <span className="font-semibold text-purple-400">
                  MERN Stack Developer
                </span>{" "}
                who enjoys building modern, responsive, and user-friendly web
                applications using MongoDB, Express.js, React, and Node.js.
              </p>

              <p>
                I enjoy turning ideas into real-world projects and continuously
                improving my problem-solving and development skills. Along with
                full-stack development, I am also exploring{" "}
                <span className="font-semibold text-cyan-400">
                  AI and LLM technologies
                </span>{" "}
                to build smarter and more useful applications.
              </p>

              <p>
                My goal is to grow as a professional software developer,
                contribute to meaningful projects, and gain practical industry
                experience through{" "}
                <span className="font-semibold text-white">
                  internship and junior developer opportunities
                </span>
                .
              </p>
            </div>
          </div>

          {/* Right Side - Info Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Education */}
            <div className="group rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-purple-500/5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition group-hover:scale-110">
                <GraduationCap size={26} />
              </div>

              <h4 className="mb-2 text-lg font-semibold">Education</h4>

              <p className="text-sm leading-6 text-slate-400">
                BS Computer Science
                <br />
                Arid Agriculture / Institute of Management Sciences
                <br />
                Lahore
              </p>
            </div>

            {/* MERN */}
            <div className="group rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-cyan-500/5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition group-hover:scale-110">
                <Code2 size={26} />
              </div>

              <h4 className="mb-2 text-lg font-semibold">MERN Stack</h4>

              <p className="text-sm leading-6 text-slate-400">
                React, Node.js,
                <br />
                Express.js & MongoDB
              </p>
            </div>

            {/* AI */}
            <div className="group rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-pink-500/40 hover:bg-pink-500/5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 transition group-hover:scale-110">
                <Sparkles size={26} />
              </div>

              <h4 className="mb-2 text-lg font-semibold">AI & LLMs</h4>

              <p className="text-sm leading-6 text-slate-400">
                Exploring AI-powered
                <br />
                applications & LLM APIs
              </p>
            </div>

            {/* Career */}
            <div className="group rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-green-500/5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400 transition group-hover:scale-110">
                <Rocket size={26} />
              </div>

              <h4 className="mb-2 text-lg font-semibold">Career Goal</h4>

              <p className="text-sm leading-6 text-slate-400">
                Open to Internship
                <br />
                & Junior Developer Roles
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 gap-5 border-t border-white/10 pt-10 md:grid-cols-4">
          <div className="text-center">
            <h4 className="text-3xl font-bold text-purple-400">3.7</h4>
            <p className="mt-2 text-sm text-slate-400">CGPA / 4.0</p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-bold text-cyan-400">MERN</h4>
            <p className="mt-2 text-sm text-slate-400">Full Stack</p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-bold text-purple-400">AI</h4>
            <p className="mt-2 text-sm text-slate-400">Currently Exploring</p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-bold text-cyan-400">Open</h4>
            <p className="mt-2 text-sm text-slate-400">For Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

