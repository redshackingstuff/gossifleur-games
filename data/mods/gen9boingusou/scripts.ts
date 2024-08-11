// making hyper beam act like in gen 1 (copied right from the gen 1 code on showdown)
// If target fainted
if (target && target.hp <= 0) {
// We remove recharge
 if (pokemon.volatiles['mustrecharge']) pokemon.removeVolatile('mustrecharge');
		delete pokemon.volatiles['partialtrappinglock'];
} else {
	      if (pokemon.volatiles['mustrecharge']) this.battle.add('-mustrecharge', pokemon);
				if (pokemon.hp) this.battle.runEvent('AfterMoveSelf', pokemon, target, move);
					}
