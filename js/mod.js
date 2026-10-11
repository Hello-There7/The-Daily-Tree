let modInfo = {
	name: "The Miscelanious Tree",
	author: "Hello-There-7",
	pointsName: "Points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.0",
	name: "Numbers Pt. I",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v1.0</h3><br>
		- Added Numbers 1-19
`
let winText = `Good job!`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('N', 12)) gain = gain.times(2)
	if (hasUpgrade('N', 13)) gain = gain.times(3)
	if (hasUpgrade('N', 15)) gain = gain.times(5)
	if (hasUpgrade('N', 17)) gain = gain.times(7)
	if (hasUpgrade('N', 21)) gain = gain.times(1.5)
	if (hasUpgrade('N', 22)) gain = gain.times(11)
	if (hasUpgrade('N', 23)) gain = gain.times(1.5)
	if (hasUpgrade('N', 24)) gain = gain.times(13)
	if (hasUpgrade('N', 25)) gain = gain.times(1.5)
	if (hasUpgrade('N', 26)) gain = gain.times(1.5)
	if (hasUpgrade('N', 27)) gain = gain.times(1.5)
	if (hasUpgrade('N', 28)) gain = gain.times(17)
	if (hasUpgrade('N', 29)) gain = gain.times(1.5)
	if (hasUpgrade('N', 31)) gain = gain.times(19)
	if (hasUpgrade('N', 33)) gain = gain.times(1.5)
	if (hasUpgrade('N', 34)) gain = gain.times(1.5)
	if (hasUpgrade('N', 35)) gain = gain.times(23)
	if (hasUpgrade('N', 36)) gain = gain.times(1.5)
	if (hasUpgrade('N', 37)) gain = gain.times(1.5)
	if (hasUpgrade('N', 38)) gain = gain.times(1.5)
	if (hasUpgrade('N', 39)) gain = gain.times(1.5)
	if (hasUpgrade('N', 41)) gain = gain.times(1.5)
	if (hasUpgrade('N', 42)) gain = gain.times(29)
	if (hasUpgrade('N', 43)) gain = gain.times(1.3)
	if (hasUpgrade('N', 44)) gain = gain.times(31)
	if (hasUpgrade('N', 45)) gain = gain.times(1.5)
	if (hasUpgrade('N', 46)) gain = gain.times(1.5)
	if (hasUpgrade('N', 47)) gain = gain.times(1.5)
	if (hasUpgrade('N', 48)) gain = gain.times(1.5)
	if (hasUpgrade('N', 49)) gain = gain.times(1.5)
	if (hasUpgrade('N', 51)) gain = gain.times(37)
	if (hasUpgrade('N', 52)) gain = gain.times(1.5)
	if (hasUpgrade('N', 53)) gain = gain.times(1.5)
	if (hasUpgrade('N', 54)) gain = gain.times(1.5)
	if (hasUpgrade('N', 55)) gain = gain.times(41)
	if (hasUpgrade('N', 56)) gain = gain.times(1.5)
	if (hasUpgrade('N', 57)) gain = gain.times(43)
	if (hasUpgrade('N', 58)) gain = gain.times(1.5)
	if (hasUpgrade('N', 59)) gain = gain.times(1.5)
	if (hasUpgrade('N', 61)) gain = gain.times(1.5)
	if (hasUpgrade('N', 62)) gain = gain.times(47)
	if (hasUpgrade('N', 63)) gain = gain.times(1.5)
	if (hasUpgrade('N', 64)) gain = gain.times(1.5)
	if (hasUpgrade('N', 65)) gain = gain.times(1.5)
	if (hasUpgrade('N', 66)) gain = gain.times(1.5)
	if (hasUpgrade('N', 67)) gain = gain.times(1.5)
	if (hasUpgrade('N', 68)) gain = gain.times(53)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return hasUpgrade('N', 31)
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}