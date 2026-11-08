"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { CATALOG_STORAGE_KEY, getAvailableCategories, getCatalogProducts, type Category } from "@/lib/catalog";

export default function CategoryTiles({ className = "" }: { className?: string }) {
  const [categories, setCategories] = useState<Category[]>(getAvailableCategories());

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
    <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 ${className}`}>
      {categories.map((category, index) => (
        <Link href={`/category/${category.slug}`} key={category.slug} className="group relative min-h-52 overflow-hidden rounded-none bg-[#282923] sm:min-h-60">
          <img src={category.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
          <span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-lg shadow-sm sm:left-4 sm:top-4 sm:h-10 sm:w-10">{category.emoji}</span>
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <span className="text-[9px] font-semibold uppercase tracking-[.18em] text-white/65">Collection {String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-1 font-bold leading-tight text-white sm:text-lg">{category.name}</h3>
            <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[.12em] text-[#e1d6bf]">Explore <ArrowDownRight size={13} className="transition group-hover:translate-x-1 group-hover:translate-y-1" /></span>
          </div>
        </Link>
      ))}
    </div>
  );
}
