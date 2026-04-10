import { useState } from "react";
import LiveScoreCard from "@/components/LiveScoreCard";
import MatchDetail from "@/components/MatchDetail";
import SectionHeader from "@/components/SectionHeader";
import { matchDetails, MatchDetail as MatchDetailType } from "@/data/matches";

const additionalMatches = [
  { id: "m4", homeTeam: "LUSAKA DYN.", awayTeam: "KABWE WARR.", homeScore: 0, awayScore: 2, minute: "FT", isLive: false, league: "National Div 1" },
  { id: "m5", homeTeam: "BUILDCON", awayTeam: "NAPSA STARS", homeScore: 1, awayScore: 1, minute: "45+2'", isLive: true, league: "Super League" },
];

const allMatches = [
  ...matchDetails.map((m) => ({ id: m.id, homeTeam: m.homeTeam, awayTeam: m.awayTeam, homeScore: m.homeScore, awayScore: m.awayScore, minute: m.minute, isLive: m.isLive, league: m.league })),
  ...additionalMatches,
];

const ScoresTab = () => {
  const [selectedMatch, setSelectedMatch] = useState<MatchDetailType | null>(null);

  if (selectedMatch) {
    return <MatchDetail match={selectedMatch} onBack={() => setSelectedMatch(null)} />;
  }

  return (
    <div className="space-y-6">
      <SectionHeader title="Today's Matches" />
      <div className="space-y-3">
        {allMatches.map((match) => (
          <div
            key={match.id}
            onClick={() => {
              const detail = matchDetails.find((m) => m.id === match.id);
              if (detail) setSelectedMatch(detail);
            }}
            className="cursor-pointer"
          >
            <LiveScoreCard {...match} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoresTab;
