import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/category-page";

export const Route = createFileRoute("/bitacora")({
  head: () => categoryHead("bitacora"),
  component: BitacoraPage,
});

function BitacoraPage() {
  return <CategoryPage category="bitacora" />;
}
