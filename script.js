var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

// Measures inputLength for user inserted value

function inputLength() {
	return input.value.length;
}

// Toggles CSS class "done" on click for target

function clickStrike(cs){
	cs.target.classList.toggle("done");
}

// Adds EventListener to ul for click to apply above

ul.addEventListener("click", clickStrike, false);

// Removes parent node of target - called in button btn.onclick

function removeParent(evt) {
   evt.target.parentNode.remove();
}

// This adds Delete to the existing "li" elements

li.forEach(function(delbtn){

	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;
	delbtn.appendChild(btn);
})

// Delete button in function - better way - UNDER CONSTRUCTION

// function delBtn() {
// 	var btn = document.createElement("button");
// 	btn.innerHTML = "Delete";
// 	btn.onclick = removeParent;
// 	ul.appendChild(btn);
// }

// li.forEach(function(){
// 	delBtn();
// })

// Create li element from form data, add button and attach to ul

function createListElement() {

	// Create button
	
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	// Create "li" element as text node

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	// Adds delete button to created li element

	li.appendChild(btn);

	// Adds created "li" element to "ul" element

	ul.appendChild(li);

	// Sets value of created element to input value

	input.value = "";
	
}

// Create list element after click on Submit button

function addListAfterClick() {
	if (inputLength() > 0) {
	createListElement();
	}
}

// Create list element after press of enter button

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
	createListElement();
	}
}

// Calls for the click on submit with click

button.addEventListener("click", addListAfterClick);

// Calls for the click on submit with enter

input.addEventListener("keypress", addListAfterKeypress);

