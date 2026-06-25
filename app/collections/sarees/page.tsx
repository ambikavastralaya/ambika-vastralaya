import type { Metadata } from "next";
import CollectionPage from "../../../components/CollectionPage";
import { sareeProducts } from "../../../data/products";

export const metadata: Metadata = {
  title:
    "Designer Sarees Collection | Wedding, Party Wear & Festive Sarees",
  description:
    "Shop premium saree collection at Ambika Vastralaya Mogana. Designer sarees, wedding sarees, festive sarees, silk sarees and traditional ethnic wear.",
};

export default function SareesPage() {
  return (
    <CollectionPage
      label="SAREE COLLECTION"
      title="Sarees"
      description="Explore elegant saree collection crafted for weddings, festivals and timeless celebrations."
      products={sareeProducts}
    />
  );
}