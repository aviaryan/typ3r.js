var typ3r = require("./index.js")

function assertNotEqual(s1, s2){
	if (s1 === s2){
		console.log("FAIL: " + s1 + " == " + s2)
		process.exit(1)
	} else {
		console.log("OK")
	}
}

assertNotEqual(typ3r("one is all and"), "one is all and")
assertNotEqual(typ3r("all is one"), "all is one")

// OK
process.exit(0)
