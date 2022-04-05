var totalScore = 0;
var totalPar = 0;
var numberOfHolesToPlay = 0;
// Prompt the user their name
var userName = prompt("Welcome to GC mini golf! What is your name?");
console.log(userName);

// Prompt the user for how many holes (save for later)
numberOfHolesToPlay = parseInt(prompt("Hello " + userName + ", would you like to play 3 or 6 holes?"));
totalPar = (3*numberOfHolesToPlay);
console.log(numberOfHolesToPlay);

// Ask score, but only for the number of holes they selected
for (let i = 0; i < numberOfHolesToPlay; i++){
    totalScore = totalScore + parseInt(prompt("How many putts for hole " + (i+1) + "? (par 3)"));
};
// Add up the strokes and compare to total par for the course
totalComparedToPar = totalScore - totalPar;
console.log(totalComparedToPar);

// Display how many got

if (totalComparedToPar = totalPar) {
    alert("Good game, " + userName + ". Your total par was " + totalComparedToPar);
    console.log("Good game, " + userName + ". Your total par was " + totalComparedToPar);
}

if (totalComparedToPar > totalPar) {
    alert("Nice try, " + userName + "! Your total par was " + totalComparedToPar);
    console.log("Nice try, " + userName + "! Your total par was " + totalComparedToPar);
}

if (totalComparedToPar < totalPar) {
    alert("Great job, " + userName + ". Your total par was " + totalComparedToPar);
    console.log("Great job, " + userName + ". Your total par was " + totalComparedToPar);
};