"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

type Product = {
  slug: string;
  image: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: string;
  badge: string;
};

export default function ProductSearch({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");

  const filteredProducts = products
    .filter((product) => {
      const text = `${product.title} ${product.description}`.toLowerCase();

      const matchesSearch = text.includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        text.includes(activeCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <div className="mx-auto mb-8 flex max-w-5xl flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search bridal, saree, odhani, poshak..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-yellow-400 bg-[#4a0c0c] px-6 py-4 text-white outline-none placeholder:text-yellow-100"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="rounded-2xl border border-yellow-400 bg-[#4a0c0c] px-6 py-4 text-yellow-100 outline-none"
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="mb-12 flex flex-wrap justify-center gap-4">
        {["All", "Bridal", "Odhani", "Poshak", "Saree"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border border-yellow-400 px-5 py-2 text-sm font-bold transition ${
              activeCategory === category
                ? "bg-yellow-400 text-black"
                : "text-yellow-300 hover:bg-yellow-400 hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-3xl border border-yellow-400/30 bg-[#4a0c0c] p-12 text-center">
          <h3 className="text-3xl font-bold text-yellow-400">
            No products found
          </h3>
          <p className="mt-4 text-yellow-100">
            Try searching another collection or clear the filter.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              slug={product.slug}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              badge={product.badge}
            />
          ))}
        </div>
      )}
    </div>
  );
}