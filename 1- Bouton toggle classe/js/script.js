let change = document.querySelectorAll(".change");
let buttonChange = document.querySelector("#button-change");

let addRedClass = function (e) {
 e.classList.toggle("red");
}

buttonChange.addEventListener("click", function () {
 change.forEach(addRedClass)
});