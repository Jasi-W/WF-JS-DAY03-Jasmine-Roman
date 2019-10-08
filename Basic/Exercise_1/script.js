
var elementNode = document.getElementById("birthdate");
elementNode.addEventListener("change", calculateYears, true);

function calculateYears() {
	var birthdate = document.getElementById("birthdate").value;
	var date = new Date();
	var years = date - birthdate;
	
	document.getElementById("years").innerHTML = years;
}
