import Image from "next/image";

const highlights = [
  {
    title: "Currently",
    detail: "Exploring AI, LLM tooling, LangChain workflows, and deep-learning systems.",
  },
  {
    title: "Focus",
    detail: "Full-stack delivery with an emphasis on ML-powered backends and APIs.",
  },
];

export default function MePage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="glass-panel grid gap-10 p-8 lg:p-12 md:grid-cols-[0.9fr,1.1fr] items-center">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-cyan-400/20 blur-2xl" />
            <Image
              src="/me.jpg"
              alt="Vishwavijeth V"
              width={220}
              height={220}
              className="relative rounded-full border-4 border-white/20 object-cover shadow-[0_25px_60px_rgba(14,165,233,0.35)]"
              priority
            />
          </div>
          <div>
            <h1 className="mt-3 text-3xl font-semibold text-white">
              Vishwavijeth V
            </h1>
            <p className="text-slate-300 text-base">Software Engineer</p>
            <a
              href="mailto:vishwavijay2621@gmail.com"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2 text-sm font-semibold text-slate-900"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="space-y-6 text-slate-200">
          <p className="text-lg leading-relaxed text-slate-200">
            I&apos;m a Software Engineer and recent MSc graduate with experience building scalable SaaS
            platforms. I work end to end across product surfaces, shaping resilient services,
            collaborative APIs, and thoughtful client experiences.
          </p>
          <p className="text-base text-slate-300">
            My toolkit spans Python, FastAPI, Django, React, and SQL, plus hands-on full-stack,
            backend, and mobile development. I&apos;ve shipped RESTful APIs during internships and
            contributed to agile engineering teams to push reliable features from concept to launch.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 p-4 bg-white/5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-slate-200">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
