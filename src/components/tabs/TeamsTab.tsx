import TeamCard from "@/components/TeamCard";
import SectionHeader from "@/components/SectionHeader";

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
  return (
    <div className="space-y-6">
      <SectionHeader title="Super League Table" />
      <div className="space-y-2">
        {teams.map((team) => (
          <TeamCard key={team.position} {...team} />
        ))}
      </div>
    </div>
  );
};

export default TeamsTab;
