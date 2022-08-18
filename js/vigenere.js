//CSS - changed textarea width to width of button
 ['keyThing', 'messageThing'].map(v => {
	document.getElementById(v).style.width = document.getElementById('initiateCipher').clientWidth + 'px';
}) 


var upperCaseArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789`~!@#$%^&*()-=_+[]\{}|;':,./<>?", "ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789!;':,.?", "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"];
var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXY';

var upperCase,
	 inputSet;

function cipher(keyText, messageText, characterSet){
	console.clear();
	
	characterSet ? upperCase = upperCaseArray[characterSet] :
		upperCase = upperCaseArray[0];
	
	//replace HTML space character with standard character
	//convert to upper case
	keyText = keyText.toUpperCase();
	messageText = messageText.toUpperCase();
	
	//initializing variables
	var crypticMessage,//product of encrypting
		 keyArray,		//array from key string entered
		 messageArray,	//array from message string entered
		 noInvalid,		//false if special characters are entered
		 start,			//used in printing invalid characters
		 j,				//incremented in loop
		 outMessage,	//prodtuct made HTML-friendly
		
	//change to array
	keyArray = keyText.split('');
	messageArray = messageText.split('');
	
	//check for invalid characters
	noInvalid = true;
	crypticMessage = 'Invalid character(s): '
	start = '';
	
	[keyArray, messageArray].map((set) => set.map((character) => {
			if(!upperCase.includes(character)) {
				noInvalid = false;
				crypticMessage += start + character;
				start = ', ';
			}
	}))
	
	//Cipher
	upperCase += upperCase; //needed for process below
	if (noInvalid){
		crypticMessage = "";
		j = 0;
		messageArray.map((v) => {
			messageToKey = upperCase.substr(upperCase.substr(upperCase.indexOf(v)).indexOf(keyArray[j]), 1);
			crypticMessage += messageToKey;
			j++;
			if (j === keyArray.length){ j = 0; }
		})
	}
	
	//prepare rendered message
	outMessage = crypticMessage.replace(/</gi, '&lt;').replace(/>/gi, '&gt;').replace(/0/gi, '<u>0</u>');
	
	
	//output
	console.log(crypticMessage);
	return outMessage;
}

outString = "";
var inputSet = 0;
function changeSet(set){
	inputSet = set;
}
document.getElementById("initiateCipher").onclick = function(){
	outString = cipher(document.getElementById("keyThing").value, document.getElementById("messageThing").value, inputSet);
	document.getElementById("theOut").innerHTML = outString;
}
