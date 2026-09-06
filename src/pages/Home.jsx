import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EMAIL, EMAIL_COMPOSE, RESUME_SWE, RESUME_PM } from "../data/links";
import ExperienceCard from "../components/experience/ExperienceCard";
import ProjectCard from "../components/projects/ProjectCard";
import { experiences } from "../data/experience";
import { projects } from "../data/projects";
import photosData from "../data/photos.json";
import Lightbox from "../components/gallery/Lightbox";

const homeExperiences = ["meta-2026", "nist-2024"].map((id) =>
  experiences.find((e) => e.id === id),
);
const homeProject = projects.find((p) => p.id === "co-pilot");

const HIGHLIGHT_IDS = [
  "landscapes-Redwood National Park-20250705_204827",
  "landscapes-Yosemite National Park-20250527_095111",
  "landscapes-Arizona-20230712_190237",
  "landscapes-lassen volcanic national park-IMG_4802",
];
const highlightPhotos = HIGHLIGHT_IDS.map((id) =>
  photosData.find((p) => p.id === id),
).filter(Boolean);

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e) => {
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => Math.min(i + 1, highlightPhotos.length - 1));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => Math.max(i - 1, 0));
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex]);

  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16">
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-ink dark:text-ink-dark max-w-3xl">
          Drawn to the gap between the tool you have and the tool you need.
        </h1>

        <p className="mt-6 text-lg text-ink-muted dark:text-ink-muted-dark max-w-xl">
          Open to full-time software engineering and product roles,{" "}
          <span className="text-brand-pink dark:text-brand-pink-light font-medium">
            graduating May 2027.
          </span>
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/experience"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-pink text-white font-medium text-sm hover:bg-brand-pink-dark transition-colors focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2"
          >
            See my work
          </Link>
          <a
            href={EMAIL_COMPOSE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border border-border dark:border-border-dark text-ink-muted dark:text-ink-muted-dark font-medium text-sm hover:border-brand-pink hover:text-brand-pink dark:hover:border-brand-pink-light dark:hover:text-brand-pink-light transition-colors focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Selected experience + selected projects — 3 cards in a row, 2 sections */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-border dark:border-border-dark">
        <div className="lg:grid lg:grid-cols-3 lg:gap-5 flex flex-col gap-10">
          {/* Selected experience — spans 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h2 className="font-display text-2xl font-bold text-ink dark:text-ink-dark">
              Selected Experience
            </h2>
            <div className="grid sm:grid-cols-2 gap-5 flex-1">
              {homeExperiences.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  exp={exp}
                  mode="swe"
                  dateInHeader
                />
              ))}
            </div>
            <Link
              to="/experience"
              className="text-sm text-brand-pink dark:text-brand-pink-light font-medium hover:underline focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2 rounded-sm"
            >
              View all experience →
            </Link>
          </div>

          {/* Selected projects — 1 col */}
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-bold text-ink dark:text-ink-dark">
              Selected Projects
            </h2>
            <div className="flex-1">
              <ProjectCard project={homeProject} dateBelow />
            </div>
            <Link
              to="/projects"
              className="text-sm text-brand-pink dark:text-brand-pink-light font-medium hover:underline focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2 rounded-sm"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-border dark:border-border-dark">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-ink-dark mb-8">
          Photography
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {highlightPhotos.map((photo, i) => (
            <button
              key={photo.id}
              onClick={() => setLightboxIndex(i)}
              className="group text-left cursor-zoom-in focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2 rounded-xl"
              aria-label={`Open photo: ${photo.location}`}
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface dark:bg-surface-dark relative">
                <img
                  src={photo.src.jpeg[0]}
                  alt=""
                  loading="lazy"
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 to-transparent px-3 pt-8 pb-3">
                  <p className="text-xs font-semibold text-white capitalize leading-snug">
                    {photo.location}
                  </p>
                  <p className="text-xs text-white/65 font-mono mt-0.5">
                    {new Date(photo.dateTaken).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-6">
          <Link
            to="/photos"
            className="text-sm text-brand-pink dark:text-brand-pink-light font-medium hover:underline focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2 rounded-sm"
          >
            Browse the gallery →
          </Link>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          photos={highlightPhotos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => Math.max(i - 1, 0))}
          onNext={() =>
            setLightboxIndex((i) => Math.min(i + 1, highlightPhotos.length - 1))
          }
        />
      )}

      {/* About snippet */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-border dark:border-border-dark">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-ink-dark mb-6">
          About
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <img
            src="/headshot-square.png"
            alt="Jack Campbell"
            className="w-40 h-40 rounded-xl object-cover shrink-0"
          />
          <p className="text-ink-muted dark:text-ink-muted-dark max-w-2xl leading-relaxed">
            CS senior at the University of Maryland (ML concentration). I've
            worked with organizations that didn't have a software team behind
            them; refugees at Homes Not Borders, scientists at NIST, and
            caseworkers tracking services in a spreadsheet. Two summers at Meta
            taught the other half, the discipline that keeps quality from
            slipping as volume goes up.
          </p>
        </div>
        <div className="mt-6">
          <Link
            to="/about"
            className="text-sm text-brand-pink dark:text-brand-pink-light font-medium hover:underline focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2 rounded-sm"
          >
            Read more →
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-border dark:border-border-dark">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-ink-dark mb-6">
          Get in touch
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border dark:border-border-dark text-sm text-ink-muted dark:text-ink-muted-dark hover:border-brand-pink hover:text-brand-pink dark:hover:border-brand-pink-light dark:hover:text-brand-pink-light transition-colors focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2"
          >
            {EMAIL}
          </a>
          <a
            href="https://github.com/JackCampbell5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border dark:border-border-dark text-sm text-ink-muted dark:text-ink-muted-dark hover:border-brand-pink hover:text-brand-pink dark:hover:border-brand-pink-light dark:hover:text-brand-pink-light transition-colors focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jackcampbell5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border dark:border-border-dark text-sm text-ink-muted dark:text-ink-muted-dark hover:border-brand-pink hover:text-brand-pink dark:hover:border-brand-pink-light dark:hover:text-brand-pink-light transition-colors focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2"
          >
            LinkedIn
          </a>
          <a
            href={RESUME_SWE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border dark:border-border-dark text-sm text-ink-muted dark:text-ink-muted-dark hover:border-brand-pink hover:text-brand-pink dark:hover:border-brand-pink-light dark:hover:text-brand-pink-light transition-colors focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2"
          >
            Resume (SWE)
          </a>
          <a
            href={RESUME_PM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border dark:border-border-dark text-sm text-ink-muted dark:text-ink-muted-dark hover:border-brand-pink hover:text-brand-pink dark:hover:border-brand-pink-light dark:hover:text-brand-pink-light transition-colors focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2"
          >
            Resume (PM)
          </a>
        </div>
      </section>
    </div>
  );
}
