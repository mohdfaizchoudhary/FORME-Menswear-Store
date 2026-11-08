insert into public.categories(name,slug,description,display_order) values
('Buy & Sell Poultry','poultry-buy-sell','Connect with poultry listings and find the birds your farm needs.',1),
('Hatching Eggs','hatching-eggs','Explore hatching egg batches, quantities and supplier details.',2),
('Layer Birds','layer-birds','Find layer birds for your operation, with listing details to review.',3),
('Buying Birds','buying-birds','Browse bird sourcing listings and connect with poultry suppliers.',4),
('Chicken Sale','chicken-sale','Explore poultry meat listings with product and availability details.',5),
('Chick Sale','chick-sale','Find chick listings and review batch and supplier information.',6)
on conflict(slug) do update set
  name = excluded.name,
  description = excluded.description,
  display_order = excluded.display_order;
