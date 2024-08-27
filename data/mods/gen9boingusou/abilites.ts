// bring other abilites not in this file
export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	// cosplay (mega mimikyu's ability)
	cosplay: {
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect?.effectType === 'Move' && target.species.id === 'mimikyumega') {
				this.add('-activate', target, 'ability: Cosplay');
				this.effectState.busted = true;
				return 0;
			}
		},
		onSetStatus(status, target, source, effect) {
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Cosplay');
			}
			return false;
		},
		onCriticalHit(target, source, move) {
			if (!target) return;
			if (target.species.id !== 'mimikyumega') {
				return;
			}
			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return false;
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target || move.category === 'Status') return;
			if (target.species.id !== 'mimikyumega') {
				return;
			}

			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (pokemon.species.id === 'mimikyumega' && this.effectState.busted) {
				const speciesid = 'Mimikyu-Mega-Busted';
				pokemon.formeChange(speciesid, this.effect, true);
				this.damage(pokemon.baseMaxhp / 8, pokemon, pokemon, this.dex.species.get(speciesid));
			}
		},
		flags: {
			failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1,
			breakable: 1, notransform: 1,
		},
		name: "Cosplay",
		rating: 3.5,
		num: 314,
	},

	// fungal touch (mega breloom's ability)
	fungaltouch: {
		onModifyMove(move) {
			// If a move is a contact move without draining effect, have it drain 1/3 of damage dealt
			// If a move is a draining move, apply a big root effect, increasing drained damage by 30%
			if (move.drain === undefined && move.flags['contact']) { move.drain = [1, 3]; }
			else if (!move.drain === undefined && move.drain) { move.drain[0] *= 13; move.drain[1] *= 10; }
		},
		flags: {},
		name: "Fungal Touch",
		rating: 3,
		num: 313,
	},

	// psytide (mega lunatone's ability)
	psytide: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Psychic' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Water';
				move.typeChangerBoosted = this.effect;
			}
		},
 		// idk wtf onBasePowerPriority is, so I ain't changing it
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "PsyTide",
		// do ratings ever even get used?
		rating: 4,
		num: 315,
  },

	// solarize (mega solrock's ability)
	solarize: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Fire';
        // is this what boosts moves affected by solarize? idk
				move.typeChangerBoosted = this.effect;
			}
		},
 		// idk wtf onBasePowerPriority is, so I ain't changing it
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
      	//same with this line
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Solarize",
		// do ratings ever even get used?
		rating: 4,
		num: 311,
  },

  	// spectriate (mega greninja's ability)
	spectriate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Ghost';
				move.typeChangerBoosted = this.effect;
			}
		},
 		// idk wtf onBasePowerPriority is, so I ain't changing it
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Spectriate",
		// do ratings ever even get used?
		rating: 4,
		num: 316,
  },

  lifesteal: {

		onModifyMove(move) {
         if (move.category === 'Status') return;
         if (!move.drain) {
         	move.drain = [1, 4];
         } else {
				var oldDrain = move.drain[1];
				move.drain[1] = 4;
				move.drain[0] = (move.drain[0] * (4/oldDrain)) + 1;
			}
		},
		flags: {},
		name: "Lifesteal",
		rating: 4,
		num: 312,
  }
}
