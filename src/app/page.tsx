import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Truck, RefreshCw } from "lucide-react";
import { products } from "@/lib/catalog";
import HomeHero from "@/components/HomeHero";
import CategoryTiles from "@/components/CategoryTiles";
import FoodShelf from "@/components/FoodShelf";

const bestsellers = products.filter((p) => p.badge === "Bestseller" || (p.rating && p.rating >= 4.8)).slice(0,4);
const newArrivals = products.filter((p) => p.badge === "New" || p.badge === "New drop" || p.badge === "Just added");
const offers = products.filter((p) => p.mrp > p.price).slice(0,4);

export default function Home() {
 return <>
  <HomeHero/>
  <section className="border-y border-[#e5e1d8] bg-[#f7f6f2]"><div className="container-shell grid gap-5 py-5 sm:grid-cols-3">
   {[{icon:Truck,title:"Complimentary shipping",text:"On all orders over ₹1,999"},{icon:RefreshCw,title:"Easy 7-day returns",text:"A better fit, without the fuss"},{icon:BadgeCheck,title:"Quality, considered",text:"Made to wear on repeat"}].map(({icon:Icon,title,text})=><div key={title} className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center border border-[#dedbd2] text-[#6f6656]"><Icon size={18}/></span><div><h2 className="text-xs font-bold uppercase tracking-[.08em]">{title}</h2><p className="mt-1 text-xs text-[#77746c]">{text}</p></div></div>)}
  </div></section>
  <section className="container-shell py-14 sm:py-20"><div className="mb-7 flex items-end justify-between gap-4"><div><p className="eyebrow">Find your uniform</p><h2 className="section-title mt-3">Shop by category<span className="text-[#9b8f7d]">.</span></h2></div><Link href="/categories" className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[.15em] sm:inline-flex">All categories <ArrowUpRight size={15}/></Link></div><CategoryTiles/><Link href="/categories" className="btn-secondary mt-4 sm:hidden">All categories <ArrowRight size={15}/></Link></section>
  <FoodShelf title="The pieces on repeat" kicker="Curated for everyday" items={products.slice(0,4)}/>
  <FoodShelf title="Good taste. Great fit." kicker="Customer favourites" items={bestsellers} tone="cream"/>
  <FoodShelf title="Just landed" kicker="New season arrivals" items={newArrivals}/>
  <FoodShelf title="A little more for less" kicker="The considered edit" items={offers} tone="cream"/>
  <section className="container-shell pb-16 pt-5 sm:pb-20"><div className="relative overflow-hidden bg-[#24251f] px-7 py-12 text-white sm:px-14 sm:py-16"><div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10"/><div className="relative max-w-2xl"><p className="eyebrow text-[#d8c9aa]">Less, but better</p><h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-.04em] sm:text-6xl">Build a wardrobe that works as hard as you do.</h2><p className="mt-5 max-w-lg text-sm leading-6 text-white/65">Thoughtful essentials. Modern fits. Pieces you’ll reach for, season after season.</p><Link href="/products" className="mt-8 inline-flex items-center gap-8 bg-[#e8e1d3] px-6 py-4 text-[10px] font-bold uppercase tracking-[.15em] text-[#22231f]">Explore the collection <ArrowUpRight size={16}/></Link></div></div></section>
 </>
}
