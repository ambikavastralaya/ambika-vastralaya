"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";

type Product = {
  id: string;
  title: string;
  slug: string;
  category: string;
  price: number;
  original_price: number;
  discount: string;
  badge: string;
  image: string;
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState("");

  async function fetchProducts() {
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert("Error loading products: " + error.message);
      setLoading(false);
      return;
    }

    setProducts(data || []);
    setLoading(false);
  }

  async function deleteProduct(id: string, title: string) {
    const confirmDelete = confirm(`Delete "${title}"?`);
    if (!confirmDelete) return;

    setDeletingId(id);

    const { error } = await supabase.from("products").delete().eq("id", id);

    setDeletingId("");

    if (error) {
      alert("Error deleting product: " + error.message);
      return;
    }

    alert("Product deleted successfully!");
    fetchProducts();
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-[#3b0a0a] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.4em] text-yellow-300">
              ADMIN PRODUCTS
            </p>

            <h1 className="mt-3 text-5xl font-bold text-yellow-400">
              Product List
            </h1>
          </div>

          <div className="flex gap-3">
            <Link
              href="/admin"
              className="rounded-full border border-yellow-400 px-6 py-3 font-bold text-yellow-300"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/add-product"
              className="rounded-full bg-yellow-400 px-6 py-3 font-bold text-black"
            >
              + Add Product
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-yellow-400/20 bg-[#4a0c0c] p-6 shadow-2xl">
          {loading ? (
            <p className="text-yellow-100">Loading products...</p>
          ) : products.length === 0 ? (
            <p className="text-yellow-100">No products found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-yellow-400/20 text-yellow-300">
                    <th className="py-4 pr-6">Image</th>
                    <th className="py-4 pr-6">Product</th>
                    <th className="py-4 pr-6">Category</th>
                    <th className="py-4 pr-6">Price</th>
                    <th className="py-4 pr-6">Badge</th>
                    <th className="py-4 pr-6">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-yellow-400/10 text-yellow-100"
                    >
                      <td className="py-4 pr-6">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-20 w-16 rounded-xl object-cover"
                        />
                      </td>

                      <td className="py-4 pr-6">
                        <p className="font-bold text-yellow-300">
                          {product.title}
                        </p>
                        <p className="text-sm text-yellow-100/70">
                          {product.slug}
                        </p>
                      </td>

                      <td className="py-4 pr-6">{product.category}</td>

                      <td className="py-4 pr-6">
                        ₹{product.price}
                        <p className="text-sm line-through text-yellow-100/60">
                          ₹{product.original_price}
                        </p>
                      </td>

                      <td className="py-4 pr-6">{product.badge}</td>

                      <td className="py-4 pr-6">
                        <div className="flex gap-3">
                          <a
                            href={`/product/${product.slug}`}
                            target="_blank"
                            className="rounded-full border border-yellow-400 px-4 py-2 text-sm text-yellow-300"
                          >
                            View
                          </a>

                          <Link
                            href={`/admin/products/${product.id}/edit`}
                            className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black"
                          >
                            Edit
                          </Link>

                          <button
                            onClick={() =>
                              deleteProduct(product.id, product.title)
                            }
                            disabled={deletingId === product.id}
                            className="rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white disabled:opacity-50"
                          >
                            {deletingId === product.id
                              ? "Deleting..."
                              : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}