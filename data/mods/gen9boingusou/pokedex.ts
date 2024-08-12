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
	},
	solrock: {
		inherit: true,
			otherFormes: ["Solrock-Mega"],
			formeOrder: ["Solrock","Solrock-Mega"]
	},
	solrockmega: {
		num: 338,
		name: "Solrock-Mega",
		baseSpecies: "Solrock",
		forme: "Mega",
		types: ["Rock", "Fire"],
		baseStats: {hp: 90, atk: 120, def: 110, spa: 55, spd: 85, spe: 105},
		abilities: {0: "Solarize"},
		heightm: 1.5,
		weightkg: 200,
		color: "Red",
		eggGroups: ["Mineral"]
	},
}
