

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
	
/*-- Intermediate Exercise 2 --*/


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
