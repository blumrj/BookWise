// console.log("OK")

var bodyTag = document.getElementsByTagName("body")[0];
var path = window.location.pathname; // npr. /index.html
var page = path.split("/").pop(); // npr. index.html

// navigation

//stranice i linkovi stranica: (zamenice se kasnije sa bazom)
const navPagesAndLinks = [
    {
        id: 1,
        name: "Home",
        path: "index.html",
    },
    {
        id: 2,
        name: "Products",
        path: "products.html",
    },
    {
        id: 3,
        name: "About us",
        path: "aboutUs.html",
    },
    {
        id: 4,
        name: "Contact",
        path: "contact.html",
    },
    {
        id: 5,
        name: "Login/Sign up",
        path: "#",
    }
]

const navigation = document.getElementsByTagName("nav")[0];
navigation.classList.add("nav-container", "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "uppercase", "nav-dark");

// burger
const burger = document.createElement("div");
burger.setAttribute("id", "burger");
for(i=0; i<3; i++){
    let burgerLine = document.createElement("div");
    burgerLine.classList.add("burger-line");
    burger.appendChild(burgerLine);
}
navigation.appendChild(burger);

// ul
const ul = document.createElement("ul");
ul.setAttribute("id", "navUl")
navigation.appendChild(ul);

navPagesAndLinks.forEach(item => {
    var liTag = document.createElement("li");
    var aTag = document.createElement("a");
    aTag.href = item.path;
    aTag.innerHTML = item.name;
    liTag.appendChild(aTag);
    ul.appendChild(liTag)
    if(item.path=='#'){
        liTag.setAttribute("id", "loginSignUpModalButton");
    }
})


//mobile navigation 
function openOrCloseMobileNavigation(){
        var burger = document.querySelector("#burger");
        var navUl =  document.querySelector("#navUl");

        if(!navUl.classList.contains("active")){
            burger.classList.add("active");
            navUl.classList.add("active");
        }
        else{
            burger.classList.remove("active");
            navUl.classList.remove("active");
        }
}

document.querySelector("#burger").addEventListener("click", () => {
    openOrCloseMobileNavigation()
})

// nav logo
const navigationLogo = [
    {
        id: 1,
        name: "BookWise",
        path: "index.html",
        isDdl: false,
    }
]

const navLogo = document.createElement("p");
const navLogoLink = document.createElement("a");
navLogo.classList.add("logo");
navLogoLink.setAttribute("href", "index.html");
navLogoLink.innerText="BookWise";
navigation.appendChild(navLogo)
navLogo.appendChild(navLogoLink);

// shopping cart

const shoppingCart = document.createElement("i");
shoppingCart.classList.add("fa-solid", "fa-cart-shopping")
navigation.appendChild(shoppingCart);

// login sign up modal

const loginOrSignUpButtons = [
    {
        id: 1,
        value: "Login",
        idAttribute: "loginButton",
    },
    {
        id: 2,
        value: "Sign up",
        idAttribute: "signUpButton",
    },
]

var modal = document.createElement("div");
modal.setAttribute("id", "loginSignUpModal");
        modal.innerHTML = "<div id='loginSignUpModal'><span id='closeLoginSignUpModalButton'></span><div id='loginSignUpButtonsDiv'><input type='button' id='loginButton' class='loginSignUpButtons active' value='Login'/><input type='button' id='signUpButton' class='loginSignUpButtons' value='Sign Up'/></div><div><form id='loginSignUpForm' name='loginSignUpForm' ></form></div></div>";

bodyTag.appendChild(modal);

function openLoginSignUpModal(){
    document.querySelector("#loginSignUpModalButton").addEventListener("click", () => {
        openOrCloseMobileNavigation()
        makeLoginSignUpForm()
        console.log("otvoreno");
    })
}

openLoginSignUpModal()

// function createModal(){
//     // creating a modal
//     var modal = document.createElement("div");
//     modal.setAttribute("id", "loginSignUpModal");
//     // modal.classList.add("active")
//     // openLoginSignUpModal()
//     //making buttons div
//     var buttonsDiv = document.createElement("div");
//     buttonsDiv.classList.add("loginSignUpButtonsDiv");
//     //making buttons
//     modal.appendChild(buttonsDiv);
//     loginOrSignUpButtons.forEach(item => {
//         var button = document.createElement("input");
//         button.type = "button";
//         button.classList.add("loginSignUpButtons")
//         button.setAttribute("id", item.idAttribute);
//         button.value = item.value;
//         buttonsDiv.appendChild(button)
//         buttonsDiv.firstElementChild.classList.add("active");
//     })
//     bodyTag.appendChild(modal);

//     // creating a form
//     var loginSignUpForm = document.createElement("form");
//     loginSignUpForm.id = "loginSignUpForm";
//     loginSignUpForm.name = "loginSignUpForm";
//     // var formDiv = "<div class='formDiv d-flex flex-direction-column'><label for='inputTextLogin'>Username:</label><input type='text' id='inputTextLogin' name='inputTextLogin'/></div><div class='formDiv d-flex flex-direction-column'><label for='inputPasswordLogin'>Password:</label><input type='password' id='inputPasswordLogin' name='inputPasswordLogin'/></div>";
//     // loginSignUpForm.innerHTML = formDiv;
//     // modal.appendChild(loginSignUpForm);
//     // presenting data based on which button is active
//     toggleLoginSignUpButtons();

//     var exitButton = document.createElement("span");
//     exitButton.setAttribute("id", "closeLoginSignUpModalButton")
//     exitButton.innerHTML = "";

//     modal.appendChild(exitButton);

//     closeLoginSignUpModal()
// }

// function toggleLoginSignUpButtons(){
    document.querySelectorAll(".loginSignUpButtons").forEach(element => {
        element.addEventListener("click", () => {
            // finding the currently active button
            var currentlyActiveButton = document.querySelector(".loginSignUpButtons.active");
            //if the active button is different than the clicked element, we remove the active class from the active button
            if(currentlyActiveButton && currentlyActiveButton!==element){
                currentlyActiveButton.classList.remove("active");
                makeLoginSignUpForm();
            }
            //adding an active class to the current element
            element.classList.add("active");
        })
    })
// }

// toggleLoginSignUpButtons()

function makeLoginSignUpForm(){
     // finding the currently active button
    var currentlyActiveButton = document.querySelector(".loginSignUpButtons.active");
    var signUpButton = document.querySelector("#signUpButton");
    // finding one of the buttons
    var loginSignUpForm = document.querySelector("#loginSignUpForm");
    if(currentlyActiveButton==signUpButton){
        loginSignUpForm.innerHTML = "<div class='formDiv d-flex flex-direction-column'><label for='inputTextLogin'>Username:</label><input type='text' id='inputTextLogin' name='inputTextLogin'/></div>";
    }
    else{
        loginSignUpForm.innerHTML = "<div class='formDiv d-flex flex-direction-column'><label for='inputTextLogin'>Username:</label><input type='text' id='inputTextLogin' name='inputTextLogin'/></div><div class='formDiv d-flex flex-direction-column'><label for='inputPasswordLogin'>Password:</label><input type='password' id='inputPasswordLogin' name='inputPasswordLogin'/></div>";
    }
}




function closeLoginSignUpModal(){
    document.querySelector("#closeLoginSignUpModalButton").addEventListener("click", () => {
    document.querySelector("#loginSignUpModal").classList.remove("active");
    console.log("zatvoreno");
    })
}
