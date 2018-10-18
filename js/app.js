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
console.log(divHobbies);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

var divLocation = document.createElement('div');

divLocation.id = 'location';
divLocation.innerHTML = 'Honolulu, HI';
data.appendChild(divLocation);

spacer(7);
console.log(divLocation);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

var divWants = document.createElement('div');

divWants.id = 'wants';
divWants.innerHTML = 'Looking for a Mrs. McDonald.';
data.appendChild(divWants);

spacer(8);
console.log(divWants);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).

var pPro2 = document.createElement('p');
var profile = document.getElementById('profile');

pPro2.id = 'pro2';
pPro2.innerHTML = 'The only reason I want a girlfriend is so that when I\'m singing Fergilicious and it\'s at the part where she says "I be up in the gym just workin on my fitness he\'s my witness\" I can point to her and she\'ll do the little \"wooOOH\" part because right now I have to do both parts by myself and it\'s stressful because right after the wooOOH part I have to get right back into rapping and the transition is harder than you think';
profile.appendChild(pPro2);

spacer(9)
console.log(pPro2);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.

var getClassFirstName = document.getElementsByClassName('firstName');

getClassFirstName[0].innerHTML = 'Wendy';

spacer(10);
console.log(getClassFirstName[0]);

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

var getClassOtherAge = document.getElementsByClassName('otherAge');

getClassOtherAge[0].innerHTML = 48;

spacer(11);
console.log(getClassOtherAge[0]);

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

var getClassStatus = document.getElementsByClassName('status');

getClassStatus[0].innerHTML = 'Single Mother';

spacer(12);
console.log(getClassStatus[0]);

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto




