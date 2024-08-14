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
	armarouge: {
		inherit: true,
		otherFormes: ["Armarouge-Mega"],
		formeOrder: ["Armarouge", "Armarouge-Mega"]
	},
	armarougemega: {
		num: 936,
		name: "Armarouge-Mega",
		baseSpecies: "Armarouge",
		forme: "Mega",
		types: ["Fire", "Psychic"],
		baseStats: {hp: 85, atk: 70, def: 116, spa: 141, spd: 113, spe: 100},
		abilities: {0: "Mirror Armor"},
		heightm: 1.5,
		weightkg: 105,
		color: "Red",
		eggGroups: ["Human-Like"],
		requiredItem: "Armarougite",
	},
	ceruledge: {
		inherit: true,
		otherFormes: ["Ceruledge-Mega"],
		formeOrder: ["Ceruledge", "Ceruledge-Mega"]
	},
	ceruledgemega: {
		num: 937,
		name: "Ceruledge-Mega",
		baseSpecies: "Ceruledge",
		forme: "Mega",
		types: ["Fire", "Ghost"],
		baseStats: {hp: 75, atk: 141, def: 103, spa: 70, spd: 107, spe: 129},
		abilities: {0: "Defiant"},
		heightm: 1.6,
		weightkg: 88.3,
		color: "Purple",
		eggGroups: ["Human-Like"],
		requiredItem: "Ceruledgite",
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
	},
	sirfetchd: {
		inherit: true,
		otherFormes: ["Sirfetch\u2019d-Mega"],
    		formeOrder: ["Sirfetch\u2019d", "Sirfetch\u2019d-Mega"],
  	},
  	sirfetchddmega: {
		num: 865,
		name: "Sirfetch\u2019d-Mega",
		baseSpecies: "Sirfetch\u2019d",
		forme: "Mega",
		types: ["Fighting", "Steel"],
		baseStats: {hp: 62, atk: 155, def: 126, spa: 97, spd: 102, spe: 65},
		abilities: {0: "Steadfast"},
		heightm: 0.8,
		weightkg: 135,
		color: "White",
		eggGroups: ["Flying", "Field"],
		requiredItem: "Sirfetchdite",
	},
	starmie: {
		inherit: true,
		otherFormes: ["Starmie-Mega"],
		formeOrder: ["Starmie", "Starmie-Mega"],
	},
	starmiemega: {
		num: 121,
		name: "Starmie-Mega",
		baseSpecies: "Starmie",
		forme: "Mega",
		types: ["Water", "Psychic"],
		baseStats: {hp: 60, atk: 85, def: 100, spa: 147, spd: 100, spe: 128},
		abilities: {0: "Dazzling"},
		heightm: 1.1,
		weightkg: 95.5,
		color: "Purple",
		eggGroups: ["Water 3"],
		requiredItem: "Starmite",
	}
}
