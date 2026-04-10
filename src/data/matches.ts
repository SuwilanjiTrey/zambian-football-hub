export interface MatchEvent {
  minute: string;
  type: "goal" | "yellow" | "red" | "substitution";
  player: string;
  team: "home" | "away";
  detail?: string;
}

export interface MatchDetail {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  minute: string;
  isLive: boolean;
  league: string;
  date: string;
  venue: string;
  homeLineup: string[];
  awayLineup: string[];
  events: MatchEvent[];
  stats: { label: string; home: number; away: number }[];
}

export const matchDetails: MatchDetail[] = [
  {
    id: "m1",
    homeTeam: "ZESCO UTD", awayTeam: "NKANA FC", homeScore: 2, awayScore: 1,
    minute: "67'", isLive: true, league: "Super League",
    date: "Today", venue: "Levy Mwanawasa Stadium, Ndola",
    homeLineup: ["J. Mulenga (GK)", "K. Banda", "M. Phiri", "S. Nkole", "D. Mwila", "J. Were", "M. Musonda", "C. Zulu", "F. Mbewe", "T. Sakala", "P. Mwansa"],
    awayLineup: ["B. Chipeta (GK)", "I. Mbombo", "E. Mubanga", "L. Chama", "K. Mwale", "S. Bwalya", "R. Kangwa", "N. Tembo", "J. Nyirenda", "P. Kasonde", "D. Phiri"],
    events: [
      { minute: "12'", type: "goal", player: "J. Were", team: "home", detail: "Header from corner" },
      { minute: "28'", type: "yellow", player: "K. Mwale", team: "away" },
      { minute: "35'", type: "goal", player: "I. Mbombo", team: "away", detail: "Counter attack finish" },
      { minute: "52'", type: "substitution", player: "T. Sakala → C. Zulu", team: "home" },
      { minute: "61'", type: "goal", player: "M. Musonda", team: "home", detail: "Penalty" },
      { minute: "65'", type: "yellow", player: "S. Nkole", team: "home" },
    ],
    stats: [
      { label: "Possession", home: 58, away: 42 },
      { label: "Shots", home: 14, away: 8 },
      { label: "Shots on Target", home: 6, away: 3 },
      { label: "Corners", home: 7, away: 4 },
      { label: "Fouls", home: 11, away: 14 },
    ],
  },
  {
    id: "m2",
    homeTeam: "POWER DYN.", awayTeam: "GREEN BUFF.", homeScore: 0, awayScore: 0,
    minute: "23'", isLive: true, league: "Super League",
    date: "Today", venue: "Arthur Davies Stadium, Kitwe",
    homeLineup: ["L. Banda (GK)", "C. Sikombe", "E. Zulu", "B. Mwansa", "J. Kalaba", "P. Mwila", "R. Chibwe", "T. Musonda", "S. Mbewe", "K. Phiri", "D. Banda"],
    awayLineup: ["E. Chabula (GK)", "M. Tembo", "J. Nyambe", "P. Bwalya", "K. Chongo", "R. Mwansa", "S. Kapumbu", "L. Zulu", "N. Mwale", "D. Kangwa", "T. Phiri"],
    events: [
      { minute: "8'", type: "yellow", player: "J. Kalaba", team: "home" },
      { minute: "18'", type: "yellow", player: "M. Tembo", team: "away" },
    ],
    stats: [
      { label: "Possession", home: 52, away: 48 },
      { label: "Shots", home: 3, away: 2 },
      { label: "Shots on Target", home: 1, away: 0 },
      { label: "Corners", home: 2, away: 1 },
      { label: "Fouls", home: 6, away: 8 },
    ],
  },
  {
    id: "m3",
    homeTeam: "ZANACO", awayTeam: "RED ARROWS", homeScore: 1, awayScore: 3,
    minute: "FT", isLive: false, league: "Super League",
    date: "Today", venue: "Sunset Stadium, Lusaka",
    homeLineup: ["N. Mwila (GK)", "L. Mavugo", "J. Sakala", "P. Mwape", "K. Banda", "S. Zulu", "R. Phiri", "T. Mbewe", "D. Musonda", "C. Bwalya", "E. Mwansa"],
    awayLineup: ["J. Chibwe (GK)", "B. Musakanya", "M. Kangwa", "P. Tembo", "K. Nyirenda", "S. Mwale", "R. Chama", "L. Bwalya", "N. Zulu", "D. Phiri", "T. Kasonde"],
    events: [
      { minute: "15'", type: "goal", player: "B. Musakanya", team: "away", detail: "Long range strike" },
      { minute: "33'", type: "goal", player: "L. Mavugo", team: "home", detail: "Header from free kick" },
      { minute: "58'", type: "red", player: "S. Zulu", team: "home" },
      { minute: "67'", type: "goal", player: "B. Musakanya", team: "away", detail: "Curling free kick" },
      { minute: "82'", type: "goal", player: "M. Kangwa", team: "away", detail: "Tap in from close range" },
      { minute: "88'", type: "substitution", player: "P. Tembo → N. Zulu", team: "away" },
    ],
    stats: [
      { label: "Possession", home: 44, away: 56 },
      { label: "Shots", home: 7, away: 16 },
      { label: "Shots on Target", home: 2, away: 8 },
      { label: "Corners", home: 3, away: 9 },
      { label: "Fouls", home: 16, away: 10 },
    ],
  },
];
