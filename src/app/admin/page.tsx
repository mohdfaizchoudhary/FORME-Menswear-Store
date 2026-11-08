"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Boxes, CircleDollarSign, PackageCheck, ShoppingBag } from "lucide-react";
import { getCatalogProducts, money, type Product } from "@/lib/catalog";
import { useStore } from "@/components/StoreProvider";

export default function Admin() {
  const [products, setProducts] = useState<Product[]>([]);
  const { orders } = useStore();

  useEffect(() => {
    setProducts(getCatalogProducts());
  }, []);
  const businessTotal = orders
    .filter((order) => order.paymentStatus === "successful")
    .reduce((sum, order) => sum + order.total, 0);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><p className="eyebrow">Your store at a glance</p><h1 className="section-title mt-2">Good morning, chef.</h1></div>
        <Link href="/admin/products" className="btn-primary">Add a product <ArrowUpRight size={15} /></Link>
      </div>
      <div className="mt-5 rounded-2xl border border-[#f2cdb8] bg-[#fff0e6] p-4 text-sm text-[#72331d]">This demo dashboard stores catalogue and order data in this browser only.</div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: CircleDollarSign, title: "Total business", value: money(businessTotal), note: "Successful demo payments" },
          { icon: Boxes, title: "Menu products", value: String(products.length), note: "Across your collections" },
          { icon: ShoppingBag, title: "Orders", value: String(orders.length), note: "Saved in this browser" },
          { icon: PackageCheck, title: "In stock", value: String(products.filter((product) => product.stock > 0).length), note: "Products ready to order" },
        ].map(({ icon: Icon, title, value, note }) => (
          <article key={title} className="rounded-2xl border border-[#eee2d8] bg-white p-5 shadow-[0_8px_24px_#30170f08]">
            <div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-wide text-[#78685e]">{title}</span><Icon size={18} className="text-[#F05A28]" /></div>
            <b className="mt-4 block text-2xl font-bold text-[#202020]">{value}</b><p className="mt-1 text-xs text-[#8b7569]">{note}</p>
          </article>
        ))}
      </div>
      <div className="mt-5 rounded-2xl border border-[#eee2d8] bg-white p-5 shadow-[0_8px_24px_#30170f08]">
        <div className="flex justify-between"><h2 className="font-serif text-xl text-[#202020]">Your menu</h2><Link href="/admin/products" className="text-xs font-semibold text-[#C83F1B] underline">Manage products</Link></div>
        {products.slice(0, 5).map((product) => <div key={product.id} className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f1e8e1] py-3 text-sm last:border-0"><span className="flex items-center gap-3"><img src={product.image} alt="" className="h-10 w-10 rounded-lg object-cover" /><span>{product.name}<span className="ml-2 text-xs text-[#8b7569]">Stock: {product.stock}</span></span></span><b>{money(product.price)}</b></div>)}
      </div>
    </div>
  );
}
