import LiveScoreCard from "@/components/LiveScoreCard";
import SectionHeader from "@/components/SectionHeader";

const todayMatches = [
  { homeTeam: "ZESCO UTD", awayTeam: "NKANA FC", homeScore: 2, awayScore: 1, minute: "67'", isLive: true, league: "Super League" },
  { homeTeam: "POWER DYN.", awayTeam: "GREEN BUFF.", homeScore: 0, awayScore: 0, minute: "23'", isLive: true, league: "Super League" },
  { homeTeam: "ZANACO", awayTeam: "RED ARROWS", homeScore: 1, awayScore: 3, minute: "FT", isLive: false, league: "Super League" },
  { homeTeam: "LUSAKA DYN.", awayTeam: "KABWE WARR.", homeScore: 0, awayScore: 2, minute: "FT", isLive: false, league: "National Div 1" },
  { homeTeam: "BUILDCON", awayTeam: "NAPSA STARS", homeScore: 1, awayScore: 1, minute: "45+2'", isLive: true, league: "Super League" },
];

const ScoresTab = () => {
  return (
    <div className="space-y-6">
      <SectionHeader title="Today's Matches" />
      <div className="space-y-3">
        {todayMatches.map((match, i) => (
          <LiveScoreCard key={i} {...match} />
        ))}
      </div>
    </div>
  );
};

export default ScoresTab;
