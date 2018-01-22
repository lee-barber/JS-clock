function myTimeFunction(){

var gettingTheDate = new Date();

var currentHours = gettingTheDate.getHours();

var currentMinutes = gettingTheDate.getMinutes();

var currentSeconds = gettingTheDate.getSeconds();

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
	document.getElementById('greeting').style.color = 'black'
	document.getElementById('showingHours').style.color = 'black'
	document.getElementById('showingMinutes').style.color = 'black'
	document.getElementById('showingSeconds').style.color = 'black'
}

if (currentHours>=12 && currentHours <17){
	document.body.style.backgroundImage = 'url(afternoon.jpeg)'
	document.getElementById('greeting').innerHTML = 'Good afternoon!'
	document.getElementById('greeting').style.color = 'black'
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

document.getElementById('showingHours').innerHTML = currentHours + ': ';

document.getElementById('showingMinutes').innerHTML = currentMinutes + ': ';

document.getElementById('showingSeconds').innerHTML = currentSeconds;

setInterval(myTimeFunction, 1000);

}

myTimeFunction();
