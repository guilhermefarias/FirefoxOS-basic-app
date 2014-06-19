// Getting elements
var newYork = document.querySelector('.new-york');
var london = document.querySelector('.london');
var paris = document.querySelector('.paris');
var tokyo = document.querySelector('.tokyo');
var hongKong = document.querySelector('.hong-kong');
var sydney = document.querySelector('.sydney');
var saoPaulo = document.querySelector('.sao-paulo');
var moscow = document.querySelector('.moscow');
var madrid = document.querySelector('.madrid');
var berlin = document.querySelector('.berlin');

function refrestTime(){
	// Creating objects
	var timeZoneOffset;
	var baseTime = new Date();
	var timeLess5 = new Date();
	var timeLess3 = new Date();
	var timePlus1 = new Date();
	var timePlus3 = new Date();
	var timePlus8 = new Date();
	var timePlus9 = new Date();
	var timePlus10 = new Date();

	// Setting base time, UTC+0
	timeZoneOffset = (baseTime.getTimezoneOffset() / 60);
	baseTime.setHours(baseTime.getHours() + timeZoneOffset);

	// Setting timezones
	timeLess5.setHours(baseTime.getHours() - 5);
	timeLess3.setHours(baseTime.getHours() - 3);
	timePlus1.setHours(baseTime.getHours() + 1);
	timePlus3.setHours(baseTime.getHours() + 3);
	timePlus8.setHours(baseTime.getHours() + 7);
	timePlus9.setHours(baseTime.getHours() + 9);
	timePlus10.setHours(baseTime.getHours() + 10);

	// Updating DOM
	newYork.textContent = timeLess5.toLocaleTimeString();
	london.textContent = baseTime.toLocaleTimeString();
	paris.textContent = timePlus1.toLocaleTimeString();
	tokyo.textContent = timePlus9.toLocaleTimeString();
	hongKong.textContent = timePlus8.toLocaleTimeString();
	sydney.textContent = timePlus10.toLocaleTimeString();
	saoPaulo.textContent = timeLess3.toLocaleTimeString();
	moscow.textContent = timePlus3.toLocaleTimeString();
	madrid.textContent = timePlus1.toLocaleTimeString();
	berlin.textContent = timePlus1.toLocaleTimeString();
}

setInterval(refrestTime, 300);
