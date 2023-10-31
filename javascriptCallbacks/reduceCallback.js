var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];

function straightforward(arr){
    var totalYears = arr.reduce(function (accumulator, pilot) {
    return accumulator + pilot.years;
    }, 0);
    return totalYears;
}
function es6(arr){
    const totalYears = arr.reduce((acc, pilot) => acc + pilot.years, 0);
    return totalYears;
}

console.log(straightforward(pilots));
console.log(es6(pilots));