
export const pets = {
    Ant: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 0,
        tier: 1,
        levelone : {
            attack: 2,
            health: 1,
            effect: "Faint: Give a random friend (+2/+1)",
        },
        leveltwo : {
            attack: 4,
            health: 3,
            effect: "Faint: Give a random friend (+4/+2)",
        },
        levelthree : {
            attack: 7,
            health: 6,
            effect: "Faint: Give a random friend (+6/+3)",
        }
    },
    Beaver: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed base stats to 3/2 from 2/2"
        },
        ],
        pack: 0,
        tier: 1,
        levelone : {
            attack: 3,
            health: 2,
            effect: "Sell: Give 2 random friends +1 HP",
        },
        leveltwo : {
            attack: 5,
            health: 4,
            effect: "Sell: Give 2 random friends +2 HP",
        },
        levelthree : {
            attack: 8,
            health: 7,
            effect: "Sell: Give 2 random friends +3 HP",
        }
    },
    Cricket: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "5th May 2021",
            note: "Level 2 and 3 now summons 2/2 and 3/3 respectively"
        },
        ],
        pack: 0,
        tier: 1,
        levelone : {
            attack: 1,
            health: 2,
            effect: "Faint: Summon a (1/1) Zombie Cricket",
        },
        leveltwo : {
            attack: 3,
            health: 4,
            effect: "Faint: Summon a (2/2) Zombie Cricket",
        },
        levelthree : {
            attack: 6,
            health: 7,
            effect: "Faint: Summon a (3/3) Zombie Cricket",
        }
    },
    Duck: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed base stats of the Duck to 2/3 from 1/3"
        },
        {
            changeNum: 2,
            patchNum: "10th February 2022",
            note: "Changed base stats of the Duck to 1/3 from 1/2"
        },
        {
            changeNum: 3,
            patchNum: "8th December 2021",
            note: "Now gives shop pets +1 health instead of +1/+1"
        },
        ],
        pack: 0,
        tier: 1,
        levelone : {
            attack: 2,
            health: 3,
            effect: "Sell: Give shop pets +1 HP",
        },
        leveltwo : {
            attack: 4,
            health: 5,
            effect: "Sell: Give shop pets +2 HP",
        },
        levelthree : {
            attack: 7,
            health: 8,
            effect: "Sell: Give shop pets +3 HP",
        }
    },
    Fish: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed base stats of the Fish to 2/2 from 2/3"
        },
        ],
        pack: 0,
        tier: 1,
        levelone : {
            attack: 2,
            health: 2,
            effect: "Level-up: Give all friends (+1/+1)",
        },
        leveltwo : {
            attack: 4,
            health: 4,
            effect: "Level-up: Give all friends (+2/+2)",
        },
        levelthree : {
            attack: 7,
            health: 7,
            effect: "N/A",
        }
    },
    Horse: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed to 2/1"
        },
        ],
        pack: 0,
        tier: 1,
        levelone : {
            attack: 2,
            health: 1,
            effect: "Friend summoned: Give it +1 ATK until the end of battle",
        },
        leveltwo : {
            attack: 4,
            health: 3,
            effect: "Friend summoned: Give it +2 ATK until the end of battle",
        },
        levelthree : {
            attack: 7,
            health: 6,
            effect: "Friend summoned: Give it +3 ATK until the end of battle",
        }
    },
    Mosquito: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Mosquito's ability was changed to increase the amount of enemies attack before battle instead of the damage dealt"
        },
        ],
        pack: 0,
        tier: 1,
        levelone : {
            attack: 2,
            health: 2,
            effect: "Start of battle: Deal 1 dmg to 1 random enemies",
        },
        leveltwo : {
            attack: 4,
            health: 4,
            effect: "Start of battle: Deal 1 dmg to 2 random enemies",
        },
        levelthree : {
            attack: 7,
            health: 7,
            effect: "Start of battle: Deal 1 dmg to 3 random enemies",
        }
    },
    Otter: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed Otter's ability to [Buy: Give 1/2/3 random pets +1/+1] from [Buy: Give a random pet (+1/+1)/(+2/+2)/(+3/+3)]"
        },
        ],
        pack: 0,
        tier: 1,
        levelone : {
            attack: 1,
            health: 2,
            effect: "Buy: Give 1 random friend (+1/+1)",
        },
        leveltwo : {
            attack: 3,
            health: 4,
            effect: "Buy: Give 2 random friends (+1/+1)",
        },
        levelthree : {
            attack: 6,
            health: 7,
            effect: "Buy: Give 3 random friends (+1/+1)",
        }
    },
    Pig: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed Pig's base stats to 4/1 from 3/1"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed to 3/1"
        },
        ],
        pack: 0,
        tier: 1,
        levelone : {
            attack: 4,
            health: 1,
            effect: "Sell: Gain 1 gold",
        },
        leveltwo : {
            attack: 6,
            health: 3,
            effect: "Sell: Gain 2 gold",
        },
        levelthree : {
            attack: 9,
            health: 6,
            effect: "Sell: Gain 3 gold",
        }
    },
    Beetle: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed Beetle's ability to [Eat shop food: Give left-most animals +1/+2/+3 Health] from [Eat shop food: Give shop animals +1/+2/+3 Health]"
        },
        ],
        pack: 1,
        tier: 1,
        levelone : {
            attack: 2,
            health: 3,
            effect: "Eats shop food: Give the left-most shop pet +1 Health",
        },
        leveltwo : {
            attack: 4,
            health: 5,
            effect: "Eats shop food: Give the left-most shop pet +2 Health",
        },
        levelthree : {
            attack: 7,
            health: 8,
            effect: "Eats shop food: Give the left-most shop pet +3 Health",
        }
    },
    Bluebird: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed Bluebird's ability to [End turn: Give a random friend +1/+2/+3 Attack] from [End turn: Give left-most pet +1/+2/+3 Attack]"
        },
        ],
        pack: 1,
        tier: 1,
        levelone : {
            attack: 2,
            health: 1,
            effect: "End of turn: Give a random friend +1 attack",
        },
        leveltwo : {
            attack: 4,
            health: 3,
            effect: "End of turn: Give a random friend +2 attack",
        },
        levelthree : {
            attack: 7,
            health: 6,
            effect: "End of turn: Give a random friend +3 attack",
        }
    },
    Ladybug: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 1,
        tier: 1,
        levelone : {
            attack: 1,
            health: 3,
            effect: "Food bought: Gain (+1/+1) until the end of battle",
        },
        leveltwo : {
            attack: 3,
            health: 5,
            effect: "Food bought: Gain (+2/+2) until the end of battle",
        },
        levelthree : {
            attack: 6,
            health: 8,
            effect: "Food bought: Gain (+3/+3) until the end of battle",
        }
    },
    Duckling: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 1,
        levelone : {
            attack: 1,
            health: 2,
            effect: "Sell: Give left-most shop pet +2 Health",
        },
        leveltwo : {
            attack: 3,
            health: 4,
            effect: "Sell: Give left-most shop pet +4 Health",
        },
        levelthree : {
            attack: 6,
            health: 7,
            effect: "Sell: Give left-most shop pet +6 Health",
        }
    },
    Cockroach: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 1,
        levelone : {
            attack: 1,
            health: 4,
            effect: "Start of turn: Set attack to 2",
        },
        leveltwo : {
            attack: 3,
            health: 6,
            effect: "Start of turn: Set attack to 4",
        },
        levelthree : {
            attack: 6,
            health: 9,
            effect: "Start of turn: Set attack to 6",
        }
    },
    Frog: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 1,
        levelone : {
            attack: 3,
            health: 1,
            effect: "Start of Battle: Swap stats of the two adjacent friends",
        },
        leveltwo : {
            attack: 5,
            health: 3,
            effect: "Sell: Swap stats of the two adjacent friends",
        },
        levelthree : {
            attack: 8,
            health: 6,
            effect: "End Turn: Swap stats of the two adjacent friends",
        }
    },
    Hummingbird: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 1,
        levelone : {
            attack: 2,
            health: 2,
            effect: "Start of battle: Give (+2/+2) to a random Strawberry friend",
        },
        leveltwo : {
            attack: 4,
            health: 4,
            effect: "Start of battle: Give (+4/+4) to a random Strawberry friend",
        },
        levelthree : {
            attack: 7,
            health: 7,
            effect: "Start of battle: Give (+6/+6) to a random Strawberry friend",
        }
    },
    Iguana: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 1,
        levelone : {
            attack: 1,
            health: 3,
            effect: "Enemy summoned or pushed: Deal 1 damage to it",
        },
        leveltwo : {
            attack: 3,
            health: 5,
            effect: "Enemy summoned or pushed: Deal 2 damage to it",
        },
        levelthree : {
            attack: 6,
            health: 8,
            effect: "Enemy summoned or pushed: Deal 3 damage to it",
        }
    },
    Kiwi: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 1,
        levelone : {
            attack: 2,
            health: 2,
            effect: "Sell: Give a random Strawberry friend (+1/+2)",
        },
        leveltwo : {
            attack: 4,
            health: 4,
            effect: "Sell: Give a random Strawberry friend (+2/+4)",
        },
        levelthree : {
            attack: 7,
            health: 7,
            effect: "Sell: Give a random Strawberry friend (+3/+6)",
        }
    },
    Mouse: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 1,
        levelone : {
            attack: 3,
            health: 2,
            effect: "Sell: Replace shop food with 1 free apples that give (+1/+1)",
        },
        leveltwo : {
            attack: 5,
            health: 4,
            effect: "Sell: Replace shop food with 2 free apples that give (+1/+1)",
        },
        levelthree : {
            attack: 8,
            health: 7,
            effect: "Sell: Replace shop food with 3 free apples that give (+1/+1)",
        }
    },
    Pillbug: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 1,
        levelone : {
            attack: 2,
            health: 2,
            effect: "Upgrade shop tier: Give the two pets behind +1 health",
        },
        leveltwo : {
            attack: 4,
            health: 4,
            effect: "Upgrade shop tier: Give the two pets behind +2 health",
        },
        levelthree : {
            attack: 7,
            health: 7,
            effect: "Upgrade shop tier: Give the two pets behind +3 health",
        }
    },
    Seahorse: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 1,
        levelone : {
            attack: 2,
            health: 3,
            effect: "Start of battle: Push the last enemy 1 space forward",
        },
        leveltwo : {
            attack: 4,
            health: 5,
            effect: "Start of battle: Push the last enemy 2 spaces forward",
        },
        levelthree : {
            attack: 7,
            health: 8,
            effect: "Start of battle: Push the last enemy 3 spaces forward",
        }
    },
    Chinchilla: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 1,
        levelone : {
            attack: 2,
            health: 2,
            effect: "Sell: Summon 1 Loyal Chinchilla",
        },
        leveltwo : {
            attack: 4,
            health: 4,
            effect: "Sell: Summon 2 Loyal Chinchillas",
        },
        levelthree : {
            attack: 7,
            health: 7,
            effect: "Sell: Summon 3 Loyal Chinchillas",
        }
    },
    Frilled_Dragon: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 1,
        levelone : {
            attack: 1,
            health: 2,
            effect: "Start of battle: Gain (+1/+1) per friend with Faint ability",
        },
        leveltwo : {
            attack: 3,
            health: 4,
            effect: "Start of battle: Gain (+2/+2) per friend with Faint ability",
        },
        levelthree : {
            attack: 6,
            health: 7,
            effect: "Start of battle: Gain (+3/+3) per friend with Faint ability",
        }
    },
    Marmoset: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "11th August 2022",
            note: "Marmoset's ability changed from [Sell: Roll shop] to [Sell: The next 1/2/3 rolls are free]"
        },
        ],
        pack: "Weekly",
        tier: 1,
        levelone : {
            attack: 2,
            health: 3,
            effect: "Sell: The next 1 rolls are free",
        },
        leveltwo : {
            attack: 4,
            health: 5,
            effect: "Sell: The next 2 rolls are free.",
        },
        levelthree : {
            attack: 7,
            health: 8,
            effect: "Sell: The next 3 rolls are free.",
        }
    },
    Moth: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 1,
        levelone : {
            attack: 2,
            health: 1,
            effect: "Start of battle: Give front-most friend +3",
        },
        leveltwo : {
            attack: 4,
            health: 3,
            effect: "Start of battle: Give front-most friend +6",
        },
        levelthree : {
            attack: 7,
            health: 6,
            effect: "Start of battle: Give front-most friend +9",
        }
    },
    Sloth: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 0,
        tier: 1,
        levelone : {
            attack: 1,
            health: 1,
            effect: "Sloth has no special ability. Is kind of lame combat-wise. But he truly believes in you!",
        },
        leveltwo : {
            attack: 3,
            health: 3,
            effect: "Sloth has no special ability. Is kind of lame combat-wise. But he truly believes in you!",
        },
        levelthree : {
            attack: 6,
            health: 6,
            effect: "Sloth has no special ability. Is kind of lame combat-wise. But he truly believes in you!",
        }
    },
    Crab: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed Crab's ability to [Start of battle: Copy 50%/100%/150% Health from the most healthy friend.] from [Buy: Copy the Health stat of the friend with the highest]"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Crab's ability was changed to [copy the highest friend's Health when bought.]"
        },
        ],
        pack: 0,
        tier: 2,
        levelone : {
            attack: 3,
            health: 3,
            effect: "Start of battle: Copy 50% Health from the most healthy friend",
        },
        leveltwo : {
            attack: 5,
            health: 5,
            effect: "Start of battle: Copy 100% Health from the most healthy friend",
        },
        levelthree : {
            attack: 8,
            health: 8,
            effect: "Start of battle: Copy 150% Health from the most healthy friend",
        }
    },
    Dodo: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Dodo damage buff changed to 0.5x/1x/1.5x(was 1x/2x/3x); Dodo changed to a 2/3"
        },
        {
            changeNum: 2,
            patchNum: "28th October 2021",
            note: "Leveled up Dodos only target 1 minion, but gain a damage multiplier (.5x/1x/1.5x)"
        },
        {
            changeNum: 3,
            patchNum: "5th May 2021",
            note: "The amount of targets now scales correctly with level (1/2/3 minions)"
        },
        ],
        pack: 0,
        tier: 2,
        levelone : {
            attack: 2,
            health: 3,
            effect: "Start of battle: Give friend ahead 50% ATK",
        },
        leveltwo : {
            attack: 4,
            health: 5,
            effect: "Start of battle: Give friend ahead 100% ATK",
        },
        levelthree : {
            attack: 7,
            health: 8,
            effect: "Start of battle: Give friend ahead 150% ATK",
        }
    },
    Elephant: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed the Elephant's ability to [Before attack: Deal 1 damage to the friend behind. Repeat 1/2/3 times.] from [Before Attack: Deal 1 damage to 1/2/3 friends behind.]"
        },
        ],
        pack: 0,
        tier: 2,
        levelone : {
            attack: 3,
            health: 5,
            effect: "Before Attack: Deal 1 damage to the friend behind. Repeat 1 time",
        },
        leveltwo : {
            attack: 5,
            health: 7,
            effect: "Before Attack: Deal 1 damage to the friend behind. Repeat 2 times",
        },
        levelthree : {
            attack: 8,
            health: 10,
            effect: "Before Attack: Deal 1 damage to the friend behind. Repeat 3 times",
        }
    },
    Flamingo: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed base stat of the Flamingo to 4/2 from 3/1"
        },
        ],
        pack: 0,
        tier: 2,
        levelone : {
            attack: 3,
            health: 1,
            effect: "Before Faint: Give the two friends behind (+1/+1)",
        },
        leveltwo : {
            attack: 5,
            health: 3,
            effect: "Before Faint: Give the two friends behind (+2/+2)",
        },
        levelthree : {
            attack: 8,
            health: 6,
            effect: "Before Faint: Give the two friends behind (+3/+3)",
        }
    },
    Hedgehog: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 0,
        tier: 2,
        levelone : {
            attack: 3,
            health: 2,
            effect: "Faint: Deal 2 damage to all",
        },
        leveltwo : {
            attack: 5,
            health: 4,
            effect: "Faint: Deal 4 damage to all",
        },
        levelthree : {
            attack: 8,
            health: 7,
            effect: "Faint: Deal 6 damage to all",
        }
    },
    Peacock: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed ability to [Hurt: Gain 4/8/12 attack] from [Hurt: Gain 50% attack (once/twice/thrice per turn)]"
        },
        {
            changeNum: 2,
            patchNum: "10th February 2022",
            note: "Changed base stats of Peacock to 2/5 from 1/5; Changed Peacock's ability to [Hurt: Gain 50% Attack (with charges)]"
        },
        ],
        pack: 0,
        tier: 2,
        levelone : {
            attack: 2,
            health: 5,
            effect: "Hurt: Gain 4 attack",
        },
        leveltwo : {
            attack: 4,
            health: 7,
            effect: "Hurt: Gain 8 attack",
        },
        levelthree : {
            attack: 7,
            health: 10,
            effect: "Hurt: Gain 12 attack",
        }
    },
    Rat: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "2nd October 2021",
            note: "Dirty Rats are now summoned to the front; The number of Dirty Rats summoned now depend on the Level of Rat"
        },
        {
            changeNum: 2,
            patchNum: "3rd August 2021",
            note: "Attack and health were changed to 4/5(was 5/4); Rat no longer has ability [Friend ahead attacks: Deal it 1 damage]"
        },
        ],
        pack: 0,
        tier: 2,
        levelone : {
            attack: 4,
            health: 5,
            effect: "Faint: Summon one (1/1) Dirty Rat up front for the opponent ",
        },
        leveltwo : {
            attack: 6,
            health: 7,
            effect: "Faint: Summon two (1/1) Dirty Rats up front for the opponent ",
        },
        levelthree : {
            attack: 9,
            health: 10,
            effect: "Faint: Summon three (1/1) Dirty Rats up front for the opponent ",
        }
    },
    Shrimp: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Attack and health were changed to 2/3"
        },
        {
            changeNum: 2,
            patchNum: "3rd August 2021",
            note: "Attack and health were changed to 2/1"
        },
        ],
        pack: 0,
        tier: 2,
        levelone : {
            attack: 2,
            health: 3,
            effect: "Friend sold: Give a random friend +1 Health",
        },
        leveltwo : {
            attack: 4,
            health: 5,
            effect: "Friend sold: Give a random friend +2 Health",
        },
        levelthree : {
            attack: 7,
            health: 8,
            effect: "Friend sold: Give a random friend +3 Health",
        }
    },
    Spider: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Friend is now summoned with the same level as the Spider; Summoned friend stats no longer scale with the Spider's level(will always be 2/2)"
        },
        ],
        pack: 0,
        tier: 2,
        levelone : {
            attack: 2,
            health: 2,
            effect: "Faint: Summon a level 1 tier 3 pet as 2/2",
        },
        leveltwo : {
            attack: 4,
            health: 4,
            effect: "Faint: Summon a level 2 tier 3 pet as 2/2",
        },
        levelthree : {
            attack: 7,
            health: 7,
            effect: "Faint: Summon a level 3 tier 3 pet as 2/2",
        }
    },
    Swan: {
        changes: 
        [
        {
            changeNum: 1,
            patchNum: "10th February 2022",
            note: "Attack changed to 1(1/3)"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed to 3/3(was 3/4)"
        },
        ],
        pack: 0,
        tier: 2,
        levelone : {
            attack: 1,
            health: 3,
            effect: "Start of turn: Gain 1 gold",
        },
        leveltwo : {
            attack: 3,
            health: 5,
            effect: "Start of turn: Gain 2 gold",
        },
        levelthree : {
            attack: 6,
            health: 8,
            effect: "Start of turn: Gain 3 gold",
        }
    },
    Bat: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "28th October 2021",
            note: "Reduced from 1/3 to 1/2; Weak changed from 5 extra damage to 3"
        },
        ],
        pack: 1,
        tier: 2,
        levelone : {
            attack: 1,
            health: 2,
            effect: "Start of battle: Make 1 enemy Weak",
        },
        leveltwo : {
            attack: 3,
            health: 4,
            effect: "Start of battle: Make 2 enemies Weak",
        },
        levelthree : {
            attack: 6,
            health: 7,
            effect: "Start of battle: Make 3 enemies Weak",
        }
    },
    Dromedary: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed Dromedary's ability to [End turn: Give the 2 left-most shop pets (+1/+1)/(+2/+2)/(+3/+3)] from [Start of turn: Give shop animals (+1/+1)/(+2/+2)/(+3/+3)]"
        },
        ],
        pack: 1,
        tier: 2,
        levelone : {
            attack: 2,
            health: 4,
            effect: "End turn: Give the 2 left-most shop pets (+1/+1)",
        },
        leveltwo : {
            attack: 4,
            health: 6,
            effect: "End turn: Give the 2 left-most shop pets (+2/+2)",
        },
        levelthree : {
            attack: 7,
            health: 9,
            effect: "End turn: Give the 2 left-most shop pets (+3/+3)",
        }
    },
    Toucan: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 2,
        levelone : {
            attack: 2,
            health: 3,
            effect: "Before Faint: Give Toucan's held Food to 1 friend behind",
        },
        leveltwo : {
            attack: 4,
            health: 5,
            effect: "Before Faint: Give Toucan's held Food to 2 friends behind",
        },
        levelthree : {
            attack: 7,
            health: 8,
            effect: "Before Faint: Give Toucan's held Food to 3 friends behind",
        }
    },
    Tabby_Cat: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed to 5/3"
        },
        ],
        pack: 1,
        tier: 2,
        levelone : {
            attack: 5,
            health: 3,
            effect: "Eats shop food: Give all friends +1 ATK until the end of battle",
        },
        leveltwo : {
            attack: 7,
            health: 5,
            effect: "Eats shop food: Give all friends +2 ATK until the end of battle",
        },
        levelthree : {
            attack: 10,
            health: 8,
            effect: "Eats shop food: Give all friends +3 ATK until the end of battle",
        }
    },
    Atlantic_Puffin: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 2,
        levelone : {
            attack: 1,
            health: 3,
            effect: "Start of battle: Deal 2 damage for each friendly Strawberry pet to an enemy",
        },
        leveltwo : {
            attack: 3,
            health: 5,
            effect: "Start of battle: Deal 4 damage for each friendly Strawberry pet to an enemy",
        },
        levelthree : {
            attack: 6,
            health: 8,
            effect: "Start of battle: Deal 6 damage for each friendly Strawberry pet to an enemy",
        }
    },
    Dove: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 2,
        levelone : {
            attack: 2,
            health: 4,
            effect: "Faint: Give Strawberry friends (+1/+1)",
        },
        leveltwo : {
            attack: 4,
            health: 6,
            effect: "Faint: Give Strawberry friends (+2/+2)",
        },
        levelthree : {
            attack: 7,
            health: 9,
            effect: "Faint: Give Strawberry friends (+3/+3)",
        }
    },
    Guinea_Pig: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 2,
        levelone : {
            attack: 1,
            health: 1,
            effect: "Buy: Summon a (1/1) Guinea Pig",
        },
        leveltwo : {
            attack: 3,
            health: 3,
            effect: "Buy: Summon a (2/2) Guinea Pig",
        },
        levelthree : {
            attack: 6,
            health: 6,
            effect: "Buy: Summon a (3/3) Guinea Pig",
        }
    },
    Jellyfish: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 2,
        levelone : {
            attack: 2,
            health: 3,
            effect: "Any level-up: Gain (+1/+1)",
        },
        leveltwo : {
            attack: 4,
            health: 5,
            effect: "Any level-up: Gain (+2/+2)",
        },
        levelthree : {
            attack: 7,
            health: 8,
            effect: "Any level-up: Gain (+3/+3)",
        }
    },
    Koala: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 2,
        levelone : {
            attack: 1,
            health: 2,
            effect: "Friend hurt: Give it (+1/+1). Works 1 time.",
        },
        leveltwo : {
            attack: 3,
            health: 4,
            effect: "Friend hurt: Give it (+2/+2). Works 1 time.",
        },
        levelthree : {
            attack: 6,
            health: 7,
            effect: "Friend hurt: Give it (+3/+3). Works 1 time.",
        }
    },
    Panda: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 2,
        levelone : {
            attack: 2,
            health: 4,
            effect: "Start of battle: Give 50% of Panda's Attack and Health to friend ahead, then Faint.",
        },
        leveltwo : {
            attack: 4,
            health: 6,
            effect: "Start of battle: Give 100% of Panda's Attack and Health to friend ahead, then Faint.",
        },
        levelthree : {
            attack: 7,
            health: 9,
            effect: "Start of battle: Give 150% of Panda's Attack and Health to friend ahead, then Faint.",
        }
    },
    Pug: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 2,
        levelone : {
            attack: 5,
            health: 2,
            effect: "Start of battle: Give friend ahead +1 Experience",
        },
        leveltwo : {
            attack: 7,
            health: 4,
            effect: "Start of battle: Give friend ahead +2 Experience",
        },
        levelthree : {
            attack: 10,
            health: 7,
            effect: "Start of battle: Give friend ahead +3 Experience",
        }
    },
    Salamander: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 2,
        levelone : {
            attack: 2,
            health: 4,
            effect: "Buy friend: If it has a Start of battle ability, Gain +2 attack",
        },
        leveltwo : {
            attack: 4,
            health: 6,
            effect: "Buy friend: If it has a Start of battle ability, Gain +4 attack",
        },
        levelthree : {
            attack: 7,
            health: 9,
            effect: "Buy friend: If it has a Start of battle ability, Gain +6 attack",
        }
    },
    Stork: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 2,
        levelone : {
            attack: 2,
            health: 1,
            effect: "Faint: Summon a level 1 pet from your previous shop tier",
        },
        leveltwo : {
            attack: 4,
            health: 3,
            effect: "Faint: Summon a level 2 pet from your previous shop tier",
        },
        levelthree : {
            attack: 7,
            health: 6,
            effect: "Faint: Summon a level 3 pet from your previous shop tier",
        }
    },
    Yak: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 2,
        levelone : {
            attack: 3,
            health: 5,
            effect: "End turn: Deal 1 damage to itself and gain +1 attack",
        },
        leveltwo : {
            attack: 5,
            health: 7,
            effect: "End turn: Deal 1 damage to itself and gain +2 attack",
        },
        levelthree : {
            attack: 8,
            health: 10,
            effect: "End turn: Deal 1 damage to itself and gain +3 attack",
        }
    },
    Frigatebird: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 2,
        levelone : {
            attack: 2,
            health: 4,
            effect: "Buy: Give a random friend with Hurt ability +2 Health",
        },
        leveltwo : {
            attack: 4,
            health: 6,
            effect: "Buy: Give a random friend with Hurt ability +4 Health",
        },
        levelthree : {
            attack: 7,
            health: 9,
            effect: "Buy: Give a random friend with Hurt ability +6 Health",
        }
    },
    Gold_Fish: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 2,
        levelone : {
            attack: 2,
            health: 3,
            effect: "Start of turn: Discount the 2 left-most shop pets by 1 gold",
        },
        leveltwo : {
            attack: 4,
            health: 5,
            effect: "Start of turn: Discount the 2 left-most shop pets by 2 gold",
        },
        levelthree : {
            attack: 7,
            health: 8,
            effect: "Start of turn: Discount the 2 left-most shop pets by 3 gold",
        }
    },
    Racoon: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 2,
        levelone : {
            attack: 3,
            health: 2,
            effect: "Before attack: Steal held food of enemy ahead. Works 1 time per turn",
        },
        leveltwo : {
            attack: 5,
            health: 4,
            effect: "Before attack: Steal held food of enemy ahead. Works 2 times per turn",
        },
        levelthree : {
            attack: 8,
            health: 7,
            effect: "Before attack: Steal held food of enemy ahead. Works 3 times per turn",
        }
    },
    Wombat: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 2,
        levelone : {
            attack: 3,
            health: 3,
            effect: "Start of battle: Copy level 1 Faint Ability from the highest tier enemy",
        },
        leveltwo : {
            attack: 5,
            health: 5,
            effect: "Start of battle: Copy level 2 Faint Ability from the highest tier enemy",
        },
        levelthree : {
            attack: 8,
            health: 8,
            effect: "Start of battle: Copy level 3 Faint Ability from the highest tier enemy",
        }
    },
    Badger: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "5th May 2022",
            note: "Changed base stats of Badger to 5/3 from 5/4; Changed Badger's ability to [Faint: Deal 50%/100%/150% Attack damage to adjacent animals] from [Faint: Deal 1x/2x/3x Attack damage to adjacent animals]"
        },
        ],
        pack: 0,
        tier: 3,
        levelone : {
            attack: 5,
            health: 4,
            effect: "Before Faint: Deal 50% attack to adjacent pets",
        },
        leveltwo : {
            attack: 7,
            health: 6,
            effect: "Before Faint: Deal 100% attack to adjacent pets",
        },
        levelthree : {
            attack: 10,
            health: 9,
            effect: "Before Faint: Deal 150% attack to adjacent pets",
        }
    },
    Blowfish: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 0,
        tier: 3,
        levelone : {
            attack: 3,
            health: 5,
            effect: "Hurt: Deal 2 damage to a random enemy",
        },
        leveltwo : {
            attack: 5,
            health: 7,
            effect: "Hurt: Deal 4 damage to a random enemy",
        },
        levelthree : {
            attack: 8,
            health: 10,
            effect: "Hurt: Deal 6 damage to a random enemy",
        }
    },
    Camel: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed base stats of Camel to 2/6 from 2/5; Changed ability of Camel to [Hurt: Give (+2/+2)/(+4/+4)/(+6/+6) to friend behind] from [Hurt: Give friend behind (+1/+2)/(+2/+4)/(+3/+6)]"
        },
        ],
        pack: 0,
        tier: 3,
        levelone : {
            attack: 2,
            health: 6,
            effect: "Hurt: Give friend behind (+2/+2)",
        },
        leveltwo : {
            attack: 4,
            health: 8,
            effect: "Hurt: Give friend behind (+4/+4)",
        },
        levelthree : {
            attack: 7,
            health: 11,
            effect: "Hurt: Give friend behind (+6/+6)",
        }
    },
    Dog: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Dog was changed to begin appearing at Tier 3"
        },
        ],
        pack: 0,
        tier: 3,
        levelone : {
            attack: 3,
            health: 3,
            effect: "Friend summoned: Gain +1 attack or health",
        },
        leveltwo : {
            attack: 5,
            health: 5,
            effect: "Friend summoned: Gain +2 attack or health",
        },
        levelthree : {
            attack: 8,
            health: 8,
            effect: "Friend summoned: Gain +3 attack or health",
        }
    },
    Giraffe: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed base stats of the Giraffe to 2/4 from 2/5"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed to 2/5"
        },
        ],
        pack: 0,
        tier: 3,
        levelone : {
            attack: 2,
            health: 5,
            effect: "End Turn: Give 1 friends ahead (+1/+1)",
        },
        leveltwo : {
            attack: 4,
            health: 7,
            effect: "End Turn: Give 2 friends ahead (+1/+1)",
        },
        levelthree : {
            attack: 7,
            health: 10,
            effect: "End Turn: Give 3 friends ahead (+1/+1)",
        }
    },
    Kangaroo: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed to 1/2"
        },
        ],
        pack: 0,
        tier: 3,
        levelone : {
            attack: 1,
            health: 2,
            effect: "Friend ahead attacks: Gain (+2/+2)",
        },
        leveltwo : {
            attack: 3,
            health: 4,
            effect: "Friend ahead attacks: Gain (+4/+4)",
        },
        levelthree : {
            attack: 6,
            health: 7,
            effect: "Friend ahead attacks: Gain (+6/+6)",
        }
    },
    Ox: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed base stats of Ox to 1/3 from 1/4; Changed ability of Ox to [Friend ahead faints: Gain Melon Armor and +1/+2/+3 Attack] from [Friend ahead faints: Gain Melon Armor and +2/+4/+6 Attack]"
        },
        ],
        pack: 0,
        tier: 3,
        levelone : {
            attack: 1,
            health: 3,
            effect: "Friend ahead Faints: Gain Melon Armor and +1 attack",
        },
        leveltwo : {
            attack: 3,
            health: 5,
            effect: "Friend ahead Faints: Gain Melon Armor and +2 attack",
        },
        levelthree : {
            attack: 6,
            health: 8,
            effect: "Friend ahead Faints: Gain Melon Armor and +3 attack",
        }
    },
    Rabbit: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "The base stats of the Rabbit has been changed to 1/2 from 3/2"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Changed Rabbit's ability to [Pet eats shop food: Give it +1/+2/+3 Health] from [Other Pet eats shop food: Give it +1/+2/+3 Health]"
        },
        ],
        pack: 0,
        tier: 3,
        levelone : {
            attack: 1,
            health: 2,
            effect: "Pet eats shop food: Give it +1 health",
        },
        leveltwo : {
            attack: 3,
            health: 4,
            effect: "Pet eats shop food: Give it +2 health",
        },
        levelthree : {
            attack: 6,
            health: 7,
            effect: "Pet eats shop food: Give it +3 health",
        }
    },
    Sheep: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "5th May 2021",
            note: "Level 2 and 3 sheep spawsn to 6/6 and 9/9 rams"
        },
        ],
        pack: 0,
        tier: 3,
        levelone : {
            attack: 2,
            health: 2,
            effect: "Faint: Summon two (2/2) Rams",
        },
        leveltwo : {
            attack: 4,
            health: 4,
            effect: "Faint: Summon two (4/4) Rams",
        },
        levelthree : {
            attack: 7,
            health: 7,
            effect: "Faint: Summon two (6/6) Rams",
        }
    },
    Snail: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th February 2022",
            note: "Changed Snail ability to give +1/+1"
        },
        ],
        pack: 0,
        tier: 3,
        levelone : {
            attack: 2,
            health: 2,
            effect: "Buy: If you lost last battle, give all friends (+1/+1)",
        },
        leveltwo : {
            attack: 4,
            health: 4,
            effect: "Buy: If you lost last battle, give all friends (+2/+2)",
        },
        levelthree : {
            attack: 7,
            health: 7,
            effect: "Buy: If you lost last battle, give all friends (+3/+3)",
        }
    },
    Turtle: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed to 1/2"
        },
        ],
        pack: 0,
        tier: 3,
        levelone : {
            attack: 1,
            health: 2,
            effect: "Before Faint: Give 1 friend behind Melon Armor",
        },
        leveltwo : {
            attack: 3,
            health: 4,
            effect: "Before Faint: Give 2 friends behind Melon Armor",
        },
        levelthree : {
            attack: 6,
            health: 7,
            effect: "Before Faint: Give 3 friends behind Melon Armor",
        }
    },
    Hatching_Chick: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 1,
        tier: 3,
        levelone : {
            attack: 1,
            health: 1,
            effect: "End turn: Give (+5/+5) to friend ahead until end of battle",
        },
        leveltwo : {
            attack: 3,
            health: 3,
            effect: "End turn: Give (+2/+2) to friend ahead",
        },
        levelthree : {
            attack: 6,
            health: 6,
            effect: "End turn: Give friend ahead 1 Experience",
        }
    },
    Owl: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 1,
        tier: 3,
        levelone : {
            attack: 5,
            health: 3,
            effect: "Sell: Give a random friend (+2/+2)",
        },
        leveltwo : {
            attack: 7,
            health: 5,
            effect: "Sell: Give a random friend (+4/+4)",
        },
        levelthree : {
            attack: 10,
            health: 8,
            effect: "Sell: Give a random friend (+6/+6)",
        }
    },
    Puppy: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Ability was changed to only activate when there is 3 or more gold instead of 2"
        },
        {
            changeNum: 2,
            patchNum: "3rd August 2021",
            note: "Changed to tier 3; Attack and health changed to 1/1"
        },
        ],
        pack: 1,
        tier: 3,
        levelone : {
            attack: 1,
            health: 1,
            effect: "End turn: If you have 2 or more gold, gain (+2/+2)",
        },
        leveltwo : {
            attack: 3,
            health: 3,
            effect: "End turn: If you have 2 or more gold, gain (+4/+4)",
        },
        levelthree : {
            attack: 6,
            health: 6,
            effect: "End turn: If you have 2 or more gold, gain (+6/+6)",
        }
    },
    Tropical_Fish: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 1,
        tier: 3,
        levelone : {
            attack: 2,
            health: 4,
            effect: "End turn: Give adjacent friends +1 health",
        },
        leveltwo : {
            attack: 4,
            health: 6,
            effect: "End turn: Give adjacent friends +2 health",
        },
        levelthree : {
            attack: 7,
            health: 9,
            effect: "End turn: Give adjacent friends +3 health",
        }
    },
    Capybara: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 3,
        levelone : {
            attack: 2,
            health: 5,
            effect: "Roll: Give unfrozen shop pets (+1/+2)",
        },
        leveltwo : {
            attack: 4,
            health: 7,
            effect: "Roll: Give unfrozen shop pets (+2/+4)",
        },
        levelthree : {
            attack: 7,
            health: 10,
            effect: "Roll: Give unfrozen shop pets (+3/+6)",
        }
    },
    Cassowary: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "11th August 2022",
            note: "Cassowary's ability changed from [End turn: Gain (+1/+1) for each friendly Strawberry pet up to 1/2/3] to [End turn: If you have at least one Strawberry pet, gain +1/2/3 stats]"
        },
        ],
        pack: 2,
        tier: 3,
        levelone : {
            attack: 2,
            health: 4,
            effect: "End turn: If you have at least one Strawberry pet, gain +1 stats",
        },
        leveltwo : {
            attack: 4,
            health: 6,
            effect: "End turn: If you have at least one Strawberry pet, gain +2 stats",
        },
        levelthree : {
            attack: 7,
            health: 9,
            effect: "End turn: If you have at least one Strawberry pet, gain +3 stats",
        }
    },
    Clownfish: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 3,
        levelone : {
            attack: 2,
            health: 3,
            effect: "Friendly Pet level-up: Give it (+2/+2)",
        },
        leveltwo : {
            attack: 4,
            health: 5,
            effect: "Friendly Pet level-up: Give it (+4/+4)",
        },
        levelthree : {
            attack: 7,
            health: 8,
            effect: "Friendly Pet level-up: Give it (+6/+6)",
        }
    },
    Leech: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 3,
        levelone : {
            attack: 4,
            health: 2,
            effect: "End turn: Deal 1 damage to the pet ahead and gain +1 health",
        },
        leveltwo : {
            attack: 6,
            health: 4,
            effect: "End turn: Deal 1 damage to the pet ahead and gain +2 health",
        },
        levelthree : {
            attack: 9,
            health: 7,
            effect: "End turn: Deal 1 damage to the pet ahead and gain +3 health",
        }
    },
    Okapi: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 3,
        levelone : {
            attack: 1,
            health: 2,
            effect: "Roll: Gain (+1/+1) until end of battle. Works 5 time(s) per turn",
        },
        leveltwo : {
            attack: 3,
            health: 4,
            effect: "Roll: Gain (+2/+2) until end of battle. Works 5 time(s) per turn",
        },
        levelthree : {
            attack: 6,
            health: 7,
            effect: "Roll: Gain (+3/+3) until end of battle. Works 5 time(s) per turn",
        }
    },
    Starfish: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 3,
        levelone : {
            attack: 3,
            health: 2,
            effect: "Friend Sold: If it had a Sell ability, give (+1/+1) to a random friend",
        },
        leveltwo : {
            attack: 5,
            health: 4,
            effect: "Friend Sold: If it had a Sell ability, give (+2/+2) to a random friend",
        },
        levelthree : {
            attack: 8,
            health: 7,
            effect: "Friend Sold: If it had a Sell ability, give (+3/+3) to a random friend",
        }
    },
    Toad: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 3,
        levelone : {
            attack: 3,
            health: 3,
            effect: "Enemy hurt: Make it Weak. Works 2 times(s) per turn",
        },
        leveltwo : {
            attack: 5,
            health: 5,
            effect: "Enemy hurt: Make it Weak. Works 4 times(s) per turn",
        },
        levelthree : {
            attack: 8,
            health: 8,
            effect: "Enemy hurt: Make it Weak. Works 6 times(s) per turn",
        }
    },
    Woodpecker: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 3,
        levelone : {
            attack: 4,
            health: 3,
            effect: "Start of battle: Deal 2 damage to the two pets ahead. Repeats 1 time",
        },
        leveltwo : {
            attack: 6,
            health: 5,
            effect: "Start of battle: Deal 2 damage to the two pets ahead. Repeats 2 times",
        },
        levelthree : {
            attack: 9,
            health: 8,
            effect: "Start of battle: Deal 2 damage to the two pets ahead. Repeats 3 times",
        }
    },
    Aardvark: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 3,
        levelone : {
            attack: 3,
            health: 4,
            effect: "Enemy summoned: Gain (+2/+3)",
        },
        leveltwo : {
            attack: 5,
            health: 6,
            effect: "Enemy summoned: Gain (+4/+6)",
        },
        levelthree : {
            attack: 8,
            health: 9,
            effect: "Enemy summoned: Gain (+6/+9)",
        }
    },
    Bear: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 3,
        levelone : {
            attack: 3,
            health: 5,
            effect: "Before Faint: Give Honey to all pets that are 1 space away",
        },
        leveltwo : {
            attack: 5,
            health: 7,
            effect: "Before Faint: Give Honey to all pets that are 2 spaces away",
        },
        levelthree : {
            attack: 8,
            health: 10,
            effect: "Before Faint: Give Honey to all pets that are 3 spaces away",
        }
    },
    Emperor_Tamarin: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 3,
        levelone : {
            attack: 2,
            health: 4,
            effect: "Sell: Give 50% of Emperor Tamarin's attack and health to the leftmost shop pet",
        },
        leveltwo : {
            attack: 4,
            health: 6,
            effect: "Sell: Give 100% of Emperor Tamarin's attack and health to the leftmost shop pet",
        },
        levelthree : {
            attack: 7,
            health: 9,
            effect: "Sell: Give 150% of Emperor Tamarin's attack and health to the leftmost shop pet",
        }
    },
    Seagull: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 3,
        levelone : {
            attack: 3,
            health: 2,
            effect: "Friend summoned: Copy Seagull's held Food to it. Works 1 time per turn",
        },
        leveltwo : {
            attack: 5,
            health: 4,
            effect: "Friend summoned: Copy Seagull's held Food to it. Works 2 times per turn",
        },
        levelthree : {
            attack: 8,
            health: 7,
            effect: "Friend summoned: Copy Seagull's held Food to it. Works 3 times per turn",
        }
    },
    Wasp: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 3,
        levelone : {
            attack: 2,
            health: 2,
            effect: "Upgrade shop tier: Gain 50% more attack",
        },
        leveltwo : {
            attack: 4,
            health: 4,
            effect: "Upgrade shop tier: Gain 100% more attack",
        },
        levelthree : {
            attack: 7,
            health: 7,
            effect: "Upgrade shop tier: Gain 150% more attack",
        }
    },
    Blobfish: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 3,
        levelone : {
            attack: 2,
            health: 4,
            effect: "Before Faint: Give friend behind (+1/+1) and 1 Experience",
        },
        leveltwo : {
            attack: 4,
            health: 6,
            effect: "Before Faint: Give friend behind (+2/+2) and 2 Experience",
        },
        levelthree : {
            attack: 7,
            health: 9,
            effect: "Before Faint: Give friend behind (+3/+3) and 3 Experience",
        }
    },
    Caterpillar: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "23rd May 2022",
            note: "Changed the base stats of the Caterpillar to 2/2 from 1/3; Changed the Tier of the Caterpillar to 4 from 3"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Changed the base stats of the Caterpillar to 1/3"
        },
        ],
        pack: 1,
        tier: 4,
        levelone : {
            attack: 2,
            health: 2,
            effect: "Start of turn: Gain 1 Experience",
        },
        leveltwo : {
            attack: 4,
            health: 4,
            effect: "Start of turn: Gain 1 Experience",
        },
        levelthree : {
            attack: 7,
            health: 7,
            effect: "Start of battle: Transform into a Butterfly, then copy stats of the strongest friend",
        }
    },
    Bison: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed the base stats of the Bison to 4/4 from 6/6"
        },
        ],
        pack: 0,
        tier: 4,
        levelone : {
            attack: 4,
            health: 4,
            effect: "End Turn: If there is at least one level 3 friend gain (+2/+2)",
        },
        leveltwo : {
            attack: 6,
            health: 6,
            effect: "End Turn: If there is at least one level 3 friend gain (+4/+4)",
        },
        levelthree : {
            attack: 9,
            health: 9,
            effect: "End Turn: If there is at least one level 3 friend gain (+6/+6)",
        }
    },
    Deer: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "5th May 2021",
            note: "Level 2 and 3 deer now spawn a 14/14 and 21/21 bus"
        },
        {
            changeNum: 2,
            patchNum: "Initial Patch",
            note: "Deer stats set to 1/1; Deer ability is [Faint: Summon a 7/7 bus]"
        },
        ],
        pack: 0,
        tier: 4,
        levelone : {
            attack: 1,
            health: 1,
            effect: "Faint: Summon a (5/5) Bus with Splash Attack",
        },
        leveltwo : {
            attack: 3,
            health: 3,
            effect: "Faint: Summon a (10/10) Bus with Splash Attack",
        },
        levelthree : {
            attack: 6,
            health: 6,
            effect: "Faint: Summon a (15/15) Bus with Splash Attack",
        }
    },
    Dolphin: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Dolphin made available in Expansion Pack 1"
        },
        ],
        pack: 0,
        tier: 4,
        levelone : {
            attack: 4,
            health: 6,
            effect: "Start of battle: Deal 5 damage to the lowest health enemy",
        },
        leveltwo : {
            attack: 6,
            health: 8,
            effect: "Start of battle: Deal 10 damage to the lowest health enemy",
        },
        levelthree : {
            attack: 9,
            health: 11,
            effect: "Start of battle: Deal 15 damage to the lowest health enemy",
        }
    },
    Hippo: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed ability of Hippo to [Knock-out: Gain (+3/+3)/(+6/+6)/(+9/+9)] from [Knock-out: Gain (+2/+2)/(+4/+4)/(+6/+6)]"
        },
        ],
        pack: 0,
        tier: 4,
        levelone : {
            attack: 4,
            health: 7,
            effect: "Knockout: Gain (+3/+3)",
        },
        leveltwo : {
            attack: 6,
            health: 9,
            effect: "Knockout: Gain (+6/+6)",
        },
        levelthree : {
            attack: 9,
            health: 12,
            effect: "Knockout: Gain (+9/+9)",
        }
    },
    Parrot: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed the base stats of the Parrot to 4/2 from 5/3"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Changed the Tier of Parrot to 4 from 5; Changed the base stats of the Parrot to 5/3"
        },
        {
            changeNum: 3,
            patchNum: "28th October 2021",
            note: "Now loses copy of ability at end of every battle"
        },
        ],
        pack: 0,
        tier: 4,
        levelone : {
            attack: 4,
            health: 2,
            effect: "End turn: Copy ability from friend ahead as level 1 until the end of battle",
        },
        leveltwo : {
            attack: 6,
            health: 4,
            effect: "End turn: Copy ability from friend ahead as level 2 until the end of battle",
        },
        levelthree : {
            attack: 9,
            health: 7,
            effect: "End turn: Copy ability from friend ahead as level 3 until the end of battle",
        }
    },
    Penguin: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed the ability of the Penguin to [End turn: Give three level 2 and 3 friends (+1/+1)/(+2/+2)/(+3/+3)] from [End turn: Give other level 2 and 3 friends (+1/+1)/(+2/+2)/(+3/+3)]"
        },
        ],
        pack: 0,
        tier: 4,
        levelone : {
            attack: 1,
            health: 2,
            effect: "End turn: Give three level 2 and 3 friends (+1/+1)",
        },
        leveltwo : {
            attack: 3,
            health: 4,
            effect: "End turn: Give three level 2 and 3 friends (+2/+2)",
        },
        levelthree : {
            attack: 6,
            health: 7,
            effect: "End turn: Give three level 2 and 3 friends (+3/+3)",
        }
    },
    Rooster: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Pet's ability was changed from giving the Chick the same Attack as the fainted Rooster to half; Attack and Health were changed to 5/3"
        },
        ],
        pack: 0,
        tier: 4,
        levelone : {
            attack: 5,
            health: 3,
            effect: "Faint: Summon 1 chicks with 1 health and half attack",
        },
        leveltwo : {
            attack: 7,
            health: 5,
            effect: "Faint: Summon 2 chicks with 1 health and half attack",
        },
        levelthree : {
            attack: 10,
            health: 8,
            effect: "Faint: Summon 3 chicks with 1 health and half attack",
        }
    },
    Skunk: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed to 3/6"
        },
        ],
        pack: 0,
        tier: 4,
        levelone : {
            attack: 3,
            health: 6,
            effect: "Start of battle: Reduce the highest health enemy by 33%",
        },
        leveltwo : {
            attack: 5,
            health: 8,
            effect: "Start of battle: Reduce health of the highest enemy by 66%",
        },
        levelthree : {
            attack: 8,
            health: 11,
            effect: "Start of battle: Reduce health of the highest enemy by 99%",
        }
    },
    Squirrel: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed the ability of the Squirrel to [Start of turn: Add one shop food and discount them by 1/2/3 gold] from [Start of turn: Discount shop food by 1/2/3 gold]"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Ability changed to [Start of turn: Discount shop food by 1 gold] from [When bought: Clear and fill shops with food]; Changed to a 2/5"
        },
        ],
        pack: 0,
        tier: 4,
        levelone : {
            attack: 2,
            health: 5,
            effect: "Start of turn: Add 1 shop food and discount all food by 1 gold",
        },
        leveltwo : {
            attack: 4,
            health: 7,
            effect: "Start of turn: Add 1 shop food and discount all food by 2 gold",
        },
        levelthree : {
            attack: 7,
            health: 10,
            effect: "Start of turn: Add 1 shop food and discount all food by 3 gold",
        }
    },
    Whale: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th February 2022",
            note: "Changed stats to 3/8 from 2/6"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Whale now starts appearing at Tier 4"
        },
        ],
        pack: 0,
        tier: 4,
        levelone : {
            attack: 3,
            health: 10,
            effect: "Start of battle: Swallow friend ahead and release it as level 1 after fainting",
        },
        leveltwo : {
            attack: 5,
            health: 10,
            effect: "Start of battle: Swallow friend ahead and release it as level 2 after fainting",
        },
        levelthree : {
            attack: 8,
            health: 13,
            effect: "Start of battle: Swallow friend ahead and release it as level 3 after fainting",
        }
    },
    Worm: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed base stats of Worm to 3/3 from 2/2"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Changed base stats of Worm to 2/2"
        },
        ],
        pack: 0,
        tier: 4,
        levelone : {
            attack: 3,
            health: 3,
            effect: "Eats shop food: Gain (+1/+1)",
        },
        leveltwo : {
            attack: 5,
            health: 5,
            effect: "Eats shop food: Gain (+2/+2)",
        },
        levelthree : {
            attack: 8,
            health: 8,
            effect: "Eats shop food: Gain (+3/+3)",
        }
    },
    Buffalo: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "5th May 2022",
            note: "Changed ability so it only works thrice per turn; Changed the base stats of the Buffalo to 4/4 from 5/5"
        },
        {
            changeNum: 2,
            patchNum: "3rd August 2021",
            note: "Changed to Tier 4"
        },
        ],
        pack: 1,
        tier: 4,
        levelone : {
            attack: 4,
            health: 4,
            effect: "Buy friend: Gain (+1/+1). Works 3 time(s) per turn",
        },
        leveltwo : {
            attack: 6,
            health: 6,
            effect: "Buy friend: Gain (+2/+2). Works 3 time(s) per turn",
        },
        levelthree : {
            attack: 9,
            health: 9,
            effect: "Buy friend: Gain (+3/+3). Works 3 time(s) per turn",
        }
    },
    Llama: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed to 3/6"
        },
        ],
        pack: 1,
        tier: 4,
        levelone : {
            attack: 3,
            health: 6,
            effect: "End turn: If you have 4 or less pets, gain (+2/+2)",
        },
        leveltwo : {
            attack: 5,
            health: 8,
            effect: "End turn: If you have 4 or less pets, gain (+4/+4)",
        },
        levelthree : {
            attack: 8,
            health: 11,
            effect: "End turn: If you have 4 or less pets, gain (+6/+6)",
        }
    },
    Lobster: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed the ability of the Lobster to [Friend summoned outside battle: Give it (+2/+3)/(+4/+6)/(+6/+9)] from [Friend summoned: Give it (+2/+2)/(+4/+4)/(+6/+6) when not in battle]"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Changed the base stats of the Lobster to 4/5"
        },
        ],
        pack: 1,
        tier: 4,
        levelone : {
            attack: 4,
            health: 5,
            effect: "Friend summoned outside battle: Give it (+2/+3)",
        },
        leveltwo : {
            attack: 6,
            health: 7,
            effect: "Friend summoned outside battle: Give it (+4/+6)",
        },
        levelthree : {
            attack: 9,
            health: 10,
            effect: "Friend summoned outside battle: Give it (+6/+9)",
        }
    },
    Microbe: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Microbe now starts appearing at Tier 4"
        },
        {
            changeNum: 2,
            patchNum: "28th October 2021",
            note: "Weak changed from 5 extra damage to 3"
        },
        ],
        pack: 1,
        tier: 4,
        levelone : {
            attack: 1,
            health: 1,
            effect: "Faint: Make all pets Weak",
        },
        leveltwo : {
            attack: 3,
            health: 3,
            effect: "Faint: Make all pets Weak",
        },
        levelthree : {
            attack: 6,
            health: 6,
            effect: "Faint: Make all pets Weak",
        }
    },
    Anteater: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 4,
        levelone : {
            attack: 3,
            health: 2,
            effect: "Faint: Summon two level 1 Ants",
        },
        leveltwo : {
            attack: 5,
            health: 4,
            effect: "Faint: Summon two level 2 Ants",
        },
        levelthree : {
            attack: 8,
            health: 7,
            effect: "Faint: Summon two level 3 Ants",
        }
    },
    Crow: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "11th August 2022",
            note: "Crow's ability changed from [Sell: replace food shop with 1/2/3 Chocolate that gives +1 Experience] to [Sell: Replace shop with one Chocolate that gives +1/2/3 experience]"
        },
        ],
        pack: 2,
        tier: 4,
        levelone : {
            attack: 3,
            health: 3,
            effect: "Sell: Replace shop with one Chocolate that gives +1 experience",
        },
        leveltwo : {
            attack: 5,
            health: 5,
            effect: "Sell: Replace shop with one Chocolate that gives +2 experience",
        },
        levelthree : {
            attack: 8,
            health: 8,
            effect: "Sell: Replace shop with one Chocolate that gives +3 experience",
        }
    },
    Donkey: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 4,
        levelone : {
            attack: 4,
            health: 6,
            effect: "Friend faints: Push last enemy to the front. Works 1 time per turn",
        },
        leveltwo : {
            attack: 6,
            health: 8,
            effect: "Friend faints: Push last enemy to the front. Works 2 times per turn",
        },
        levelthree : {
            attack: 9,
            health: 11,
            effect: "Friend faints: Push last enemy to the front. Works 3 times per turn",
        }
    },
    Eel: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 4,
        levelone : {
            attack: 5,
            health: 2,
            effect: "Start of battle: Gain 50% bonus health",
        },
        leveltwo : {
            attack: 7,
            health: 4,
            effect: "Start of battle: Gain 100% bonus health",
        },
        levelthree : {
            attack: 10,
            health: 7,
            effect: "Start of battle: Gain 150% bonus health",
        }
    },
    Hawk: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 4,
        levelone : {
            attack: 4,
            health: 3,
            effect: "Start of battle: Deal 7 damage to the opposite enemy",
        },
        leveltwo : {
            attack: 6,
            health: 5,
            effect: "Start of battle: Deal 14 damage to the opposite enemy",
        },
        levelthree : {
            attack: 9,
            health: 8,
            effect: "Start of battle: Deal 21 damage to the opposite enemy",
        }
    },
    Orangutan: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 4,
        levelone : {
            attack: 3,
            health: 6,
            effect: "End turn: Give the lowest health friendly pet +4 health",
        },
        leveltwo : {
            attack: 5,
            health: 8,
            effect: "End turn: Give the lowest health friendly pet +8 health",
        },
        levelthree : {
            attack: 8,
            health: 11,
            effect: "End turn: Give the lowest health friendly pet +12 health",
        }
    },
    Pelican: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 4,
        levelone : {
            attack: 2,
            health: 3,
            effect: "End turn & Start of battle: Give a random Strawberry friend (+2/+1)",
        },
        leveltwo : {
            attack: 4,
            health: 5,
            effect: "End turn & Start of battle: Give a random Strawberry friend (+4/+2)",
        },
        levelthree : {
            attack: 7,
            health: 8,
            effect: "End turn & Start of battle: Give a random Strawberry friend (+6/+3)",
        }
    },
    Platypus: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 4,
        levelone : {
            attack: 5,
            health: 2,
            effect: "Sell: Summon a level 1 Duck and Beaver",
        },
        leveltwo : {
            attack: 7,
            health: 4,
            effect: "Sell: Summon a level 2 Duck and Beaver",
        },
        levelthree : {
            attack: 10,
            health: 7,
            effect: "Sell: Summon a level 3 Duck and Beaver",
        }
    },
    Praying_Mantis: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 4,
        levelone : {
            attack: 7,
            health: 2,
            effect: "Start of turn: Knock out adjacent friends and gain (+2/+2)",
        },
        leveltwo : {
            attack: 9,
            health: 4,
            effect: "Start of turn: Knock out adjacent friends and gain (+4/+4)",
        },
        levelthree : {
            attack: 12,
            health: 7,
            effect: "Start of turn: Knock out adjacent friends and gain (+6/+6)",
        }
    },
    Armadillo: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "Expansion #2 test build",
            note: "Ability changed to [Hurt and Faint: Give friends +1/+2/+3 Health] from [Hurt: Give friends +1/+2/+3 Health]"
        },
        ],
        pack: "Weekly",
        tier: 4,
        levelone : {
            attack: 2,
            health: 6,
            effect: "Hurt & Faint: Give friends +1 health",
        },
        leveltwo : {
            attack: 4,
            health: 8,
            effect: "Hurt & Faint: Give friends +2 health",
        },
        levelthree : {
            attack: 7,
            health: 11,
            effect: "Hurt & Faint: Give friends +3 health",
        }
    },
    Dragonfly: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "11th August 2022",
            note: "Dragonfly ability now gives random buffs"
        },
        ],
        pack: "Weekly",
        tier: 4,
        levelone : {
            attack: 2,
            health: 4,
            effect: "End turn: Give (+1/+1) to one pet of each level",
        },
        leveltwo : {
            attack: 4,
            health: 6,
            effect: "End turn: Give (+2/+2) to one pet of each level",
        },
        levelthree : {
            attack: 7,
            health: 9,
            effect: "End turn: Give (+3/+3) to one pet of each level",
        }
    },
    Jerboa: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 4,
        levelone : {
            attack: 1,
            health: 3,
            effect: "Eats apple: Give other pets (+1/+1)",
        },
        leveltwo : {
            attack: 3,
            health: 5,
            effect: "Eats apple: Give other pets (+2/+2)",
        },
        levelthree : {
            attack: 6,
            health: 8,
            effect: "Eats apple: Give other pets (+3/+3)",
        }
    },
    Lynx: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 4,
        levelone : {
            attack: 5,
            health: 3,
            effect: "Start of battle: Deal damage to 1 random enemy equal to the sum of all friendly levels",
        },
        leveltwo : {
            attack: 7,
            health: 5,
            effect: "Start of battle: Deal damage to 2 random enemies equal to the sum of all friendly levels",
        },
        levelthree : {
            attack: 10,
            health: 8,
            effect: "Start of battle: Deal damage to 3 random enemies equal to the sum of all friendly levels",
        }
    },
    Mole: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 4,
        levelone : {
            attack: 2,
            health: 3,
            effect: "Buy: Give adjacent friends (+1/+1)",
        },
        leveltwo : {
            attack: 4,
            health: 5,
            effect: "Buy: Give adjacent friends (+2/+2)",
        },
        levelthree : {
            attack: 7,
            health: 8,
            effect: "Buy: Give adjacent friends (+3/+3)",
        }
    },
    Porcupine: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 4,
        levelone : {
            attack: 3,
            health: 6,
            effect: "Hurt: Deal 6 damage back to the pet that hurt Porcupine",
        },
        leveltwo : {
            attack: 5,
            health: 8,
            effect: "Hurt: Deal 12 damage back to the pet that hurt Porcupine",
        },
        levelthree : {
            attack: 8,
            health: 11,
            effect: "Hurt: Deal 18 damage back to the pet that hurt Porcupine",
        }
    },
    Cow: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Cow's ability is now affected by being leveled up; The Attack and Health that Milk gave was changed to 1/2 and scales accordingly to each level"
        },
        ],
        pack: 0,
        tier: 5,
        levelone : {
            attack: 4,
            health: 6,
            effect: "Buy: Replace food shop with 2 free milk that gives (+1/+2)",
        },
        leveltwo : {
            attack: 6,
            health: 8,
            effect: "Buy: Replace food shop with 2 free milk that gives (+2/+4)",
        },
        levelthree : {
            attack: 9,
            health: 11,
            effect: "Buy: Replace food shop with 2 free milk that gives (+3/+6)",
        }
    },
    Crocodile: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed ability from [Start of battle: Deal 8/16/24 damage to the last enemy] to [Start of battle: Deal 8 damage to the last enemy. Repeat 1/2/3 time(s)]"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Crocodile's ability damage was increased to 8 and scales with each level accordingly; Attack and Health were changed to 8/4"
        },
        ],
        pack: 0,
        tier: 5,
        levelone : {
            attack: 8,
            health: 4,
            effect: "Start of battle: Deal 8 damage to the last enemy. Repeats 1 time",
        },
        leveltwo : {
            attack: 10,
            health: 6,
            effect: "Start of battle: Deal 8 damage to the last enemy. Repeats 2 time(s)",
        },
        levelthree : {
            attack: 13,
            health: 9,
            effect: "Start of battle: Deal 8 damage to the last enemy. Repeats 3 time(s)",
        }
    },
    Monkey: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th February 2022",
            note: "Changed monkey ability to give +2/+3(was +3/+3)"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Monkey will now start appearing at Tier 5; Monkey's ability was changed to [give the right-most friend +3/+3] and scales with each level; Attack and Health was changed to 1/2"
        },
        ],
        pack: 0,
        tier: 5,
        levelone : {
            attack: 1,
            health: 2,
            effect: "End turn: Give right-most friend (+2/+3)",
        },
        leveltwo : {
            attack: 3,
            health: 4,
            effect: "End turn: Give right-most friend (+4/+6)",
        },
        levelthree : {
            attack: 6,
            health: 7,
            effect: "End turn: Give right-most friend (+6/+9)",
        }
    },
    Rhino: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "5th May 2022",
            note: "Changed ability to Knock-out: Deal 4 damage to the first enemy. Double against Tier 1 Pets"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed to 5/8"
        },
        ],
        pack: 0,
        tier: 5,
        levelone : {
            attack: 5,
            health: 8,
            effect: "Knockout: Deal 4 damage to the first enemy. Double against Tier 1 pets",
        },
        leveltwo : {
            attack: 7,
            health: 10,
            effect: "Knockout: Deal 8 damage to the first enemy. Double against Tier 1 pets",
        },
        levelthree : {
            attack: 10,
            health: 13,
            effect: "Knockout: Deal 12 damage to the first enemy. Double against Tier 1 pets",
        }
    },
    Scorpion: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 0,
        tier: 5,
        levelone : {
            attack: 1,
            health: 1,
            effect: "Summoned: Gain Peanuts",
        },
        leveltwo : {
            attack: 3,
            health: 3,
            effect: "Summoned: Gain Peanuts",
        },
        levelthree : {
            attack: 6,
            health: 6,
            effect: "Summoned: Gain Peanuts",
        }
    },
    Seal: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed to 3/8"
        },
        ],
        pack: 0,
        tier: 5,
        levelone : {
            attack: 3,
            health: 8,
            effect: "Eats shop food: Give 2 random friends (+1/+1)",
        },
        leveltwo : {
            attack: 5,
            health: 10,
            effect: "Eats shop food: Give 2 random friends (+2/+2)",
        },
        levelthree : {
            attack: 8,
            health: 13,
            effect: "Eats shop food: Give 2 random friends (+3/+3)",
        }
    },
    Shark: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Ability changed to [Friend faints: Gain +2/+2(was +2/+1)]"
        },
        ],
        pack: 0,
        tier: 5,
        levelone : {
            attack: 4,
            health: 4,
            effect: "Friend faints: Gain (+2/+2)",
        },
        leveltwo : {
            attack: 6,
            health: 6,
            effect: "Friend faints: Gain (+4/+4)",
        },
        levelthree : {
            attack: 9,
            health: 9,
            effect: "Friend faints: Gain (+6/+6)",
        }
    },
    Turkey: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed ability from [Friend summoned: Give it (+3/+3)/(+6/+6)/(+9/+9)] to [Friend summoned: Give it (+2/+3)/(+4/+6)/(+6/+9)]"
        },
        ],
        pack: 0,
        tier: 5,
        levelone : {
            attack: 3,
            health: 4,
            effect: "Friend summoned: Give it (+2/+3)",
        },
        leveltwo : {
            attack: 5,
            health: 6,
            effect: "Friend summoned: Give it (+4/+6)",
        },
        levelthree : {
            attack: 8,
            health: 9,
            effect: "Friend summoned: Give it (+6/+9)",
        }
    },
    Chicken: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed 1/2"
        },
        {
            changeNum: 2,
            patchNum: "3rd August 2021",
            note: "Changed to Tier 5; Attack and Health were changed to 3/4"
        },
        ],
        pack: 1,
        tier: 5,
        levelone : {
            attack: 1,
            health: 2,
            effect: "Buy tier 1 pet: Give current and future shop pets (+1/+1)",
        },
        leveltwo : {
            attack: 3,
            health: 4,
            effect: "Buy tier 1 pet: Give current and future shop pets (+2/+2)",
        },
        levelthree : {
            attack: 6,
            health: 7,
            effect: "Buy tier 1 pet: Give current and future shop pets (+3/+3)",
        }
    },
    Eagle: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 1,
        tier: 5,
        levelone : {
            attack: 6,
            health: 5,
            effect: "Faint: Summon one level 1 tier 6 pet",
        },
        leveltwo : {
            attack: 8,
            health: 7,
            effect: "Faint: Summon one level 2 tier 6 pet",
        },
        levelthree : {
            attack: 11,
            health: 10,
            effect: "Faint: Summon one level 3 tier 6 pet",
        }
    },
    Poodle: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Poodle no longer buffs itself"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Poodle will now start appearing at Tier 5; Attack and Health were changed to 2/2"
        },
        ],
        pack: 1,
        tier: 5,
        levelone : {
            attack: 2,
            health: 2,
            effect: "End turn: Give (+1/+1) to a friend of each Tier",
        },
        leveltwo : {
            attack: 4,
            health: 4,
            effect: "End turn: Give (+2/+2) to a friend of each Tier",
        },
        levelthree : {
            attack: 7,
            health: 7,
            effect: "End turn: Give (+3/+3) to a friend of each Tier",
        }
    },
    Goat: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "The gold return now increases as the Goat levels up. This comes at the expense of only have two charges every turn; Attack and Health were changed to 4/6"
        },
        {
            changeNum: 2,
            patchNum: "3rd August 2021",
            note: "Changed to Tier 5"
        },
        ],
        pack: 1,
        tier: 5,
        levelone : {
            attack: 4,
            health: 6,
            effect: "Buy friend: Gain 1 gold. Works 2 time(s) per turn",
        },
        leveltwo : {
            attack: 6,
            health: 8,
            effect: "Buy friend: Gain 2 gold. Works 2 time(s) per turn",
        },
        levelthree : {
            attack: 9,
            health: 11,
            effect: "Buy friend: Gain 3 gold. Works 2 time(s) per turn",
        }
    },
    Fox: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 5,
        levelone : {
            attack: 5,
            health: 3,
            effect: "End turn: Steal a random shop food",
        },
        leveltwo : {
            attack: 7,
            health: 5,
            effect: "End turn: Steal a random shop food. Health and attack effects are multipled by 2",
        },
        levelthree : {
            attack: 10,
            health: 8,
            effect: "End turn: Steal a random shop food. Health and attack effects are multipled by 3",
        }
    },
    Hamster: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 5,
        levelone : {
            attack: 2,
            health: 4,
            effect: "Roll: Gain 1 gold. Works 2 time(s) per turn",
        },
        leveltwo : {
            attack: 4,
            health: 6,
            effect: "Roll: Gain 1 gold. Works 4 time(s) per turn",
        },
        levelthree : {
            attack: 7,
            health: 9,
            effect: "Roll: Gain 1 gold. Works 6 time(s) per turn",
        }
    },
    Lion: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 5,
        levelone : {
            attack: 6,
            health: 6,
            effect: "Start of battle: If this is your highest tier pet, gain 50% attack and health",
        },
        leveltwo : {
            attack: 8,
            health: 8,
            effect: "Start of battle: If this is your highest tier pet, gain 100% attack and health",
        },
        levelthree : {
            attack: 11,
            health: 11,
            effect: "Start of battle: If this is your highest tier pet, gain 150% attack and health",
        }
    },
    Polar_Bear: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 5,
        levelone : {
            attack: 4,
            health: 8,
            effect: "Start of turn: Give a random frozen shop pet (+3/+3)",
        },
        leveltwo : {
            attack: 6,
            health: 10,
            effect: "Start of turn: Give a random frozen shop pet (+6/+6)",
        },
        levelthree : {
            attack: 9,
            health: 13,
            effect: "Start of turn: Give a random frozen shop pet (+9/+9)",
        }
    },
    Shoebill: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 5,
        levelone : {
            attack: 2,
            health: 4,
            effect: "End turn: Give Strawberry friends (+1/+2)",
        },
        leveltwo : {
            attack: 4,
            health: 6,
            effect: "End turn: Give Strawberry friends (+2/+4)",
        },
        levelthree : {
            attack: 7,
            health: 9,
            effect: "End turn: Give Strawberry friends (+3/+6)",
        }
    },
    Siberian_Husky: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 5,
        levelone : {
            attack: 4,
            health: 3,
            effect: "End turn: Give friends with no held Food (+1/+1)",
        },
        leveltwo : {
            attack: 6,
            health: 5,
            effect: "End turn: Give friends with no held Food (+2/+2)",
        },
        levelthree : {
            attack: 9,
            health: 8,
            effect: "End turn: Give friends with no held Food (+3/+3)",
        }
    },
    Sword_Fish: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 5,
        levelone : {
            attack: 5,
            health: 5,
            effect: "Start of battle: Deal 100% attack damage to a most healthy enemy and itself",
        },
        leveltwo : {
            attack: 7,
            health: 7,
            effect: "Start of battle: Deal 200% attack damage to a most healthy enemy and itself",
        },
        levelthree : {
            attack: 10,
            health: 10,
            effect: "Start of battle: Deal 300% attack damage to a most healthy enemy and itself",
        }
    },
    Triceratops: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 5,
        levelone : {
            attack: 5,
            health: 6,
            effect: "Hurt: Give a random friend (+3/+3)",
        },
        leveltwo : {
            attack: 7,
            health: 8,
            effect: "Hurt: Give a random friend (+6/+6)",
        },
        levelthree : {
            attack: 10,
            health: 11,
            effect: "Hurt: Give a random friend (+9/+9)",
        }
    },
    Vulture: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 5,
        levelone : {
            attack: 4,
            health: 3,
            effect: "Friend faints: Deal 2 damage to a random enemy",
        },
        leveltwo : {
            attack: 6,
            health: 5,
            effect: "Friend faints: Deal 4 damage to a random enemy",
        },
        levelthree : {
            attack: 9,
            health: 8,
            effect: "Friend faints: Deal 6 damage to a random enemy",
        }
    },
    Zebra: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 5,
        levelone : {
            attack: 3,
            health: 5,
            effect: "Buy & Sell: Give a random friend (+2/+2)",
        },
        leveltwo : {
            attack: 5,
            health: 7,
            effect: "Buy & Sell: Give a random friend (+4/+4)",
        },
        levelthree : {
            attack: 8,
            health: 10,
            effect: "Buy & Sell: Give a random friend (+6/+6)",
        }
    },
    Hyena: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 5,
        levelone : {
            attack: 5,
            health: 5,
            effect: "Start of battle: Swap attack and health of all pets",
        },
        leveltwo : {
            attack: 7,
            health: 7,
            effect: "Start of battle: Shuffle positions of all pets",
        },
        levelthree : {
            attack: 10,
            health: 10,
            effect: "Start of battle: Swap attack and health and shuffle positions of all pets",
        }
    },
    Lionfish: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 5,
        levelone : {
            attack: 4,
            health: 6,
            effect: "Before friend attack: Make the enemy target Weak. Works 1 time per turn",
        },
        leveltwo : {
            attack: 6,
            health: 8,
            effect: "Before friend attack: Make the enemy target Weak. Works 2 times per turn",
        },
        levelthree : {
            attack: 9,
            health: 11,
            effect: "Before friend attack: Make the enemy target Weak. Works 3 times per turn",
        }
    },
    Moose: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 5,
        levelone : {
            attack: 5,
            health: 6,
            effect: "End turn: Give (+1/+1) to 1 pet behind. Multiply buff with the lowest pet tier in the shop",
        },
        leveltwo : {
            attack: 7,
            health: 8,
            effect: "End turn: Give (+1/+1) to 2 pets behind. Multiply buff with the lowest pet tier in the shop",
        },
        levelthree : {
            attack: 10,
            health: 11,
            effect: "End turn: Give (+1/+1) to 3 pets behind. Multiply buff with the lowest pet tier in the shop",
        }
    },
    Boar: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "5th May 2022",
            note: "Stats changed from 8/6 to 10/6; Level 1 ability changed from [Before attack: Gain (+2/+2)] to [Before attack: Gain (+4/+2)]"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Pet is introduced to the game in Standard Pack and Expansion Pack #1"
        },
        ],
        pack: 0,
        tier: 6,
        levelone : {
            attack: 10,
            health: 6,
            effect: "Before attack: Gain (+4/+2)",
        },
        leveltwo : {
            attack: 12,
            health: 8,
            effect: "Before attack: Gain (+8/+4)",
        },
        levelthree : {
            attack: 15,
            health: 11,
            effect: "Before attack: Gain (+12/+6)",
        }
    },
    Cat: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 0,
        tier: 6,
        levelone : {
            attack: 4,
            health: 5,
            effect: "Food with health and attack effects are doubled",
        },
        leveltwo : {
            attack: 6,
            health: 7,
            effect: "Food with health and attack effects are tripled",
        },
        levelthree : {
            attack: 9,
            health: 10,
            effect: "Food with health and attack effects are quadrupled",
        }
    },
    Dragon: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th February 2022",
            note: "Dragon no longer buffs itself"
        },
        ],
        pack: 0,
        tier: 6,
        levelone : {
            attack: 6,
            health: 8,
            effect: "Buy tier 1 pet: Give other pets (+1/+1)",
        },
        leveltwo : {
            attack: 8,
            health: 10,
            effect: "Buy tier 1 pet: Give other pets (+2/+2)",
        },
        levelthree : {
            attack: 11,
            health: 13,
            effect: "Buy tier 1 pet: Give other pets (+3/+3)",
        }
    },
    Fly: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Zombie Fly nerfed to 4/4(was 5/5)"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Buffed to 5/5; Zombie Fly changed from 2/2 to 5/5; Ability now only trigger 3 timers per battle, rather than any number of times"
        },
        {
            changeNum: 3,
            patchNum: "5th May 2021",
            note: "Level 2 and 3 Fly now summons 4/4 and 6/6"
        },
        ],
        pack: 0,
        tier: 6,
        levelone : {
            attack: 5,
            health: 5,
            effect: "Friend faints: Summon a 4/4 fly in its place. Works 3 time(s) per turn",
        },
        leveltwo : {
            attack: 7,
            health: 7,
            effect: "Friend faints: Summon a 8/8 fly in its place. Works 3 time(s) per turn",
        },
        levelthree : {
            attack: 10,
            health: 10,
            effect: "Friend faints: Summon a 12/12 fly in its place. Works 3 time(s) per turn",
        }
    },
    Gorilla: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed to 6/9"
        },
        ],
        pack: 0,
        tier: 6,
        levelone : {
            attack: 6,
            health: 9,
            effect: "Hurt: Gain Coconut. Works 1 time per turn",
        },
        leveltwo : {
            attack: 8,
            health: 11,
            effect: "Hurt: Gain Coconut. Works 2 times per turn",
        },
        levelthree : {
            attack: 11,
            health: 14,
            effect: "Hurt: Gain Coconut. Works 3 times per turn",
        }
    },
    Leopard: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed to 10/4"
        },
        ],
        pack: 0,
        tier: 6,
        levelone : {
            attack: 10,
            health: 4,
            effect: "Start of battle: Deal 50% attack damage to a random enemy",
        },
        leveltwo : {
            attack: 12,
            health: 6,
            effect: "Start of battle: Deal 50% attack damage to 2 random enemies",
        },
        levelthree : {
            attack: 15,
            health: 9,
            effect: "Start of battle: Deal 50% attack damage to 3 random enemies",
        }
    },
    Mammoth: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "8th December 2021",
            note: "Attack and Health were changed to 3/10"
        },
        ],
        pack: 0,
        tier: 6,
        levelone : {
            attack: 3,
            health: 10,
            effect: "Faint: Give all friends (+2/+2)",
        },
        leveltwo : {
            attack: 5,
            health: 12,
            effect: "Faint: Give all friends (+4/+4)",
        },
        levelthree : {
            attack: 8,
            health: 15,
            effect: "Faint: Give all friends (+6/+6)",
        }
    },
    Snake: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 0,
        tier: 6,
        levelone : {
            attack: 6,
            health: 6,
            effect: "Friend ahead attacks: Deal 5 damage to a random enemy",
        },
        leveltwo : {
            attack: 8,
            health: 8,
            effect: "Friend ahead attacks: Deal 10 damage to a random enemy",
        },
        levelthree : {
            attack: 11,
            health: 11,
            effect: "Friend ahead attacks: Deal 15 damage to a random enemy",
        }
    },
    Tiger: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "11th August 2022",
            note: "Tiger no longer doubles held food abilities"
        },
        {
            changeNum: 2,
            patchNum: "10th May 2022",
            note: "Errata'd **Tiger Cub** to simply Tiger with new artwork"
        },
        {
            changeNum: 3,
            patchNum: "8th Decemeber 2021",
            note: "Now available in Expansion Pack 1; Ability repeated is based on the Tiger's level, not its friend's"
        },
        {
            changeNum: 4,
            patchNum: "28th August 2021",
            note: "Fixed Tiger also working End of Turn and Start of Turn effects"
        },
        ],
        pack: 0,
        tier: 6,
        levelone : {
            attack: 4,
            health: 3,
            effect: "The friend ahead repeats their ability in battle as if they were level 1",
        },
        leveltwo : {
            attack: 6,
            health: 5,
            effect: "The friend ahead repeats their ability in battle as if they were level 2",
        },
        levelthree : {
            attack: 9,
            health: 8,
            effect: "The friend ahead repeats their ability in battle as if they were level 3",
        }
    },
    Octopus: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "5th May 2022",
            note: "Changed effect to [Before Attack: Deal 3/6/9 damage to two random enemies]"
        },
        {
            changeNum: 2,
            patchNum: "3rd August 2021",
            note: "Changed level 3 effect to [Before attack: Deal 5 damage to all enemies]"
        },
        ],
        pack: 1,
        tier: 6,
        levelone : {
            attack: 8,
            health: 8,
            effect: "Before attack: Deal 3 damage to 2 random enemies",
        },
        leveltwo : {
            attack: 10,
            health: 10,
            effect: "Before attack: Deal 6 damage to 2 random enemies",
        },
        levelthree : {
            attack: 13,
            health: 13,
            effect: "Before attack: Deal 9 damage to 2 random enemies",
        }
    },
    Sauropod: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 1,
        tier: 6,
        levelone : {
            attack: 4,
            health: 12,
            effect: "Buy food: Gain 1 gold. Works 3 time(s) per turn",
        },
        leveltwo : {
            attack: 6,
            health: 14,
            effect: "Buy food: Gain 2 gold. Works 3 time(s) per turn",
        },
        levelthree : {
            attack: 9,
            health: 17,
            effect: "Buy food: Gain 3 gold. Works 3 time(s) per turn",
        }
    },
    Tyrannosaurus: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th February 2022",
            note: "Tyrannosaurus no longer buffs itself"
        },
        {
            changeNum: 2,
            patchNum: "8th December 2021",
            note: "Tyrannosaurus' ability can now target itself; The Attack and Health give when the ability is activated was changed to +2/+1 and scales accordingly"
        },
        ],
        pack: 1,
        tier: 6,
        levelone : {
            attack: 9,
            health: 4,
            effect: "End turn: If you have 3 or more gold, give other pets (+2/+1)",
        },
        leveltwo : {
            attack: 11,
            health: 6,
            effect: "End turn: If you have 3 or more gold, give other pets (+4/+2)",
        },
        levelthree : {
            attack: 14,
            health: 9,
            effect: "End turn: If you have 3 or more gold, give other pets (+6/+3)",
        }
    },
    Hammershark: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "10th May 2022",
            note: "Changed ability to [Start of turn: Gain 3 gold if there is at least one level 3 friendly pet] from [Start of turn: Gain 2 gold per level 3 pet]"
        },
        ],
        pack: 2,
        tier: 6,
        levelone : {
            attack: 5,
            health: 5,
            effect: "Start of turn: Gain 3 gold if there is at least one level 3 friendly pet",
        },
        leveltwo : {
            attack: 7,
            health: 7,
            effect: "Start of turn: Gain 6 gold if there is at least one level 3 friendly pet",
        },
        levelthree : {
            attack: 10,
            health: 10,
            effect: "Start of turn: Gain 9 gold if there is at least one level 3 friendly pet",
        }
    },
    Komodo: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 6,
        levelone : {
            attack: 6,
            health: 6,
            effect: "End turn: Give friends ahead (+1/+1) and then shuffle their positions",
        },
        leveltwo : {
            attack: 8,
            health: 8,
            effect: "End turn: Give friends ahead (+2/+2) and then shuffle their positions",
        },
        levelthree : {
            attack: 11,
            health: 11,
            effect: "End turn: Give friends ahead (+3/+3) and then shuffle their positions",
        }
    },
    Orca: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 6,
        levelone : {
            attack: 4,
            health: 8,
            effect: "Faint: Summon 1 random pet with a Faint ability from any pack",
        },
        leveltwo : {
            attack: 6,
            health: 10,
            effect: "Faint: Summon 2 random pets with a Faint ability from any pack",
        },
        levelthree : {
            attack: 9,
            health: 13,
            effect: "Faint: Summon 3 random pets with a Faint ability from any pack",
        }
    },
    Ostrich: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 6,
        levelone : {
            attack: 2,
            health: 8,
            effect: "End turn: Gain (+1/+1) for each tier 5 pet or higher in the shop",
        },
        leveltwo : {
            attack: 4,
            health: 10,
            effect: "End turn: Gain (+2/+2) for each tier 5 pet or higher in the shop",
        },
        levelthree : {
            attack: 7,
            health: 13,
            effect: "End turn: Gain (+3/+3) for each tier 5 pet or higher in the shop",
        }
    },
    Piranha: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 6,
        levelone : {
            attack: 10,
            health: 2,
            effect: "Hurt & Faint: Give friends +2 attack",
        },
        leveltwo : {
            attack: 12,
            health: 4,
            effect: "Hurt & Faint: Give friends +4 attack",
        },
        levelthree : {
            attack: 15,
            health: 7,
            effect: "Hurt & Faint: Give friends +6 attack",
        }
    },
    Reindeer: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 6,
        levelone : {
            attack: 6,
            health: 4,
            effect: "Before attack: Gain Melon. Works 1 time per turn",
        },
        leveltwo : {
            attack: 8,
            health: 6,
            effect: "Before attack: Gain Melon. Works 2 times per turn",
        },
        levelthree : {
            attack: 11,
            health: 9,
            effect: "Before attack: Gain Melon. Works 3 times per turn",
        }
    },
    Sabertooth_Tiger: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 6,
        levelone : {
            attack: 8,
            health: 6,
            effect: "Hurt: Summon a random tier 1 pet as (8/8)",
        },
        leveltwo : {
            attack: 10,
            health: 8,
            effect: "Hurt: Summon a random tier 1 pet as (16/16)",
        },
        levelthree : {
            attack: 13,
            health: 11,
            effect: "Hurt: Summon a random tier 1 pet as (24/24)",
        }
    },
    Spinosaurus: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 6,
        levelone : {
            attack: 4,
            health: 8,
            effect: "Friend faints: Give a random friend (+3/+2)",
        },
        leveltwo : {
            attack: 6,
            health: 10,
            effect: "Friend faints: Give a random friend (+6/+4)",
        },
        levelthree : {
            attack: 9,
            health: 13,
            effect: "Friend faints: Give a random friend (+9/+6)",
        }
    },
    Stegosaurus: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 6,
        levelone : {
            attack: 3,
            health: 8,
            effect: "End turn: Give friend ahead (+1/+1) until end of battle. Multiply buff with turn number",
        },
        leveltwo : {
            attack: 5,
            health: 10,
            effect: "End turn: Give friend ahead (+2/+2) until end of battle. Multiply buff with turn number",
        },
        levelthree : {
            attack: 8,
            health: 13,
            effect: "End turn: Give friend ahead (+3/+3) until end of battle. Multiply buff with turn number",
        }
    },
    Velociraptor: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: 2,
        tier: 6,
        levelone : {
            attack: 3,
            health: 2,
            effect: "Start of battle: Give Coconut to 1 random Strawberry friend",
        },
        leveltwo : {
            attack: 5,
            health: 4,
            effect: "Start of battle: Give Coconut to 2 random Strawberry friends",
        },
        levelthree : {
            attack: 8,
            health: 7,
            effect: "Start of battle: Give Coconut to 3 random Strawberry friends",
        }
    },
    Alpaca: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 6,
        levelone : {
            attack: 4,
            health: 9,
            effect: "Friend summoned: Give it +1 Experience. Except other Alpacas. Works 2 time(s) per turn",
        },
        leveltwo : {
            attack: 6,
            health: 11,
            effect: "Friend summoned: Give it +2 Experience. Except other Alpacas. Works 2 time(s) per turn",
        },
        levelthree : {
            attack: 9,
            health: 14,
            effect: "Friend summoned: Give it +3 Experience. Except other Alpacas. Works 2 time(s) per turn",
        }
    },
    Lioness: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 6,
        levelone : {
            attack: 4,
            health: 5,
            effect: "End turn: Give current and future shop pets (+2/+2)",
        },
        leveltwo : {
            attack: 6,
            health: 7,
            effect: "End turn: Give current and future shop pets (+4/+4)",
        },
        levelthree : {
            attack: 9,
            health: 10,
            effect: "End turn: Give current and future shop pets (+6/+6)",
        }
    },
    Tapir: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 6,
        levelone : {
            attack: 4,
            health: 3,
            effect: "Faint: Summon a level 1 copy of a random friendly pet. Except other Tapirs",
        },
        leveltwo : {
            attack: 6,
            health: 5,
            effect: "Faint: Summon a level 2 copy of a random friendly pet. Except other Tapirs",
        },
        levelthree : {
            attack: 9,
            health: 8,
            effect: "Faint: Summon a level 3 copy of a random friendly pet. Except other Tapirs",
        }
    },
    Walrus: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 6,
        levelone : {
            attack: 7,
            health: 5,
            effect: "Faint: Give 1 random friend Peanuts",
        },
        leveltwo : {
            attack: 9,
            health: 7,
            effect: "Faint: Give 2 random friends Peanuts",
        },
        levelthree : {
            attack: 12,
            health: 10,
            effect: "Faint: Give 3 random friends Peanuts",
        }
    },
    White_Tiger: {
        changes: 
        [{
            changeNum: 1,
            patchNum: "N/A",
            note: "N/A"
        },
        ],
        pack: "Weekly",
        tier: 6,
        levelone : {
            attack: 4,
            health: 3,
            effect: "Start of battle: Make 1 friend behind level 3. Except other White Tigers",
        },
        leveltwo : {
            attack: 6,
            health: 5,
            effect: "Start of battle: Make 2 friends behind level 3. Except other White Tigers",
        },
        levelthree : {
            attack: 9,
            health: 8,
            effect: "Start of battle: Make 3 friends behind level 3. Except other White Tigers",
        }
    },
    
}