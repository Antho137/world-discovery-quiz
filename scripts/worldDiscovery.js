let getValues = document.getElementById("button1");
getValues.addEventListener("click", function (txt) {
	let rightanswers = 0;
	txt = document.getElementsByName("txtField");

	if (txt[0].value === "nile") {
		txt[0].style.backgroundColor = '#32CD32';
		rightanswers++;
	}
	else {
		txt[0].style.backgroundColor = '#FF1493';
	}

	if (txt[1].value === "amazon") {
		txt[1].style.backgroundColor = '#32CD32';
		rightanswers++;
	}
	else {
		txt[1].style.backgroundColor = '#FF1493';
	}

	if (txt[2].value === "everest") {
		txt[2].style.backgroundColor = '#32CD32';
		rightanswers++;
	}
	else {
		txt[2].style.backgroundColor = '#FF1493';
	}

	if (txt[3].value === "berne") {
		txt[3].style.backgroundColor = '#32CD32';
		rightanswers++;
	}
	else {
		txt[3].style.backgroundColor = '#FF1493';
	}

	if (txt[4].value === "5") {
		txt[4].style.backgroundColor = '#32CD32';
		rightanswers++;
	}
	else {
		txt[4].style.backgroundColor = '#FF1493';
	}

	if (txt[5].value === "greenland") {
		txt[5].style.backgroundColor = '#32CD32';
		rightanswers++;
	}
	else {
		txt[5].style.backgroundColor = '#FF1493';
	}

	if (txt[6].value === "pacific") {
		txt[6].style.backgroundColor = '#32CD32';
		rightanswers++;
	}
	else {
		txt[6].style.backgroundColor = '#FF1493';
	}

	if (txt[7].value === "english") {
		txt[7].style.backgroundColor = '#32CD32';
		rightanswers++;
	}
	else {
		txt[7].style.backgroundColor = '#FF1493';
	}

	if (txt[8].value === "christianity") {
		txt[8].style.backgroundColor = '#32CD32';
		rightanswers++;
	}
	else {
		txt[8].style.backgroundColor = '#FF1493';
	}

	if (txt[9].value === "roman empire") {
		txt[9].style.backgroundColor = '#32CD32';
		rightanswers++;
	}
	else {
		txt[9].style.backgroundColor = '#FF1493';
	}

	document.getElementById("message").innerHTML = "You got " + rightanswers + " out of 10 answers correct." + "<br>";
	if (rightanswers === 10 || rightanswers === 9) {
		document.getElementById("message").innerHTML += "You did it. Very good, Congratulations!";
	}

	if (rightanswers === 8 || rightanswers === 7) {
		document.getElementById("message").innerHTML += "You are there. Good, Congratulations!";
	}

	if (rightanswers === 6 || rightanswers === 5) {
		document.getElementById("message").innerHTML += "You can do better. Try again!";
	}

	if (rightanswers < 5) {
		document.getElementById("message").innerHTML += "You have to study and learn more about the subject!";
	}

	document.getElementById("message").style.display = "block";
});

let resetButton = document.getElementById("button2");
resetButton.addEventListener("click", function() {	
	// Empty selected values on the form and displayed message on the document
    const options = document.querySelectorAll('#Text1, #Text2, #Text3, #Text4, #Text5, #Text6, #Text7, #Text8, #Text9, #Text10');
	options.forEach(option => {
		option.value = "";
		option.style.backgroundColor = '#ffffff';
		document.getElementById("message").innerHTML = "";
		document.getElementById("message").style.display = "none";
	});
});

// get the current year
function updateYear() {
	let now = new Date();
	let theYear = now.getFullYear();
	let thisYear = document.getElementById("ye");
	thisYear.innerHTML = theYear;
	return theYear;
}
updateYear();