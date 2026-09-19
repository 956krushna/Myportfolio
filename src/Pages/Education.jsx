const education = [
  {
    number: "01",
    degree: "Bachelor of Computer Science (B.Sc. CS)",
    college: "B.N.N College Bhiwandi, Thane",
    location: "Maharashtra, India",
    year: "2023 - 2026",
  },
  {
    number: "02",
    degree: "Higher Secondary (12th)",
    college: "Maharashtra State Board",
    location: "Maharashtra, India",
    year: "2021 - 2023",
  },
];

function Education() {
  return (
    <section
      id="education"
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
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-72 w-72 rounded-full bg-[var(--secondary)]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl">
        {/* HEADING */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xl text-[var(--primary-light)]">
              →
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-[var(--primary-light)]">
              Education
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            My{" "}
            <span className="bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </div>
        {/* CARD */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5 shadow-[0_0_30px_rgba(0,140,255,0.08)] sm:p-8">
          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={item.degree}
                className="relative flex gap-5"
              >
                {/* NUMBER */}
                <div className="relative flex shrink-0 flex-col items-center">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[var(--primary)]
                      bg-[var(--bg-card)]
                      text-sm
                      font-bold
                      text-[var(--primary-light)]
                      shadow-[0_0_20px_rgba(0,140,255,0.15)]
                      sm:h-14
                      sm:w-14
                    "
                  >
                    {item.number}
                  </div>
                  {index !== education.length - 1 && (
                    <div className="mt-2 h-full min-h-16 w-px bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]" />
                  )}
                </div>
                {/* CONTENT */}
                <div className="pb-2">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] sm:text-xl">
                    {item.degree}
                  </h3>
                  <p className="mt-2 font-medium text-[var(--primary-light)]">
                    {item.college}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {item.location}
                  </p>
                  <span className="mt-3 inline-block rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1 text-xs font-semibold text-[var(--text-secondary)]">
                    {item.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;