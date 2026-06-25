import type { Metadata } from "next";
import CollectionPage from "../../../components/CollectionPage";
import { workOdhaniProducts } from "../../../data/products";

export const metadata: Metadata = {
  title:
    "Work Odhani Collection | Heavy Handwork, Chunari & Wedding Odhani",
  description:
    "Shop premium Work Odhani collection at Ambika Vastralaya Mogana. Heavy handwork odhani, mirror work odhani, chunari odhani and wedding odhani collection.",
};

export default function WorkOdhaniPage() {
  return (
    <CollectionPage
      label="WORK ODHANI COLLECTION"
      title="Work Odhani"
      description="Premium embroidery, mirror work and festive odhani collection for weddings and celebrations."
      products={workOdhaniProducts}
    />
  );
}