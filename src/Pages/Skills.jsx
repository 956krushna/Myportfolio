import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import jsImage from "../assets/js.webp";
import reactImage from "../assets/react2.png";
import tailwindImage from "../assets/tailwindcss3.png";
import gitImage from "../assets/git3.png";

const skills = [
  {
    image: htmlImage,
    name: "HTML",
    percentage: 90,
  },
  {
    image: cssImage,
    name: "CSS",
    percentage: 80,
  },
  {
    image: jsImage,
    name: "JavaScript",
    percentage: 75,
  },
  {
    image: reactImage,
    name: "React",
    percentage: 70,
  },
  {
    image: tailwindImage,
    name: "Tailwind CSS",
    percentage: 85,
  },
  {
    image: gitImage,
    name: "Git",
    percentage: 80,
  },
];

function Skills() {
  return (
    <section
      id="skills"
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
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[var(--secondary)]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xl font-bold text-[var(--primary-light)]">
              →
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-[var(--primary-light)]">
              Skills
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Technologies{" "}
            <span className="bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
              I Work With
            </span>
          </h2>
        </div>
        {/* SKILL GRID */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--bg-secondary)]
                p-5
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[var(--primary)]
                hover:bg-[var(--bg-card)]
                hover:shadow-[0_0_30px_rgba(0,140,255,0.15)]
              "
            >
              {/* IMAGE */}
              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-[var(--bg-card)]
                  p-3
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:border-[var(--primary)]
                "
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="h-full w-full object-contain"
                />
              </div>
              {/* NAME */}
              <h3 className="mt-4 min-h-10 text-sm font-bold text-[var(--text-primary)]">
                {skill.name}
              </h3>
              {/* PROGRESS */}
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--bg-primary)]">
                <div
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-[var(--secondary)]
                    via-[var(--primary)]
                    to-[var(--primary-light)]
                    transition-all
                    duration-1000
                  "
                  style={{
                    width: `${skill.percentage}%`,
                  }}
                />
              </div>
              <p className="mt-2 text-xs font-bold text-[var(--text-muted)]">
                {skill.percentage}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;