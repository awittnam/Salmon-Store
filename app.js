//var location = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki Beach']

var firstAndPike = {
  //location: '1st & Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  details: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

firstAndPike.details();

var seaTac = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  details: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

seaTac.details();

var seattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  details: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

seattleCenter.details();

var capitalHill = {
  location: 'Capital Hill',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  details: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

capitalHill.details();

var alkiBeach = {
  location: 'Alki Beach',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  details: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

alkiBeach.details();



// create object with properties of an array, a string, an integer, and a method
var brian = {
  hobbies: ['skateboarding', 'drinking', 'coding'],
  age: 31,
  profession: 'developer',
  details: function() {
    return 'Brian likes ' + this.hobbies[0] + ' and ' + this.hobbies[1]
  }
}

// PART ONE
// 1 - create container element in memory
// 2 - add HTML to container and add content using the details method on the brian object
// 3 - add newly created HTML to the DOM

// PART TWO
// 1 - create an UL container in memory
// 2 - create an empty array for later use - used to create a new array of elements
// 3 - created a for loop to grab all items in the hobbies array, create a list item of each, then push that to our empty array for later use
// 4 - took our once empty array - now filled with elements - and made them a single string by joining each item together - using the join method
// 5 - add our new string of elements to our UL container that is saved in memory
// 6 - append our UL that is saved in memory to the DOM
function domStuff() {
  // part 1 //
  var container = document.createElement('div');
  container.innerHTML = '<p>' + brian.details() + '</p>';
  document.body.appendChild(container);

  // part 2 //
  var list = document.createElement('ul');
  var list_arr = [];

  for (var i=0; i < brian.hobbies.length; i++) {
     list_arr.push('<li>' + brian.hobbies[i] + '</li>');
  }

  var full_list = list_arr.join('');

  list.innerHTML = full_list;
  document.body.appendChild(list);
}

// call our domStuff function
domStuff();
