

/*-- Exercise 1 --*/
var elementNode = document.getElementById("birthdate");
elementNode.addEventListener("change", calculateYears, true);

function calculateYears() {
	
var startDate = new Date(),
    endDate   = new Date(document.getElementById("birthdate").value),
    differenz = (startDate.getTime() - endDate.getTime());
	years = parseInt(differenz/31536000000);
	
	
	document.getElementById("years").innerHTML = years;
}

/*-- Exercise 1 --*/

/*-- Exercise 2 --*/

var exercise2Node = document.getElementById("cutter");
	exercise2Node.addEventListener("click", abschneider, true);

	function abschneider(){
		var string = document.getElementById("texttocut").value;
		var cut = document.getElementById("cutposition").value;

		finaltext = string.slice(cut);

		document.getElementById("textoutput").innerHTML = finaltext;
	}
/*-- Exercise 2 --*/
