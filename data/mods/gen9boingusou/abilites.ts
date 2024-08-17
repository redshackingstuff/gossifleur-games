// bring other abilites not in this file
export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
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

	lifesteal: {

		onModifyMove(move) {
         if (move.category === 'Status') return;
         if (!move.drain) {
         move.drain = [1, 4];
            }, else { move.drain[0] += 1 },
		flags: {},
		name: "Lifesteal",
		rating: 4,
		num: 312,
		
        },
		
	},
}
