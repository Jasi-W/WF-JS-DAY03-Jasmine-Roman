

/*-- Basic Exercise 1 --*/
var elementNode = document.getElementById("birthdate");
elementNode.addEventListener("change", calculateYears, true);

function calculateYears() {
	
var startDate = new Date(),
    endDate   = new Date(document.getElementById("birthdate").value),
    differenz = (startDate.getTime() - endDate.getTime());
	years = parseInt(differenz/31536000000);
	
	
	document.getElementById("years").innerHTML = years;
}

/*-- Basic Exercise 2 --*/

var exercise2Node = document.getElementById("cutter");
	exercise2Node.addEventListener("click", abschneider, true);

	function abschneider(){
		var string = document.getElementById("textocut").value;
		var cut = document.getElementById("cutposition").value;

		finaltext = string.slice(cut);

		document.getElementById("textoutput").innerHTML = finaltext;
	}

/*-- Exercise 2 --*/

/*-- Exercise 3 --*/

var nameI = "John";
var surenameI = "Doe";
var ageI = 33;
var vitaI = "programmer";

function PersonalConstructor(name, surename, age, vita){
	this.name = name;
	this.surename = surename;
	this.age = age;
	this.vita = vita;
}

function personal(){
	var daten = new PersonalConstructor(nameI, surenameI, ageI, vitaI);
	document.getElementById("personaloutput").innerHTML = "Hi, I am " + daten.name + " " + daten.surename+ " I am " + daten.age+ " years old and want to become a " + daten.vita;
}

var personalNode = document.getElementById("btnBasic3");
	personalNode.addEventListener("click", personal , true);


/*-- Exercise 3 --*/
	
/*------------------------------------------ Intermediate Exercise 2 ------------------------------*/

var hotelNode0 = document.getElementById("hotel_1");
	hotelNode0.addEventListener("change", inputCheck, true);

var hotelNode1 = document.getElementById("hotel_2");
	hotelNode1.addEventListener("change", inputCheck, true);

var hotelNode2 = document.getElementById("hotel_3");
	hotelNode2.addEventListener("change", inputCheck, true);


function HotelConstructor(hotelname, rooms, booked){
	this.name = hotelname;
	this.rooms = rooms;
	this.booked = booked;
	this.checkFreeRooms = function(){
		return this.rooms - this.booked;
	};
}
function inputCheck(){

var HotelOne = new HotelConstructor("One",10, Math.floor(Math.random() * (10-1 +1))+ 1);
var HotelTwo = new HotelConstructor("Two",10, Math.floor(Math.random() * (10-1 +1))+ 1);
var HotelThree = new HotelConstructor("Three", 10, Math.floor(Math.random() * (10-1 +1))+ 1);

var alleHotels = [HotelOne,HotelTwo,HotelThree];


	var allFree = [];
	var checkOne = document.getElementById("hotel_1").value;
	var checkTwo = document.getElementById("hotel_2").value;
	var checkThree = document.getElementById("hotel_3").value;

	if (checkOne!=0 && checkTwo !=0 && checkThree !=0){

		for (i=0; i < alleHotels.length; i++){
			allFree.push(alleHotels[i].checkFreeRooms());

			let bookbtn  = document.createElement("BUTTON");
			bookbtn.innerHTML = "book";
			
			//document.getElementById('result_'+(i+1)).removeChild(bookbtn);

			if (alleHotels[i].checkFreeRooms()==0){
				document.getElementById('result_'+(i+1)).innerHTML = "Sorry, no free room for " + document.getElementById("hotel_"+(i+1)).value + " nights.";
			}else{
					//bookbtn.id = "btnId"+i;
				document.getElementById('result_'+(i+1)).appendChild(bookbtn);

			}	
		}
	}	
console.log(allFree);
}


