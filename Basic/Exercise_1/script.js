

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
