# FORME — Men's Fashion E-commerce

A menswear storefront redesign built on the existing Next.js 14 application.

## What changed
- Rebranded the storefront as FORME with a neutral charcoal, stone and warm ivory visual system.
- Replaced the food catalogue with men's T-shirts, shirts, denim, trousers, hoodies, jackets, footwear and accessories.
- Reworked the homepage with an autoplay fashion campaign slider, manual controls, animated transitions and an editorial "On the rail" product strip inspired by the supplied reference video.
- Updated navigation, category tiles, product cards, shop/category pages, footer and storefront copy.
- Preserved the existing authentication, cart, checkout/payment, order history and admin workflows.

## Run locally
1. Install Node.js 18.17+.
2. Copy `.env.example` to `.env.local` and fill in your Supabase/payment environment variables.
3. Run `npm install`.
4. Run `npm run dev` and open http://localhost:3000.

## Notes
- The seeded catalogue and category images are sample content and can be replaced with your own product photography and inventory.
- Existing local catalogue storage has been versioned to `forme-menswear-catalog-v2` so old food-catalogue entries do not hide the new menswear products.
- Admin product categories now use the menswear taxonomy.

## UI refinement (November 2026)
- Homepage product shelves now use marketplace-style product tiles with visible ratings, sale prices, discounts, delivery notes and direct add-to-cart actions.
- Shop-all page uses a distinct marketplace browsing layout with search, category filters and sorting.
- Product detail and cart pages use separate clean commerce layouts rather than the same editorial page treatment.
- Category discovery retains its image-led collection-card design.
