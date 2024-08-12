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
		num: 1888,
		gen: 9,
	}
}
