import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdminLogin from "../../components/AdminLogin";

const collections = [
  "Bridal Lehanga",
  "Work Odhani",
  "Rajputi Poshak",
  "Sarees",
  "Fabric",
];

export default function AdminPage() {
  return (
    <AdminLogin>
      <main className="min-h-screen bg-[#3b0a0a] text-white">
        <Navbar />

        <section className="px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold tracking-[0.4em] text-yellow-300">
              ADMIN DASHBOARD
            </p>

            <h1 className="mt-4 text-5xl font-bold text-yellow-400">
              Ambika Vastralaya Admin
            </h1>

            <p className="mt-5 max-w-2xl text-yellow-100">
              Manage products, collections and website content.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <a
                href="/admin/products"
                className="rounded-3xl border border-yellow-400/20 bg-[#4a0c0c] p-8 shadow-2xl transition hover:-translate-y-2"
              >
                <p className="text-sm text-yellow-300">Manage</p>
                <h2 className="mt-3 text-3xl font-bold text-yellow-400">
                  Products
                </h2>
                <p className="mt-3 text-yellow-100">
                  View, edit and delete products.
                </p>
              </a>

              <a
                href="/admin/add-product"
                className="rounded-3xl border border-yellow-400/20 bg-[#4a0c0c] p-8 shadow-2xl transition hover:-translate-y-2"
              >
                <p className="text-sm text-yellow-300">Create</p>
                <h2 className="mt-3 text-3xl font-bold text-yellow-400">
                  Add Product
                </h2>
                <p className="mt-3 text-yellow-100">
                  Add new product to Supabase.
                </p>
              </a>

              <div className="rounded-3xl border border-yellow-400/20 bg-[#4a0c0c] p-8 shadow-2xl">
                <p className="text-sm text-yellow-300">Collections</p>
                <h2 className="mt-3 text-5xl font-bold text-yellow-400">
                  {collections.length}
                </h2>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <a
                href="/"
                className="rounded-3xl border border-yellow-400/20 bg-[#4a0c0c] p-6 font-bold text-yellow-300"
              >
                View Website →
              </a>

              <a
                href="/collections/fabric"
                className="rounded-3xl border border-yellow-400/20 bg-[#4a0c0c] p-6 font-bold text-yellow-300"
              >
                View Fabric Collection →
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </AdminLogin>
  );
}