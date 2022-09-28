let checkboxes = document.querySelectorAll(".checkbox");
let status = document.querySelector("#status");
let reset = document.querySelector("#reset");

let isChecked = function (e) {
 if (e.target.checked === true) {
  status.innerText = "Une checkbox a été activée";
  status.style.color = "green";
 } else {
  status.innerText = "Une checkbox a été désactivée";
  status.style.color = "red";
 }
}

checkboxes.forEach(function (e) {
 e.addEventListener("click", isChecked);
})

reset.addEventListener("click", function () {
 checkboxes.forEach(function (e) {
  e.checked = false;
 })
})