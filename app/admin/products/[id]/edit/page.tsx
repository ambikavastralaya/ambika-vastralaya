"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../../../../lib/supabase";

export default function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "",
    price: "",
    originalPrice: "",
    discount: "",
    badge: "",
    fabric: "",
    work: "",
    occasion: "",
    color: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    async function fetchProduct() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        alert("Error loading product: " + error.message);
        setLoading(false);
        return;
      }

      setForm({
        title: data.title || "",
        slug: data.slug || "",
        category: data.category || "",
        price: String(data.price || ""),
        originalPrice: String(data.original_price || ""),
        discount: data.discount || "",
        badge: data.badge || "",
        fabric: data.fabric || "",
        work: data.work || "",
        occasion: data.occasion || "",
        color: data.color || "",
        image: data.image || "",
        description: data.description || "",
      });

      setLoading(false);
    }

    fetchProduct();
  }, [id]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const { error } = await supabase
      .from("products")
      .update({
        title: form.title,
        slug: form.slug,
        category: form.category,
        description: form.description,
        price: Number(form.price),
        original_price: Number(form.originalPrice),
        discount: form.discount,
        badge: form.badge,
        fabric: form.fabric,
        work: form.work,
        occasion: form.occasion,
        color: form.color,
        image: form.image,
      })
      .eq("id", id);

    setSaving(false);

    if (error) {
      alert("Error updating product: " + error.message);
      return;
    }

    alert("Product updated successfully!");
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#3b0a0a] px-6 py-16 text-white">
        Loading product...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#3b0a0a] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-5xl font-bold text-yellow-400">Edit Product</h1>

          <Link
            href="/admin/products"
            className="rounded-full border border-yellow-400 px-6 py-3 text-yellow-300"
          >
            Back to Products
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl bg-[#4a0c0c] p-8"
        >
          <input
            name="title"
            value={form.title}
            placeholder="Product Title"
            onChange={handleChange}
            className="w-full rounded-xl bg-[#2b0606] p-4"
            required
          />

          <input
            name="slug"
            value={form.slug}
            placeholder="Slug"
            onChange={handleChange}
            className="w-full rounded-xl bg-[#2b0606] p-4"
            required
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-xl bg-[#2b0606] p-4"
            required
          >
            <option value="">Select Category</option>
            <option value="Bridal Lehanga">Bridal Lehanga</option>
            <option value="Work Odhani">Work Odhani</option>
            <option value="Rajputi Poshak">Rajputi Poshak</option>
            <option value="Sarees">Sarees</option>
            <option value="Fabric">Fabric</option>
          </select>

          <div className="grid gap-5 md:grid-cols-2">
            <input
              name="price"
              value={form.price}
              placeholder="Price"
              onChange={handleChange}
              className="rounded-xl bg-[#2b0606] p-4"
              required
            />

            <input
              name="originalPrice"
              value={form.originalPrice}
              placeholder="Original Price"
              onChange={handleChange}
              className="rounded-xl bg-[#2b0606] p-4"
              required
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <input
              name="discount"
              value={form.discount}
              placeholder="Discount"
              onChange={handleChange}
              className="rounded-xl bg-[#2b0606] p-4"
            />

            <input
              name="badge"
              value={form.badge}
              placeholder="Badge"
              onChange={handleChange}
              className="rounded-xl bg-[#2b0606] p-4"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <input
              name="fabric"
              value={form.fabric}
              placeholder="Fabric"
              onChange={handleChange}
              className="rounded-xl bg-[#2b0606] p-4"
            />

            <input
              name="work"
              value={form.work}
              placeholder="Work"
              onChange={handleChange}
              className="rounded-xl bg-[#2b0606] p-4"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <input
              name="occasion"
              value={form.occasion}
              placeholder="Occasion"
              onChange={handleChange}
              className="rounded-xl bg-[#2b0606] p-4"
            />

            <input
              name="color"
              value={form.color}
              placeholder="Color"
              onChange={handleChange}
              className="rounded-xl bg-[#2b0606] p-4"
            />
          </div>

          <input
            name="image"
            value={form.image}
            placeholder="Image path, example: /bridal.jpg"
            onChange={handleChange}
            className="w-full rounded-xl bg-[#2b0606] p-4"
            required
          />

          <textarea
            name="description"
            value={form.description}
            rows={5}
            placeholder="Description"
            onChange={handleChange}
            className="w-full rounded-xl bg-[#2b0606] p-4"
            required
          />

          <button
            disabled={saving}
            className="rounded-full bg-yellow-400 px-10 py-4 font-bold text-black disabled:opacity-60"
          >
            {saving ? "Saving..." : "Update Product"}
          </button>
        </form>
      </div>
    </main>
  );
}