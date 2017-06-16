//Background Audio Function
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("opening").play();
});

function gameover (){
	document.getElementById("gameover").play();
}
//Words for the game
var wordBank = ["javascript", "python", "ruby", 
				"coffeescript", "java", "c++", "c#", 
				"objective-c", "html", "css", "php",
				"perl", "pascal"];

//Stores the word chosen
var word = "";

//Stores the answer board
var guessArr = [];
var wins = 0;
var losses = 0;
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
	
	if (!guessArr.includes(userGuess)) {
		
		guessArr.push(userGuess);

		for (var j=0; j<word.length; j++) {
			if (word[j] === userGuess) {
				answerArr[j] = userGuess;
			}
		}

		if (word.indexOf(userGuess) === -1) {
			chances-=1;
			function lossSound() {
				document.getElementById('lossSound').play();
			}
			lossSound();
		} else {
			function winSound() {
				document.getElementById('winSound').play();
			}
			winSound();
		}
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

   	//Calls reset when no letters remain and updates wins counter
   	if (remainingLetters <= 0) {
   		wins+=1;
   		reset();
   	}

   	//Calls reset
   	if(chances <= 0) {
   		losses+=1;
   		reset();
   	}

   	if (wins === 5) {
   		var winner = "<h1 class='winner'>Nice! You really know your coding languages!</h1>";
   		document.querySelector("#main-game").innerHTML = winner;
   		document.querySelector("#game-image").src="winner.png";
   		gameover();
   	}

   	if (losses === 3) {
   		var loser = "<h1 class='loser'>Come on, man! You suck!</h1>";
   		document.querySelector("#main-game").innerHTML = loser;
   		document.querySelector("#game-image").src="loser.jpg";
   		gameover();
   	}
}

//Reset variables and obtain a new word by recalling the randomWord function
function reset () {
	chances=6;
	guessArr=[];
	answerArr=[];
	remainingLetters = 0;
	document.querySelector("#numChances").innerHTML = chances;
	document.querySelector("#numWin").innerHTML = wins;
	document.querySelector("#alreadyGuessed").innerHTML = "";
	randomWord();
}

document.getElementById("reset-btn").addEventListener("click", function(){
    reset();
});

document.getElementById("restart-btn").addEventListener("click", function(){
	document.location.reload();
});


