"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Search, ShoppingBag, Shirt, UserRound, X } from "lucide-react";
import { useStore } from "@/components/StoreProvider";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { count } = useStore();

  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="sticky top-0 z-30 border-b border-[#e5e1d8] bg-[#f7f6f2]/95 backdrop-blur-md">
      <div className="bg-[#202020] py-2 text-center text-[10px] font-medium tracking-[.14em] text-white/85">
        COMPLIMENTARY SHIPPING ON ORDERS OVER ₹1,999
      </div>
      <div className="container-shell relative flex min-h-[78px] items-center gap-2 sm:gap-5">
        <Link href="/" className="flex shrink-0 items-center gap-3 text-[#202020]">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#22231f] text-white">
            <Shirt size={21} strokeWidth={1.8} />
          </span>
          <span>
            <b className="block text-[16px] font-extrabold leading-5 tracking-tight sm:text-[19px]">FORME</b>
            <small className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[.2em] text-[#8b7569] min-[360px]:block">MENSWEAR · EST. 2026</small>
          </span>
        </Link>

        <form action="/products" className="ml-5 hidden max-w-[260px] flex-1 md:block">
          <label className="sr-only" htmlFor="header-search">Search menswear</label>
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b7569]" />
            <input id="header-search" name="q" placeholder="Search shirts, denim & more" className="field h-10 border-transparent bg-[#ece9e1] pl-10 text-xs focus:border-[#F05A28]" />
          </div>
        </form>

        <nav className="ml-auto hidden items-center gap-6 text-[12px] font-semibold text-[#383832] lg:flex">
          <Link href="/" className="transition hover:text-[#7c725f]">Home</Link>
          <Link href="/products" className="transition hover:text-[#7c725f]">Shop</Link>
          <Link href="/categories" className="transition hover:text-[#7c725f]">Categories</Link>
          <Link href="/contact" className="transition hover:text-[#7c725f]">Contact</Link>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-3 lg:ml-5">
          <Link
            href="/profile"
            aria-label="My account"
            className="hidden h-10 w-10 place-items-center rounded-xl text-[#383832] transition hover:bg-[#ece9e1] hover:text-[#7c725f] sm:grid"
          >
            <UserRound size={19} strokeWidth={1.7} />
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="relative grid h-10 w-10 place-items-center rounded-xl text-[#383832] transition hover:bg-[#ece9e1] hover:text-[#7c725f]"
          >
            <ShoppingBag size={19} strokeWidth={1.7} />
            {count > 0 && (
              <span className="absolute right-0 top-0 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-[#22231f] px-1 text-[9px] font-semibold text-white">
                {count}
              </span>
            )}
          </Link>

          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl text-[#383832] transition hover:bg-[#ece9e1] lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="grid gap-4 border-t border-[#e5e1d8] bg-[#fffaf5] px-5 py-5 text-sm lg:hidden">
          <form action="/products" className="relative">
            <label className="sr-only" htmlFor="mobile-search">Search menswear</label>
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b7569]" />
            <input id="mobile-search" name="q" placeholder="Search shirts, denim & more" className="field pl-10 text-xs" />
          </form>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Shop</Link>
          <Link href="/categories" onClick={() => setOpen(false)}>Categories</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/profile" onClick={() => setOpen(false)}>My account</Link>
        </nav>
      )}
    </header>
  );
}
