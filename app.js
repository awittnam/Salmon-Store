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

CookieStand();


//
// randomNumGen: function(minCust, maxCust) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   }
// };
//
// firstAndPike.randomNumGen() * firstAndPike.avgSale;
