export const Moves: import('../../../sim/dex-moves').MoveDataTable = {
	fungaljab: {
		num: 920,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Fungal Jab",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1, heal: 1, metronome: 1},
		onModifyMove(move, pokemon, target) {
			if (target && (target.status === 'psn' || target.status === 'tox' || target.status === 'prz'  || target.status === 'slp' || target.hasAbility('comatose'))) {
				move.drain = [3, 4];
			}
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
	},
}
