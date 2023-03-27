let buttonRef = document.querySelector("#clickMe")

// function alertUser() {
//     alert("You Clicked!!!");
//     //buttonRef.removeEventListener("click", alertUser);
// }

// buttonRef.addEventListener("click", alertUser, {once:true});

// function changeBGPink() {
//     document.body.style.backgroundColor = 'pink';
//     //document.body.classList.add("pinkBG");
// }
// buttonRef.addEventListener("click", changeBGPink);



// function changeText () {
//     // if the button says click me change the textcontent to clicked!
//     //else if it says "Clicked!" update it to "Click Me!"
//     if (buttonRef.textContent === "Click Me!"){
//     buttonRef.textContent = "Clicked!";
//     } else {
//         buttonRef.textContent = "Click Me!"
//     }
// }
// buttonRef.addEventListener("click", changeText);

// function updateImage(){
//     const image = document.querySelector("#shoppingCart");
//     image.setAttribute("src", "images/shopping-cart.png");
//     image.setAttribute("width", "50");
//     image.setAttribute("height", "50");
//     image.setAttribute("alt", "shopping cart icon");
// }
// buttonRef.addEventListener("click", updateImage);


const buttonContainer = document.querySelector(".button-container");
function changeBGGreen(event) {
    console.log(event.target);
    //event.target.style.backgroundColor = 'green'
    if (event.target === "BUTTON"){
        event.target.classList.add("greenBG");
    }
}
buttonContainer.addEventListener("click", changeBGGreen)