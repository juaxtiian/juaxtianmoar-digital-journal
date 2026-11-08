import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/category-page";

export const Route = createFileRoute("/reflexiones")({
  head: () => categoryHead("reflexiones"),
  component: ReflexionesPage,
});

function ReflexionesPage() {
  return <CategoryPage category="reflexiones" />;
}
