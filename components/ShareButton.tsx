"use client";

export default function ShareButton(props: {
  title: string;
  url: string;
}) {
  const shareProduct = async () => {
    if (navigator.share) {
      await navigator.share({
        title: props.title,
        text: `Check this product: ${props.title}`,
        url: props.url,
      });
    } else {
      await navigator.clipboard.writeText(props.url);
      alert("Product link copied!");
    }
  };

  return (
    <button
      onClick={shareProduct}
      className="mt-4 w-fit rounded-full border border-yellow-400 px-8 py-4 text-lg font-bold text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
    >
      Share Product
    </button>
  );
}