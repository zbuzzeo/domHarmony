/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

function spacer(exerciseNum){
      console.log('Exercise:', exerciseNum, '\n');
}

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.

matCount.innerHTML = 11;

spacer(1);
console.log(matCount);

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.

msgCount.innerHTML = 23;

spacer(2);
console.log(msgCount);

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.

fullname.innerHTML = 'Ronald McDonald';

spacer(3);
console.log(fullname);

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.

age.innerHTML = '63 Years Old'

spacer(4);
console.log(age);

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.

var newDiv = document.createElement('div');
var data = document.getElementById('data');

newDiv.id = 'job';
newDiv.innerHTML = 'Clown and Restauranteur';
data.appendChild(newDiv);

spacer(5);
console.log(newDiv);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.

var divHobbies = document.createElement('div');

divHobbies.id = 'hobbies';
divHobbies.innerHTML = 'Long romantic walks on the beach, candle-lit Big Mac dinners and tormenting the King.';
data.appendChild(divHobbies);

spacer(6);
console.log(divHobbes);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto




