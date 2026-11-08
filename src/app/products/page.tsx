"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { CATALOG_STORAGE_KEY, getCatalogProducts, getAvailableCategories } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";

function Listing() {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [catalog, setCatalog] = useState(getCatalogProducts());
  const availableCategories = getAvailableCategories(catalog);

  useEffect(() => {
    const refresh = (event?: StorageEvent) => {
      if (event && event.key !== CATALOG_STORAGE_KEY) return;
      setCatalog(getCatalogProducts());
    };
    refresh();
    window.addEventListener("storage", refresh);
    return () => window.removeEventListener("storage", refresh);
  }, []);

  const listings = useMemo(() => {
    const filtered = catalog.filter((product) => product.stock > 0
      &&
      (product.name + " " + product.description).toLowerCase().includes(query.toLowerCase())
      && (category === "all" || product.category === category),
    );
    if (sort === "low") filtered.sort((a, b) => a.price - b.price);
    if (sort === "high") filtered.sort((a, b) => b.price - a.price);
    return filtered;
  }, [catalog, query, category, sort]);

  return (
    <div className="marketplace-page">
      <div className="container-shell">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3 rounded-sm bg-white p-5 sm:p-7">
          <div><p className="eyebrow">FORME FASHION STORE</p><h1 className="marketplace-title mt-2">Men&apos;s clothing & fashion</h1><p className="mt-2 text-xs text-[#878787]">Everyday essentials, new season styles and bestsellers</p></div>
          <span className="text-xs font-semibold text-[#287b48]">STYLE THAT MOVES WITH YOU</span>
        </div>

      <div className="marketplace-filter grid gap-3 md:grid-cols-[1fr_240px_190px]">
        <label className="relative block">
          <span className="sr-only">Search products</span>
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#65776f]" />
          <input className="field pl-10" placeholder="Search tees, shirts, denim & more..." value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <label>
          <span className="sr-only">Filter by category</span>
          <select className="field" value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="all">All categories</option>
            {availableCategories.map((entry) => <option key={entry.slug} value={entry.slug}>{entry.name}</option>)}
          </select>
        </label>
        <label>
          <span className="sr-only">Sort listings</span>
          <select className="field" value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </label>
      </div>

      <div className="mb-3 mt-5 flex flex-wrap items-center justify-between gap-2 bg-white px-4 py-3">
        <p className="text-sm font-semibold text-[#212121]">{listings.length} products <span className="font-normal text-[#878787]">· Find your everyday fit</span></p>
        <p className="text-[10px] uppercase tracking-wider text-[#287b48]">Free delivery on eligible orders</p>
      </div>
      {listings.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {listings.map((product) => <ProductCard key={product.id} p={product} />)}
        </div>
      ) : (
        <p className="border border-dashed border-[#d8d8d8] bg-white p-8 text-sm text-[#65776f]">No products match your search. Try another style or category.</p>
      )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container-shell py-12 text-sm text-[#78685e]">Loading the collection...</div>}>
      <Listing />
    </Suspense>
  );
}
