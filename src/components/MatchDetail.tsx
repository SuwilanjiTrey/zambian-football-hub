import { ArrowLeft, Timer, Circle, AlertTriangle, ArrowRightLeft, Users } from "lucide-react";
import { MatchDetail as MatchDetailType } from "@/data/matches";
import { useState } from "react";

interface MatchDetailProps {
  match: MatchDetailType;
  onBack: () => void;
}

const eventIcons = {
  goal: <Circle size={12} className="text-primary fill-primary" />,
  yellow: <AlertTriangle size={12} className="text-amber-400 fill-amber-400/30" />,
  red: <AlertTriangle size={12} className="text-destructive fill-destructive/30" />,
  substitution: <ArrowRightLeft size={12} className="text-muted-foreground" />,
};

type Tab = "events" | "lineups" | "stats";

const MatchDetail = ({ match, onBack }: MatchDetailProps) => {
  const [tab, setTab] = useState<Tab>("events");

  const tabs: { id: Tab; label: string }[] = [
    { id: "events", label: "Timeline" },
    { id: "lineups", label: "Lineups" },
    { id: "stats", label: "Stats" },
  ];

  return (
    <div className="space-y-4 animate-in slide-in-from-right-4 duration-200">
      <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft size={18} />
        <span className="text-xs font-body">Back</span>
      </button>

      {/* Score Header */}
      <div className="glass-card rounded-2xl p-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 to-transparent" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-body text-muted-foreground uppercase tracking-wider">{match.league}</span>
            {match.isLive && (
              <div className="flex items-center gap-1.5">
                <span className="live-dot" />
                <span className="text-[10px] font-body text-destructive font-semibold">LIVE</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex-1">
              <p className="font-display text-base text-foreground">{match.homeTeam}</p>
            </div>
            <div className="flex items-center gap-3 px-4">
              <span className="font-display text-4xl text-foreground">{match.homeScore}</span>
              <span className="text-muted-foreground font-body">-</span>
              <span className="font-display text-4xl text-foreground">{match.awayScore}</span>
            </div>
            <div className="flex-1 text-right">
              <p className="font-display text-base text-foreground">{match.awayTeam}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-2">
            <Timer size={12} className="text-muted-foreground" />
            <span className="text-[11px] font-body text-muted-foreground">{match.minute}</span>
          </div>
          <p className="text-[10px] font-body text-muted-foreground mt-1">{match.venue}</p>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-1 bg-muted rounded-lg p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex-1 text-xs font-display py-2 rounded-md transition-all ${
              tab === t.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {tab === "events" && (
        <div className="space-y-1">
          {match.events.length === 0 && (
            <p className="text-xs font-body text-muted-foreground text-center py-6">No events yet</p>
          )}
          {match.events.map((event, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 glass-card rounded-lg p-3 ${
                event.team === "away" ? "flex-row-reverse text-right" : ""
              }`}
            >
              <div className="shrink-0">{eventIcons[event.type]}</div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-xs text-foreground truncate">{event.player}</p>
                {event.detail && (
                  <p className="text-[10px] font-body text-muted-foreground">{event.detail}</p>
                )}
              </div>
              <span className="text-[10px] font-body text-muted-foreground shrink-0">{event.minute}</span>
            </div>
          ))}
        </div>
      )}

      {tab === "lineups" && (
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: match.homeTeam, players: match.homeLineup },
            { label: match.awayTeam, players: match.awayLineup },
          ].map((side) => (
            <div key={side.label} className="glass-card rounded-xl p-3">
              <div className="flex items-center gap-1.5 mb-3">
                <Users size={14} className="text-primary" />
                <h4 className="font-display text-[11px] text-foreground">{side.label}</h4>
              </div>
              <div className="space-y-1.5">
                {side.players.map((p, i) => (
                  <p key={i} className="text-[11px] font-body text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "stats" && (
        <div className="space-y-3">
          {match.stats.map((stat, i) => {
            const total = stat.home + stat.away || 1;
            const homePercent = (stat.home / total) * 100;
            return (
              <div key={i} className="glass-card rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display text-xs text-foreground">{stat.home}</span>
                  <span className="text-[10px] font-body text-muted-foreground">{stat.label}</span>
                  <span className="font-display text-xs text-foreground">{stat.away}</span>
                </div>
                <div className="flex h-1.5 rounded-full overflow-hidden bg-muted">
                  <div
                    className="bg-primary rounded-l-full transition-all duration-500"
                    style={{ width: `${homePercent}%` }}
                  />
                  <div
                    className="bg-copper rounded-r-full transition-all duration-500"
                    style={{ width: `${100 - homePercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MatchDetail;
