addLayer("J", {
    name: "January", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Jn", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#a8d3e4ff",
    requires: new Decimal(4), // Can be a function that takes requirement increases into account
    resource: "Ice Crystals", // Name of prestige currency
    baseResource: "Time", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.75, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('J', 11)) mult = mult.times(2)
        if (hasUpgrade('J', 17)) mult = mult.times(0.33333333333333333333333333333333333333333333333333333333333333)
        if (hasUpgrade('J', 21)) mult = mult.times(3)
        if (hasUpgrade('J', 22)) mult = mult.times(2)
        if (hasUpgrade('J', 23)) mult = mult.times(2)
        if (hasUpgrade('J', 24)) mult = mult.times(2)
        if (hasUpgrade('J', 25)) mult = mult.times(2)
        if (hasUpgrade('J', 31)) mult = mult.times(0.01)
        if (hasUpgrade('SY', 21)) mult = mult.times(upgradeEffect('SY', 21))
        if (hasUpgrade('SY', 22)) mult = mult.times(upgradeEffect('SY', 22))
        if (hasUpgrade('J', 15)) mult = mult.pow(1.05)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "j", description: "J: Reset for Ice Crystals", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Happy New Year!",
            description: "Double Ice Crystal gain.",
            cost: new Decimal(2),
        },
        12: {
            title: "Clockwork I",
            description: "Boost time speed.",
            cost: new Decimal(10),
            effect() {
                return player.J.points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "New feature already?",
            description: "Unlock Synergies.",
            cost: new Decimal(25),
        },
        14: {
            title: "Clockwork II",
            description: "Boost time speed",
            cost: new Decimal(625),
            effect() {
                return player.J.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        15: {
            title: "SNOW!!!",
            description: "^1.05 Ice Crystal gain",
            cost: new Decimal(2026),
        },
        16: {
            title: "Clockwork III",
            description: "Boost time speed",
            cost: new Decimal(10000),
            effect() {
                return player.J.points.add(1).pow(0.75)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        17: {
            title: "Sacrifice",
            description: "X5 Time Speed, but /3 Ice Crystal Gain",
            cost: new Decimal(0),
        },
        21: {
            title: "Sacrifice Nuller",
            description: "X3 Ice Crystal Gain",
            cost: new Decimal(12345),
        },
        22: {
            title: "2",
            description: "X2 Ice Crystal Gain",
            cost: new Decimal(22222),
        },
        23: {
            title: "4",
            description: "X2 Ice Crystal Gain",
            cost: new Decimal(66666),
        },
        24: {
            title: "8",
            description: "X2 Ice Crystal Gain",
            cost: new Decimal(199998),
        },
        25: {
            title: "16",
            description: "X2 Ice Crystal Gain",
            cost: new Decimal(555554),
        },
        26: {
            title: "1 MILLION??",
            description: "X10 Time Speed",
            cost: new Decimal(555554),
        },
        27: {
            title: "It's Nerf or nothing.",
            description: "/10,000 Time Speed",
            cost: new Decimal(0),
        },
        31: {
            title: "It's Nerf or nothing. (Pt. 2)",
            description: "/100 Ice Crystal Gain",
            cost: new Decimal(0),
        },
        32: {
            title: "170",
            description: "+170 Ice Crystals",
            cost: new Decimal(-170),
        },
    },
})
addLayer("SY", {
    name: "Synergies", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Sy", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#165770ff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Gears", // Name of prestige currency
    baseResource: "Time", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "G: Reset for Gears", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade('J', 13)},
    upgrades: {
        11: {
            title: "Time to Time",
            description: "Acceleration",
            cost: new Decimal(1),
            effect() {
                return player.points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "Ice to Time",
            description: "Refraction",
            cost: new Decimal(3),
            effect() {
                return player.J.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21: {
            title: "Time to Ice",
            description: "Growth",
            cost: new Decimal(3),
            effect() {
                return player.points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "Ice to Ice",
            description: "Dispersion",
            cost: new Decimal(9),
            effect() {
                return player.J.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
    },
})