/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/


var teamMike = (116 + 94 + 123) / 3;
var teamJohn = (89 + 120 + 103) / 3;
var teamMary = (97 + 134 + 105) / 3;


if (teamMike > teamJohn) {
	console.log('Team Mike has the highest average score of ' + teamMike);
} else if (teamMike === teamJohn) {
	console.log('It\s a draw, both teams has an average score of ' + teamJohn);
} else {
	console.log('Team John has the highest average score of ' + teamJohn);
}


switch (true) {
	case teamMike > teamJohn && teamMike > teamMary:
		console.log('Team Mike has the highest average score of ' + teamMike);
		break;
	case teamJohn > teamMike && teamJohn > teamMary:
		console.log('Team John has the highest average score of ' + teamJohn);
		break;
	case teamJohn === teamMike && teamJohn === teamMary:
		console.log('It\s a draw between all 3 teams with an average score of ' + teamJohn);
		break;
	case teamJohn === teamMike || teamJohn === teamMary || teamMary === teamMike:
		console.log('It\s a draw between 2 of the teams');
		break;
	default:
		console.log('Team Mary has the highest average score of ' + teamMary);
}























