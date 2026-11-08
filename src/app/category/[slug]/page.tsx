import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { categories } from "@/lib/catalog";
import FoodProductGrid from "@/components/FoodProductGrid";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((entry) => entry.slug === params.slug);
  if (!category) return notFound();

  return (
    <div className="container-shell py-12 sm:py-16">
      <Link href="/categories" className="inline-flex items-center gap-2 text-sm text-[#65776f] transition hover:text-[#287052]">
        <ArrowLeft size={15} /> All categories
      </Link>
      <div className="mt-6 rounded-[28px] border border-[#dce6df] bg-white p-7 sm:p-10">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e8f0ea] text-3xl">{category.emoji}</span>
        <p className="eyebrow mt-6">FORME COLLECTION</p>
        <h1 className="section-title mt-3">{category.name}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#65776f]">{category.description}</p>
      </div>

      <div className="mb-5 mt-10 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">THE EDIT</p>
            <h2 className="mt-2 font-serif text-3xl text-[#202020]">Shop the category</h2>
          </div>
          <span className="text-xs text-[#78685e]">FIND YOUR FIT</span>
      </div>
      <FoodProductGrid category={category.slug} emptyMessage="There are no available products in this category right now. Explore our other collections." />
    </div>
  );
}
