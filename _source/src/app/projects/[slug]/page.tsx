import Link from "next/link";
import { notFound } from "next/navigation";
import workDataRaw from "../../../../public/data/work-data.json";

const workData = workDataRaw.workData as {
  image: string;
  title: string;
  client: string;
  slug: string;
  description: string;
  highlights: string[];
}[];

export async function generateStaticParams() {
  return workData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = workData.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Hamed Nouri`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = workData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="py-6 px-6 md:px-12 border-b border-gray-100 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">H</Link>
        <Link
          href="/"
          className="text-sm text-secondary hover:text-primary transition-colors flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to portfolio
        </Link>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            {project.client}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          {project.title}
        </h1>
        <p className="text-xl text-secondary leading-relaxed max-w-2xl">
          {project.description}
        </p>
      </section>

      {/* Banner image */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto mb-16">
        <div className="rounded-2xl overflow-hidden bg-softGray">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-72 md:h-96 object-cover"
          />
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto mb-24">
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-black">Highlights</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.highlights.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-softGray rounded-xl px-6 py-5"
            >
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-base">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto pb-24 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <Link
          href="/"
          className="py-4 px-8 border border-primary rounded-full text-base font-medium hover:bg-primary hover:text-white transition-colors"
        >
          View all projects
        </Link>
        <a
          href="mailto:ai@hamednouri.com"
          className="py-4 px-8 bg-primary text-white rounded-full text-base font-medium hover:opacity-90 transition-opacity"
        >
          Get in touch
        </a>
      </section>
    </main>
  );
}
