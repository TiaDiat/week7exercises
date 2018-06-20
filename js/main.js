document.getElementById("one").textContent = "Coding is Life"

var myH1 = document.getElementById("two");


function greet() {
	var userName = document.getElementById("userName").value;
	// document.write("Hello " + userName + "!");
	console.log(userName);
		myH1.innerText = userName;
}


var myArray = ["We", "learn", "code", "on", "Mondays"];

for(var i=0; i<myArray.length; i++) {
	console.log(myArray[i]);
}


	


 	

