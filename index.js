function enableInput(event){
	event.preventDefault();
	event.stopPropagation();
	event.target.disabled = false;
}

function disableInputs(event){
	document.querySelectorAll(".card-input").forEach(element => {
		element.disabled = true;
	})
}