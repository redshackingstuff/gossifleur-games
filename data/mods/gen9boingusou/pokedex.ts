export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
  delibird: {
		inherit: true,
		otherFormes: ["Delibird-Mega"],
    formeOrder: ["Delibird", "Delibird-Mega"],
  },
  delibirdmega: {
		num: 225,
		name: "Delibird-Mega",
		baseSpecies: "Delibird",
		forme: "Mega",
		types: ["Ice", "Flying"],
		baseStats: {hp: 45, atk: 105, def: 45, spa: 65, spd: 45, spe: 125},
		abilities: {0: "Huge Power"},
		heightm: 0.9,
		weightkg: 16,
		color: "Red",
		eggGroups: ["Water 1", "Field"],
		requiredItem: "Delibirdite",
	}
}
