//Gamestart Audio Function
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("opening").play();
});

//Gameover Music Function
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
	//Prevents using the same guess
	if (!guessArr.includes(userGuess)) {
		//Adds new guess to the array
		guessArr.push(userGuess);
		//Checks for correct guess and updates the answer array
		for (var j=0; j<word.length; j++) {
			if (word[j] === userGuess) {
				answerArr[j] = userGuess;
			}
		}
		//Decrements number of chances if guess is wrong and signals wrong sound
		if (word.indexOf(userGuess) === -1) {
			chances-=1;
			function lossSound() {
				document.getElementById('lossSound').play();
			}
			lossSound();
		//Otherwise a win sound is called rewarding the player
		} else {
			function winSound() {
				document.getElementById('winSound').play();
			}
			winSound();
		}
	}
	//Updates the current word, number of chances left, and displays guesses made
    document.querySelector("#numChances").innerHTML = chances;
    document.querySelector("#word").innerHTML = answerArr.join(" ");
    document.querySelector("#alreadyGuessed").innerHTML = guessArr.join();
   	
   	//Checks for remaining letters
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

   	//Registers loss and calls reset when chances expire
   	if(chances <= 0) {
   		losses+=1;
   		reset();
   	}

   	//Upon 5 wins updates html with winner message and signals gameover music
   	if (wins === 5) {
   		var winner = "<h1 class='winner'>Nice! You really know your coding languages!</h1>";
   		document.querySelector("#main-game").innerHTML = winner;
   		document.querySelector("#picture").setAttribute("src", "assets/images/winner.png");
   		gameover();
   	}

   	//Upon 3 losses updates html with loser message and signals gameover music
   	if (losses === 3) {
   		var loser = "<h1 class='loser'>Come on, man! You suck!</h1>";
   		document.querySelector("#main-game").innerHTML = loser;
   		document.querySelector("#picture").setAttribute("src", "assets/images/loser.jpg");
   		gameover();
   	}
}

//Reset variables and obtain new word by recalling the randomWord function
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

//Reset word function triggered by reset button
document.getElementById("reset-btn").addEventListener("click", function(){
    reset();
});

//Game restart function triggered by restart button
document.getElementById("restart-btn").addEventListener("click", function(){
	document.location.reload();
});


