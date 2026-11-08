import { createFileRoute, Link } from "@tanstack/react-router";
import { NoteCard } from "@/components/note-card";
import { notes } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JuaxtianMoar — Construyendo mi camino en digital" },
      {
        name: "description",
        content:
          "Blog personal de JuaxtianMoar, creador remoto. Lo que pruebo, lo que me funciona y las ideas que encuentro por el camino.",
      },
      { property: "og:title", content: "JuaxtianMoar — Construyendo mi camino en digital" },
      {
        property: "og:description",
        content: "Creador remoto. Sin poses de experto, solo el proceso real.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-28 pt-20 md:grid-cols-12 md:px-10 md:pt-28">
        <div className="fade-up md:col-span-7">
          <p className="eyebrow text-primary">Bitácora de un creador remoto</p>

          <h1 className="mt-8 text-5xl leading-[1.08] text-foreground md:text-6xl lg:text-7xl">
            Estoy construyendo mi camino en <em className="text-primary">digital</em>.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Creador remoto. Aquí comparto lo que pruebo, lo que me funciona y las ideas que me encuentro por el
            camino. Sin poses de experto, solo el proceso real.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <Link to="/bitacora" className="btn-gold">
              Ver qué estoy haciendo →
            </Link>
            <Link to="/sobre-mi" className="link-gold">
              Quién soy
            </Link>
          </div>
        </div>

        <div className="fade-up md:col-span-5 [animation-delay:150ms]">
          <PortraitFrame />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-6 border-t border-gold-line pt-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-muted-foreground">Notas recientes</p>
            <h2 className="mt-4 text-4xl text-foreground md:text-5xl">Lo que estoy escribiendo</h2>
          </div>
          <Link to="/notas" className="link-gold self-start md:self-auto">
            Ver todas las notas →
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {notes.slice(0, 3).map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </section>
    </>
  );
}

function PortraitFrame() {
  return (
    <figure className="mx-auto w-full max-w-sm md:ml-auto">
      <div className="relative">
        <div className="absolute inset-0 translate-x-4 translate-y-4 border border-gold-line" aria-hidden />
        <div className="relative flex aspect-square items-center justify-center border border-primary/50 bg-card">
          <span className="font-serif text-7xl italic text-primary/40">JM</span>
        </div>
      </div>
      <figcaption className="mt-8 text-xs tracking-wide text-muted-foreground/70">
        Desde algún lugar con buena conexión.
      </figcaption>
    </figure>
  );
}
