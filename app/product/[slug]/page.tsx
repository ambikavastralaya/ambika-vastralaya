import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ProductCard from "../../../components/ProductCard";
import ProductGallery from "../../../components/ProductGallery";
import ShareButton from "../../../components/ShareButton";
import {
  bridalProducts,
  workOdhaniProducts,
  rajputiProducts,
  sareeProducts,
  fabricProducts,
} from "../../../data/products";

const allProducts = [
  ...bridalProducts,
  ...workOdhaniProducts,
  ...rajputiProducts,
  ...sareeProducts,
  ...fabricProducts,
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = allProducts.find((item) => item.slug === slug);

  const relatedProducts = allProducts
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#3b0a0a] text-white">
        <Navbar />

        <section className="px-6 py-32 text-center">
          <h1 className="text-5xl font-bold text-yellow-400">
            Product Not Found
          </h1>
        </section>

        <Footer />
      </main>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in ${product.title}. Please share price and details.`
  );

  return (
    <main className="min-h-screen bg-[#3b0a0a] text-white">
      <Navbar />

      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <ProductGallery images={product.images} title={product.title} />

          <div className="flex flex-col justify-center rounded-3xl border border-yellow-400/20 bg-[#2a0707]/70 p-8 shadow-2xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold text-black">
                {product.badge}
              </span>

              <span className="rounded-full border border-yellow-400 px-4 py-2 text-xs font-bold text-yellow-300">
                {product.discount}
              </span>
            </div>

            <p className="text-sm font-bold tracking-[0.4em] text-yellow-300">
              PREMIUM COLLECTION
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight text-yellow-400">
              {product.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-yellow-100">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <h2 className="text-5xl font-bold text-yellow-400">
                ₹{product.price}
              </h2>

              <p className="text-2xl text-yellow-100/70 line-through">
                ₹{product.originalPrice}
              </p>

              <span className="rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-white">
                Save {product.discount}
              </span>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="rounded-2xl border border-yellow-400/20 bg-[#4a0c0c] p-5">
                <p className="text-sm text-yellow-300">Fabric</p>
                <h3 className="mt-2 text-lg font-bold">{product.fabric}</h3>
              </div>

              <div className="rounded-2xl border border-yellow-400/20 bg-[#4a0c0c] p-5">
                <p className="text-sm text-yellow-300">Work</p>
                <h3 className="mt-2 text-lg font-bold">{product.work}</h3>
              </div>

              <div className="rounded-2xl border border-yellow-400/20 bg-[#4a0c0c] p-5">
                <p className="text-sm text-yellow-300">Occasion</p>
                <h3 className="mt-2 text-lg font-bold">{product.occasion}</h3>
              </div>

              <div className="rounded-2xl border border-yellow-400/20 bg-[#4a0c0c] p-5">
                <p className="text-sm text-yellow-300">Color</p>
                <h3 className="mt-2 text-lg font-bold">{product.color}</h3>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-yellow-400/20 bg-[#4a0c0c] p-5">
              <p className="text-sm font-bold text-yellow-300">
                Why choose this product?
              </p>

              <p className="mt-3 text-sm leading-6 text-yellow-100">
                Premium ethnic wear selected for wedding, festive and traditional
                occasions. For exact price, availability and more photos, contact
                directly on WhatsApp.
              </p>
            </div>

            <a
              href={`https://wa.me/918955174687?text=${whatsappMessage}`}
              target="_blank"
              className="mt-10 inline-flex w-fit items-center justify-center rounded-full bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              Order on WhatsApp
            </a>
            <ShareButton
  title={product.title}
  url={`http://localhost:3000/product/${product.slug}`}
/>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold tracking-[0.4em] text-yellow-300">
            YOU MAY ALSO LIKE
          </p>

          <h2 className="mt-4 text-4xl font-bold text-yellow-400">
            Related Products
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.slug}
                slug={item.slug}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                originalPrice={item.originalPrice}
                discount={item.discount}
                badge={item.badge}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-between bg-[#1f0505] px-4 py-3 shadow-2xl md:hidden">
        <div>
          <p className="text-lg font-bold text-yellow-400">
            ₹{product.price}
          </p>

          <p className="text-xs text-yellow-100/70 line-through">
            ₹{product.originalPrice}
          </p>
        </div>

        <a
          href={`https://wa.me/918955174687?text=${whatsappMessage}`}
          target="_blank"
          className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-black"
        >
          Order Now
        </a>
      </div>

      <Footer />
    </main>
  );
}