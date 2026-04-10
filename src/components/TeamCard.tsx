import { ChevronRight } from "lucide-react";

interface TeamCardProps {
  name: string;
  city: string;
  position: number;
  points: number;
  color: string;
}

const TeamCard = ({ name, city, position, points, color }: TeamCardProps) => {
  return (
    <div className="glass-card rounded-xl p-4 flex items-center gap-3 group hover:border-primary/30 transition-all cursor-pointer">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center font-display text-sm text-primary-foreground shrink-0"
        style={{ backgroundColor: color }}
      >
        {position}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display text-sm text-foreground truncate">{name}</p>
        <p className="text-[11px] font-body text-muted-foreground">{city}</p>
      </div>
      <div className="text-right shrink-0 flex items-center gap-1">
        <span className="font-display text-lg text-copper">{points}</span>
        <span className="text-[10px] text-muted-foreground font-body">PTS</span>
        <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors ml-1" />
      </div>
    </div>
  );
};

export default TeamCard;
