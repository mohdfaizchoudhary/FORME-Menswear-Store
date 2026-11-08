"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { CATALOG_STORAGE_KEY, getCatalogProducts, type Product } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";

export default function FoodShelf({ title, kicker, items, tone = "light" }: { title: string; kicker: string; items: Product[]; tone?: "light" | "cream" }) {
  const [availableItems, setAvailableItems] = useState(items.filter((item) => item.stock > 0));
  useEffect(() => {
    const refresh = (event?: StorageEvent) => {
      if (event && event.key !== CATALOG_STORAGE_KEY) return;
      const currentIds = new Set(getCatalogProducts().filter((product) => product.stock > 0).map((product) => product.id));
      setAvailableItems(items.filter((product) => currentIds.has(product.id)));
    };
    refresh(); window.addEventListener("storage", refresh);
    return () => window.removeEventListener("storage", refresh);
  }, [items]);
  if (!availableItems.length) return null;
  return <section className={`market-shelf ${tone === "cream" ? "market-shelf-tint" : ""}`}>
    <div className="container-shell">
      <div className="mb-5 flex items-end justify-between gap-3">
        <div><p className="eyebrow">{kicker}</p><h2 className="mt-1 text-[21px] font-semibold tracking-tight text-[#212121] sm:text-2xl">{title}</h2></div>
        <Link href="/products" className="inline-flex shrink-0 items-center gap-1 rounded-sm bg-[#287b48] px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-white hover:bg-[#20653b]">View all <ChevronRight size={14}/></Link>
      </div>
      <div className="market-shelf-grid">{availableItems.slice(0, 8).map((product) => <ProductCard key={product.id} p={product} compact />)}</div>
      <Link href="/products" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#287b48]">Explore more styles <ArrowRight size={14}/></Link>
    </div>
  </section>;
}
