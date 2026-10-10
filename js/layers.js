addLayer("N", {
    name: "Numbers", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "N", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "rgb(68, 127, 238)",
    requires: new Decimal(15), // Can be a function that takes requirement increases into account
    resource: "Numerals", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    infoboxes: {
        Order: {
            title: "Order of Upgrades Applied",
            body() { return "Addition and subtraction applies First. Multiplication and division apply Second. Exponents and roots apply Third. Logarithms apply Last." },
        },
    },
    upgrades: {
        11: {
            title: "One",
            description: "The first Number. Unlock Numbers 2-9",
            cost: new Decimal(1),
        },
        12: {
            title: "Two",
            description: "Prime! x2 Points",
            cost: new Decimal(1),
            unlocked(){return hasUpgrade('N', 11)},
        },
        13: {
            title: "Three",
            description: "Prime! x3 Points",
            cost: new Decimal(2),
            unlocked(){return hasUpgrade('N', 11)},
        },
        14: {
            title: "Four",
            description: "2 x 2. Unlock Ten!",
            cost: new Decimal(3),
            unlocked(){return hasUpgrade('N', 11)},
        },
        15: {
            title: "Five",
            description: "Prime! x5 Points",
            cost: new Decimal(5),
            unlocked(){return hasUpgrade('N', 11)},
        },
        16: {
            title: "Six",
            description: "2 x 3. Unlock Eleven!",
            cost: new Decimal(8),
            unlocked(){return hasUpgrade('N', 11)},
        },
        17: {
            title: "Seven",
            description: "Prime! x7 Points",
            cost: new Decimal(13),
            unlocked(){return hasUpgrade('N', 11)},
        },
        18: {
            title: "Eight",
            description: "2 x 2 x 2. Unlock Twelve!",
            cost: new Decimal(21),
            unlocked(){return hasUpgrade('N', 11)},
        },
        19: {
            title: "Nine",
            description: "3 x 3. Unlock Thirteen!",
            cost: new Decimal(34),
            unlocked(){return hasUpgrade('N', 11)},
        },
        21: {
            title: "Ten",
            description: "2 x 5. Unlock Fourteen! x1.5 Points",
            cost: new Decimal(55),
            unlocked(){return hasUpgrade('N', 14)},
        },
        22: {
            title: "Eleven",
            description: "Prime! x11 Points",
            cost: new Decimal(89),
            unlocked(){return hasUpgrade('N', 16)},
        },
        23: {
            title: "Twelve",
            description: "2 x 2 x 3. Unlock Fifteen! x1.5 Points",
            cost: new Decimal(144),
            unlocked(){return hasUpgrade('N', 18)},
        },
        24: {
            title: "Thirteen",
            description: "Prime! x13 Points",
            cost: new Decimal(233),
            unlocked(){return hasUpgrade('N', 19)},
        },
        25: {
            title: "Fourteen",
            description: "2 x 7. Unlock Sixteen! x1.5 Points",
            cost: new Decimal(377),
            unlocked(){return hasUpgrade('N', 21)},
        },
        26: {
            title: "Fifteen",
            description: "3 x 5. Unlock Seventeen! x1.5 Points",
            cost: new Decimal(610),
            unlocked(){return hasUpgrade('N', 23)},
        },
        27: {
            title: "Sixteen",
            description: "2 x 2 x 2 x 2. Unlock Eighteen! x1.5 Points",
            cost: new Decimal(987),
            unlocked(){return hasUpgrade('N', 25)},
        },
        28: {
            title: "Seventeen",
            description: "Prime! x17 Points",
            cost: new Decimal(1597),
            unlocked(){return hasUpgrade('N', 26)},
        },
        29: {
            title: "Eighteen",
            description: "2 x 3 x 3. Unlock Nineteen! x1.5 Points",
            cost: new Decimal(2584),
            unlocked(){return hasUpgrade('N', 27)},
        },
        31: {
            title: "Nineteen",
            description: "Prime! x19 Points",
            cost: new Decimal(4181),
            unlocked(){return hasUpgrade('N', 27)},
        },
    },
})
