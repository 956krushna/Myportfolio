function Contact() {
  return (
    <>
      <section
        id="contact"
        className="
          relative
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
        <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[var(--secondary)]/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          {/* HEADING */}
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-xl text-[var(--primary-light)]">
                →
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--primary-light)]">
                Contact
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              Let's{" "}
              <span className="bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
                Work Together
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              Have a project in mind or want to discuss an opportunity?
              Feel free to reach out. I'd love to hear from you.
            </p>
          </div>
          {/* CONTACT GRID */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* LEFT */}
            <div
              className="
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--bg-secondary)]
                p-6
                transition-all
                duration-500
                hover:border-[var(--primary)]
                hover:shadow-[0_0_30px_rgba(0,140,255,0.12)]
                sm:p-8
              "
            >
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                Get In Touch
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                I'm currently looking for opportunities where I can build
                modern and useful web applications.
              </p>
              <div className="mt-8 space-y-5">
                {/* EMAIL */}
                <a
                  href="mailto:956krushna@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--primary-light)] transition-all duration-300 group-hover:border-[var(--primary)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">
                      Email
                    </p>
                    <p className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--primary-light)]">
                      956krushna@gmail.com
                    </p>
                  </div>
                </a>
                {/* PHONE */}
                <a
                  href="tel:+918805743013"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--primary-light)] transition-all duration-300 group-hover:border-[var(--primary)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      <path d="M7 3h3l2 5-2 2c1 2 2 3 4 4l2-2 5 2v3c0 1-1 2-2 2C11 19 5 13 5 5c0-1 1-2 2-2Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">
                      Phone
                    </p>
                    <p className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--primary-light)]">
                      +91 880574 3013
                    </p>
                  </div>
                </a>
                {/* LOCATION */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--secondary-light)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">
                      Location
                    </p>
                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      Shirur, Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="mailto:956krushna@gmail.com"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[image:var(--gradient-primary)]
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_25px_rgba(0,140,255,0.35)]
                "
              >
                Send Message
                <span>→</span>
              </a>
            </div>
            {/* RIGHT */}
            <div
              className="
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--bg-secondary)]
                p-6
                transition-all
                duration-500
                hover:border-[var(--secondary)]
                hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]
                sm:p-8
              "
            >
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                Let's Build Something Great
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                Whether you have a project idea, a job opportunity or simply
                want to connect, I'd love to hear from you.
              </p>
              <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-xl">
                    ◫
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)]">
                      Fully Responsive Design
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
                      Modern interfaces that work smoothly on desktop,
                      tablet and mobile.
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "Modern UI/UX",
                    "Smooth Animations",
                    "Clean Code",
                    "Responsive Design",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs text-[var(--text-secondary)]"
                    >
                      <span className="text-[var(--accent-purple)]">
                        ✓
                      </span>

                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] px-5 py-8 sm:px-8 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/src/assets/KM.png"
              alt="KM Logo"
              className="h-10 w-auto"
            />
            <div>
              <h3 className="font-bold text-[var(--text-primary)]">
                Krushna Mhaske
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                Frontend Developer
              </p>
            </div>
          </a>
          {/* SOCIAL */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/956krushna"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)]  transition-all hover:border-[var(--primary)] "
            >
              <img src="/src/assets/github.png" alt="github" className="h-8"/>
            </a>
            <a
              href="https://www.linkedin.com/in/956krushna/"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)]  transition-all hover:border-[var(--primary)] "
            >
              <img src="/src/assets/linkedin.png" alt="linkedin" className="h-8"/>
            </a>
            <a
              href="mailto:956krushna@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)]  transition-all hover:border-[var(--secondary)] "
            >
              <img src="/src/assets/mail.png" alt="mail" className="h-8"/>
            </a>
          </div>
          {/* COPYRIGHT */}
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Krushna Mhaske. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Contact;