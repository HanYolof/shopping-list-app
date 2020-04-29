var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function addLineThrough(e){
	e.target.classList.toggle("done");
}

function removeParent(e) {
   e.target.parentNode.remove();
}

function delBtn(e) {
	btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;
	return btn;
}

function addDelButtonToListItem(listitem){
	delButton = delBtn();
	listitem.appendChild(delButton);
}

li.forEach(addDelButtonToListItem)

function createListElement() {
	li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addDelButtonToListItem(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
	createListElement();
	}
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
	createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", addLineThrough);