const racers = [
 {
  id: 1,
  name: 'Vitya',
  bikeType: 'true-fix',
  runResult : 17.88,
  startAt: 14.00,
},
{
  id: 2,
  name: 'Kolyasik',
  bikeType: 'true-fix',
  runResult : 18.42,
  startAt : 14.00,
},
{
  id: 3,
  name: 'Seryoga',
  bikeType: 'true-fix',
  runResult : 19.13,
  startAt: '14.00',
},
{
  id: 4,
  name: 'Maks',
  bikeType: 'other',
  runResult : 20.30,
  startAt: 14.00,
},
{
  id: 5,
  name: 'Sanya',
  bikeType: 'other',
  runResult : 21.20,
  startAt: 14.00,
},
{
  id: 6,
  name: 'Dimon',
  bikeType: 'true-fix',
  runResult : 22.20,
  startAt: 14.00,
}
]



// Vsi
// const newRacers = racers.map(racers =>`${racers.name} (${racers.runResult})`)
//   console.log(newRacers);

// top 3  
const fasterFixie = racers.filter(racers => {
  if (racers.runResult <= 20.00) {
    return true
  }
})
console.log(fasterFixie)

// fast true-fix
const fixie = racers 
.filter(racers => racers.bikeType === 'true-fix' )
.map(racers => {
  return {
    info: `${racers.name} (${racers.bikeType})`,
    runResult: racers.runResult
  }
})
console.log(fixie);
// fast other
const shosse = racers 
.filter(racers => racers.bikeType === 'other' )
.map(racers => {
  return {
    info: `${racers.name} (${racers.bikeType})`,
    runResult: racers.runResult
  }
})
console.log(shosse);
//AVGFIX
const arrFix = [17.88,18.42,19.13,22.20]
const getAvarage = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length;i += 1) {
    sum += numbers[i]
  }
  return sum / numbers.length
}
console.log(getAvarage(arrFix))
//AVGOTHER
const arrOther = [20.30,21.20]
const getAvarageOther = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length;i += 1) {
    sum += numbers[i]
  }
  return sum / numbers.length
}
console.log(getAvarageOther(arrOther))
//
const arrId = [ 1,2,3,4,5,6]
let arrTwo = arrId.concat

