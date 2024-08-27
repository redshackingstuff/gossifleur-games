export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	arbolivite: {
		name: "Arbolivite",
		spritenum: 41,
		megaStone: "Arboliva-Mega",
		megaEvolves: "Arboliva",
		itemUser: ["Arboliva"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1887,
		gen: 9,
	},
	armarougite: {
		name: "Armarougite",
		spritenum: 41,
		megaStone: "Armarouge-Mega",
		megaEvolves: "Armarouge",
		itemUser: ["Armarouge"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1888,
		gen: 9,
	},
	breloomite: {
		name: "Breloomite",
		spritenum: 608,
		megaStone: "Breloom-Mega",
		megaEvolves: "Breloom",
		itemUser: ["Breloom"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1894,
		gen: 9,
	},
	ceruledgite: {
		name: "Ceruledgite",
		spritenum: 41,
		megaStone: "Ceruledge-Mega",
		megaEvolves: "Ceruledge",
		itemUser: ["Ceruledge"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1889,
		gen: 9,
	},
	chesnaughtite: {
		name: "Chesnaughtite",
		spritenum: 41,
		megaStone: "Chesnaught-Mega",
		megaEvolves: "Chesnaught",
		itemUser: ["Chesnaught"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1899,
		gen: 9,
	},
	clawitzerite: {
		name: "Clawitzerite",
		spritenum: 41,
		megaStone: "Clawitzer-Mega",
		megaEvolves: "Clawitzer",
		itemUser: ["Clawitzer"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1897,
		gen: 9,
	},
	delibirdite: {
		name: "Delibirdite",
		spritenum: 41,
		megaStone: "Delibird-Mega",
		megaEvolves: "Delibird",
		itemUser: ["Delibird"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1890,
		gen: 9,
	},
	delphoxite: {
		name: "Delphoxite",
		spritenum: 41,
		megaStone: "Delphox-Mega",
		megaEvolves: "Delphox",
		itemUser: ["Delphox"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1901,
		gen: 9,
	},
	greninite: {
		name: "Greninite",
		spritenum: 41,
		megaStone: "Greninja-Mega",
		megaEvolves: "Greninja",
		itemUser: ["Greninja"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1900,
		gen: 9,
	},
	mimikyuite: {
		name: "Mimikyuite",
		spritenum: 41,
		megaStone: "Mimikyu-Mega",
		megaEvolves: "Mimikyu",
		itemUser: ["Mimikyu","Mimikyu-Busted"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true
		},
		num: 1896,
		gen: 9,
	},
	lunatonite: {
		name: "Lunatonite",
		spritenum: 41,
		megaStone: "Lunatone-Mega",
		megaEvolves: "Lunatone",
		itemUser: ["Lunatone"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1898,
		gen: 9,
	},
	sirfetchdite: {
		name: "Sirfetchdite",
		spritenum: 41,
		megaStone: "Sirfetch\u2019d-Mega",
		megaEvolves: "Sirfetch\u2019d",
		itemUser: ["Sirfetch\u2019d"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1891,
		gen: 9,
	},
	solrockite: {
		name: "Solrockite",
		spritenum: 41,
		megaStone: "Solrock-Mega",
		megaEvolves: "Solrock",
		itemUser: ["Solrock"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1892,
		gen: 9,
	},
	togekissite: {
		name: "Togekissite",
		spritenum: 41,
		megaStone: "Togekiss-Mega",
		megaEvolves: "Togekiss",
		itemUser: ["Togekiss"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true
		},
		num: 1895,
		gen: 9,
	},
	starmite: {
		name: "Starmite",
		spritenum: 41,
		megaStone: "Starmie-Mega",
		megaEvolves: "Starmie",
		itemUser: ["Starmie"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1893,
		gen: 9,
	}
}
