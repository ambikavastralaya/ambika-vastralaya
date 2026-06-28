"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);

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

  function makeSlug(text: string) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const slug = form.slug || makeSlug(form.title);

    const { error } = await supabase.from("products").insert({
      title: form.title,
      slug,
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
    });

    setLoading(false);

    if (error) {
      alert("Error: " + error.message);
      return;
    }

    alert("Product saved successfully!");

    setForm({
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
  }

  return (
    <main className="min-h-screen bg-[#3b0a0a] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-5xl font-bold text-yellow-400">Add Product</h1>

          <Link
            href="/admin"
            className="rounded-full border border-yellow-400 px-6 py-3 text-yellow-300"
          >
            Dashboard
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
            placeholder="Slug optional, example: royal-bridal-lehanga"
            onChange={handleChange}
            className="w-full rounded-xl bg-[#2b0606] p-4"
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
              placeholder="Discount, example: 20% OFF"
              onChange={handleChange}
              className="rounded-xl bg-[#2b0606] p-4"
            />

            <input
              name="badge"
              value={form.badge}
              placeholder="Badge, example: Bestseller"
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
            disabled={loading}
            className="rounded-full bg-yellow-400 px-10 py-4 font-bold text-black disabled:opacity-60"
          >
            {loading ? "Saving..." : "Save Product"}
          </button>
        </form>
      </div>
    </main>
  );
}