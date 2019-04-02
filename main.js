
//DATA Nederland/Amsterdam - andere kant v.d. wereld t.o.v. Nieuw-Zeeland
function getAPIdataNL() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="59ad14b3e7bc3b73d905218a25f8163c";
	var city = "amsterdam,nl"; //als je er zeker van wilt zijn dat het juiste land bij de stad wordt laten zien, dan zet je er komma met de landcode achter.

	// verzoek insturen
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	//hier staat de url, met het app id waarna het de appkey wordt toegeveogd, daarna staate er dat de q de stad wordt.
	//dit uit elkaar trekken is om het overzichtelijker te maken.
	
	// geef het huidige weer weer
	fetch(request)
	
	// geef de JSON vorm door 
	.then(function(response) {
		// if(!response.ok) throw Error(response.statusText); //normaal komt er na een if een accolade openen enter en sluiten, dat mag je neerzetten, maar hoeft niet.
		if(!response.ok){ //als het niet goed is, dan geef je dat hiermee aan. Uitroepteken betekent ontkenning!
			throw Error(response.statusText); //als het niet oke is, dan wordt er op deze manier gereageerd
			//throw houdt in dat je eigenlijk ook echt met die code "gooit" om het te laten zien
		}
		return response.json(); //als iets wel oke is, dan wordt er op deze manier gereageerd.
	})
	
	// geef het weer per dag 
	.then(function(response) {
		// geef de weerconditie
		onAPISuccesNL(response);	
	})
	
	// vang de error op
	.catch(function (error) { //catch: hierbij vang je de fout op, op de plek dat het misging. Hij krijgt binnen wat de fout is.
		onAPIErrorNL(error); //als de fout wordt opgevangen, dan wordt dit uitgevoerd. 
	});
}


function onAPISuccesNL(response) {

	// console.log(response)

	// krijg het type weer in een string format 
	var type = response.weather[0].description;

	// krijg de temperatuur in Celcius
	var degC = Math.floor(response.main.temp - 273.15); //omdat dit met Kelvin werkt, en je ze in graden wilt hebben, moet je -273.15 doen. 

	var wind = response.wind.speed;

	// geef het weer weer in DOM
	var weatherBox = document.getElementById('weerNL');
	weatherBox.innerHTML = degC + "&#176;C <br>" + type + "<br>" + "wind force: " + wind + " km/u";
}


function onAPIErrorNL(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weerNL');
	weatherBox.className = 'hidden'; 
}

// zorg dat de functie wordt opgeroepen op te werken
getAPIdataNL();






//DATA Nieuw-Zeeland/Auckland - andere kant v.d. wereld t.o.v. Amsterdam
function getAPIdataNZ() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="59ad14b3e7bc3b73d905218a25f8163c";
	var city = "Auckland,nz"; 

	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	
	fetch(request)
	
	.then(function(response) {
		if(!response.ok){ 
			throw Error(response.statusText); 
		}
		return response.json();
	})
	
	.then(function(response) {
		onAPISuccesNZ(response);	
	})
	
	.catch(function (error) { 
		onAPIErrorNZ(error); 
	});
}


function onAPISuccesNZ(response) {
	// console.log(response)

	var type = response.weather[0].description;

	var degC = Math.floor(response.main.temp - 273.15); 

	var wind = response.wind.speed;

	var weatherBox = document.getElementById('weerNZ');

	weatherBox.innerHTML = degC + "&#176;C <br>" + type + "<br>" + "wind force: " + wind + " km/u";
}


function onAPIErrorNZ(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weerNZ');
	weatherBox.className = 'hidden'; 
}

getAPIdataNZ();




//Lengte- en breedtegraad ISS
// function getLL() {

// 	var url = "http://api.open-notify.org/iss-now.json";

// 	var request = url;
	
	
// 	fetch(request)
	
// 	.then(function(response) {
// 		if(!response.ok){ 
// 			throw Error(response.statusText); 
// 		}
// 		return response.json(); 
// 	})
	
// 	.then(function(response) {
// 		onSuccesLL(response);	
// 	})
	
// 	.catch(function (error) {
// 		onErrorLL(error); 
// 	});
// }


// function onSuccesLL(response) {
// 		// console.log(response)

// 		var latitude= response.iss_position.latitude;
// 		var longitude = response.iss_position.longitude;

// 		var place= document.getElementById('place');

// 		place.innerHTML = "Latitude: " + latitude + "<br/>" + "Longitude: " + longitude;
// }


// function onErrorLL(error) {
// 	console.error('Request failed', error);
// 	var weatherBox = document.getElementById('cityplace');
// 	weatherBox.className = 'hidden'; 
// }

// getLL();





// Datum
function getDate() {

	var url = "https://api.nasa.gov/planetary/apod?api_key=";  
	var apiKey = "kYAkxKQkbFewCZfbguXUgldT18hOnYIU4W9WFOMk"

	var request = url + apiKey;
	
	fetch(request)
	
	.then(function(response) {
		if(!response.ok){ 
			throw Error(response.statusText); 
		}
		return response.json(); 
	})
	
	.then(function(response) {
		onSuccesDate(response);	
	})
	
	.catch(function (error) { 
		onErrorDate(error);
	});
}


function onSuccesDate(response) {
		// console.log(response);

		var datum= document.getElementById('datum');

		var date = response.date;

		datum.innerHTML = date;
}


function onErrorDate(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('datum');
	weatherBox.className = 'hidden'; 
}

getDate();





