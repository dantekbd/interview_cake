const unsortedScores = [37, 89, 41, 65, 91, 53]
const HIGHEST_POSSIBLE_SCORE = 100

// function sortScores(scores, highScore) {

//   let scoreCounts = {}

//   for (let i=0; i < scores.length; i++) {
//     let score = scores[i]
//     if (score <= highScore) {
//       if (scoreCounts.hasOwnProperty(score)) {
//         scoreCounts[score] += 1;
//       } else {
//         scoreCounts[score] = 1;
//       }
//     }
//   }

//   return scoreCounts

// }

  function sortScores(unorderedScores, highestPossibleScore) {

    // array of 0s at indices 0..highestPossibleScore
    var scoreCounts = [];
    for (var i = 0; i < highestPossibleScore + 1; i++) {
        scoreCounts.push(0);
    }

    // populate scoreCounts
    unorderedScores.forEach(function(score) {
        scoreCounts[score]++;
    });

    // populate the final sorted array
    var sortedScores = [];
    console.log(scoreCounts)
    // for each item in scoreCounts
    scoreCounts.forEach(function(count, score) {
        // for the number of times the item occurs
        for (var time = 0; time < count; time++) {
            sortedScores.push(score);
        }
    });

    return sortedScores;
}


console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE))
// returns [37, 41, 53, 65, 89, 91]