import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/content";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — JuaxtianMoar" },
      {
        name: "description",
        content: "Lo que estoy construyendo ahora mismo, lo que terminé y lo que dejé en pausa.",
      },
      { property: "og:title", content: "Proyectos — JuaxtianMoar" },
      { property: "og:description", content: "Lo que estoy haciendo, con su estado real." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProyectosPage,
});

function ProyectosPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 md:px-10 md:pt-28">
      <p className="eyebrow text-primary">Proyectos</p>
      <h1 className="mt-6 text-5xl text-foreground md:text-6xl">Lo que estoy haciendo</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Algunos avanzan rápido, otros se quedan quietos un tiempo. Aquí está todo, con su estado real.
      </p>

      <ol className="mt-16 border-t border-gold-line">
        {projects.map((project, i) => (
          <li key={project.name} className="grid gap-4 border-b border-border py-10 md:grid-cols-[4rem_1fr_8rem] md:gap-8">
            <span className="font-serif text-2xl italic text-primary/60">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="text-2xl text-foreground md:text-3xl">{project.name}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
            </div>
            <div className="space-y-2 md:text-right">
              <span className="eyebrow inline-block border border-gold-line px-3 py-1.5 text-primary">
                {project.status}
              </span>
              <span className="block text-xs text-muted-foreground/70">{project.year}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
