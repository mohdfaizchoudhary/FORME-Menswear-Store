"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CATALOG_STORAGE_KEY, categories as seededCategories, getAvailableCategories, getCatalogProducts, type Category } from "@/lib/catalog";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>(seededCategories);

  useEffect(() => {
    const refresh = (event?: StorageEvent) => {
      if (event && event.key !== CATALOG_STORAGE_KEY) return;
      setCategories(getAvailableCategories(getCatalogProducts()));
    };
    refresh();
    window.addEventListener("storage", refresh);
    return () => window.removeEventListener("storage", refresh);
  }, []);

  return (
    <div className="container-shell py-12 sm:py-16">
      <p className="eyebrow">THE FORME COLLECTIONS</p>
      <h1 className="section-title mt-3">Find your fit</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-[#78685e]">
        Explore the everyday essentials, statement layers and finishing touches that make a wardrobe your own.
      </p>

      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <Link
            href={`/category/${category.slug}`}
            key={category.slug}
            className="group relative flex min-h-64 flex-col overflow-hidden rounded-[24px] bg-[#2b1d16]"
          >
            <img src={category.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c110b]/90 via-[#1c110b]/20 to-transparent" />
            <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-xl">{category.emoji}</span>
            <span className="absolute right-5 top-5 font-serif text-3xl text-white/65">0{index + 1}</span>
            <div className="relative mt-auto p-5">
              <h2 className="text-xl font-bold text-white">{category.name}</h2>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/75">{category.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.12em] text-[#ffb08f]">
                Explore category <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      {!categories.length && <p className="mt-6 rounded-2xl border border-dashed border-[#eadfd4] bg-white p-8 text-sm text-[#78685e]">New pieces are on their way. Check back soon.</p>}
    </div>
  );
}
