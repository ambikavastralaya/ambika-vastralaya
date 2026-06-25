import type { Metadata } from "next";
import CollectionPage from "../../../components/CollectionPage";
import { rajputiProducts } from "../../../data/products";

export const metadata: Metadata = {
  title:
    "Rajputi Poshak Collection | Traditional & Wedding Rajputi Poshak",
  description:
    "Explore premium Rajputi Poshak collection at Ambika Vastralaya Mogana. Traditional Rajputi Poshak, wedding poshak, royal Rajasthani poshak and festive ethnic wear.",
};

export default function RajputiPoshakPage() {
  return (
    <CollectionPage
      label="RAJPUTI POSHAK COLLECTION"
      title="Rajputi Poshak"
      description="Traditional royal Rajputi poshak collection designed for weddings, festivals and cultural elegance."
      products={rajputiProducts}
    />
  );
}