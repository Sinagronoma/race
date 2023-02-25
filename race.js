const racers = [
  {
    name: 'Vitya',
    bikeType: 'true-fix',
    runResult: 50 * 1000,
    startAt: new Date('2023-02-24T18:39:17.601Z'),
  },
  {
    name: 'Kolyasik',
    bikeType: 'true-fix',
    runResult: 55 * 1000,
    startAt: new Date('2023-02-24T18:26:17.601Z'),
  },
  {
    name: 'Seryoga',
    bikeType: 'true-fix',
    runResult: 420 * 1000,
    startAt: new Date('2023-02-24T18:42:17.601Z'),
  },
  {
    id: 4,
    name: 'Maks',
    bikeType: 'other',
    runResult: 57 * 1000,
    startAt: new Date('2023-02-24T18:15:17.601Z'),
  },
  {
    name: 'Sanya',
    bikeType: 'other',
    runResult: 62 * 1000,
    startAt: new Date('2023-02-24T18:36:17.601Z'),
  },
  {
    name: 'Dimon',
    bikeType: 'true-fix',
    runResult: 65 * 1000,
    startAt: new Date('2023-02-24T18:50:17.601Z'),
  }
]

// /*
// // Vsi
// // const newRacers = racers.map(racers =>`${racers.name} (${racers.runResult})`)
// //   console.log(newRacers);
//
// // top 3
// const fasterFixie = racers.filter(racers => {
//   if (racers.runResult <= 20.00) {
//     return true
//   }
// })
// console.log(fasterFixie)
//
// // fast true-fix
// const fixie = racers
//   .filter(racers => racers.bikeType === 'true-fix' )
//   .map(racers => {
//     return {
//       info: `${racers.name} (${racers.bikeType})`,
//       runResult: racers.runResult
//     }
//   })
// console.log(fixie);
// // fast other
// const shosse = racers
//   .filter(racers => racers.bikeType === 'other' )
//   .map(racers => {
//     return {
//       info: `${racers.name} (${racers.bikeType})`,
//       runResult: racers.runResult
//     }
//   })
// console.log(shosse);
// //AVGFIX
// const arrFix = [17.88,18.42,19.13,22.20]
// const getAvarage = (numbers) => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length;i += 1) {
//     sum += numbers[i]
//   }
//   return sum / numbers.length
// }
// console.log(getAvarage(arrFix))
// //AVGOTHER
// const arrOther = [20.30,21.20]
// const getAvarageOther = (numbers) => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length;i += 1) {
//     sum += numbers[i]
//   }
//   return sum / numbers.length
// }
// console.log(getAvarageOther(arrOther))
// //
// const arrId = [ 1,2,3,4,5,6]
// let arrTwo = arrId.concat
//
// */

function compareByRunResult(a, b) {
  if (a.runResult < b.runResult) {
    return -1
  }
  if (a.runResult > b.runResult) {
    return 1
  }
  return 0;
}

// todo
// top 3
function getThreeFastestResults(results) {

}

// todo
// each fastest
// expected result is {
// true-fix: 60000,
// other: 50000
// }
function getFastestFromEveryCategory(results) {

}

// todo
// average
// expected result is {
// true-fix: 60000,
// other: 50000
// }
function getAverageResultForEachCategory(results) {

}

console.log('top 3 results: ', getThreeFastestResults(racers));
console.log('each fastest: ', getFastestFromEveryCategory(racers));
console.log('each average: ', getAverageResultForEachCategory(racers));
