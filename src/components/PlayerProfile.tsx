import { ArrowLeft, User, Target, Footprints, ShieldAlert, Calendar } from "lucide-react";
import { Player } from "@/data/players";

interface PlayerProfileProps {
  player: Player;
  onBack: () => void;
}

const PlayerProfile = ({ player, onBack }: PlayerProfileProps) => {
  const statItems = [
    { label: "Goals", value: player.goals, icon: Target },
    { label: "Assists", value: player.assists, icon: Footprints },
    { label: "Apps", value: player.appearances, icon: Calendar },
    { label: "Yellows", value: player.yellowCards, icon: ShieldAlert },
  ];

  return (
    <div className="space-y-5 animate-in slide-in-from-right-4 duration-200">
      {/* Header */}
      <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft size={18} />
        <span className="text-xs font-body">Back to squad</span>
      </button>

      {/* Player Hero */}
      <div className="glass-card rounded-2xl p-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-full bg-muted border-2 border-primary/30 flex items-center justify-center mx-auto mb-3">
            <User size={36} className="text-muted-foreground" />
          </div>
          <h2 className="font-display text-xl text-foreground">{player.name}</h2>
          <p className="text-xs font-body text-muted-foreground mt-1">
            {player.position} · #{player.number} · {player.team}
          </p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="text-[10px] font-body text-muted-foreground">{player.nationality}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-[10px] font-body text-muted-foreground">Age {player.age}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-2">
        {statItems.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="glass-card rounded-xl p-3 text-center">
              <Icon size={16} className="text-primary mx-auto mb-1.5" />
              <p className="font-display text-lg text-foreground">{stat.value}</p>
              <p className="text-[9px] font-body text-muted-foreground uppercase">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Career History */}
      <div>
        <h3 className="font-display text-sm text-foreground mb-3">Career History</h3>
        <div className="space-y-2">
          {player.career.map((entry, i) => (
            <div key={i} className="glass-card rounded-xl p-3 flex items-center justify-between">
              <div>
                <p className="font-display text-xs text-foreground">{entry.team}</p>
                <p className="text-[10px] font-body text-muted-foreground">{entry.years}</p>
              </div>
              <div className="flex gap-4 text-right">
                <div>
                  <p className="font-display text-sm text-foreground">{entry.apps}</p>
                  <p className="text-[9px] font-body text-muted-foreground">APPS</p>
                </div>
                <div>
                  <p className="font-display text-sm text-copper">{entry.goals}</p>
                  <p className="text-[9px] font-body text-muted-foreground">GOALS</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
