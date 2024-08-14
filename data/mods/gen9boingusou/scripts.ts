// making hyper beam act like in gen 1 (copied right from the gen 1 code on showdown)
export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	actions: {
		useMove(moveOrMoveName, pokemon, target, sourceEffect) {
                        const baseMove = this.battle.dex.moves.get(moveOrMoveName);
                        let move = this.battle.dex.getActiveMove(baseMove);
			// If target fainted
			if (target && target.hp <= 0) {
				// We remove recharge
 				if (pokemon.volatiles['mustrecharge']) pokemon.removeVolatile('mustrecharge');
				delete pokemon.volatiles['partialtrappinglock'];
			} else {
	      	if (pokemon.volatiles['mustrecharge']) this.battle.add('-mustrecharge', pokemon);
				if (pokemon.hp) this.battle.runEvent('AfterMoveSelf', pokemon, target, move);
			},
		},

			// old gen boom, hope this works right
		    getDamage(source, target, move, suppressMessages) {
			if (move.selfdestruct && defType === 'def') {
				defense = this.battle.clampIntRange(Math.floor(defense / 2), 1);
			},
		},
	},
}
