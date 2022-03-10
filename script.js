//Gets access to elements in the html file
const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allItem = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

//Allows user to click pencil icon to delete full list of items
pencil.addEventListener("click", function(){
  allItems.innerHTML = "";
})

//Allows user to click "Enter" to add new list item
//Calls funtion "addItem"
userInput.addEventListener("keydown", function(event){
  if(event.key == "Enter")
addItem();
})

function addItem(){
  let h2 = document.createElement("h2");
  h2.innerHTML = "- " + userInput.value;

//Draws line through list items when clicked
h2.addEventListener("click" , function(){
  h2.style.textDecoration = "line-through";
})

//Adds h2 element to allItems container
//Always inserts grocery list item at the end of list
 allItem.insertAdjacentElement("beforeend", h2);

//Deletes text in input box after clicking "Enter"
userInput.value = "";
}