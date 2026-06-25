import type { Metadata } from "next";
import CollectionPage from "../../../components/CollectionPage";
import { bridalProducts } from "../../../data/products";

export const metadata: Metadata = {
  title:
    "Bridal Lehangas | Wedding Lehanga Collection - Ambika Vastralaya",
  description:
    "Explore premium bridal lehanga collection at Ambika Vastralaya Mogana. Royal wedding lehanga, designer bridal lehanga and luxury bridal wear for special occasions.",
};

export default function BridalPage() {
  return (
    <CollectionPage
      label="BRIDAL COLLECTION"
      title="Bridal Lehangas"
      description="Discover premium bridal lehanga collection crafted for weddings, royal celebrations and unforgettable moments."
      products={bridalProducts}
    />
  );
}