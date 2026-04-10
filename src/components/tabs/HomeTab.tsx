import { useState } from "react";
import LiveScoreCard from "@/components/LiveScoreCard";
import MatchDetail from "@/components/MatchDetail";
import NewsCarousel from "@/components/NewsCarousel";
import BentoGrid from "@/components/BentoGrid";
import SectionHeader from "@/components/SectionHeader";
import { matchDetails, MatchDetail as MatchDetailType } from "@/data/matches";

const HomeTab = () => {
  const [selectedMatch, setSelectedMatch] = useState<MatchDetailType | null>(null);

  if (selectedMatch) {
    return <MatchDetail match={selectedMatch} onBack={() => setSelectedMatch(null)} />;
  }

  return (
    <div className="space-y-6">
      {/* Live Scores Carousel */}
      <section>
        <SectionHeader title="Live Matches" action="See All" />
        <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 -mx-4 px-4">
          {matchDetails.map((match) => (
            <div key={match.id} onClick={() => setSelectedMatch(match)} className="cursor-pointer">
              <LiveScoreCard
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                homeScore={match.homeScore}
                awayScore={match.awayScore}
                minute={match.minute}
                isLive={match.isLive}
                league={match.league}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid */}
      <section>
        <SectionHeader title="Explore" />
        <BentoGrid />
      </section>

      {/* News */}
      <section>
        <SectionHeader title="Latest News" action="More" />
        <NewsCarousel />
      </section>
    </div>
  );
};

export default HomeTab;
