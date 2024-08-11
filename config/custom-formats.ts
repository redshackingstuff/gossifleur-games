// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
  {
    section: "Gaysifleur",
  },
  {
    name: "[Gen 9] RUstricted",
    mod: 'gen9',
    ruleset: ['[Gen 9] ZU', 'Limit One Restricted'],
    restricted: ['RU', 'NUBL', 'NU', 'PUBL', 'PU', 'ZUBL'],
  },
  {
    name: "[Gen 9] Boingus OU",
    mod: 'boingusou',
    ruleset: ['[Gen 9] National Dex'],
  }
];
