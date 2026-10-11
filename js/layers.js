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
            description: "The first Number. Unlock Numbers 2-9!",
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
            description: "2 x 5. Unlock Fourteen! From now on, composite numbers give a x1.5 multiplier to Points",
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
            description: "2 x 2 x 3. Unlock Fifteen!",
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
            description: "2 x 7. Unlock Sixteen!",
            cost: new Decimal(377),
            unlocked(){return hasUpgrade('N', 21)},
        },
        26: {
            title: "Fifteen",
            description: "3 x 5. Unlock Seventeen!",
            cost: new Decimal(610),
            unlocked(){return hasUpgrade('N', 23)},
        },
        27: {
            title: "Sixteen",
            description: "2 x 2 x 2 x 2. Unlock Eighteen!",
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
            description: "2 x 3 x 3. Unlock Nineteen!",
            cost: new Decimal(2584),
            unlocked(){return hasUpgrade('N', 27)},
        },
        31: {
            title: "Nineteen",
            description: "Prime! x19 Points",
            cost: new Decimal(4181),
            unlocked(){return hasUpgrade('N', 29)},
        },
        32: {
            title: "Twenty",
            description: "The start of automized names. Unlock numbers 21-28!",
            cost: new Decimal(10000),
            unlocked(){return hasUpgrade('N', 12) && hasUpgrade('N', 13) && hasUpgrade('N', 15) && hasUpgrade('N', 17) && hasUpgrade('N', 22) && hasUpgrade('N', 24) && hasUpgrade('N', 28) && hasUpgrade('N', 31)},
        },
        33: {
            title: "Twenty-one",
            description: "3 x 7. Unlock Twenty-nine!",
            cost: new Decimal(10000),
            unlocked(){return hasUpgrade('N', 32)},
        },
        34: {
            title: "Twenty-two",
            description: "2 x 11. Unlock Thirty!",
            cost: new Decimal(20000),
            unlocked(){return hasUpgrade('N', 32)},
        },
        35: {
            title: "Twenty-three",
            description: "Prime! x23 Points",
            cost: new Decimal(30000),
            unlocked(){return hasUpgrade('N', 32)},
        },
        36: {
            title: "Twenty-four",
            description: "2 x 2 x 2 x 3. Unlock Thirty-one!",
            cost: new Decimal(50000),
            unlocked(){return hasUpgrade('N', 32)},
        },
        37: {
            title: "Twenty-five",
            description: "5 x 5. Unlock Thirty-two!",
            cost: new Decimal(80000),
            unlocked(){return hasUpgrade('N', 32)},
        },
        38: {
            title: "Twenty-six",
            description: "2 x 13. Unlock Thirty-three!",
            cost: new Decimal(130000),
            unlocked(){return hasUpgrade('N', 32)},
        },
        39: {
            title: "Twenty-seven",
            description: "3 x 3 x 3. Unlock Thirty-four!",
            cost: new Decimal(210000),
            unlocked(){return hasUpgrade('N', 32)},
        },
        41: {
            title: "Twenty-eight",
            description: "2 x 2 x 7. Unlock Thirty-five!",
            cost: new Decimal(340000),
            unlocked(){return hasUpgrade('N', 32)},
        },
        42: {
            title: "Twenty-nine",
            description: "Prime! x29 Points",
            cost: new Decimal(550000),
            unlocked(){return hasUpgrade('N', 33)},
        },
        43: {
            title: "Thirty",
            description: "2 x 3 x 5. Unlock Thirty-six!",
            cost: new Decimal(890000),
            unlocked(){return hasUpgrade('N', 34)},
        },
        44: {
            title: "Thirty-one",
            description: "Prime! x31 Points",
            cost: new Decimal(1440000),
            unlocked(){return hasUpgrade('N', 36)},
        },
        45: {
            title: "Thirty-two",
            description: "2 x 2 x 2 x 2 x 2. Unlock Thirty-seven!",
            cost: new Decimal(2330000),
            unlocked(){return hasUpgrade('N', 37)},
        },
        46: {
            title: "Thirty-three",
            description: "3 x 11. Unlock Thirty-eight!",
            cost: new Decimal(3770000),
            unlocked(){return hasUpgrade('N', 38)},
        },
        47: {
            title: "Thirty-four",
            description: "2 x 17. Unlock Thirty-nine!",
            cost: new Decimal(6100000),
            unlocked(){return hasUpgrade('N', 39)},
        },
        48: {
            title: "Thirty-five",
            description: "5 x 7. Unlock Forty!",
            cost: new Decimal(9870000),
            unlocked(){return hasUpgrade('N', 41)},
        },
        49: {
            title: "Thirty-six",
            description: "2 x 2 x 3 x 3. Unlock Forty-one!",
            cost: new Decimal(15970000),
            unlocked(){return hasUpgrade('N', 43)},
        },
        51: {
            title: "Thirty-seven",
            description: "Prime! x37 Points",
            cost: new Decimal(25840000),
            unlocked(){return hasUpgrade('N', 45)},
        },
        52: {
            title: "Thirty-eight",
            description: "2 x 19. Unlock Forty-two!",
            cost: new Decimal(45810000),
            unlocked(){return hasUpgrade('N', 46)},
        },
        53: {
            title: "Thirty-nine",
            description: "3 x 13. Unlock Forty-three!",
            cost: new Decimal(71650000),
            unlocked(){return hasUpgrade('N', 47)},
        },
        54: {
            title: "Forty",
            description: "2 x 2 x 2 x 5. Unlock Forty-four!",
            cost: new Decimal(117460000),
            unlocked(){return hasUpgrade('N', 48)},
        },
        55: {
            title: "Forty-one",
            description: "Prime! x41 Points",
            cost: new Decimal(189110000),
            unlocked(){return hasUpgrade('N', 49)},
        },
        56: {
            title: "Forty-two",
            description: "2 x 3 x 7. Unlock Fortify- I mean Forty-five!",
            cost: new Decimal(306570000),
            unlocked(){return hasUpgrade('N', 52)},
        },
        57: {
            title: "Forty-three",
            description: "Prime! x43 Points",
            cost: new Decimal(495680000),
            unlocked(){return hasUpgrade('N', 53)},
        },
        58: {
            title: "Forty-four",
            description: "2 x 2 x 11. Unlock Forty-six!",
            cost: new Decimal(802250000),
            unlocked(){return hasUpgrade('N', 54)},
        },
        59: {
            title: "Forty-five",
            description: "3 x 3 x 5. Unlock Forty-seven!",
            cost: new Decimal(1297930000),
            unlocked(){return hasUpgrade('N', 56)},
        },
        61: {
            title: "Forty-six",
            description: "2 x 23. Unlock Forty-eight!",
            cost: new Decimal(2100180000),
            unlocked(){return hasUpgrade('N', 58)},
        },
        62: {
            title: "Forty-seven",
            description: "Prime! x47 Points",
            cost: new Decimal(3398110000),
            unlocked(){return hasUpgrade('N', 59)},
        },
        63: {
            title: "Forty-eight",
            description: "2 x 2 x 2 x 2 x 3. Unlock Forty-Nine!",
            cost: new Decimal(5498290000),
            unlocked(){return hasUpgrade('N', 61)},
        },
        64: {
            title: "Forty-nine",
            description: "7 x 7. Unlock Fifty!",
            cost: new Decimal(8896400000),
            unlocked(){return hasUpgrade('N', 63)},
        },
        65: {
            title: "Fifty",
            description: "2 x 5 x 5. Unlock Fifty-one!",
            cost: new Decimal(14394690000),
            unlocked(){return hasUpgrade('N', 64)},
        },
        66: {
            title: "Fifty-one",
            description: "3 x 17. Unlock Fifty-two!",
            cost: new Decimal(23291090000),
            unlocked(){return hasUpgrade('N', 65)},
        },
        67: {
            title: "Fifty-two",
            description: "2 x 2 x 13. Unlock Fifty-three!",
            cost: new Decimal(37685780000),
            unlocked(){return hasUpgrade('N', 66)},
        },
        68: {
            title: "Fifty-three",
            description: "Prime! x53 Points",
            cost: new Decimal(60976870000),
            unlocked(){return hasUpgrade('N', 67)},
        },
    },
})
