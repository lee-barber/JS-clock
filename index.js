function myTimeFunction(){

var gettingTheDate = new Date();
// document.getElementById('showingTheDate').innerHTML = gettingTheDate;

var currentHours = gettingTheDate.getHours();
// takes the current date and gets the hours 

var currentMinutes = gettingTheDate.getMinutes();
// takes the current date and gets the minutes

var currentSeconds = gettingTheDate.getSeconds();
// takes the current date and gets the seconds

if (currentHours<=9){
	currentHours = '0' + currentHours;
	}

if (currentMinutes<=9){
	currentMinutes = '0' + currentMinutes;
	}

if (currentSeconds<=9){
	currentSeconds = '0' + currentSeconds;
	}

if (currentHours<12){
	document.body.style.backgroundImage = 'url(morning.jpeg)'
	document.getElementById('greeting').innerHTML = 'Good morning!'
	document.getElementById('showingHours').style.color = 'black'
	document.getElementById('showingMinutes').style.color = 'black'
	document.getElementById('showingSeconds').style.color = 'black'
}

if (currentHours>12 && currentHours <17){
	document.body.style.backgroundImage = 'url(afternoon1.jpeg)'
	document.getElementById('greeting').innerHTML = 'Good afternoon!'
	document.getElementById('showingHours').style.color = 'black'
	document.getElementById('showingMinutes').style.color = 'black'
	document.getElementById('showingSeconds').style.color = 'black'
}

if (currentHours>=17){
	document.body.style.backgroundImage = "url(evening.jpeg)"
	document.getElementById('greeting').innerHTML = 'Good evening!'
	document.getElementById('greeting').style.color = 'white'
	document.getElementById('showingHours').style.color = 'white'
	document.getElementById('showingMinutes').style.color = 'white'
	document.getElementById('showingSeconds').style.color = 'white'
}

document.getElementById('showingHours').innerHTML = currentHours + ' : ';
// tells the HTML to print the variable currentHours to the ID showingHours

document.getElementById('showingMinutes').innerHTML = currentMinutes + ' : ';
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

// document.body.style.backgroundImage = "url(morning.jpeg)"

myTimeFunction();

// console.log('This is linked')