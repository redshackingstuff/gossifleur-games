// bring other abilites not in this file
export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	// fungal touch (mega breloom's ability)
	fungaltouch: {
		onModifyMove(move) {
			if (!move.flags['contact']) {
				if (move.drain === undefined) { move.drain = [1, 3]; }
				if (!move.drain === undefined) { move.drain[0] *= 13; move.drain[1] *= 10 }
			}
		},
		flags: {},
		name: "Fungal Touch",
		rating: 3,
		num: 312,
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
}