// DAGEN 1 NL NIET LANDEN
function getHolidayNL1() {

	var url = "https://calendarific.com/api/v2/holidays?country=NL&year=2018&api_key=";
	var apiKey = "a2550b70d28686bb5e3cfdd3fecf0885dd6a4c37";

	var request = url + apiKey;

	
	fetch(request)
	
	.then(function(response) {
		if(!response.ok){ 
			throw Error(response.statusText); 
		}
		return response.json(); 
	})
	
	.then(function(response) {
		onSuccesHolidayNL1(response);	
	})
	
	.catch(function (error) { 
		onErrorHolidayNL1(error); 
	});
}


function onSuccesHolidayNL1(response) {

	// console.log(response)
	var newYear = response.response.holidays[0].name;
	var remembrance = response.response.holidays[6].name;

	dag1NL.innerHTML = newYear + "<br>" + "12-31" + "<br>" + remembrance + "<br>" + "05-04";
}

function onErrorHolidayNL1(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('dag1NL');
	weatherBox.className = 'hidden'; 
}

getHolidayNL1();





// DAGEN NL VEEL ZONLICHT
function getHolidayNL2() {

	var url = "https://calendarific.com/api/v2/holidays?country=NL&year=2018&api_key=";
	var apiKey = "a2550b70d28686bb5e3cfdd3fecf0885dd6a4c37";

	var request = url + apiKey;

	
	fetch(request)
	
	.then(function(response) {
		if(!response.ok){ 
			throw Error(response.statusText); 
		}
		return response.json(); 
	})
	
	.then(function(response) {
		onSuccesHolidayNL2(response);	
	})
	
	.catch(function (error) { 
		onErrorHolidayNL2(error); 
	});
}


function onSuccesHolidayNL2(response) {

	// console.log(response)

	var juneSolstice = response.response.holidays[11].name;

	dag2NL.innerHTML = juneSolstice;
}

function onErrorHolidayNL2(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('dag2NL');
	weatherBox.className = 'hidden'; 
}

getHolidayNL2();





// DAGEN NZ NIET LANDEN
function getHolidayNZ1() {

	var url = "https://calendarific.com/api/v2/holidays?country=NZ&year=2018&api_key=";
	var apiKey = "a2550b70d28686bb5e3cfdd3fecf0885dd6a4c37";

	var request = url + apiKey;

	
	fetch(request)
	
	.then(function(response) {
		if(!response.ok){ 
			throw Error(response.statusText); 
		}
		return response.json(); 
	})
	
	.then(function(response) {
		onSuccesHolidayNZ1(response);	
	})
	
	.catch(function (error) { 
		onErrorHolidayNZ1(error); 
	});
}


function onSuccesHolidayNZ1(response) {

	// console.log(response)

	var newYear = response.response.holidays[0].name;

	dag1NZ.innerHTML = newYear;
}

function onErrorHolidayNZ1(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('dag1NZ');
	weatherBox.className = 'hidden'; 
}

getHolidayNZ1();





// DAGEN NZ VEEL ZONDLICHT
function getHolidayNZ2() {

	var url = "https://calendarific.com/api/v2/holidays?country=NZ&year=2018&api_key=";
	var apiKey = "a2550b70d28686bb5e3cfdd3fecf0885dd6a4c37";

	var request = url + apiKey;

	
	fetch(request)
	
	.then(function(response) {
		if(!response.ok){ 
			throw Error(response.statusText); 
		}
		return response.json(); 
	})
	
	.then(function(response) {
		onSuccesHolidayNZ2(response);	
	})
	
	.catch(function (error) { 
		onErrorHolidayNZ2(error); 
	});
}


function onSuccesHolidayNZ2(response) {

	// console.log(response)

	var juneSolstice = response.response.holidays[20].name;

	dag2NZ.innerHTML = juneSolstice;
}

function onErrorHolidayNZ2(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('dag2NZ');
	weatherBox.className = 'hidden'; 
}

getHolidayNZ2();






// WINDRICHTING
// function getWind(){

// // const box = '60,20:58,17';

// 	fetch('https://api.stormglass.io/point?lat=52&lng=5', {
// 	  	headers: {
// 	    	'Authorization': '39fcd91e-4fe2-11e9-928f-0242ac130004-39fcda0e-4fe2-11e9-928f-0242ac130004'
// 	  	}
// 	}).then(function(response) {
// 	  // Do something with response data.
// 	  return response.json();
// 	})
// 	.then(function(response) {

// 		erKomtIetsBinnen(response);
// 	});

// }

// getWind();


// function erKomtIetsBinnen(response){
// 	console.log(response);
// }




// //Voorspellingen 
// function getAPIdata() {
// 	var url = "https://api.openweathermap.org/data/2.5/forecast";
// 	var apiKey ="59ad14b3e7bc3b73d905218a25f8163c";
// 	var city = "Amsterdam";

// 	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
// 	fetch(request)

// 	.then(function(response) {
// 		if(!response.ok) throw Error(response.statusText);
// 		return response.json();
// 	})
	
// 	.then(function(response) {

// 		console.log(response);
// 		onAPISucces(response);
// 	})
	
// 	.catch(function (error) {
// 		console.error('Request failed', error);
// 	});
// }


// function onAPISucces(response) {

// 	// console.log(response);
// 	document.getElementById('voorspellingNL').innerHTML = response.list[3].weather[0].main; 
// }


// function updateUIError() {
// 	var weatherBox = document.getElementById('voorspellingNL');
// 	weatherBox.className = 'hidden'; 
// }


// function formDate(date) {
// 	var day = date.getDate();
// 	var month = date.getMonth() + 1;
// 	return day +' / '+ month;
// }


// function formTime(date) {
// 	var hours = date.getHours();
// 	if(hours<10){
// 		hours = '0'+hours;
// 	}
// 	var minutes = date.getMinutes();
// 	if(minutes < 10){
// 		minutes = '0'+ minutes;
// 	}
// 	return hours +':'+ minutes;
// }

// getAPIdata();






