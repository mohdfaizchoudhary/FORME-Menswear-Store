"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserRound } from "lucide-react";
import { isAdminAuthenticated, setAdminAuthenticated } from "@/lib/admin";

const navItems = [
  ["Products overview", "/admin"],
  ["Products", "/admin/products"],
  ["Orders", "/admin/orders"],
  ["Customers", "/admin/customers"],
  ["Order requests", "/admin/payments"],
] as const;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (pathname === "/admin/login") {
      setReady(true);
      return;
    }

    if (!isAdminAuthenticated()) {
      router.replace(`/admin/login?next=${encodeURIComponent(pathname || "/admin")}`);
      return;
    }

    setReady(true);
  }, [pathname, router]);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!ready) {
    return <div className="container-shell py-12 text-sm text-charcoal/60">Checking admin access…</div>;
  }

  return (
    <div className="admin-shell min-h-[calc(100vh-3rem)] bg-[#fff5eb]">
      <div className="container-shell grid min-w-0 gap-4 py-5 sm:gap-6 sm:py-8 md:grid-cols-[210px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="h-fit rounded-[24px] bg-[#202020] p-4 text-white shadow-[0_20px_50px_#30170f20] sm:sticky sm:top-24 sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div>
              <b className="block text-lg">FORME</b>
              <span className="text-[10px] font-semibold uppercase tracking-[.15em] text-white/50">Store admin</span>
            </div>
            <Link
              href="/admin/profile"
              aria-label="Admin profile"
              title="Admin profile"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/20 text-white transition hover:bg-[#F05A28]"
            >
              <UserRound size={19} strokeWidth={1.7} />
            </Link>
          </div>
          <p className="mt-4 rounded-lg bg-[#F05A28]/15 px-3 py-2 text-[9px] font-bold tracking-[.14em] text-[#ffad8b]">RESTRICTED ADMIN ACCESS</p>
          <nav className="mt-5 grid grid-cols-2 gap-2 text-sm md:grid-cols-1">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={`rounded-xl px-3 py-2.5 transition ${pathname === href ? "bg-[#F05A28] font-semibold text-white shadow-sm" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => {
              setAdminAuthenticated(false);
              router.push("/admin/login");
            }}
            className="mt-6 w-full rounded-xl border border-white/20 px-3 py-2.5 text-sm text-white/80 transition hover:border-[#F05A28] hover:bg-[#F05A28]/10 hover:text-white"
          >
            Sign out
          </button>
        </aside>

        <section className="admin-content min-w-0">{children}</section>
      </div>
    </div>
  );
}
