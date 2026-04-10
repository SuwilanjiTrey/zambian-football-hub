import { TrendingUp, Calendar, Award, Zap } from "lucide-react";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="glass-card rounded-xl p-4 col-span-2 flex items-center gap-4 cursor-pointer hover:border-primary/30 transition-all">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <TrendingUp size={22} className="text-primary" />
        </div>
        <div>
          <h3 className="font-display text-sm text-foreground">League Standings</h3>
          <p className="text-[11px] font-body text-muted-foreground mt-0.5">
            Super League table updated in real time
          </p>
        </div>
      </div>

      <div className="glass-card rounded-xl p-4 cursor-pointer hover:border-primary/30 transition-all">
        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
          <Calendar size={18} className="text-secondary" />
        </div>
        <h3 className="font-display text-xs text-foreground">Fixtures</h3>
        <p className="text-[10px] font-body text-muted-foreground mt-1">Upcoming matches</p>
      </div>

      <div className="glass-card rounded-xl p-4 cursor-pointer hover:border-primary/30 transition-all">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
          <Award size={18} className="text-primary" />
        </div>
        <h3 className="font-display text-xs text-foreground">Top Scorers</h3>
        <p className="text-[10px] font-body text-muted-foreground mt-1">Golden boot race</p>
      </div>

      <div className="glass-card rounded-xl p-4 col-span-2 cursor-pointer hover:border-copper/30 transition-all bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center shrink-0">
            <Zap size={18} className="text-copper" />
          </div>
          <div>
            <h3 className="font-display text-xs text-foreground">Quick Highlights</h3>
            <p className="text-[10px] font-body text-muted-foreground mt-0.5">
              Watch the best moments from this week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
