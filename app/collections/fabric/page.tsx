import type { Metadata } from "next";
import CollectionPage from "../../../components/CollectionPage";
import { fabricProducts } from "../../../data/products";

export const metadata: Metadata = {
  title: "Fabric & Dress Material | Chunari, Bandhej & Poshak Fabric",
  description:
    "Shop premium fabric and dress material at Ambika Vastralaya Mogana. Chunari fabric, Bandhej fabric, Rajputi Poshak fabric and bridal fabric available as per meter requirement.",
};

export default function FabricPage() {
  return (
    <CollectionPage
      label="FABRIC & DRESS MATERIAL"
      title="Fabric Collection"
      description="Premium Chunari, Bandhej, Poshak and Bridal fabric available as per meter requirement. Message us on WhatsApp for required length, price and availability."
      products={fabricProducts}
    />
  );
}