// Expects String arguments, returns the decrypted text.
function getDecryptedText(CONSTANT, cipher, encrypted){
	if(!(typeof CONSTANT == 'string' || CONSTANT instanceof String) || !(typeof cipher == 'string' || cipher instanceof String) || CONSTANT.length != cipher.length){
	// Handles non-String inputs or different cipher/encrypted lengths by returning empty string, for example
		return "";
	}

	// Mapping of cipher letters to CONSTANT letters.
	var dict = {};
	for (var i = 0; i < cipher.length; i++) {
	  dict[cipher.charAt(i)] = CONSTANT.charAt(i);
	}

	var decrypted = "";
	for (var i = 0; i < encrypted.length; i++) {
	  decrypted += dict[encrypted.charAt(i)] || encrypted.charAt(i);
	}

	return decrypted;
}

// Tests the correctness of getDecryptedText.
function runTests(CONSTANT){
	var testCases = [];

	testCases.push({constant: CONSTANT, cipher: "zodvqukgwefbyitmrsplhacxnj", encrypted: "dzs", decrypted: "car"});
	testCases.push({constant: CONSTANT, cipher: "xipmuzfkbrlwotjancqgveshdy", encrypted: "skd qj qucbjvq?", decrypted: "why so serious?"});
	testCases.push({constant: CONSTANT, cipher: "xipmuzfkbrlwotjancqy", encrypted: "skd qj qucbjvq?", decrypted: ""});
	testCases.push({constant: CONSTANT, cipher: "xipmuzfkbrlwotjancqgveshdy", encrypted: {}, decrypted: ""});
	testCases.push({constant: undefined, cipher: null, encrypted: {}, decrypted: ""});

	// Runs each test case and make sure the output of getDecryptedText matches the expected output.
	for(var key in testCases){
		var testCase = testCases[key];
		if(getDecryptedText(testCase.constant, testCase.cipher, testCase.encrypted) == testCase.decrypted){
			console.log("passed");
		}else{
			console.log("failed");
		}
	}
}


const CONSTANT = 'abcdefghijklmnopqrstuvwxyz';
var cipher = 'oephjizkxdawubnytvfglqsrcm';
var encrypted = 'knlfgnb, sj koqj o yvnewju';

runTests(CONSTANT);

console.log(getDecryptedText(CONSTANT, cipher, encrypted)); // Original text is "houston, we have a problem"