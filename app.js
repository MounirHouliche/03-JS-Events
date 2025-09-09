const button = document.querySelector("button");
console.log(button.textContent);

button.addEventListener("mouseover", function (event) {
    console.log(event);
});