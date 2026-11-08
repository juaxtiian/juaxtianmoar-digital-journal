import { Link } from "@tanstack/react-router";
import { categories, type Note } from "@/lib/content";

export function NoteCard({ note }: { note: Note }) {
  return (
    <article className="group flex h-full flex-col border border-gold-line bg-card p-8 transition-colors duration-300 hover:border-primary/70">
      <div className="flex items-center justify-between">
        <Link to={categories[note.category].path} className="eyebrow text-primary">
          {categories[note.category].label}
        </Link>
        <span className="text-xs text-muted-foreground/70">{note.date}</span>
      </div>

      <h3 className="mt-8 font-serif text-2xl leading-snug text-foreground">{note.title}</h3>

      <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">{note.excerpt}</p>

      <div className="mt-10 border-t border-border pt-5">
        <Link to="/notas/$slug" params={{ slug: note.slug }} className="link-gold">
          Leer más →
        </Link>
      </div>
    </article>
  );
}
