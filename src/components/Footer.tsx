"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="mt-12 bg-[#202020] text-white">
      <div className="container-shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr] lg:py-16">
        <div>
          <p className="eyebrow text-[#ffad8b]">THE EVERYDAY, REFINED</p>
          <h2 className="mt-3 text-2xl font-extrabold">FORME</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
            A considered wardrobe of everyday essentials, modern silhouettes and timeless pieces. Find your fit and make it yours.
          </p>
        </div>

        <div>
          <b className="eyebrow text-[#ffad8b]">Explore</b>
          <div className="mt-4 grid gap-3 text-sm text-white/70 [&_a]:transition [&_a]:hover:text-white">
            <Link href="/">Home</Link>
            <Link href="/products">Shop all</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/orders">My orders</Link>
          </div>
        </div>

        <div>
          <b className="eyebrow text-[#ffad8b]">Information</b>
          <div className="mt-4 grid gap-3 text-sm text-white/70 [&_a]:transition [&_a]:hover:text-white">
            <Link href="/contact">Contact</Link>
            <Link href="/shipping-policy">Shipping policy</Link>
            <Link href="/returns-policy">Returns policy</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[10px] tracking-wide text-white/45">
        © {new Date().getFullYear()} FORME. Designed for everyday.
      </div>
    </footer>
  );
}
