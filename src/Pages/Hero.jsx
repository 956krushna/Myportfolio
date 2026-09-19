import profileImage from "../assets/Mee.png";
import cv from "../assets/956Krushna.pdf"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import mail from "../assets/mail.png"

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[calc(100vh-64px)]
        overflow-hidden
        bg-[var(--bg-primary)]
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[var(--secondary)]/10 blur-[120px]" />
      {/* MAIN CONTAINER */}
      <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-16">
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          {/* HELLO */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[var(--border)]
              bg-[image:var(--gradient-button)]
              px-4
              py-2
              text-xs
              font-semibold
              text-white
              shadow-[0_0_20px_rgba(0,140,255,0.12)]
              sm:text-sm
            "
          >
            <span>👋</span>
            Hello, I'm
          </div>
          {/* NAME */}
          <h1
            className="
              mt-5
              text-4xl
              font-black
              leading-tight
              text-[var(--text-primary)]
              sm:text-5xl
              md:text-6xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Krushna{" "}
            <span className="bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
              Mhaske
            </span>
          </h1>
          {/* ROLE */}
          <h2
            className="
              mt-3
              text-2xl
              font-bold
              text-[var(--text-secondary)]
              sm:text-3xl
            "
          >
            Frontend Developer
          </h2>
          {/* DESCRIPTION */}
          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-[var(--text-muted)]
              sm:text-base
              md:text-lg
            "
          >
            I build modern, responsive and user-friendly web applications
            using HTML, CSS, JavaScript, React and Tailwind CSS. I love
            turning ideas into beautiful and functional digital products.
          </p>
          {/* BUTTONS */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://github.com/956krushna"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[image:var(--gradient-primary)]
                px-6
                py-3
                text-sm
                font-bold
                text-white
                shadow-[0_0_25px_rgba(0,140,255,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_35px_rgba(0,140,255,0.40)]
              "
            >
              View My Projects
              <span className="text-lg">→</span>
            </a>
            <a
              href={cv}
              download="956Krushna.pdf"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--bg-secondary)]
                px-6
                py-3
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--primary)]
                hover:bg-[var(--bg-card)]
                hover:text-[var(--primary-light)]
              "
            >
              Download CV
              <span className="text-lg">↓</span>
            </a>
          </div>
          {/* SOCIAL */}
          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://github.com/956krushna"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-secondary)]   transition-all duration-300 hover:border-[var(--primary)] "
            >
              <img src={github} alt="github" className="h-8"/>
            </a>
            <a
              href="https://www.linkedin.com/in/956krushna/"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] transition-all duration-300 hover:border-[var(--primary)] "
            >
              <img src={linkedin} alt="linkedin" className="h-8"/>
            </a>
            <a
              href="mailto:956krushna@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-secondary)]  transition-all duration-300 hover:border-[var(--secondary)]"
            >
              <img src={mail} alt="mail" className="h-8"/>
            </a>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="order-1 flex items-center justify-center lg:order-2">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96">
            {/* OUTER GLOW */}
            <div className="absolute inset-0 rounded-full bg-[image:var(--gradient-primary)] opacity-30 blur-3xl" />
            {/* GRADIENT BORDER */}
            <div className="absolute inset-0 rounded-full bg-[image:var(--gradient-border)] p-1 shadow-[0_0_60px_rgba(0,140,255,0.25)]">
              <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-full bg-[var(--bg-secondary)]">
                <img
                  src={profileImage}
                  alt="Krushna Mhaske"
                  className="
                    relative
                    h-full
                    w-full
                    object-contain
                    object-bottom
                  "
                />
              </div>
            </div>
            {/* DECORATION */}
            <div className="absolute -right-3 top-10 h-5 w-5 rounded-full bg-[var(--accent-blue)] shadow-[0_0_20px_rgba(0,217,255,0.8)]" />
            <div className="absolute -bottom-2 left-8 h-4 w-4 rounded-full bg-[var(--accent-purple)] shadow-[0_0_20px_rgba(139,92,246,0.8)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;