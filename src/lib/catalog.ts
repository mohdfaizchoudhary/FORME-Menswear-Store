export type Category = { slug: string; name: string; emoji: string; description: string; image: string };
export type Product = {
  id: string; slug: string; name: string; category: string; price: number; mrp: number;
  unit: string; description: string; image: string; stock: number; rating?: number;
  reviewCount?: number; badge?: string;
};

const categoryCatalog: Category[] = [
  { slug: "t-shirts", name: "T-Shirts", emoji: "✳", description: "Everyday essentials, elevated with considered fits and soft-touch fabrics.", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85" },
  { slug: "shirts", name: "Shirts", emoji: "✦", description: "From laid-back linen to sharp classics. Find your signature shirt.", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=85" },
  { slug: "jeans", name: "Denim", emoji: "◈", description: "Reliable denim in modern washes, straight fits and timeless cuts.", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=85" },
  { slug: "trousers", name: "Trousers", emoji: "⌁", description: "Clean silhouettes that make getting dressed feel effortless.", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=85" },
  { slug: "hoodies", name: "Hoodies", emoji: "☼", description: "Off-duty layers made for comfort, movement and everyday wear.", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=85" },
  { slug: "jackets", name: "Jackets", emoji: "✧", description: "The finishing layer. Lightweight outerwear with a point of view.", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85" },
  { slug: "footwear", name: "Footwear", emoji: "↗", description: "Everyday sneakers and versatile pairs to take you further.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85" },
  { slug: "accessories", name: "Accessories", emoji: "◇", description: "The small details that pull the whole look together.", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85" },
];

export const products: Product[] = [
  { id: "mw-tee-01", slug: "essential-heavyweight-tee", name: "Essential Heavyweight Tee", category: "t-shirts", price: 799, mrp: 1199, unit: "Relaxed fit · 100% cotton", description: "A considered everyday staple in heavyweight cotton, finished with a relaxed silhouette and clean neckline.", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85", stock: 32, rating: 4.8, reviewCount: 126, badge: "Bestseller" },
  { id: "mw-shirt-01", slug: "linen-blend-overshirt", name: "Linen Blend Overshirt", category: "shirts", price: 1499, mrp: 1999, unit: "Relaxed fit · Linen blend", description: "An easy layer with a breathable linen-blend feel, designed to work buttoned up or worn open.", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=85", stock: 18, rating: 4.7, reviewCount: 84, badge: "Trending" },
  { id: "mw-jean-01", slug: "straight-fit-denim", name: "Straight Fit Denim", category: "jeans", price: 1799, mrp: 2299, unit: "Straight fit · Mid blue", description: "A timeless straight-leg profile in dependable denim with a versatile mid-blue wash.", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=85", stock: 20, rating: 4.9, reviewCount: 203, badge: "Bestseller" },
  { id: "mw-trouser-01", slug: "tailored-everyday-trouser", name: "Tailored Everyday Trouser", category: "trousers", price: 1599, mrp: 1999, unit: "Tapered fit · Stretch cotton", description: "A clean tapered trouser with just enough stretch for all-day comfort and a polished finish.", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=85", stock: 16, rating: 4.6, reviewCount: 58, badge: "New" },
  { id: "mw-hoodie-01", slug: "studio-fleece-hoodie", name: "Studio Fleece Hoodie", category: "hoodies", price: 1899, mrp: 2499, unit: "Relaxed fit · Brushed fleece", description: "A soft brushed-fleece hoodie with an easy shape, ribbed trims and a clean minimal finish.", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=85", stock: 24, rating: 4.8, reviewCount: 91, badge: "Popular" },
  { id: "mw-jacket-01", slug: "utility-overshirt-jacket", name: "Utility Overshirt Jacket", category: "jackets", price: 2499, mrp: 3299, unit: "Regular fit · Cotton twill", description: "A versatile utility layer with a structured hand feel and practical details for changing weather.", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85", stock: 12, rating: 4.6, reviewCount: 37, badge: "Limited" },
  { id: "mw-tee-02", slug: "classic-pique-polo", name: "Classic Piqué Polo", category: "t-shirts", price: 999, mrp: 1399, unit: "Regular fit · Cotton piqué", description: "A smart-casual polo with a textured piqué finish, neat collar and understated branding.", image: "https://images.unsplash.com/photo-1625910513413-5fc9b1f7a6c5?auto=format&fit=crop&w=1000&q=85", stock: 28, rating: 4.6, reviewCount: 73, badge: "Everyday pick" },
  { id: "mw-shirt-02", slug: "oxford-button-down", name: "Oxford Button-Down", category: "shirts", price: 1399, mrp: 1799, unit: "Regular fit · Oxford cotton", description: "A wardrobe anchor in crisp Oxford cotton, finished with a button-down collar.", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=85", stock: 26, rating: 4.7, reviewCount: 73, badge: "Essential" },
  { id: "mw-shoe-01", slug: "court-low-sneakers", name: "Court Low Sneakers", category: "footwear", price: 2199, mrp: 2799, unit: "Low-top · Everyday sole", description: "A clean low-top sneaker with a versatile profile that pairs easily with denim and tailoring.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85", stock: 14, rating: 4.8, reviewCount: 112, badge: "New drop" },
  { id: "mw-watch-01", slug: "minimal-steel-watch", name: "Minimal Steel Watch", category: "accessories", price: 1999, mrp: 2699, unit: "Stainless steel · Adjustable", description: "A minimal everyday accessory with a clean dial and polished stainless-steel finish.", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85", stock: 15, rating: 4.9, reviewCount: 112, badge: "Gift pick" },
  { id: "mw-denim-02", slug: "relaxed-tapered-jeans", name: "Relaxed Tapered Jeans", category: "jeans", price: 1899, mrp: 2399, unit: "Relaxed tapered · Dark wash", description: "Room through the thigh with a neat taper below, cut in a versatile dark denim wash.", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85", stock: 19, rating: 4.5, reviewCount: 46, badge: "Just added" },
  { id: "mw-cap-01", slug: "everyday-canvas-cap", name: "Everyday Canvas Cap", category: "accessories", price: 599, mrp: 799, unit: "Adjustable · Cotton canvas", description: "An easy finishing touch in durable cotton canvas with an adjustable back strap.", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85", stock: 35, rating: 4.5, reviewCount: 31, badge: "Under ₹999" },
];

export const categories = categoryCatalog.filter((category) => products.some((product) => product.category === category.slug));
export const money = (n: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
export function getAvailableCategories(catalog: Product[] = getCatalogProducts()) {
  return categories.filter((category) => catalog.some((product) => product.category === category.slug && product.stock > 0));
}
export const CATALOG_STORAGE_KEY = "forme-menswear-catalog-v2";
const categorySlugs = new Set(categories.map((category) => category.slug));
function isMarketplaceProduct(value: unknown): value is Product {
  if (typeof value !== "object" || value === null) return false;
  const product = value as Record<string, unknown>;
  return typeof product.id === "string" && typeof product.slug === "string" && typeof product.name === "string"
    && typeof product.category === "string" && categorySlugs.has(product.category) && typeof product.price === "number"
    && Number.isFinite(product.price) && typeof product.mrp === "number" && Number.isFinite(product.mrp)
    && typeof product.unit === "string" && typeof product.description === "string" && typeof product.image === "string"
    && typeof product.stock === "number" && Number.isFinite(product.stock);
}
function filterMarketplaceProducts(value: unknown): Product[] {
  if (!Array.isArray(value)) return [];
  return value.filter(isMarketplaceProduct);
}
export function getCatalogProducts(): Product[] {
  if (typeof window === "undefined") return products;
  try {
    const stored = window.localStorage.getItem(CATALOG_STORAGE_KEY);
    if (stored !== null) return filterMarketplaceProducts(JSON.parse(stored));
  } catch { return products; }
  return products;
}
export function saveCatalogProducts(nextProducts: Product[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(filterMarketplaceProducts(nextProducts)));
}
export function createProductId(value: string) {
  return `${value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "product"}-${Date.now().toString().slice(-6)}`;
}
