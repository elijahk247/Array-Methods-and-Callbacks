import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const worldCupYear = fifaData.filter(function(arr) {
    return arr.Year === 2014;
});

const worldCupFinals = worldCupYear.filter(function(arr) {
    return arr.Stage === 'Final';
})

console.log('Task 1a: ', worldCupFinals[0]['Home Team Name']);
console.log('Task 1b: ', worldCupFinals[0]['Away Team Name']);
console.log('Task 1c: ', worldCupFinals[0]['Home Team Goals']);
console.log('Task 1d: ', worldCupFinals[0]['Away Team Goals']);
console.log('Task 1e: ', worldCupFinals[0]['Home Team Name']);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finals = [];

    data.forEach(function(item) {
        if(item.Stage === 'Final') {
            finals.push(item);
        }
    })
    return finals;
};

console.log('Task 2: ', getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(finalsData) {
    const finalsYears = []

    finalsData.forEach(function(arr) {
        finalsYears.push(arr.Year);
    })
    return finalsYears;
};

console.log('Task 3: ', getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(finalsData) {
    const finalsHome = finalsData.map(function(arr) {
        return arr["Home Team Goals"];
    });

    const finalsAway = finalsData.map(function(arr) {
        return arr["Away Team Goals"];
    });

    const winnersOnly = []
    for(let i = 0; i < finalsData.length; i++) {
        if(finalsHome[i] > finalsAway[i]) {
            winnersOnly.push(finalsData[i]["Home Team Name"]);
        } else {
            winnersOnly.push(finalsData[i]["Away Team Name"]);
        }
    }
    return winnersOnly;
};

console.log('Task 5: ', getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winnersData, yearsData) {
    const winnersByYear = [];
    
    for(let i = 0; i < winnersData.length; i++) {
        winnersByYear.push(`In ${yearsData[i]}, ${winnersData[i]} won the world cup!`);
    }
    return winnersByYear;
};

console.log('Task 6: ', getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const averageHome = (data.reduce(function(accum, currentVal) {
        return accum += currentVal["Home Team Goals"];
    }, 0)) / data.length;

    const averageAway = (data.reduce(function(accum, goalNumbers) {
        return accum += goalNumbers["Away Team Goals"];
    }, 0)) / data.length;

    return `Average Home Score: ${averageHome} - Average Away Score: ${averageAway}`;
};

console.log('Task 7: ', getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
