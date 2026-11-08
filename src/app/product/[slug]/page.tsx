"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, BadgeCheck, ShoppingBag, Zap } from "lucide-react";
import { CATALOG_STORAGE_KEY, categories, getCatalogProducts, money } from "@/lib/catalog";
import { useStore } from "@/components/StoreProvider";
import { useAuth } from "@/components/AuthProvider";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [catalog, setCatalog] = useState(getCatalogProducts());
  const [added, setAdded] = useState(false);
  const { add, buyNow: setBuyNowCart, orders } = useStore();
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const refresh = (event?: StorageEvent) => {
      if (event && event.key !== CATALOG_STORAGE_KEY) return;
      setCatalog(getCatalogProducts());
    };
    refresh();
    window.addEventListener("storage", refresh);
    return () => window.removeEventListener("storage", refresh);
  }, []);

  const product = catalog.find((entry) => entry.slug === params.slug);
  if (!product) return notFound();

  const listing = product;
  const isAvailable = product.stock > 0;
  const category = categories.find((entry) => entry.slug === product.category);
  const productOrders = session
    ? orders.filter((order) =>
        (order.customerId === session.user.id
          || (!!session.user.email && order.customerEmail?.toLowerCase() === session.user.email.toLowerCase()))
        && order.items.some((item) => item.productId === product.id || (!item.productId && item.name === product.name)),
      )
    : [];

  function addToCart() {
    if (!isAvailable) return;
    add(listing.id);
    setAdded(true);
  }

  function buyNow() {
    if (!isAvailable) return;
    setBuyNowCart(listing.id);
    if (session) {
      router.push("/checkout");
      return;
    }
    router.push("/login?next=%2Fcheckout");
  }

  return (
    <div className="min-h-[70vh] bg-[#f1f3f6] py-7 sm:py-10"><div className="container-shell">
      <Link href="/products" className="inline-flex items-center gap-2 text-sm text-[#65776f] transition hover:text-[#287052]">
        <ArrowLeft size={15} /> Back to shop
      </Link>
      <div className="mt-5 grid gap-5 rounded-sm bg-white p-4 sm:p-7 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
        <div className="relative overflow-hidden border border-[#eeeeee] bg-[#f5f5f5]">
          <img src={product.image} alt={product.name} className="aspect-[4/3] w-full object-cover lg:aspect-square" />
          <span className="absolute left-4 top-4 rounded-sm bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-[#202020] shadow-sm">
            FORME ESSENTIAL
          </span>
        </div>
        <div className="py-2 lg:py-4">
          <p className="eyebrow">{category?.name ?? "FORME"}</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-[-.04em] text-[#212121] sm:text-4xl">{product.name}</h1>
          <p className="mt-3 text-sm text-[#78685e]">{product.unit}</p>
          <p className="mt-6 text-3xl font-bold text-[#212121]">
            {money(product.price)}
            {product.mrp > product.price && <s className="ml-3 text-base font-normal text-[#a89588]">{money(product.mrp)}</s>}
          </p>
          <p className="mt-6 text-sm leading-7 text-[#66574e]">{product.description}</p>

          <div className="mt-7 border-y border-[#eeeeee] bg-[#fafafa] px-4 py-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#202020]">
              <BadgeCheck size={17} className="text-[#C83F1B]" /> Made to wear on repeat
            </div>
            <p className="mt-2 text-xs leading-5 text-[#78685e]">
              Thoughtfully selected details and everyday versatility. Product availability and details are shown for this catalogue.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button onClick={addToCart} disabled={!isAvailable} className="btn-secondary w-full disabled:cursor-not-allowed disabled:opacity-50">
              <ShoppingBag size={16} /> {!isAvailable ? "Out of stock" : added ? "Added to bag" : "Add to cart"}
            </button>
            <button onClick={buyNow} disabled={loading || !isAvailable} className="btn-primary w-full disabled:cursor-wait disabled:opacity-60">
              <Zap size={16} /> {!isAvailable ? "Currently unavailable" : loading ? "Checking account…" : "Buy Now"}
            </button>
          </div>
          {session && (
            <section className="mt-6 rounded-2xl border border-[#eadfd4] bg-white p-5">
              <h2 className="font-serif text-xl text-[#202020]">Your order status</h2>
              {productOrders.length ? (
                <ul className="mt-3 space-y-3">
                  {productOrders.map((order) => (
                    <li key={order.id} className="flex flex-wrap items-center justify-between gap-2 border-t border-[#dce6df] pt-3 text-sm">
                      <span>
                        <b className="text-[#202020]">{order.id}</b>
                        <span className="ml-2 text-xs text-[#78685e]">{new Date(order.date).toLocaleDateString()}</span>
                      </span>
                      <span className="rounded-full bg-[#fff0e6] px-3 py-1 font-medium capitalize text-[#C83F1B]">{order.status}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-[#78685e]">You have no orders for this product.</p>
              )}
            </section>
          )}
          <p className="mt-4 text-xs leading-5 text-[#78685e]">A wardrobe essential, ready to make your own.</p>
        </div>
      </div>
    </div></div>
  );
}
