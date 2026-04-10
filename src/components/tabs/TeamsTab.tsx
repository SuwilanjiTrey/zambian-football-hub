import { useState } from "react";
import TeamCard from "@/components/TeamCard";
import PlayerCard from "@/components/PlayerCard";
import PlayerProfile from "@/components/PlayerProfile";
import SectionHeader from "@/components/SectionHeader";
import { getPlayersByTeam, Player } from "@/data/players";
import { ArrowLeft } from "lucide-react";

const teams = [
  { name: "ZESCO UNITED", city: "Ndola", position: 1, points: 54, color: "hsl(145, 63%, 32%)" },
  { name: "NKANA FC", city: "Kitwe", position: 2, points: 50, color: "hsl(0, 72%, 45%)" },
  { name: "POWER DYNAMOS", city: "Kitwe", position: 3, points: 47, color: "hsl(45, 90%, 50%)" },
  { name: "ZANACO FC", city: "Lusaka", position: 4, points: 45, color: "hsl(145, 50%, 28%)" },
  { name: "RED ARROWS", city: "Lusaka", position: 5, points: 43, color: "hsl(0, 85%, 50%)" },
  { name: "GREEN BUFFALOES", city: "Lusaka", position: 6, points: 40, color: "hsl(120, 60%, 30%)" },
  { name: "LUSAKA DYNAMOS", city: "Lusaka", position: 7, points: 38, color: "hsl(210, 70%, 45%)" },
  { name: "BUILDCON FC", city: "Ndola", position: 8, points: 36, color: "hsl(25, 90%, 52%)" },
  { name: "KABWE WARRIORS", city: "Kabwe", position: 9, points: 33, color: "hsl(280, 50%, 40%)" },
  { name: "NAPSA STARS", city: "Lusaka", position: 10, points: 30, color: "hsl(200, 70%, 40%)" },
];

const TeamsTab = () => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  if (selectedPlayer) {
    return <PlayerProfile player={selectedPlayer} onBack={() => setSelectedPlayer(null)} />;
  }

  if (selectedTeam) {
    const teamPlayers = getPlayersByTeam(selectedTeam);
    return (
      <div className="space-y-4 animate-in slide-in-from-right-4 duration-200">
        <button onClick={() => setSelectedTeam(null)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={18} />
          <span className="text-xs font-body">Back to table</span>
        </button>
        <SectionHeader title={selectedTeam} />
        {teamPlayers.length > 0 ? (
          <div className="space-y-2">
            {teamPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} onSelect={setSelectedPlayer} />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="text-xs font-body text-muted-foreground">Squad data coming soon</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <SectionHeader title="Super League Table" />
      <div className="space-y-2">
        {teams.map((team) => (
          <div key={team.position} onClick={() => setSelectedTeam(team.name)} className="cursor-pointer">
            <TeamCard {...team} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsTab;
