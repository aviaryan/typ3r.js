var typ3r = require("./index.js")

let count = 0

function testNE(s1, lower=false){
	param1 = typ3r(s1)
	if (lower) param1 = param1.toLowerCase()
	assertNotEqual(param1, s1)
}

function assertNotEqual(s1, s2){
	count += 1
	if (s1 === s2){
		console.log("FAIL", count, ":", s1, "==", s2)
		process.exit(1)
	} else {
		console.log("OK |", s1)
	}
}

// tests
testNE("one is all and")
testNE("all is one")
testNE("you are")
// check if th3 or da is formed
testNE("the the the the", true)

// OK
process.exit(0)
