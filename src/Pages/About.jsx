import profileImage from "../assets/Mee.png";

const qualities = [
  {
    icon: "⚙",
    title: "Problem Solver",
    description: "I enjoy solving frontend challenges.",
  },
  {
    icon: "◈",
    title: "Team Player",
    description: "I enjoy working and learning with others.",
  },
  {
    icon: "⚡",
    title: "Quick Learner",
    description: "I continuously learn new technologies.",
  },
  {
    icon: "♥",
    title: "Passionate",
    description: "I love creating modern user experiences.",
  },
];

function About() {
  return (
    <section
      id="about"
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
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[var(--secondary)]/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* LEFT */}
        <div>
          {/* HEADING */}
          <div className="mb-5 flex items-center gap-2">
            <span className="text-xl text-[var(--primary-light)]">
              →
            </span>
            <h2 className="text-3xl font-bold bg-[image:var(--gradient-text)] bg-clip-text text-transparent sm:text-4xl">
              About Me
            </h2>
          </div>
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">
            Who I Am
          </h3>
          <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] sm:text-base lg:text-lg">
            I'm a passionate Frontend Developer with a strong interest in
            building modern web applications. I enjoy learning new
            technologies, solving problems and creating seamless user
            experiences.
          </p>
          {/* QUALITIES */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {qualities.map((item) => (
              <div
                key={item.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--bg-secondary)]
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[var(--primary)]
                  hover:bg-[var(--bg-card)]
                  hover:shadow-[0_0_25px_rgba(0,140,255,0.12)]
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[var(--border)]
                      bg-[var(--bg-card)]
                      text-xl
                      text-[var(--primary-light)]
                      transition-all
                      duration-300
                      group-hover:border-[var(--primary)]
                      group-hover:bg-[var(--bg-card-hover)]
                    "
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96">
            <div className="absolute inset-0 rounded-full bg-[image:var(--gradient-primary)] opacity-25 blur-3xl" />
            <div className="absolute inset-0 rounded-full bg-[image:var(--gradient-border)] p-1">
              <div className="flex h-full w-full items-end justify-center overflow-hidden rounded-full bg-[var(--bg-secondary)]">
                <img
                  src={profileImage}
                  alt="Krushna Mhaske"
                  className="h-full w-full object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;