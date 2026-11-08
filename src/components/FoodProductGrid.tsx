"use client";

import { useEffect, useState } from "react";
import { CATALOG_STORAGE_KEY, getCatalogProducts, products as sampleProducts, type Product } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";

export default function FoodProductGrid({
  category,
  emptyMessage = "No food products are available in this collection yet.",
}: {
  category?: string;
  emptyMessage?: string;
}) {
  const [listings, setListings] = useState<Product[]>(sampleProducts.filter((product) => product.stock > 0 && (!category || product.category === category)));

  useEffect(() => {
    const refresh = (event?: StorageEvent) => {
      if (event && event.key !== CATALOG_STORAGE_KEY) return;
      setListings(getCatalogProducts().filter((product) => product.stock > 0 && (!category || product.category === category)));
    };
    refresh();
    window.addEventListener("storage", refresh);
    return () => window.removeEventListener("storage", refresh);
  }, [category]);

  if (!listings.length) return <p className="rounded-2xl border border-dashed border-[#eadfd4] bg-white p-8 text-sm leading-6 text-[#78685e]">{emptyMessage}</p>;
  return <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">{listings.map((product) => <ProductCard key={product.id} p={product} />)}</div>;
}
