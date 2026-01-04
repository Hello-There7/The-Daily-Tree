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
        if (hasUpgrade('SY', 21)) mult = mult.times(upgradeEffect('SY', 21))
        if (hasUpgrade('SY', 22)) mult = mult.times(upgradeEffect('SY', 22))
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
                return player.J.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "New feature already?",
            description: "Unlock Synergies.",
            cost: new Decimal(25),
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
    exponent: 0.6, // Prestige currency exponent
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
    layerShown(){return true},
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