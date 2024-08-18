// making hyper beam act like in gen 1 (copied right from the gen 1 code on showdown)
// ^ This is removed for now.
export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	actions: {
		// old gen boom, hope this works right
		getDamage(source, target, move, suppressMessages) {
			if (move.selfdestruct && defType === 'def') {
				defense = this.battle.clampIntRange(Math.floor(defense / 2), 1);
			}
		},
	},
}
