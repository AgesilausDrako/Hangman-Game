//Words for the game
var wordBank = ["javascript", "python", "ruby", 
				"coffeescript"];
//Stores the word chosen
var word = "";
//Stores the answer board
var answerArray = [];

document.onkeyup = function() {
	//Computer's random guess
	word = wordBank[Math.floor(Math.random() * wordBank.length)];
	//Array for guess storage 
	answerArray = [];
	for (var i=0; i < word.length; i++) {
		answerArray[i] = "_";
	}
	document.querySelector().innerHTML= answerArray.join();
}

