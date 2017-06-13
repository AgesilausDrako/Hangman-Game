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
function init() {
	//Computer's random guess
	word = wordBank[Math.floor(Math.random() * wordBank.length)];
	//Array for guess storage 
	for (var i=0; i < word.length; i++) {
		answerArr[i] = "_";
	}
	document.querySelector("#word").innerHTML = answerArr.join(" ");
}
init();


//Guess function
document.onkeyup = function (event){
	var userGuess = event.key;
	guessArr.push(userGuess);

	for (var i=0; i<word.length; i++){
		if (word[i] === userGuess){
			answerArr[i] = userGuess;
		}
	}

	var remaining_letters = answerArr.length;
        // recount the remaining letters
    for (i = 0; i < answerArr.length; i++) {
        if (answerArr[i] !== '_') {
            remaining_letters -= 1;
        }
    }

    if (remaining_letters == 0){

    }

    
    document.querySelector("#numChances").innerHTML = chances;
    document.querySelector("#word").innerHTML = answerArr.join(" ");
    document.querySelector("#alreadyGuessed").innerHTML = guessArr.join();
    
    /*Reset which changes wins, losses, and guesses to 0 after 
	6 attempts and clears the array*/
	if (chances <= 0 || remaining_letters === 0) {
		wins=0;
		chances=6;
		guessArr=[];
		answerArr=[];
	location.reload();
	}
}
    




