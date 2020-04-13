/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/


// CODING CHALLENGE 1 - THE ANSWER

var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;

massMark = 70
massJohn = 100
heightMark = 1.9
heightJohn = 1.9

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

var highestBmi = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s?' + ' ' + highestBmi);

// Alternative solution

if (bmiMark > bmiJohn) {
	console.log('Mark\'s BMI is higher than John\'s.')
} else {
	console.log('John\'s BMI is higher than Mark\'s.')
}

	

