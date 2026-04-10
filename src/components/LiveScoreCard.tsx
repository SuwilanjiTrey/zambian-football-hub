import { Timer } from "lucide-react";

interface LiveScoreCardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  minute: string;
  isLive: boolean;
  league: string;
}

const LiveScoreCard = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  minute,
  isLive,
  league,
}: LiveScoreCardProps) => {
  return (
    <div className="glass-card rounded-xl p-4 min-w-[260px] snap-center shrink-0">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-body text-muted-foreground uppercase tracking-wider">
          {league}
        </span>
        {isLive && (
          <div className="flex items-center gap-1.5">
            <span className="live-dot" />
            <span className="text-[10px] font-body text-destructive font-semibold">LIVE</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex-1 text-left">
          <p className="font-display text-sm text-foreground">{homeTeam}</p>
        </div>
        <div className="flex items-center gap-2 px-3">
          <span className="font-display text-2xl text-foreground">{homeScore}</span>
          <span className="text-muted-foreground text-xs">-</span>
          <span className="font-display text-2xl text-foreground">{awayScore}</span>
        </div>
        <div className="flex-1 text-right">
          <p className="font-display text-sm text-foreground">{awayTeam}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1 mt-2">
        <Timer size={12} className="text-muted-foreground" />
        <span className="text-[11px] font-body text-muted-foreground">{minute}</span>
      </div>
    </div>
  );
};

export default LiveScoreCard;
