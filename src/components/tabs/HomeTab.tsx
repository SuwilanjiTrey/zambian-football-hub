import LiveScoreCard from "@/components/LiveScoreCard";
import NewsCarousel from "@/components/NewsCarousel";
import BentoGrid from "@/components/BentoGrid";
import SectionHeader from "@/components/SectionHeader";

const liveMatches = [
  { homeTeam: "ZESCO UTD", awayTeam: "NKANA FC", homeScore: 2, awayScore: 1, minute: "67'", isLive: true, league: "Super League" },
  { homeTeam: "POWER DYN.", awayTeam: "GREEN BUFF.", homeScore: 0, awayScore: 0, minute: "23'", isLive: true, league: "Super League" },
  { homeTeam: "ZANACO", awayTeam: "RED ARROWS", homeScore: 1, awayScore: 3, minute: "FT", isLive: false, league: "Super League" },
];

const HomeTab = () => {
  return (
    <div className="space-y-6">
      {/* Live Scores Carousel */}
      <section>
        <SectionHeader title="Live Matches" action="See All" />
        <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 -mx-4 px-4">
          {liveMatches.map((match, i) => (
            <LiveScoreCard key={i} {...match} />
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
