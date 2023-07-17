'use strict';

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // We're building a football betting app (soccer for my American friends 😅)!
// // Suppose we get data from a web service about a certain game ('game' variable on
// // next page). In this challenge we're gonna work with that data.
// // Your tasks:

// // 1. Create one player array for each team (variables 'players1' and
// // 'players2')
// // how to: we can use destructuring to retrieve teams from "game" object
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// // 2. The first player in any player array is the goalkeeper and the others are field
// // players. For Bayern Munich (team 1) create one variable ('gk') with the
// // goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// // field players
// // How to: we can again use destructuring to get 1st player name and then use rest operator to get the rest of the team
// const [gk, ...fieldPlayers] = players1;

// console.log(gk);
// console.log(fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams (22
// // players)
// // How to: we can use spread operator twice to join those 2 arrays

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// // new array ('players1Final') containing all the original team1 players plus
// // 'Thiago', 'Coutinho' and 'Perisic'
// // how to: We can use spread operator to get players1 array and then we can add those 3 substitute players
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5. Based on the game.odds object, create one variable for each odd (called
// // 'team1', 'draw' and 'team2')

// // how to: we cant destructure objects normally as they are not an iterable, however for destructuring objects we have special destructuring syntax "{}", object contains team1, x and team 2, in order to name x property draw we have to use : syntax to rename it
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player
// // names (not an array) and prints each of them to the console, along with the
// // number of goals that were scored in total (number of player names passed in)

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('a', 'b', 'c');
// printGoals(...game.scored);

// // 7. The team with the lower odd is more likely to win. Print to the console which
// // team is more likely to win, without using an if/else statement or the ternary
// // operator.

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// // Then, call the function again with players from game.scored

// //Coding Challenge #2
// // Let's continue with our football betting app! Keep using the 'game' variable from
// // before.
// // Your tasks:

// // 1. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")

// for (const [number, player] of game.scored.entries()) {
//   console.log(`Goal ${number + 1}: ${player}`);
// }

// // 2. Use a loop to calculate the average odd and log it to the console (We already
// // studied how to calculate averages, you can go check if you don't remember)

// let sum = 0;
// let calcAvg = Object.values(game.odds);
// console.log(calcAvg);
// for (const value of calcAvg) {
//   sum += value;
// }
// const average = sum / calcAvg.length;
// console.log(average);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them
// // (except for "draw"). Hint: Note how the odds and the game objects have the
// // same property names 😉

// //
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// //

// // 4. Bonus: Create an object called 'scorers' which contains the names of the
// // players who scored as properties, and the number of goals as the value. In this
// // game, it will look like this:
// // {
// // Gnarby: 1,
// // Hummels: 1,
// // Lewandowski: 2
// // }
// // GOOD LUCK 😀

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers);

// // Coding Challenge #3
// // Let's continue with our football betting app! This time, we have a map called
// // 'gameEvents' (see below) with a log of the events that happened during the
// // game. The values are the events themselves, and the keys are the minutes in which
// // each event happened (a football game has 90 minutes plus some extra time).
// // Your tasks:
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// // 1. Create an array 'events' of the different game events that happened (no
// // duplicates)

// const events = [...new Set(gameEvents.values())];

// console.log(events);

// // 2. After the game has finished, is was found that the yellow card from minute 64
// // was unfair. So remove this event from the game events log.

// gameEvents.delete(64);
// console.log(gameEvents);

// // 3. Compute and log the following string to the console: "An event happened, on
// // average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4. Loop over 'gameEvents' and log each element to the console, marking
// // whether it's in the first half or second half (after 45 min) of the game, like this:
// // [FIRST HALF] 17: ⚽ GOAL

// for (const [key, value] of gameEvents) {
//   const half = key <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${key}: ${value}`);
// }

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// HINT 1: Remember which character defines a new line in the textarea 😉

// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b

// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉

// HINT 4:This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue! Afterwards, test with your own test data!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const string = document.querySelector('textarea').value;
//   //firstly lets reduce letters of given string to lowercase and remove debris in front and at the end of each string using trim
//   const strLower = string.toLowerCase().replaceAll(' ', '');
//   // now lets divide string to an array using split method
//   const strArr = strLower.split('_');
//   // I will now create 2 arrays, one for the first word and the second for the rest which i will make start with upper case
//   let arr1 = strArr.slice(0, 1);
//   let arr2 = strArr.slice(1);
//   // Now for of loop for the second array
//   let arr2Upper = [];
//   for (const e of arr2) {
//     arr2Upper.push(e[0].toUpperCase() + e.slice(1));
//   }
//   const upperCased = arr1.concat(arr2Upper).join('');
//   const tickEmojis = '✅'.repeat(strArr.length - 1);
//   console.log(`${upperCased} ${tickEmojis}`);
//   return `${upperCased}  ${tickEmojis}`;
// });

//jonas solution
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});