// another JavaScript file created by Lee Barber

// ---this is my function declared and named with no arguments---

function myTimeFunction(){
// this function encloses all of the following variables, if statements, and
// DOM Manipulation which doesn't run until the 'myTimeFunction' is executed
// (which occurs immediately when the file is opened)

// ---these are all of the variables declared---

var gettingTheDate = new Date();
// gets the current date/time from baked in framework (new Date)

var currentHours = gettingTheDate.getHours();
// takes the current date and gets the hours which is assigned to
// the variable 'currentHours' to be called upon later in the if
// statements to declare how/when the hours will be shown

var currentMinutes = gettingTheDate.getMinutes();
// takes the current date and gets the minutes which is assigned to
// the variable 'currentMinutes' to be called upon later in the if
// statements to declare how/when the minutes will be shown

var currentSeconds = gettingTheDate.getSeconds();
// takes the current date and gets the seconds which is assigned to
// the variable 'currentSeconds' to be called upon later in the if
// statements to declare how/when the seconds will be shown

// ---these are all of the if statements declared---

if (currentHours<=9){
	currentHours = '0' + currentHours;
	}
// if the hours integer defined by variable 'currentHours' is less 
// than or equal to 9, add a preceding zero so that it prints with 2 digits 
// (so that it looks like a clock)

if (currentMinutes<=9){
	currentMinutes = '0' + currentMinutes;
	}
// if the minutes integer defined by variable 'currentMinutes' is less 
// than or equal to 9, add a preceding zero so that it prints with 2 digits 
// (so that it looks like a clock)

if (currentSeconds<=9){
	currentSeconds = '0' + currentSeconds;
	}
// if the minutes integer defined by variable 'currentSeconds' is less 
// than or equal to 9, add a preceding zero so that it prints with 2 digits 
// (so that it looks like a clock)

if (currentHours<12){
	document.body.style.backgroundImage = 'url(morning.jpeg)'
	document.getElementById('greeting').innerHTML = 'Good morning!'
	document.getElementById('greeting').style.color = 'black'
	document.getElementById('showingHours').style.color = 'black'
	document.getElementById('showingMinutes').style.color = 'black'
	document.getElementById('showingSeconds').style.color = 'black'
}
// if the current hour is less than 12 the following conditions apply:
// 1. stretch the background with the morning image declared
// 2. print 'Good morning' on the screen 
// 3. color the 'Good morning' text black
// 4. color the hours text black 
// 5. color the minutes text black 
// 6. color the seconds text black

if (currentHours>=12 && currentHours <17){
	document.body.style.backgroundImage = 'url(afternoon.jpeg)'
	document.getElementById('greeting').innerHTML = 'Good afternoon!'
	document.getElementById('greeting').style.color = 'black'
	document.getElementById('showingHours').style.color = 'black'
	document.getElementById('showingMinutes').style.color = 'black'
	document.getElementById('showingSeconds').style.color = 'black'
}
// if the current hour is greater than or equal to 12 but less than 17hrs/5pm
// the following conditions apply: 
// 1. stretch the background with the afternoon image declared
// 2. print 'Good afternoon' on the screen 
// 3. color the 'Good afternoon' text black
// 4. color the hours text black 
// 5. color the minutes text black 
// 6. color the seconds text black

if (currentHours>=17){
	document.body.style.backgroundImage = "url(evening.jpeg)"
	document.getElementById('greeting').innerHTML = 'Good evening!'
	document.getElementById('greeting').style.color = 'white'
	document.getElementById('showingHours').style.color = 'white'
	document.getElementById('showingMinutes').style.color = 'white'
	document.getElementById('showingSeconds').style.color = 'white'
}
// if the current hour is greater than or equal to 17hrs/5pm
// the following conditions apply: 
// 1. stretch the background with the evening image declared
// 2. print 'Good evening' on the screen 
// 3. color the 'Good evening' text black
// 4. color the hours text white 
// 5. color the minutes text white 
// 6. color the seconds text wbite

// ---these are all of the DOM Manipulation elements---
// these elements "print" the JavaScript into the HTML file

document.getElementById('showingHours').innerHTML = currentHours + ': ';
// tells the HTML to print the variable currentHours to the ID showingHours

document.getElementById('showingMinutes').innerHTML = currentMinutes + ': ';
// tells the HTML to print the variable currentMinutes to the ID showingMinutes

document.getElementById('showingSeconds').innerHTML = currentSeconds;
// tells the HTML to print the variable currentSeconds to the ID showingSeconds

setInterval(myTimeFunction, 1000);
// this is an interesting way to call this function because when
// the page first loads, the function is called below with 'myTimeFunction',
// but then after the function runs it creates a recursive action by
// calling itself with 'setInterval'... Oggi said to save this
// and go over with the class on Monday as a challenge

}

myTimeFunction();

// console.log('This is linked')
// this is just a test to see if the JS file is "talking" to the HTML file

// another JavaScript file created by Lee Barber