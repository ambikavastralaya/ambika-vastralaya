"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import {
  bridalProducts,
  workOdhaniProducts,
  rajputiProducts,
} from "../data/products";

const collections = [
  {
    title: "Bridal Lehanga",
    text: "Latest trendy bridal lehanga for wedding moments.",
    image: "/bridal.jpg",
    link: "/collections/bridal",
  },
  {
    title: "Work Odhani",
    text: "Premium embroidery, zari, mirror and festive work collection.",
    image: "/work-odhani.jpg",
    link: "/collections/work-odhani",
  },
  {
    title: "Rajputi Poshak",
    text: "Traditional royal poshak for weddings, festivals and culture.",
    image: "/rajputi-poshak.jpg",
    link: "/collections/rajputi-poshak",
  },
  {
    title: "Sarees",
    text: "Elegant sarees for every celebration and special occasion.",
    image: "/saree.jpg",
    link: "/collections/sarees",
  },
  {
    title: "Fabric Collection",
    text: "Premium Chunari, Bandhej, Poshak and Bridal fabric collection.",
    image: "/fabric.jpg",
    link: "/collections/fabric",
  },
];

const featuredProducts = [
  bridalProducts[0],
  workOdhaniProducts[0],
  rajputiProducts[0],
];

const stats = [
  "Premium Quality",
  "All India Delivery",
  "Wedding Specialist",
  "Trusted Collection",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#3b0a0a] text-white">
      <Navbar />

      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <div className="absolute inset-0 bg-[url('/bridal.jpg')] bg-cover bg-center opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b0a0a]/80 via-[#3b0a0a]/75 to-[#3b0a0a]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center"
        >
          <p className="mb-5 text-sm font-semibold tracking-[0.4em] text-yellow-300">
            ROYAL ETHNIC COLLECTION
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-wide text-yellow-400 md:text-7xl">
            Ambika Vastralaya
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-100 md:text-2xl">
            Premium Bridal Lehanga, Rajputi Poshak, Sarees & Luxury Work Odhani
            Collection
          </p>

          <p className="mt-5 text-lg font-medium text-yellow-200">
            Mogana • Wedding & Festival Specialist
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#collections"
              className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              Explore Collection
            </a>

            <a
              href="https://wa.me/918955174687"
              target="_blank"
              className="rounded-full border border-yellow-400 px-8 py-4 text-lg font-semibold text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
            >
              Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#3b0a0a] px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-yellow-400/20 bg-[#4a0c0c] p-6 text-center shadow-xl"
            >
              <p className="font-bold text-yellow-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="collections"
        className="bg-[#fff8e7] px-6 py-24 text-[#3b0a0a]"
      >
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold tracking-[0.4em] text-[#b8860b]">
            OUR COLLECTIONS
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Explore Royal Ethnic Wear
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#6b2b2b]">
            Curated collections for weddings, festivals and timeless traditional
            elegance.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {collections.map((item) => (
              <motion.a
                href={item.link}
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group rounded-3xl border border-[#d4af37]/40 bg-white p-8 text-left shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-8 overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#3b0a0a]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#6b2b2b]">
                  {item.text}
                </p>

                <span className="mt-6 inline-block text-sm font-bold text-[#b8860b]">
                  View Collection →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3b0a0a] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold tracking-[0.4em] text-yellow-300">
            FEATURED PRODUCTS
          </p>

          <h2 className="mt-4 text-4xl font-bold text-yellow-400 md:text-5xl">
            Trending Ethnic Picks
          </h2>

          <p className="mt-5 max-w-2xl text-lg text-yellow-100">
            Handpicked premium styles from our latest wedding and festive
            collection.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {featuredProducts.map((product) => (
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
        </div>
      </section>

      <section className="bg-[#fff8e7] px-6 py-24 text-[#3b0a0a]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-[0.4em] text-[#b8860b]">
              TRUSTED BY CUSTOMERS
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Wedding & Festival Specialist
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6b2b2b]">
              Ambika Vastralaya brings premium ethnic wear for every special
              occasion — from bridal lehanga to Rajputi poshak, sarees and work
              odhani.
            </p>

            <a
              href="https://wa.me/918955174687"
              target="_blank"
              className="mt-8 inline-block rounded-full bg-[#3b0a0a] px-8 py-4 font-bold text-yellow-300"
            >
              Talk on WhatsApp
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/rajputi-poshak.jpg"
              alt="Ambika Vastralaya collection"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fff8e7] px-6 py-24 text-[#3b0a0a]">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold tracking-[0.4em] text-[#b8860b]">
            CUSTOMER REVIEWS
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#6b2b2b]">
            Trusted by families for wedding, mayra and festive shopping.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Pooja Sharma",
                review:
                  "Beautiful bridal collection and excellent quality. The outfit looked exactly as shown in photos.",
              },
              {
                name: "Kavita Rajpurohit",
                review:
                  "Purchased Rajputi poshak for a family function. Premium fabric and very helpful WhatsApp support.",
              },
              {
                name: "Neha Choudhary",
                review:
                  "Wedding shopping became easy with Ambika Vastralaya. Great collection and quick response.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-[#d4af37]/30 bg-white p-8 shadow-xl"
              >
                <div className="text-2xl text-[#b8860b]">⭐⭐⭐⭐⭐</div>

                <p className="mt-5 text-base leading-7 text-[#6b2b2b]">
                  "{item.review}"
                </p>

                <h3 className="mt-6 text-lg font-bold">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3b0a0a] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold tracking-[0.4em] text-yellow-300">
            REELS SHOWCASE
          </p>

          <h2 className="mt-4 text-4xl font-bold text-yellow-400 md:text-5xl">
            Watch Our Royal Collection
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-yellow-100">
            Explore our latest Ambika Vastralaya reels and real product
            highlights.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Bridal Lehanga Collection",
                url: "https://www.instagram.com/reel/DX6BFfahkUq/",
              },
              {
                title: "Rajwadi Odhani",
                url: "https://www.instagram.com/reel/DYwKWF6h49t/",
              },
              {
                title: "Premium Collection",
                url: "https://www.instagram.com/reel/DU-w3AoAWJY/",
              },
              {
                title: "Quality & Price",
                url: "https://www.instagram.com/reel/DRggvG4AQpw/",
              },
            ].map((reel) => (
              <a
                key={reel.title}
                href={reel.url}
                target="_blank"
                className="group overflow-hidden rounded-3xl border border-yellow-400/30 bg-[#4a0c0c] shadow-2xl transition hover:-translate-y-2"
              >
                <div className="flex h-96 items-center justify-center bg-gradient-to-b from-[#7a1515] to-[#1f0505] text-center">
                  <div>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-2xl text-black">
                      ▶
                    </div>
                    <p className="mt-5 font-bold text-yellow-300">
                      Watch Reel
                    </p>
                  </div>
                </div>

                <div className="p-5 text-left">
                  <h3 className="text-xl font-bold text-yellow-300">
                    {reel.title}
                  </h3>
                  <p className="mt-2 text-sm text-yellow-100">
                    Tap to watch on Instagram.
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3b0a0a] px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold tracking-[0.4em] text-yellow-300">
            WHY CHOOSE AMBIKA
          </p>

          <h2 className="mt-4 text-4xl font-bold text-yellow-400 md:text-5xl">
            Premium Ethnic Wear Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-yellow-100">
            From wedding collections to festive outfits, Ambika Vastralaya
            brings royal style, trusted quality and personal WhatsApp support.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              {
                icon: "👑",
                title: "Royal Wedding Collection",
                text: "Premium lehanga, poshak, sarees and odhani for special occasions.",
              },
              {
                icon: "🧵",
                title: "Premium Quality",
                text: "Carefully selected ethnic wear with elegant work and finishing.",
              },
              {
                icon: "🚚",
                title: "All India Delivery",
                text: "Order from anywhere and get product details directly on WhatsApp.",
              },
              {
                icon: "💬",
                title: "WhatsApp Support",
                text: "Ask for price, availability, more photos and order help anytime.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-yellow-400/20 bg-[#4a0c0c] p-8 shadow-2xl transition hover:-translate-y-2 hover:border-yellow-400/60"
              >
                <div className="text-5xl">{item.icon}</div>

                <h3 className="mt-6 text-xl font-bold text-yellow-300">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-yellow-100">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f0505] px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-yellow-400">
          Ready to Explore Premium Ethnic Wear?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-yellow-100">
          Message us on WhatsApp for price, availability, more photos and order
          details.
        </p>

        <a
          href="https://wa.me/918955174687"
          target="_blank"
          className="mt-8 inline-block rounded-full bg-yellow-400 px-8 py-4 font-bold text-black"
        >
          Order on WhatsApp
        </a>
      </section>

      <a
        href="https://wa.me/918955174687"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-6 py-4 text-sm font-bold text-white shadow-2xl transition hover:scale-110"
      >
        WhatsApp
      </a>

      <Footer />
    </main>
  );
}