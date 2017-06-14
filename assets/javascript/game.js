//Words for the game
var wordBank = ["javascript", "python", "ruby", 
				"coffeescript", "java"];

//Stores the word chosen
var word = "";

//Stores the answer board
var guessArr = [];
var wins = 0;
var chances = 6;
var answerArr = [];

//Gamestart function
function randomWord() {
	//Computer's random guess
	word = wordBank[Math.floor(Math.random() * wordBank.length)];
	//Array for guess storage 
	for (var i=0; i < word.length; i++) {
		answerArr[i] = "_";
	}
	document.querySelector("#word").innerHTML = answerArr.join(" ");
	document.querySelector("#numChances").innerHTML = chances;
}
randomWord();


//Guess function
document.onkeyup = function (event) {

	var userGuess = event.key;
	
	guessArr.push(userGuess);
	
	for (var j=0; j<word.length; j++) {
		if (word[j] === userGuess) {
			answerArr[j] = userGuess;
		}
	}

	if (word.indexOf(userGuess) ===  -1) {
		chances-=1;
	}


    document.querySelector("#numChances").innerHTML = chances;
    document.querySelector("#word").innerHTML = answerArr.join(" ");
    document.querySelector("#alreadyGuessed").innerHTML = guessArr.join();
   
   	var remainingLetters = answerArr.length;

    for (k = 0; k < answerArr.length; k++) {
        if (answerArr[k] !== '_') {
            remainingLetters -= 1;
        }
    }

    if (indexOf())

   //Reset variables and obtain a new word by recalling the randomWord function
   	if (remainingLetters === 0 || chances < 0) {
   		wins+=1;
   		chances=6;
   		guessArr=[];
   		answerArr=[];
   		remainingLetters = 0;
   		document.querySelector("#numChances").innerHTML = chances;
   		document.querySelector("#numWin").innerHTML = wins;
    	document.querySelector("#alreadyGuessed").innerHTML = "";
   		randomWord();
   	}
}




