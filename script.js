confirm("Ready to play?");
var number;
var random;

var number = prompt("Guess a number?");

var random = Math.floor((Math.random()*50) +1);

if (number === random)
{ 
	console.log("You got it right!");}

	else

	{
		console.log ("Booo - maybe next time");
	}

if (number < random)
{ 
	console.log("Number is lower");

}

	else

	{
		console.log ("Number is bigger");
	}

