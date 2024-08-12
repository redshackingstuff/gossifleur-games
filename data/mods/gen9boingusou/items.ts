export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
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
		num: 1887,
		gen: 9,
	},
	solrockite: {
		name: "Solrockite",
		sprtienum: 41,
		megaStone: "Solrock-Mega",
		MegaEvolves: "Solrock",
		itemUser: ["Solrock"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true
		},
		num: 1889,
		gen: 9,
	},
}
