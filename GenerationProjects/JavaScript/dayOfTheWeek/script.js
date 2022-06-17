var d = new Date();
//created a new date object and stored it in variable d;
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//created an array of a weekdays and stored it in variable weekday;

var date2 = new Date();
//created a second new date object and stored it in a variable date2;
var weekday2 = ["Time to chillax!", "Monday morning blues!", "Taco Time!", "Two more days to the weekend.", "The weekend is almost here...", "Weekend is here!", "Time to party!"];
//created a second array with description of each weekday and stored in a variable weekday2;

var n = weekday[d.getDay()];
//to recognize what is a day today, i use getDay method of d as an object, so this day becomes a day of a weekday array and stored in variable n;
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var n2 = weekday2[date2.getDay()];
//the same as the above with the second array;

var displayWeekday = document.getElementById('weekday');
// The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly. If you need to get access to an element which doesn't have an ID, you can use querySelector() to find the element using any selector.
//chooses an element with id weekday in the css file and stores it in a variable;
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById;

var phrase = document.getElementById('phrase');
//chooses an element with id phrase in the css file and stores it in a variable;

whatDayIsIt();
function whatDayIsIt() {
  
  displayWeekday.innerText = n ;
  //The innerText property sets or returns the text content of an element.
  //https://www.w3schools.com/jsref/prop_node_innertext.asp
  phrase.innerText = n2;
  
}







