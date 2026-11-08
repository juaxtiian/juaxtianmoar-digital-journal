import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/category-page";

export const Route = createFileRoute("/herramientas")({
  head: () => categoryHead("herramientas"),
  component: HerramientasPage,
});

function HerramientasPage() {
  return <CategoryPage category="herramientas" />;
}
