export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
	arboliva: {
			inherit: true,
			otherFormes: ["Arboliva-Mega"],
		formeOrder: ["Arboliva", "Arboliva-Mega"]
	},
	arbolivamega: {
		num: 930,
		name: "Arboliva-Mega",
		baseSpecies: "Arboliva",
		forme: "Mega",
		types: ["Grass", "Fire"],
		baseStats: {hp: 78, atk: 84, def: 125, spa: 140, spd: 116, spe: 67},
		abilities: {0: "Grassy Surge"},
		heightm: 1.6,
		weightkg: 55.4,
		color: "Red",
		eggGroups: ["Grass"],
		requiredItem: "Arbolivite",
	},  
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
