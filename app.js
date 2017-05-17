//create constructor definition
function CookieStand(location, minimum, maximum, average) {
  this.location = location;  //dynamic name property
  this.minimum = minimum;  //dynamic name property
  this.maximum = maximum;  //dynamic name property
  this.average = average;  //dynamic name property
}
//add new store location to our table by instantiating new CookieStand object
var standOne = new CookieStand('first and pike', 23, 65, 6.3);
var standTwo = new CookieStand('seatac airport', 3, 24, 1.2);
var standThree = new CookieStand('seattle center', 11, 38, 3.7);
var standFour = new CookieStand('capitol hill', 20, 38, 2.3);
var standFive = new CookieStand('alki', 2, 16, 4.6);

//cookie stand locations array
var shop = ['first & pike', 'seatac airport', 'seattle center', 'capitol hill', 'alki'];

var table = document.getElementById('shell');
var data = []

//trying to push data into the table
for (var i = 0; i < location.length; i++) {
  data.push(
    '<td>' + shop[i].location + '</td>' +
    '<td>' + shop[i].minimum + '</td>' +
    '<td>' + shop[i].maximum + '</td>' +
    '<td>' + shop[i].average + '</td>'
  )
};




// var firstAndPike = {
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   randomNumGen: function(minCust, maxCust) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   }
// };
//
// firstAndPike.randomNumGen() * firstAndPike.avgSale;
//
// firstAndPike.details();
//
// var seaTac = {
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   details: function(minCust, maxCust) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   }
// };
//
// seaTac.details();
//
// var seattleCenter = {
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   details: function(minCust, maxCust) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   }
// };
//
// seattleCenter.details();
//
// var capitalHill = {
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   details: function(minCust, maxCust) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   }
// };
//
// capitalHill.details();
//
// var alki = {
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   details: function(minCust, maxCust) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   }
// };
//
// alki.details();
//
//
//
//
//
// // PART ONE
// // 1 - create container element in memory
// // 2 - add HTML to container and add content using the details method on the brian object
// // 3 - add newly created HTML to the DOM
//
// // PART TWO
// // 1 - create an UL container in memory
// // 2 - create an empty array for later use - used to create a new array of elements
// // 3 - created a for loop to grab all items in the hobbies array, create a list item of each, then push that to our empty array for later use
// // 4 - took our once empty array - now filled with elements - and made them a single string by joining each item together - using the join method
// // 5 - add our new string of elements to our UL container that is saved in memory
// // 6 - append our UL that is saved in memory to the DOM
