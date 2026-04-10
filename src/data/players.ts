export interface Player {
  id: string;
  name: string;
  position: string;
  number: number;
  team: string;
  nationality: string;
  age: number;
  goals: number;
  assists: number;
  appearances: number;
  yellowCards: number;
  redCards: number;
  career: { team: string; years: string; apps: number; goals: number }[];
}

export const players: Player[] = [
  {
    id: "p1", name: "Jesse Were", position: "Striker", number: 9, team: "ZESCO UNITED",
    nationality: "Kenya", age: 33, goals: 14, assists: 5, appearances: 28, yellowCards: 3, redCards: 0,
    career: [
      { team: "Zesco United", years: "2016–Present", apps: 180, goals: 95 },
      { team: "Tusker FC", years: "2012–2016", apps: 110, goals: 52 },
      { team: "Mathare United", years: "2009–2012", apps: 78, goals: 30 },
    ],
  },
  {
    id: "p2", name: "Mwape Musonda", position: "Striker", number: 10, team: "ZESCO UNITED",
    nationality: "Zambia", age: 30, goals: 11, assists: 3, appearances: 25, yellowCards: 2, redCards: 0,
    career: [
      { team: "Zesco United", years: "2020–Present", apps: 85, goals: 48 },
      { team: "Orlando Pirates", years: "2017–2020", apps: 45, goals: 12 },
      { team: "Nkana FC", years: "2014–2017", apps: 90, goals: 55 },
    ],
  },
  {
    id: "p3", name: "Idris Mbombo", position: "Forward", number: 7, team: "NKANA FC",
    nationality: "DR Congo", age: 29, goals: 12, assists: 7, appearances: 27, yellowCards: 4, redCards: 1,
    career: [
      { team: "Nkana FC", years: "2019–Present", apps: 120, goals: 58 },
      { team: "TP Mazembe", years: "2015–2019", apps: 95, goals: 35 },
    ],
  },
  {
    id: "p4", name: "Collins Sikombe", position: "Midfielder", number: 8, team: "POWER DYNAMOS",
    nationality: "Zambia", age: 26, goals: 6, assists: 10, appearances: 30, yellowCards: 5, redCards: 0,
    career: [
      { team: "Power Dynamos", years: "2018–Present", apps: 150, goals: 28 },
      { team: "Lusaka Dynamos", years: "2015–2018", apps: 72, goals: 10 },
    ],
  },
  {
    id: "p5", name: "Laudit Mavugo", position: "Defender", number: 4, team: "ZANACO FC",
    nationality: "DR Congo", age: 31, goals: 2, assists: 1, appearances: 26, yellowCards: 7, redCards: 1,
    career: [
      { team: "Zanaco FC", years: "2019–Present", apps: 100, goals: 5 },
      { team: "AS Vita Club", years: "2014–2019", apps: 130, goals: 8 },
    ],
  },
  {
    id: "p6", name: "Bruce Musakanya", position: "Midfielder", number: 11, team: "RED ARROWS",
    nationality: "Zambia", age: 25, goals: 8, assists: 12, appearances: 29, yellowCards: 3, redCards: 0,
    career: [
      { team: "Red Arrows", years: "2020–Present", apps: 95, goals: 22 },
      { team: "Buildcon FC", years: "2017–2020", apps: 68, goals: 14 },
    ],
  },
  {
    id: "p7", name: "Emmanuel Chabula", position: "Goalkeeper", number: 1, team: "GREEN BUFFALOES",
    nationality: "Zambia", age: 28, goals: 0, assists: 0, appearances: 30, yellowCards: 1, redCards: 0,
    career: [
      { team: "Green Buffaloes", years: "2017–Present", apps: 160, goals: 0 },
      { team: "Mufulira Wanderers", years: "2014–2017", apps: 70, goals: 0 },
    ],
  },
  {
    id: "p8", name: "Tapson Kaseba", position: "Striker", number: 9, team: "BUILDCON FC",
    nationality: "Zambia", age: 24, goals: 9, assists: 4, appearances: 27, yellowCards: 2, redCards: 0,
    career: [
      { team: "Buildcon FC", years: "2021–Present", apps: 70, goals: 30 },
      { team: "Kabwe Warriors", years: "2018–2021", apps: 65, goals: 18 },
    ],
  },
];

export const getPlayersByTeam = (team: string) =>
  players.filter((p) => p.team === team);
