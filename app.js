'use strict'
//create constructor definition
var shop = ['first & pike', 'seatac airport', 'seattle center', 'capitol hill', 'alki'];
var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm', '7pm'];

function CookieStand(location, minimum, maximum, avgCookiesHr) {
  this.location = location;  //dynamic name property
  this.minimum = minimum;  //dynamic name property
  this.maximum = maximum;  //dynamic name property
  this.cookiesPerHrArr = [];
  //this.populateCookiesPerArr();
  //this.totalCookiesPerStoreDaily();  //I was told to put all these at the top in order to organize these better.
//need to generate avg customers per hr
  this.custHourly = function () {
  return Math.floor(Math.random() * (this.maximum - this.minimum + 1) + this.minimum);
    }
  this.cookieSale = function () {
    for (var i = 0; i < hours.length; i++) {
    var salesPerHour = Math.floor(this.custHourly() * this.avgCookiesHr);
    this.cookiesPerHrArr.push(salesPerHour);
      }
    }
  };

randomNumOfCookiesPerHr() * standOne.avgSale;

//add new store location to our table by instantiating new CookieStand object
var standOne = new CookieStand('first and pike', 23, 65, 6.3);
var standTwo = new CookieStand('seatac airport', 3, 24, 1.2);
var standThree = new CookieStand('seattle center', 11, 38, 3.7);
var standFour = new CookieStand('capitol hill', 20, 38, 2.3);
var standFive = new CookieStand('alki', 2, 16, 4.6);


var table = document.getElementById('shell');
var data = [];

//trying to push data into the table
for (var i = 0; i < location.length; i++) {
  data.push(
    '<td>' + shop[i].location + '</td>' +
    '<td>' + shop[i].minimum + '</td>' +
    '<td>' + shop[i].maximum + '</td>' +
    '<td>' + shop[i].average + '</td>'
  );
}

CookieStand();



randomNumGen: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

standOne.randomNumGen() * standOne.avgSale;
