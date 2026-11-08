import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Inicio", exact: true },
  { to: "/herramientas", label: "Herramientas", exact: false },
  { to: "/curaduria", label: "Curaduría", exact: false },
  { to: "/reflexiones", label: "Reflexiones", exact: false },
  { to: "/bitacora", label: "Bitácora", exact: false },
] as const;

export function Logo() {
  return (
    <Link to="/" className="group inline-flex items-baseline font-serif text-xl tracking-tight text-foreground">
      <span>Juaxtian</span>
      <span className="italic text-primary">Moar</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 md:px-10">
        <Logo />

        <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground underline decoration-primary underline-offset-8" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="text-foreground md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" strokeWidth={1.25} /> : <Menu className="size-5" strokeWidth={1.25} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/70 px-6 py-6 md:hidden" aria-label="Móvil">
          <ul className="flex flex-col gap-5">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.exact }}
                  onClick={() => setOpen(false)}
                  className="font-serif text-2xl text-muted-foreground"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
