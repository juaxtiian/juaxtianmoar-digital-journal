import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { contactEmail } from "@/lib/content";
import { Logo } from "./site-header";

const socials = [
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "X / Twitter", href: "https://x.com", Icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com", Icon: Github },
];

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-gold-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Escríbeme, leo todos los correos:{" "}
            <a href={`mailto:${contactEmail}`} className="link-gold">
              {contactEmail}
            </a>
          </p>
        </div>

        <div className="space-y-5 md:text-right">
          <ul className="flex gap-6 md:justify-end">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-primary/80 transition-colors hover:text-primary"
                >
                  <Icon className="size-[18px]" strokeWidth={1.25} />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs tracking-wide text-muted-foreground/70">
            © {new Date().getFullYear()} JuaxtianMoar. Escrito con calma.
          </p>
        </div>
      </div>
    </footer>
  );
}
