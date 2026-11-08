"use client";

import Link from "next/link";
import { Heart, ShoppingBag, Star, Zap } from "lucide-react";
import { Product, money } from "@/lib/catalog";
import { useStore } from "@/components/StoreProvider";

export default function ProductCard({ p, compact = false }: { p: Product; compact?: boolean }) {
  const { add } = useStore();
  const discount = p.mrp > p.price ? Math.round((1 - p.price / p.mrp) * 100) : 0;
  return (
    <article className={`market-card group flex h-full min-w-0 flex-col ${compact ? "market-card-compact" : ""}`}>
      <Link href={`/product/${p.slug}`} className="market-card-media relative block overflow-hidden bg-[#f2f3f5]">
        <img src={p.image} alt={p.name} className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.045]" />
        {p.badge && <span className="absolute left-2 top-2 rounded-sm bg-white px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-[#287b48] shadow-sm">{p.badge}</span>}
        {discount > 0 && <span className="absolute right-2 top-2 rounded-sm bg-[#e7f5ec] px-2 py-1 text-[9px] font-bold text-[#16813d]">{discount}% off</span>}
        <span className="absolute bottom-2 right-2 grid h-8 w-8 place-items-center rounded-full bg-white/95 text-[#555] shadow-sm transition hover:text-rose-600"><Heart size={15}/></span>
      </Link>
      <div className="flex flex-1 flex-col p-3 sm:p-3.5">
        <p className="truncate text-[10px] font-semibold uppercase tracking-[.08em] text-[#878787]">{p.unit || "FORME MEN"}</p>
        <Link href={`/product/${p.slug}`} className="mt-1 line-clamp-2 min-h-10 text-[13px] font-medium leading-[1.35rem] text-[#212121] hover:text-[#287b48]">{p.name}</Link>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-[3px] bg-[#388e3c] px-1.5 py-0.5 text-[10px] font-bold text-white">{p.rating?.toFixed(1) ?? "4.2"}<Star size={9} fill="currentColor"/></span>
          <span className="text-[10px] text-[#878787]">({p.reviewCount ?? 124} ratings)</span>
        </div>
        <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <b className="text-[15px] font-bold text-[#212121]">{money(p.price)}</b>
          {discount > 0 && <><s className="text-[11px] text-[#878787]">{money(p.mrp)}</s><span className="text-[10px] font-semibold text-[#388e3c]">{discount}% off</span></>}
        </div>
        <p className="mt-1 text-[10px] text-[#388e3c]">Free delivery</p>
        <button type="button" onClick={() => add(p.id)} className="mt-3 inline-flex min-h-9 items-center justify-center gap-2 rounded-sm bg-[#ffdf00] px-3 text-[10px] font-bold uppercase tracking-wide text-[#212121] transition hover:bg-[#f4d400]">
          <ShoppingBag size={13}/> Add to cart <Zap size={12}/>
        </button>
      </div>
    </article>
  );
}
