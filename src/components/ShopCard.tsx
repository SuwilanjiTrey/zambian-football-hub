import { ShoppingCart } from "lucide-react";

interface ShopCardProps {
  name: string;
  price: string;
  image: string;
  badge?: string;
}

const ShopCard = ({ name, price, image, badge }: ShopCardProps) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-primary/30 transition-all">
      <div className="relative aspect-square bg-muted overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        {badge && (
          <span className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-[10px] font-body font-semibold px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <div className="p-3">
        <p className="font-display text-xs text-foreground truncate">{name}</p>
        <div className="flex items-center justify-between mt-1.5">
          <span className="font-body text-sm font-semibold text-copper">{price}</span>
          <button className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
            <ShoppingCart size={14} className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
