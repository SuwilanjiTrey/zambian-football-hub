import ShopCard from "@/components/ShopCard";
import SectionHeader from "@/components/SectionHeader";

const shopItems = [
  {
    name: "CHIPOLOPOLO HOME JERSEY 2026",
    price: "K450",
    image: "https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?w=400&h=400&fit=crop",
    badge: "NEW",
  },
  {
    name: "ZAMBIA AWAY KIT 2026",
    price: "K420",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=400&fit=crop",
    badge: "HOT",
  },
  {
    name: "SUPER LEAGUE MATCH BALL",
    price: "K280",
    image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=400&h=400&fit=crop",
  },
  {
    name: "CHIPOLOPOLO SCARF",
    price: "K120",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
  },
  {
    name: "ZAMBIA TRAINING TOP",
    price: "K350",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=400&fit=crop",
    badge: "SALE",
  },
  {
    name: "COPPER EAGLES CAP",
    price: "K95",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=400&h=400&fit=crop",
  },
];

const ShopTab = () => {
  return (
    <div className="space-y-6">
      <SectionHeader title="Official Shop" action="Filter" />
      <div className="grid grid-cols-2 gap-3">
        {shopItems.map((item, i) => (
          <ShopCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ShopTab;
