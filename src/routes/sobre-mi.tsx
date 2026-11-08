import { createFileRoute, Link } from "@tanstack/react-router";
import { contactEmail } from "@/lib/content";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — JuaxtianMoar" },
      {
        name: "description",
        content: "Quién está detrás de JuaxtianMoar: un creador remoto que aprende en público y comparte el proceso.",
      },
      { property: "og:title", content: "Sobre mí — JuaxtianMoar" },
      { property: "og:description", content: "Un creador remoto que aprende en público." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobreMiPage,
});

function SobreMiPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-20 md:pt-28">
      <p className="eyebrow text-primary">Sobre mí</p>
      <h1 className="mt-6 text-5xl leading-tight text-foreground md:text-6xl">
        Hola, soy <em className="text-primary">Juaxtian</em>.
      </h1>

      <div className="prose-editorial mt-12">
        <p>
          Soy un creador digital que trabaja en remoto. No tengo todas las respuestas ni un método infalible.
          Lo que sí tengo es curiosidad y la costumbre de <strong>probar cosas y contar cómo me fue</strong>.
        </p>
        <p>
          Este sitio nació porque quería un lugar tranquilo, lejos del ruido de las redes, donde escribir con
          calma sobre herramientas, hábitos de trabajo y el día a día de construir algo propio en internet.
        </p>
        <p>
          Si estás empezando, o si llevas tiempo y te sientes estancado, quizá encuentres aquí algo útil. Y si
          no, al menos sabrás que no eres el único que va aprendiendo sobre la marcha.
        </p>
      </div>

      <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-gold-line pt-10">
        <a href={`mailto:${contactEmail}`} className="btn-gold">
          Escríbeme →
        </a>
        <Link to="/notas" className="link-gold">
          Leer mis notas
        </Link>
      </div>
    </section>
  );
}
