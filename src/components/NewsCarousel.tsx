import { Clock, ArrowRight } from "lucide-react";

interface NewsItem {
  title: string;
  category: string;
  time: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    title: "Chipolopolo Gear Up for AFCON Qualifiers",
    category: "National Team",
    time: "2h ago",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop",
  },
  {
    title: "Zesco United Sign New Striker from DR Congo",
    category: "Transfers",
    time: "4h ago",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=250&fit=crop",
  },
  {
    title: "FAZ Announces New Season Calendar for 2026",
    category: "League",
    time: "6h ago",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=250&fit=crop",
  },
  {
    title: "Nkana FC Youth Academy Produces Rising Stars",
    category: "Youth",
    time: "8h ago",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=250&fit=crop",
  },
];

const NewsCarousel = () => {
  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 -mx-4 px-4">
      {newsItems.map((item, index) => (
        <div
          key={index}
          className="glass-card rounded-xl overflow-hidden min-w-[280px] snap-center shrink-0 group cursor-pointer hover:border-primary/30 transition-all"
        >
          <div className="relative h-36 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
            <span className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-[10px] font-body font-semibold px-2 py-0.5 rounded-full">
              {item.category}
            </span>
          </div>
          <div className="p-3">
            <h3 className="font-display text-sm text-foreground leading-tight line-clamp-2">
              {item.title}
            </h3>
            <div className="flex items-center gap-1 mt-2">
              <Clock size={11} className="text-muted-foreground" />
              <span className="text-[10px] font-body text-muted-foreground">{item.time}</span>
              <ArrowRight size={12} className="text-primary ml-auto group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCarousel;
