import { useState, useEffect, useRef } from "react";
import BottomNav from "@/components/BottomNav";
import HomeTab from "@/components/tabs/HomeTab";
import ScoresTab from "@/components/tabs/ScoresTab";
import TeamsTab from "@/components/tabs/TeamsTab";
import ShopTab from "@/components/tabs/ShopTab";
import { Bell, Search } from "lucide-react";
import footballBg from "@/assets/football-bg.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const offset = window.scrollY * 0.3;
        bgRef.current.style.transform = `translateY(${offset}px) scale(1.1)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background pb-20 relative">
      {/* Background Image with Parallax + Gradient Overlay */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img ref={bgRef} src={footballBg} alt="" className="w-full h-full object-cover opacity-20 will-change-transform scale-110 transition-none" width={1080} height={1920} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </div>
      {/* Header */}
      <header className="sticky top-0 z-40 glass-card border-b border-border/50 px-4 py-3 relative">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div>
            <h1 className="font-display text-lg tracking-wider">
              <span className="text-gradient-zambia">ZAMFOOT</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
              <Search size={16} className="text-muted-foreground" />
            </button>
            <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors relative">
              <Bell size={16} className="text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-lg mx-auto px-4 pt-4 relative z-10">
        {activeTab === "home" && <HomeTab />}
        {activeTab === "scores" && <ScoresTab />}
        {activeTab === "teams" && <TeamsTab />}
        {activeTab === "shop" && <ShopTab />}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
