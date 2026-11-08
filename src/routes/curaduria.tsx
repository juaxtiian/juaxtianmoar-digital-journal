import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/category-page";

export const Route = createFileRoute("/curaduria")({
  head: () => categoryHead("curaduria"),
  component: CuraduriaPage,
});

function CuraduriaPage() {
  return <CategoryPage category="curaduria" />;
}
