let form = document.querySelector("#form_input");
let entry = document.querySelector("#entry");
let entryPlus = document.querySelector("#entry-plus");
let list = document.querySelector("#list");


// Function called when you're adding a new Todo in the Todolist
let addEntry = function (entry) {
 let newEntry = `<li><input type="checkbox" class="checkbox"> <span>${entry}</span> <i class="fa-solid fa-trash remove"></i></li>`;
 list.innerHTML += newEntry;
 form.reset();
 let check = document.querySelectorAll(".checkbox");
 // We put an event listener on all checkboxes when we're creating them
 check.forEach(function (e) {
  e.addEventListener("change", function (e) {
   e.target.parentElement.classList.toggle("done");
  })
 })

}

// When you're adding a new Todo, this is calling the addEntry function
// We're also preventing the submit to reload the page (or all is gone forever)
form.addEventListener("submit", function (e) {
 e.preventDefault();
 if (entry.value.length > 0) { // Doesn't add todo if the field is empty
  addEntry(entry.value);
 }
});

// The + button can also add a todo entry
entryPlus.addEventListener("click", function () {
 if (entry.value.length > 0) {
  addEntry(entry.value);
 }
});

// Function called when you want to remove a Todo
function removeTodo(e) {
 if (e.target.classList.contains('remove')) {
  e.target.parentElement.remove();
 }
}

// When you're clicking on a trash icon, this is calling removeTodo function
list.addEventListener('click', removeTodo);