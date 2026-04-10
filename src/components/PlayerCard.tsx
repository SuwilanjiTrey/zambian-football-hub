import { User, ChevronRight } from "lucide-react";
import { Player } from "@/data/players";

interface PlayerCardProps {
  player: Player;
  onSelect: (player: Player) => void;
}

const positionColor: Record<string, string> = {
  Goalkeeper: "bg-amber-500/20 text-amber-400",
  Defender: "bg-blue-500/20 text-blue-400",
  Midfielder: "bg-primary/20 text-primary",
  Striker: "bg-destructive/20 text-destructive",
  Forward: "bg-destructive/20 text-destructive",
};

const PlayerCard = ({ player, onSelect }: PlayerCardProps) => {
  return (
    <button
      onClick={() => onSelect(player)}
      className="glass-card rounded-xl p-3 flex items-center gap-3 w-full text-left group hover:border-primary/30 transition-all"
    >
      <div className="w-11 h-11 rounded-full bg-muted flex items-center justify-center shrink-0 border border-border">
        <User size={20} className="text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display text-sm text-foreground truncate">{player.name}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className={`text-[10px] font-body px-1.5 py-0.5 rounded-full ${positionColor[player.position] || "bg-muted text-muted-foreground"}`}>
            {player.position}
          </span>
          <span className="text-[10px] font-body text-muted-foreground">#{player.number}</span>
        </div>
      </div>
      <div className="text-right shrink-0 flex items-center gap-2">
        <div>
          <p className="font-display text-sm text-copper">{player.goals}</p>
          <p className="text-[9px] font-body text-muted-foreground">GOALS</p>
        </div>
        <ChevronRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </button>
  );
};

export default PlayerCard;
