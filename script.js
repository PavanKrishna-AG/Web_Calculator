let calculation = localStorage.getItem("save") || "";
display();
function update(value) {
	calculation += value;
	console.log(calculation);
	display();
	localStorage.setItem("save", calculation);
}
function display() {
	document.querySelector(".text").innerHTML = `${calculation}`;
}
function errors() {
	document.querySelector(".text").innerHTML = `${"Error"}`;
}
