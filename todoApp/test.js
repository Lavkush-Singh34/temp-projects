const button = document.querySelector(".container button");
// generate random hexColor
const hexColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`

button.addEventListener("click", () => {
    document.body.style.backgroundColor = hexColor();
})

document.body.style.backgroundColor= hexColor();
