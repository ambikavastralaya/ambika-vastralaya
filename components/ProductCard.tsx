import Link from "next/link";

export default function ProductCard(props: {
  slug: string;
  image: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: string;
  badge: string;
}) {
  return (
    <Link
      href={`/product/${props.slug}`}
      className="group block overflow-hidden rounded-3xl border border-yellow-400/20 bg-[#4a0c0c] shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-yellow-400/60"
    >
      <div className="relative overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <span
          className={`absolute left-4 top-4 rounded-full px-4 py-2 text-xs font-bold shadow-lg ${
            props.badge === "Bestseller"
              ? "bg-red-500 text-white"
              : props.badge === "Trending"
              ? "bg-purple-500 text-white"
              : props.badge === "New Arrival"
              ? "bg-green-500 text-white"
              : "bg-yellow-400 text-black"
          }`}
        >
          {props.badge}
        </span>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-yellow-300">{props.title}</h2>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-yellow-100">
          {props.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <h3 className="text-3xl font-bold text-yellow-400">
            ₹{props.price}
          </h3>

          <p className="text-lg text-yellow-100/70 line-through">
            ₹{props.originalPrice}
          </p>

          <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
            {props.discount}
          </span>
        </div>

        <span className="mt-6 inline-flex items-center rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition group-hover:bg-yellow-300">
          View Product →
        </span>
      </div>
    </Link>
  );
}