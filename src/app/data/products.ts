import catalog from "@/app/api/products/data.json";
import { Product } from "@/app/data/types/product";

export function getFeaturedProducts(): Product[] {
  return catalog.products.filter((product) => product.featured);
}

export function getProductBySlug(slug: string): Product {
  const product = catalog.products.find((item) => item.slug === slug);

  if (!product) {
    throw new Error(`Product not found: ${slug}`);
  }

  return product;
}

export function searchProducts(query: string): Product[] {
  const normalizedQuery = query.toLocaleLowerCase();

  return catalog.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(normalizedQuery),
  );
}
