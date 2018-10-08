// write your JS code here

let arrays = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function init() {
	
	for (let i = 0; i < 26; i++) {
		document.querySelector(".some").innerHTML +=`<div class="image" onclick="initialize(${arrays[i]})">${arrays[i]}</div>`;
	}


initialize('args');
function initialize(Index) {
	console.log(Index);
	let div = document.querySelector(".cards").innerHTML += Index;
}
}