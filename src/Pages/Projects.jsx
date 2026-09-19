import rakhtsetu from "../assets/rakhsetu.png";
import daily from "../assets/Daily.png";

const projects = [
  {
    title: "RakhtSetu- Blood of Bridge",
    image: rakhtsetu,
    description:
      "RakhtSetu – Blood of Bridge is a web application that connects blood donors with people in need, helping users search for suitable donors and request blood during emergencies.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "React.js"],
    live: "#",
    github: "https://github.com/956krushna/RakhtSetu-Bridge-of-Blood",
  },
  {
    title: "DailyUpdate",
    image: daily,
    description:
      "DailyUpdate is a responsive news web application that allows users to explore the latest news across categories such as business, entertainment, sports, science, and technology.",
    technologies: ["HTML", "BootStrap", "JavaScript", "React.js"],
    live: "#",
    github: "https://github.com/956krushna/DailyUpdate",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[var(--bg-primary)]
        px-5
        py-20
        sm:px-8
        md:px-10
        lg:px-12
      "
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[var(--secondary)]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="text-xl text-[var(--primary-light)]">
                →
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--primary-light)]">
                My Projects
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              Featured{" "}
              <span className="bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>
          <a
            href="https://github.com/956krushna"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-[var(--primary-light)] transition-all duration-300 hover:text-[var(--secondary-light)]"
          >
            View All Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

        {/* PROJECT GRID */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--bg-secondary)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[var(--primary)]
                hover:shadow-[0_0_35px_rgba(0,140,255,0.18)]
              "
            >
             {/* IMAGE */}
              <div className="relative m-4 h-48 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-primary)]">
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--secondary)]/10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* CONTENT */}
              <div className="px-5 pb-5">
                <h3 className="text-xl font-bold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--primary-light)]">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  {project.description}
                </p>
                {/* TECHNOLOGIES */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary-light)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                {/* BUTTONS */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <a
                    href={project.live}
                    className="flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-3 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                  >
                    Live Demo
                    <span>↗</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center gap-2 rounded-full border border-[var(--primary)] bg-[var(--bg-primary)] px-3 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--bg-card)]"
                  >
                    <span>◉</span>
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;