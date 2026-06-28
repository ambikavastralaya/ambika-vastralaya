import { supabase } from "./supabase";

export type Product = {
  id?: string;
  slug: string;
  image: string;
  images: string[];
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: string;
  badge: string;
  category: string;
  fabric: string;
  work: string;
  occasion: string;
  color: string;
};

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data.map((item) => ({
    id: item.id,
    slug: item.slug,
    image: item.image,
    images: [item.image, item.image, item.image],
    title: item.title,
    description: item.description,
    price: item.price,
    originalPrice: item.original_price,
    discount: item.discount,
    badge: item.badge,
    category: item.category,
    fabric: item.fabric,
    work: item.work,
    occasion: item.occasion,
    color: item.color,
  }));
}