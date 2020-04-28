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

// Delete button in function - better way - UNDER CONSTRUCTION

function delBtn() {
	btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;
	return btn;
}

// Add delete button for each existing li

li.forEach(function(delbtn){

	delButton = delBtn();
	delbtn.appendChild(delButton);
})

// Create li element from form data, add button and attach to ul

function createListElement() {

	// Create "li" element as text node

	li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	// Adds created "li" element to "ul" element

	ul.appendChild(li);

	// Adds delete button to newly created li
	
	delButton = delBtn();
	li.appendChild(delButton);
	
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

