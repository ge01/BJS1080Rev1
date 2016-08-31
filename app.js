// Access Array Data with Indexes
var ourArray = [1,2,3];
var ourData = ourArray[0];
console.log(ourData);
console.log(ourArray[1]);

// Access MultiDimensional Arrays With Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
console.log(myArray[2][1]);
myArray.push(["dog",3]);
console.log(myArray);

// Assignment with a Returned Value
var changed = 0;
function change(num){
  return (num + 5) / 3;
}
changed = change(10);
console.log(changed);
console.log(change(10));

// Accessing Objects Properties with the Dot Operator
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
console.log(testObj.hat);
console.log(testObj["shirt"]);

// Testing Objects for Properties
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}
console.log(checkObj("gift"));

// Accessing Nested Objects
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
console.log(myStorage.car.inside["glove box"]);

// Accessing Nested Arrays
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

console.log(myPlants[1].list[1]);
