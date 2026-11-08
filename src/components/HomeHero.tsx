"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

const slides = [
 { kicker:"THE NEW SEASON EDIT", title:"Own your\n every day.", sub:"Elevated essentials. Effortless style.", cta:"Explore new arrivals", href:"/products", image:"https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1900&q=90", tag:"01 / NEW SEASON" },
 { kicker:"BUILT FOR YOUR ROTATION", title:"The art of\neveryday dressing.", sub:"Modern fits, considered details, made to move with you.", cta:"Shop the collection", href:"/categories", image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1900&q=90", tag:"02 / THE EDIT" },
 { kicker:"OFF-DUTY, ON POINT", title:"Comfort looks\ngood on you.", sub:"Your new uniform starts with the right layers.", cta:"Find your fit", href:"/category/hoodies", image:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1900&q=90", tag:"03 / OFF DUTY" },
];
const rail = [
 {name:"THE EVERYDAY TEE",color:"01 / COTTON",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",href:"/category/t-shirts"},
 {name:"LINEN OVERSHIRT",color:"02 / EASY LAYERS",image:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=85",href:"/category/shirts"},
 {name:"STRAIGHT DENIM",color:"03 / EVERYDAY",image:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=85",href:"/category/jeans"},
 {name:"STUDIO HOODIE",color:"04 / OFF DUTY",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=85",href:"/category/hoodies"},
];
export default function HomeHero(){
 const [active,setActive]=useState(0);
 useEffect(()=>{const t=window.setInterval(()=>setActive(v=>(v+1)%slides.length),5600);return()=>window.clearInterval(t)},[]);
 const s=slides[active];
 const move=(d:number)=>setActive(v=>(v+d+slides.length)%slides.length);
 return <section className="bg-[#f4f1eb]">
  <div className="relative min-h-[590px] overflow-hidden bg-[#171816] text-white sm:min-h-[690px]">
   {slides.map((item,i)=><img key={item.image} src={item.image} alt="" className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-[1300ms] ${i===active?"scale-100 opacity-100":"scale-110 opacity-0"}`}/>)}
   <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/5"/>
   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
   <div className="container-shell relative flex min-h-[590px] flex-col justify-between py-10 sm:min-h-[690px] sm:py-14">
    <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.24em] text-white/75"><span>NEW SEASON — 2026</span><span className="hidden sm:block">DESIGNED FOR THE EVERYDAY</span></div>
    <div className="max-w-3xl pb-5">
     <div key={s.kicker} className="hero-slide-copy">
      <p className="mb-5 flex items-center gap-2 text-[10px] font-bold tracking-[.24em] text-[#d9c9a8]"><Sparkles size={14}/>{s.kicker}</p>
      <h1 className="whitespace-pre-line text-6xl font-semibold leading-[.94] tracking-[-.065em] sm:text-8xl lg:text-[108px]">{s.title}</h1>
      <p className="mt-6 max-w-md text-sm leading-6 text-white/80 sm:text-base">{s.sub}</p>
      <Link href={s.href} className="mt-8 inline-flex items-center gap-8 bg-[#e8e1d3] px-6 py-4 text-[11px] font-bold uppercase tracking-[.13em] text-[#1c1d1a] transition hover:bg-white">{s.cta}<ArrowUpRight size={17}/></Link>
     </div>
    </div>
    <div className="flex items-end justify-between border-t border-white/30 pt-5">
     <div className="flex items-center gap-2">{slides.map((item,i)=><button key={item.tag} onClick={()=>setActive(i)} aria-label={`Show slide ${i+1}`} className={`h-[3px] transition-all duration-500 ${active===i?"w-14 bg-white":"w-7 bg-white/40"}`}/>)}</div>
     <div className="flex items-center gap-4"><span className="text-[10px] tracking-[.2em]">{s.tag}</span><button onClick={()=>move(-1)} aria-label="Previous slide" className="grid h-10 w-10 place-items-center rounded-full border border-white/50 transition hover:bg-white hover:text-black"><ArrowLeft size={16}/></button><button onClick={()=>move(1)} aria-label="Next slide" className="grid h-10 w-10 place-items-center rounded-full border border-white/50 transition hover:bg-white hover:text-black"><ArrowRight size={16}/></button></div>
    </div>
   </div>
  </div>
  <div className="container-shell py-12 sm:py-16">
   <div className="mb-7 flex items-end justify-between"><div><p className="eyebrow">A closer look</p><h2 className="section-title mt-2">On the rail<span className="text-[#9b8f7d]">.</span></h2></div><span className="hidden text-[10px] tracking-[.2em] text-[#77746c] sm:block">THE PIECES WE KEEP REACHING FOR</span></div>
   <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">{rail.map((item,i)=><Link href={item.href} key={item.name} className="group relative overflow-hidden bg-[#e7e3dc]">
    <div className="aspect-[4/5] overflow-hidden"><img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/></div>
    <div className="flex items-center justify-between border-b border-[#d6d0c5] py-3"><div><p className="text-[9px] tracking-[.15em] text-[#898276]">{item.color}</p><h3 className="mt-1 text-[11px] font-bold tracking-[.08em]">{item.name}</h3></div><ArrowUpRight size={16} className="transition group-hover:-translate-y-1 group-hover:translate-x-1"/></div>
   </Link>)}</div>
  </div>
 </section>
}
