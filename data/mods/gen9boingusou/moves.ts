export const Moves: import('../sim/dex-moves').MoveDataTable = {
	fungaljab: {
		num: 920,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Fungal Jab",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1, heal: 1, metronome: 1},
		drain: [1, 2],
		onTryHeal(pokemon, target) {
			const heals = ['drain', 'leechseed', 'ingrain', 'aquaring', 'strengthsap'];
			if (heals.includes(effect.id)) {
				return this.chainModify([5324, 4096]);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
	},
}
