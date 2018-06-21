document.getElementById("one").textContent = "Coding is Life"

var myH1 = document.getElementById("two");


function greet() {
	var userName = document.getElementById("userName").value;
	// document.write("Hello " + userName + "!");
	console.log(userName);
		myH1.innerText = userName;
}


var myArray = ["We", "learn", "javascript", "on", "Mondays"];

for(var i=0; i<myArray.length; i++) {
	console.log(myArray[i]);
}


var myDog = {
	name: "Zorie",
	age: 3,
	isSpoiled: true
};

console.log(myDog.name); 
console.log(myDog.age);
console.log(myDog.isSpoiled);

var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");

	three.innerText = myDog.name;
	four.innerText = myDog.age;
	five.innerText = myDog.isSpoiled;

var newArray = [
		{
			movie: "Ocean's 8",
			genre: "Crime film/Action",
			rating: "66% on rotten tomatoes"
		},
		{
			movie: "Superfly",
			genre: "Action, Crime, Thriller",
			rating: "52% on rotten tomatoes"
		},
		{
			movie: "Blockers",
			genre: "Comedy",
			rating: "83% on rotten tomatoes"
		}
]; 

for (i=0; i<newArray.length; i++) {
	console.log(newArray[i].movie);
	console.log(newArray[i].genre);
	console.log(newArray[i].rating);
}

document.body.style.color = "red";


 	

