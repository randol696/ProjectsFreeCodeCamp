// What you have
var officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];
 
function obtainID(arr){
 const officersIds = arr.map(officer => officer.id);
 return officersIds;
}



console.log(obtainID(officers));