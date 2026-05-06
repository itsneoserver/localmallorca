// FIFA World Cup 2026 fixtures (planning reference only).
// MallorcasLocal is not affiliated with FIFA. Fixtures are provided for
// planning inspiration only.

export type WorldCupPhase =
  | "Group Stage"
  | "Round of 32"
  | "Round of 16"
  | "Quarter-final"
  | "Semi-final"
  | "Bronze final"
  | "Final";

export type WorldCupFixture = {
  id: string;
  date: string; // YYYY-MM-DD
  phase: WorldCupPhase;
  group?: string;
  match: string;
  venue: string;
};

export const worldCupFixtures: WorldCupFixture[] = [
  { id: "wc-001", date: "2026-06-11", phase: "Group Stage", group: "Group A", match: "Mexico v South Africa", venue: "Mexico City Stadium" },
  { id: "wc-002", date: "2026-06-11", phase: "Group Stage", group: "Group A", match: "Korea Republic v Czechia", venue: "Estadio Guadalajara" },

  { id: "wc-003", date: "2026-06-12", phase: "Group Stage", group: "Group B", match: "Canada v Bosnia and Herzegovina", venue: "Toronto Stadium" },
  { id: "wc-004", date: "2026-06-12", phase: "Group Stage", group: "Group D", match: "USA v Paraguay", venue: "Los Angeles Stadium" },

  { id: "wc-005", date: "2026-06-13", phase: "Group Stage", group: "Group C", match: "Haiti v Scotland", venue: "Boston Stadium" },
  { id: "wc-006", date: "2026-06-13", phase: "Group Stage", group: "Group D", match: "Australia v Türkiye", venue: "BC Place Vancouver" },
  { id: "wc-007", date: "2026-06-13", phase: "Group Stage", group: "Group C", match: "Brazil v Morocco", venue: "New York New Jersey Stadium" },
  { id: "wc-008", date: "2026-06-13", phase: "Group Stage", group: "Group B", match: "Qatar v Switzerland", venue: "San Francisco Bay Area Stadium" },

  { id: "wc-009", date: "2026-06-14", phase: "Group Stage", group: "Group E", match: "Côte d'Ivoire v Ecuador", venue: "Philadelphia Stadium" },
  { id: "wc-010", date: "2026-06-14", phase: "Group Stage", group: "Group E", match: "Germany v Curaçao", venue: "Houston Stadium" },
  { id: "wc-011", date: "2026-06-14", phase: "Group Stage", group: "Group F", match: "Netherlands v Japan", venue: "Dallas Stadium" },
  { id: "wc-012", date: "2026-06-14", phase: "Group Stage", group: "Group F", match: "Sweden v Tunisia", venue: "Estadio Monterrey" },

  { id: "wc-013", date: "2026-06-15", phase: "Group Stage", group: "Group H", match: "Saudi Arabia v Uruguay", venue: "Miami Stadium" },
  { id: "wc-014", date: "2026-06-15", phase: "Group Stage", group: "Group H", match: "Spain v Cabo Verde", venue: "Atlanta Stadium" },
  { id: "wc-015", date: "2026-06-15", phase: "Group Stage", group: "Group G", match: "IR Iran v New Zealand", venue: "Los Angeles Stadium" },
  { id: "wc-016", date: "2026-06-15", phase: "Group Stage", group: "Group G", match: "Belgium v Egypt", venue: "Seattle Stadium" },

  { id: "wc-017", date: "2026-06-16", phase: "Group Stage", group: "Group I", match: "France v Senegal", venue: "New York New Jersey Stadium" },
  { id: "wc-018", date: "2026-06-16", phase: "Group Stage", group: "Group I", match: "Iraq v Norway", venue: "Boston Stadium" },
  { id: "wc-019", date: "2026-06-16", phase: "Group Stage", group: "Group J", match: "Argentina v Algeria", venue: "Kansas City Stadium" },
  { id: "wc-020", date: "2026-06-16", phase: "Group Stage", group: "Group J", match: "Austria v Jordan", venue: "San Francisco Bay Area Stadium" },

  { id: "wc-021", date: "2026-06-17", phase: "Group Stage", group: "Group L", match: "Ghana v Panama", venue: "Toronto Stadium" },
  { id: "wc-022", date: "2026-06-17", phase: "Group Stage", group: "Group L", match: "England v Croatia", venue: "Dallas Stadium" },
  { id: "wc-023", date: "2026-06-17", phase: "Group Stage", group: "Group K", match: "Portugal v Congo DR", venue: "Houston Stadium" },
  { id: "wc-024", date: "2026-06-17", phase: "Group Stage", group: "Group K", match: "Uzbekistan v Colombia", venue: "Mexico City Stadium" },

  { id: "wc-025", date: "2026-06-18", phase: "Group Stage", group: "Group A", match: "Czechia v South Africa", venue: "Atlanta Stadium" },
  { id: "wc-026", date: "2026-06-18", phase: "Group Stage", group: "Group B", match: "Switzerland v Bosnia and Herzegovina", venue: "Los Angeles Stadium" },
  { id: "wc-027", date: "2026-06-18", phase: "Group Stage", group: "Group B", match: "Canada v Qatar", venue: "BC Place Vancouver" },
  { id: "wc-028", date: "2026-06-18", phase: "Group Stage", group: "Group A", match: "Mexico v Korea Republic", venue: "Estadio Guadalajara" },

  { id: "wc-029", date: "2026-06-19", phase: "Group Stage", group: "Group C", match: "Brazil v Haiti", venue: "Philadelphia Stadium" },
  { id: "wc-030", date: "2026-06-19", phase: "Group Stage", group: "Group C", match: "Scotland v Morocco", venue: "Boston Stadium" },
  { id: "wc-031", date: "2026-06-19", phase: "Group Stage", group: "Group D", match: "Türkiye v Paraguay", venue: "San Francisco Bay Area Stadium" },
  { id: "wc-032", date: "2026-06-19", phase: "Group Stage", group: "Group D", match: "USA v Australia", venue: "Seattle Stadium" },

  { id: "wc-033", date: "2026-06-20", phase: "Group Stage", group: "Group E", match: "Germany v Côte d'Ivoire", venue: "Toronto Stadium" },
  { id: "wc-034", date: "2026-06-20", phase: "Group Stage", group: "Group E", match: "Ecuador v Curaçao", venue: "Kansas City Stadium" },
  { id: "wc-035", date: "2026-06-20", phase: "Group Stage", group: "Group F", match: "Netherlands v Sweden", venue: "Houston Stadium" },
  { id: "wc-036", date: "2026-06-20", phase: "Group Stage", group: "Group F", match: "Tunisia v Japan", venue: "Estadio Monterrey" },

  { id: "wc-037", date: "2026-06-21", phase: "Group Stage", group: "Group H", match: "Uruguay v Cabo Verde", venue: "Miami Stadium" },
  { id: "wc-038", date: "2026-06-21", phase: "Group Stage", group: "Group H", match: "Spain v Saudi Arabia", venue: "Atlanta Stadium" },
  { id: "wc-039", date: "2026-06-21", phase: "Group Stage", group: "Group G", match: "Belgium v IR Iran", venue: "Los Angeles Stadium" },
  { id: "wc-040", date: "2026-06-21", phase: "Group Stage", group: "Group G", match: "New Zealand v Egypt", venue: "BC Place Vancouver" },

  { id: "wc-041", date: "2026-06-22", phase: "Group Stage", group: "Group I", match: "Norway v Senegal", venue: "New York New Jersey Stadium" },
  { id: "wc-042", date: "2026-06-22", phase: "Group Stage", group: "Group I", match: "France v Iraq", venue: "Philadelphia Stadium" },
  { id: "wc-043", date: "2026-06-22", phase: "Group Stage", group: "Group J", match: "Argentina v Austria", venue: "Dallas Stadium" },
  { id: "wc-044", date: "2026-06-22", phase: "Group Stage", group: "Group J", match: "Jordan v Algeria", venue: "San Francisco Bay Area Stadium" },

  { id: "wc-045", date: "2026-06-23", phase: "Group Stage", group: "Group L", match: "England v Ghana", venue: "Boston Stadium" },
  { id: "wc-046", date: "2026-06-23", phase: "Group Stage", group: "Group L", match: "Panama v Croatia", venue: "Toronto Stadium" },
  { id: "wc-047", date: "2026-06-23", phase: "Group Stage", group: "Group K", match: "Portugal v Uzbekistan", venue: "Houston Stadium" },
  { id: "wc-048", date: "2026-06-23", phase: "Group Stage", group: "Group K", match: "Colombia v Congo DR", venue: "Estadio Guadalajara" },

  { id: "wc-049", date: "2026-06-24", phase: "Group Stage", group: "Group C", match: "Scotland v Brazil", venue: "Miami Stadium" },
  { id: "wc-050", date: "2026-06-24", phase: "Group Stage", group: "Group C", match: "Morocco v Haiti", venue: "Atlanta Stadium" },
  { id: "wc-051", date: "2026-06-24", phase: "Group Stage", group: "Group B", match: "Switzerland v Canada", venue: "BC Place Vancouver" },
  { id: "wc-052", date: "2026-06-24", phase: "Group Stage", group: "Group B", match: "Bosnia and Herzegovina v Qatar", venue: "Seattle Stadium" },
  { id: "wc-053", date: "2026-06-24", phase: "Group Stage", group: "Group A", match: "Czechia v Mexico", venue: "Mexico City Stadium" },
  { id: "wc-054", date: "2026-06-24", phase: "Group Stage", group: "Group A", match: "South Africa v Korea Republic", venue: "Estadio Monterrey" },

  { id: "wc-055", date: "2026-06-25", phase: "Group Stage", group: "Group E", match: "Curaçao v Côte d'Ivoire", venue: "Philadelphia Stadium" },
  { id: "wc-056", date: "2026-06-25", phase: "Group Stage", group: "Group E", match: "Ecuador v Germany", venue: "New York New Jersey Stadium" },
  { id: "wc-057", date: "2026-06-25", phase: "Group Stage", group: "Group F", match: "Japan v Sweden", venue: "Dallas Stadium" },
  { id: "wc-058", date: "2026-06-25", phase: "Group Stage", group: "Group F", match: "Tunisia v Netherlands", venue: "Kansas City Stadium" },
  { id: "wc-059", date: "2026-06-25", phase: "Group Stage", group: "Group D", match: "Türkiye v USA", venue: "Los Angeles Stadium" },
  { id: "wc-060", date: "2026-06-25", phase: "Group Stage", group: "Group D", match: "Paraguay v Australia", venue: "San Francisco Bay Area Stadium" },

  { id: "wc-061", date: "2026-06-26", phase: "Group Stage", group: "Group I", match: "Norway v France", venue: "Boston Stadium" },
  { id: "wc-062", date: "2026-06-26", phase: "Group Stage", group: "Group I", match: "Senegal v Iraq", venue: "Toronto Stadium" },
  { id: "wc-063", date: "2026-06-26", phase: "Group Stage", group: "Group G", match: "Egypt v IR Iran", venue: "Seattle Stadium" },
  { id: "wc-064", date: "2026-06-26", phase: "Group Stage", group: "Group G", match: "New Zealand v Belgium", venue: "BC Place Vancouver" },
  { id: "wc-065", date: "2026-06-26", phase: "Group Stage", group: "Group H", match: "Cabo Verde v Saudi Arabia", venue: "Houston Stadium" },
  { id: "wc-066", date: "2026-06-26", phase: "Group Stage", group: "Group H", match: "Uruguay v Spain", venue: "Estadio Guadalajara" },

  { id: "wc-067", date: "2026-06-27", phase: "Group Stage", group: "Group L", match: "Panama v England", venue: "New York New Jersey Stadium" },
  { id: "wc-068", date: "2026-06-27", phase: "Group Stage", group: "Group L", match: "Croatia v Ghana", venue: "Philadelphia Stadium" },
  { id: "wc-069", date: "2026-06-27", phase: "Group Stage", group: "Group J", match: "Algeria v Austria", venue: "Kansas City Stadium" },
  { id: "wc-070", date: "2026-06-27", phase: "Group Stage", group: "Group J", match: "Jordan v Argentina", venue: "Dallas Stadium" },
  { id: "wc-071", date: "2026-06-27", phase: "Group Stage", group: "Group K", match: "Colombia v Portugal", venue: "Miami Stadium" },
  { id: "wc-072", date: "2026-06-27", phase: "Group Stage", group: "Group K", match: "Congo DR v Uzbekistan", venue: "Atlanta Stadium" },

  { id: "wc-073", date: "2026-06-28", phase: "Round of 32", match: "Group A runners-up v Group B runners-up", venue: "Los Angeles Stadium" },

  { id: "wc-074", date: "2026-06-29", phase: "Round of 32", match: "Group E winners v Group A/B/C/D/F third place", venue: "Boston Stadium" },
  { id: "wc-075", date: "2026-06-29", phase: "Round of 32", match: "Group F winners v Group C runners-up", venue: "Estadio Monterrey" },
  { id: "wc-076", date: "2026-06-29", phase: "Round of 32", match: "Group C winners v Group F runners-up", venue: "Houston Stadium" },

  { id: "wc-077", date: "2026-06-30", phase: "Round of 32", match: "Group I winners v Group C/D/F/G/H third place", venue: "New York New Jersey Stadium" },
  { id: "wc-078", date: "2026-06-30", phase: "Round of 32", match: "Group E runners-up v Group I runners-up", venue: "Dallas Stadium" },
  { id: "wc-079", date: "2026-06-30", phase: "Round of 32", match: "Group A winners v Group C/E/F/H/I third place", venue: "Mexico City Stadium" },

  { id: "wc-080", date: "2026-07-01", phase: "Round of 32", match: "Group L winners v Group E/H/I/J/K third place", venue: "Atlanta Stadium" },
  { id: "wc-081", date: "2026-07-01", phase: "Round of 32", match: "Group D winners v Group B/E/F/I/J third place", venue: "San Francisco Bay Area Stadium" },
  { id: "wc-082", date: "2026-07-01", phase: "Round of 32", match: "Group G winners v Group A/E/H/I/J third place", venue: "Seattle Stadium" },

  { id: "wc-083", date: "2026-07-02", phase: "Round of 32", match: "Group K runners-up v Group L runners-up", venue: "Toronto Stadium" },
  { id: "wc-084", date: "2026-07-02", phase: "Round of 32", match: "Group H winners v Group J runners-up", venue: "Los Angeles Stadium" },
  { id: "wc-085", date: "2026-07-02", phase: "Round of 32", match: "Group B winners v Group E/F/G/I/J third place", venue: "BC Place Vancouver" },

  { id: "wc-086", date: "2026-07-03", phase: "Round of 32", match: "Group J winners v Group H runners-up", venue: "Miami Stadium" },
  { id: "wc-087", date: "2026-07-03", phase: "Round of 32", match: "Group K winners v Group D/E/I/J/L third place", venue: "Kansas City Stadium" },
  { id: "wc-088", date: "2026-07-03", phase: "Round of 32", match: "Group D runners-up v Group G runners-up", venue: "Dallas Stadium" },

  { id: "wc-089", date: "2026-07-04", phase: "Round of 16", match: "Winner match 74 v Winner match 77", venue: "Philadelphia Stadium" },
  { id: "wc-090", date: "2026-07-04", phase: "Round of 16", match: "Winner match 73 v Winner match 75", venue: "Houston Stadium" },

  { id: "wc-091", date: "2026-07-05", phase: "Round of 16", match: "Winner match 76 v Winner match 78", venue: "New York New Jersey Stadium" },
  { id: "wc-092", date: "2026-07-05", phase: "Round of 16", match: "Winner match 79 v Winner match 80", venue: "Mexico City Stadium" },

  { id: "wc-093", date: "2026-07-06", phase: "Round of 16", match: "Winner match 83 v Winner match 84", venue: "Dallas Stadium" },
  { id: "wc-094", date: "2026-07-06", phase: "Round of 16", match: "Winner match 81 v Winner match 82", venue: "Seattle Stadium" },

  { id: "wc-095", date: "2026-07-07", phase: "Round of 16", match: "Winner match 86 v Winner match 88", venue: "Atlanta Stadium" },
  { id: "wc-096", date: "2026-07-07", phase: "Round of 16", match: "Winner match 85 v Winner match 87", venue: "BC Place Vancouver" },

  { id: "wc-097", date: "2026-07-09", phase: "Quarter-final", match: "Winner match 89 v Winner match 90", venue: "Boston Stadium" },
  { id: "wc-098", date: "2026-07-10", phase: "Quarter-final", match: "Winner match 93 v Winner match 94", venue: "Los Angeles Stadium" },
  { id: "wc-099", date: "2026-07-11", phase: "Quarter-final", match: "Winner match 91 v Winner match 92", venue: "Miami Stadium" },
  { id: "wc-100", date: "2026-07-11", phase: "Quarter-final", match: "Winner match 95 v Winner match 96", venue: "Kansas City Stadium" },

  { id: "wc-101", date: "2026-07-14", phase: "Semi-final", match: "Winner match 97 v Winner match 98", venue: "Dallas Stadium" },
  { id: "wc-102", date: "2026-07-15", phase: "Semi-final", match: "Winner match 99 v Winner match 100", venue: "Atlanta Stadium" },

  { id: "wc-103", date: "2026-07-18", phase: "Bronze final", match: "Runner-up match 101 v Runner-up match 102", venue: "Miami Stadium" },
  { id: "wc-104", date: "2026-07-19", phase: "Final", match: "Winner match 101 v Winner match 102", venue: "New York New Jersey Stadium" },
];

export const worldCupPhases: WorldCupPhase[] = [
  "Group Stage",
  "Round of 32",
  "Round of 16",
  "Quarter-final",
  "Semi-final",
  "Bronze final",
  "Final",
];

export function formatFixtureDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
