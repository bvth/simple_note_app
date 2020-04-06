function addCard(event){
	let div = document.createElement("div");
	div.className = "card";
	let textarea = document.createElement("textarea");
	textarea.className = "card-input";
	textarea.rows = "5";
	textarea.cols = "20";
	div.appendChild(textarea);
	document.querySelector(".board").appendChild(div);
}