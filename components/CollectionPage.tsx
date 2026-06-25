import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductSearch from "./ProductSearch";

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

type CollectionPageProps = {
  label: string;
  title: string;
  description: string;
  products: Product[];
};

export default function CollectionPage({
  label,
  title,
  description,
  products,
}: CollectionPageProps) {
  return (
    <main className="min-h-screen bg-[#3b0a0a] text-white">
      <Navbar />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl pt-20">
          <p className="text-sm font-bold tracking-[0.4em] text-yellow-300">
            {label}
          </p>

          <h1 className="mt-4 text-5xl font-bold text-yellow-400 md:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-yellow-100">
            {description}
          </p>

          <div className="mt-16">
            <ProductSearch products={products} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}