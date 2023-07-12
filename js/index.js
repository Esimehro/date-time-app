// console.log('WORKSSSSSSSS')
let current = new Date();
console.log('DATE: ', current);

const hour = convertHoursTo12Format(current.getHours());
let minutes = makeItSexy(current.getMinutes());
const seconds = makeItSexy(current.getSeconds());
const time = hour + ":" + minutes + ":" + seconds;
const meridian = getMeridianValue(current.getHours());

const today = convertActualDay(current.getDay());
const month = convertToMonth(current.getMonth());
const dayOfMonth = current.getDate();
const year = current.getFullYear();

const currentDate = today + ", " + month + " " + dayOfMonth + ", " +  year;

function convertActualDay(arg){
	let day;
	switch (arg) {
		case 0:
		day = "Sunday";
		break;
		case 1:
		day = "Monday";
		break;
		case 2:
		day = "Tuesday";
		break;
		case 3:
		day = "Wednesday";
		break;
		case 4:
		day = "Thursday";
		break;
		case 5:
		day = "Friday";
		break;
		case 6:
		day = "Saturday";
		break;
	}
	return day;
}


console.log('current time is: ', time + " " + meridian);


document.getElementById("time").innerHTML = time;
document.getElementById("small").innerHTML = meridian;

window.setInterval(update, 1000); 	

function update() {
	let current = new Date();

	const hour = convertHoursTo12Format(current.getHours());
	let minutes = makeItSexy(current.getMinutes());
	const seconds = makeItSexy(current.getSeconds());
	const time = hour + ":" + minutes + ":" + seconds;
	const meridian = getMeridianValue(current.getHours());

	document.getElementById("time").innerHTML = time;
	document.getElementById("small").innerHTML = meridian;

	document.getElementById("date").innerHTML = currentDate;
}





function datFunction(arg){
	console.log(arg + " DON'T CALL ME BACK");
}

function thisFunction(arg){
	console.log(arg + " CALL ME BACK OOOOOOOOOO");
}

function doSomething(callbackFn, value){
	callbackFn(value);
}



doSomething(thisFunction, "Lois");
doSomething(function (arg){
	console.log(arg + " CALL ME BACK OOOOOOOOOO");
}, "Lois");


function convertToMonth(arg){
	switch(arg){
		case 0: return "January";
		case 1: return "February";
		case 2: return "March";
		case 3: return "April";
		case 4: return "May";
		case 5: return "June";
		case 6: return "July";
		case 7: return "August";
		case 8: return "September";
		case 9: return "October";
		case 10: return "November"; 
		default: return "December";
	}
}



function makeItSexy(arg) {
	if(arg < 10){
		return "0" + arg;
	} else { 
		return arg;
	}
}

function convertHoursTo12Format(arg) {
	if (arg > 12) {
		return arg - 12;
	} else {
		return arg;
	}
}


// Return "PM" if time is in the afternoon, then "AM" for morning
function getMeridianValue(arg) {
	if (arg < 12){
		return 'AM';
	} else {
		return 'PM';
	}
}
