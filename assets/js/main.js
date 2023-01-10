
var bodyTag = document.getElementsByTagName("body")[0];
var path = window.location.pathname; // npr. /index.html
var page = path.split("/").pop(); // npr. index.html

// initializing aos
AOS.init();

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
        path: "index.html#aboutUs",
    },
    {
        id: 4,
        name: "Contact",
        path: "index.html#contactUs",
    },
    {
        id: 5,
        name: "Log In / Sign up",
        path: "#",
    }
]

//books

const books = [
    {
        id: 1,
        title: "Killing Secrects",
        author: "Fergus Wormald",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/KillingSecrets.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "11",
    },
    {
        id: 2,
        title: "Two side",
        author: "Pedro Fernandes",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/TwoSide.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "1",
    },
    {
        id: 3,
        title: "The Silver Tower",
        author: "Liyah Warner",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/TheSilverTower.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 4,
        title: "Our Last Summer",
        author: "Claudia Wilson",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/OurLastSummer.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
        
    },
    {
        id: 5,
        title: "Simplicity",
        author: "Adeline Palmerston",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/Simplicity.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
        
    },
    {
        id: 6,
        title: "The South Witch",
        author: "Derek Towns",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/TheSouthWitch.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 7,
        title: "Leader",
        author: "Rachelle Beudry",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/Leader.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 8,
        title: "Jamie",
        author: "Lorna Alvarado",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/Jamie.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 9,
        title: "Darkness, Fade",
        author: "James Lopez",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/DarknessFade.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 10,
        title: "The Lost Room",
        author: "Rufus Stewart",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/TheLostRoom.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 11,
        title: "I Want Sleep Today",
        author: "Juliana Silvia",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/IWantSleepToday.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 12,
        title: "Alone In The Desert",
        author: "Estelle Darcy",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/AloneInTheDesert.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 13,
        title: "Theory Of Happiness",
        author: "Donna Stroupe",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/TheoryOfHappiness.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 14,
        title: "Flower Garden",
        author: "Helene Pequet",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/FlowerGarden.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 15,
        title: "Alone In The Wilderness",
        author: "Estelle Darcy",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/AloneInTheWilderness.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 16,
        title: "Reflect",
        author: "Adeline Palmerston",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/Reflect.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 17,
        title: "Greta",
        author: "Lorna Alvarado",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/Greta.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 18,
        title: "Watercolor",
        author: "Helene Pequet",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/Watercolor.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 19,
        title: "The Secret Wooden Door",
        author: "Rufus Stewart",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/TheSecretWoodenDoor.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "10",
    },
    {
        id: 20,
        title: "Chinese Myths",
        author: "Soo Jin Ae",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/ChineseMyths.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "10",
    },
]

const navigation = document.getElementsByTagName("nav")[0];
navigation.classList.add("nav-container", "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "nav-light");

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
    liTag.addEventListener("click", () => {
        openPages(item.path);
    })
    var aTag = document.createElement("a");
    aTag.href = item.path;
    aTag.innerHTML = item.name;
    liTag.appendChild(aTag);
    ul.appendChild(liTag)
    if(item.path=='#'){
        liTag.setAttribute("id", "loginSignUpModalButton");
    }
    if(item.path==page){
        liTag.classList.add("activePage");
    }
    if(page==''){
        document.querySelector("#navUl").firstElementChild.classList.add("activePage");
    }
})

function openPages(path){
    window.open(path, "_self");
}

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

document.querySelectorAll("#navUl li").forEach(element => {
    element.addEventListener("click", () => {
        openOrCloseMobileNavigation();
    })
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

// const shoppingCart = document.createElement("i");
// shoppingCart.classList.add("fa-solid", "fa-cart-shopping")
// navigation.appendChild(shoppingCart);
var shoppingCart = document.createElement("div");
shoppingCart.setAttribute("id", "shoppingCart")
shoppingCart.innerHTML = `<a href='shopping-cart.html'><i id="cart" class="fas fa-shopping-cart"></i></a>
<span class ="cartQuantity">0</span>`;
navigation.appendChild(shoppingCart);


var cartQuantity = document.querySelector(".cartQuantity");
if(cartQuantity.innerHTML == '0' && page == 'shopping-cart.html'){
    console.log("mista")
    document.querySelector(".shoppingCartContent").innerHTML = 'You dont have any products yet'
}

function addToCart(id){
    console.log(id)
    cartQuantity.innerHTML = parseInt(cartQuantity.innerHTML) + 1; 
}



// login sign up modal

var modal = document.createElement("div");
modal.setAttribute("id", "loginSignUpModal");

modal.innerHTML = `
<span id='closeLoginSignUpModalButton'></span>
<div id='loginSignUpButtonsDiv'>
<div id='buttonColor'></div>
<button id='loginButton' class='loginSignUpButtons active'>Log in</button>
<button id='signUpButton' class='loginSignUpButtons'>Sign Up</button>
</div>
<div>
<form id='loginSignUpForm' name='loginSignUpForm'></form>
</div>`;

bodyTag.appendChild(modal);

function openLoginSignUpModal(){
    var modal = document.querySelector("#loginSignUpModal");
    modal.classList.add("active");
    modal.style.height = "450px";
    makeLoginSignUpForm();
}

function closeLoginSignUpModal(){
    document.querySelector("#loginSignUpModal").classList.remove("active");
    modal.style.height = 0;
}

document.querySelector("#closeLoginSignUpModalButton").addEventListener("click", () => {
    closeLoginSignUpModal();
})

document.querySelector("#loginSignUpModalButton").addEventListener("click", () => {
    openLoginSignUpModal();
})

document.querySelectorAll(".loginSignUpButtons").forEach(element => {
    element.addEventListener("click", () => {
        // finding the currently active button
        var currentlyActiveButton = document.querySelector(".loginSignUpButtons.active");
        //if the active button is different than the clicked element, we remove the active class from the active button
        if(currentlyActiveButton && currentlyActiveButton!==element){
            currentlyActiveButton.classList.remove("active");
            //adding an active class to the current element
            element.classList.add("active");
            makeLoginSignUpForm();
        }
    })
})

function makeLoginSignUpForm(){
     // finding the currently active button
    var currentlyActiveButton = document.querySelector(".loginSignUpButtons.active");
    var signUpButton = document.querySelector("#signUpButton");
    // finding one of the buttons
    var loginSignUpForm = document.querySelector("#loginSignUpForm");
    if(currentlyActiveButton==signUpButton){
        loginSignUpForm.innerHTML =`<p>Create a new account:</p>
        <div class='formDiv d-flex flex-direction-column'>
            <input type='email' id='signUpEmail' name='signUpEmail' class='input-field' placeholder='Email' onblur="checkRegex(regexEmail, this)"/>
        </div>
        <div class='formDiv d-flex flex-direction-column'>
            <input type='text' id='signUpUsername' name='signUpUsername' class='input-field' placeholder='Username' onblur="checkRegex(regexUsername, this)"/>
        </div>
        <div class='formDiv position-relative d-flex flex-direction-column'>
            <input type='password' id='signUpPassword' name='signUpPassword' class='input-field' placeholder='Password' onblur="checkRegex(regexPassword, this)"/>
            <i class="fa-regular fa-eye-slash togglePassword" onclick='changePasswordVisibility(this)'></i>
        </div>
        <div class='formDiv position-relative d-flex flex-direction-column'>
            <input type='password' id='signUpRepeatedPassword' name='signUpRepeatedPassword' class='input-field' placeholder='Repeat password'/>
            <i class="fa-regular fa-eye-slash togglePassword" onclick='changePasswordVisibility(this)'></i>
        </div>
            <input type='button' name='confirmSignUpButton' id='confirmSignUpButton' class='modalButton button' value='Sign Up' onclick='checkSignUpForm(this)'/>`;
    }
    else{
        loginSignUpForm.innerHTML = `<p>Log into your account:</p>
        <div class='formDiv d-flex flex-direction-column'>
            <input type='text' id='logInUsernameEmail' name='logInUsernameEmail' class='input-field' placeholder='Username' onblur='checkRegex(regexUsername, this)'/>
        </div>
        <div class='formDiv position-relative d-flex flex-direction-column'>
            <input type='password' id='logInPassword' name='logInPassword' class='input-field' placeholder='Password' onblur='checkRegex(regexPassword, this)'/>
            <i class="fa-regular fa-eye-slash togglePassword" onclick='changePasswordVisibility(this)'></i>
        </div>
        <input type='button' name='confirmLoginButton' id='confirmLoginButton' class='modalButton button' value='Log In' onclick='checkLogInForm(this)'/>`;
    }
}

//password visibility function
function changePasswordVisibility(element){
    //getting the password element
    var passwordElement = element.previousElementSibling;

    //changing the type of the password element
    var type = passwordElement.getAttribute("type") === "password" ? "text" : "password";
    passwordElement.setAttribute("type", type);

    //toggle icon
    const eyeClassVisible = "fa-eye";
    const eyeClassUnvisible = "fa-eye-slash";
    element.classList.toggle(eyeClassUnvisible);
    element.classList.toggle(eyeClassVisible);
}

//REGEX

//first or Last name
var regexName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}$/;
//email
var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//textarea
var regexTextArea = /[0-9a-zA-Z]{5,}/;
//username
var regexUsername = /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
//password
//Minimum eight characters, at least one letter and one number
var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//check regex function
function checkRegex(regexPattern, formElement){
    var regex = regexPattern;
    var regexMatch = regex.test(formElement.value);
    if(regexMatch){
        formElement.style.borderColor = "initial";
        // formCorrect ++;
        return 0
    }
    else{
        formElement.style.borderColor = "red";
        return 1
    }
}

function checkLogInForm(element){
    var form = element.parentElement;
    
    var result = checkForm(element);

        if(result == 0){
            showSnackbar(`Welcome back, `);
            form.reset();
            closeLoginSignUpModal();
        }
        else{
            showSnackbar("Log In unsuccessful")
        }
}

function checkForm(element){
    var username = checkRegex(regexUsername, document.querySelector("#logInUsernameEmail"))
    var password = checkRegex(regexPassword, document.querySelector("#logInPassword"))
    var result = username + password;
    if(result == 0){
        return 0;
    }
    else{
        return 1;
    }
}

function checkSignUpForm(element){
    var form = element.parentElement;
    
    var email = checkRegex(regexEmail, document.querySelector("#signUpEmail"))
    var username = checkRegex(regexUsername, document.querySelector("#signUpUsername"))
    var password = checkRegex(regexPassword, document.querySelector("#signUpPassword"))
    var result = email + username + password;

        if(result == 0){
            showSnackbar(`Welcome, `);
            form.reset();
            closeLoginSignUpModal();
        }
        else{
            showSnackbar("Log In unsuccessful")
        }

}
//nav scroll and scroll to top

var scrollToTopBtn = document.createElement("button");
scrollToTopBtn.setAttribute("id", "scrollToTopButton");
scrollToTopBtn.innerHTML = `<i class="fa-solid fa-arrow-up">`;
bodyTag.appendChild(scrollToTopBtn);

//scroll to top
let scrollToTopButton = document.querySelector("#scrollToTopButton");
scrollToTopButton.addEventListener("click", () => {
    scrollToTop();
})

function scrollFunction(){
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        navigation.classList.remove("nav-light");
        navigation.classList.add("nav-dark");
        scrollToTopButton.style.display = "block";

    }
    else{
        navigation.classList.remove("nav-dark");
        navigation.classList.add("nav-light");
        scrollToTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", () => {
    scrollFunction();
})

// footer
var footer = document.createElement("footer");
footer.classList.add("nav-container", "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "nav-dark")
var footerInnerHtml = "<div><p><a href='index.html'>BookWise</a></p><a href='https://www.facebook.com/' target='_blank'><i class='fa-brands fa-facebook'></i></a><a href='https://www.instagram.com/' target='_blank'><i class='fa-brands fa-instagram'></i></a></div><div>";
navPagesAndLinks.forEach(element => {
    if(element.path=='#'){
        footerInnerHtml += `<p onclick='openLoginSignUpModal()'><a id='openLoginModal' href='${element.path}'>${element.name}</a></p>`;
    }
    else{
        footerInnerHtml += `<p><a href='${element.path}'>${element.name}</a></p>`;
    }
})
footerInnerHtml += `</div>
<div>
    <label for='newsletter'>Subscribe to out Newsletter</label>
    <div>
    <input type='email' name='newsletter' id='newsletter'/>
    <input type='button' name='newsletterButton' id='newsletterButton' class='button' value='Send'/>
    </div>
</div>`;

footer.innerHTML = footerInnerHtml;
bodyTag.appendChild(footer);

//snackbar
var snackbar = document.createElement("p");
snackbar.setAttribute("id", "snackbar");
bodyTag.appendChild(snackbar)


function showSnackbar(message){
    var snackbar = document.querySelector("#snackbar");
    snackbar.classList.add("active");
    snackbar.innerHTML = message;

    setTimeout(() => {
        snackbar.classList.remove("active");
    }, 3000);
}

function openProductPage(){
    window.open("product-page.html", "_self");
}





if(page=='index.html' || page==''){
// swiper.js
const headerImagesSwiper = new Swiper('.headerImagesSwiper', {
    // Optional parameters
    init: true,
    createElements: true,
    loop: true,
    centeredSlides: true,
    effect: 'slide',
    speed: 600,
    updateOnWindowResize: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

  const swiper = document.querySelector('.swiper').swiper;

  const headerImages = [
    {
        id: 1,
        title: "Chinese Myths",
        author: "Soo Jin Ae",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/ChineseMyths.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "10",
    },
    {
        id: 2,
        title: "Greta",
        author: "Lorna Alvarado",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/Greta.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
    {
        id: 3,
        title: "Leader",
        author: "Rachelle Beudry",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/Leader.jpg",
        alt: "Killing Secrects",
        price: "768 rsd",
        month: "12",
    },
  ]

  headerImages.forEach(image => {
    swiper.addSlide(image.id, `<div class="swiper-slide d-flex justify-content-between flex-wrap" id="headerSlide${image.id}" onclick="openProductPage()"><img src="${image.src}" alt="${image.alt}" class="img-fluid"><div class="headerText"><h1>${image.title}</h1><p>${image.author}</p></div></div>`);
  })

  const recommendedBooks = [
    {
        id: 1,
        path: "assets/img/books/Jamie.jpg",
        alt: "Answering The Sun",
    },
    {
        id: 2,
        path: "assets/img/books/DarknessFade.jpg",
        alt: "Dangerous Illusion",
    },
    {
        id: 3,
        path: "assets/img/books/Leader.jpg",
        alt: "Leader",
    },
    {
        id: 4,
        path: "assets/img/books/Simplicity.jpg",
        alt: "Simplicity",
    },
    {
        id: 5,
        path: "assets/img/books/TheLostRoom.jpg",
        alt: "The Silver Tower",
    },
  ]


// top 5 slider
const top5Slider = new Swiper('.top5Slider', {
    // Optional parameters
    init: true,
    createElements: true,
    loop: true,
    // updateOnWindowResize: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 640px
        1200: {
            slidesPerView: 5,
            spaceBetween: 40
          },
        920: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
          spaceBetween: 40
        },
        576: {
            slidesPerView: 2,
          spaceBetween: 40
        }
      }
  });

  var top5Slider1 = document.querySelector('.top5Slider').swiper;
  recommendedBooks.forEach(image => {
    top5Slider1.addSlide(image.id, `<div class="swiper-slide" onclick="openProductPage()" ><img src="${image.path}" alt="${image.alt}" class="img-fluid"><div class='overlay'><p>See more</p></div></div>`);
  })

  // book of the month
  var bookOfTheMonthDiv = document.querySelector("#bookOfTheMonthDiv");
  
  window.addEventListener("DOMContentLoaded", () => {
    var date = new Date();
    var todaysMonth = date.getMonth();
    books.forEach(book => {
        if(book.month == (todaysMonth + 1)){
            bookOfTheMonthDiv.innerHTML = `<div class="w-50">
            <h3 id="bookOfTheMonthName" class="mb-2">${book.title}</h3>
            <p id="bookOfTheMonthAuthor" class="mb-2">${book.author}</p>
            <p id="bookOfTheMonthNameDescription1" class="mb-5">${book.description}</p>
            <button class="addToCartButton button" onclick='showSnackbar("Item added to cart"), addToCart(${book.id})'>Add to cart</button>
            
        </div>
        <div>
            <img src="${book.src}" alt="${book.alt}" class="img-fluid"/>
        </div>`
        }
    })
  })

  //contact form

    function checkMessageForm(){
        var firstName = checkRegex(regexName, document.querySelector("#formName"));
        var lastName = checkRegex(regexName, document.querySelector("#formLastName"));
        var email = checkRegex(regexEmail, document.querySelector("#formEmail"));
        var textArea = checkRegex(regexTextArea, document.querySelector("#formTextArea"));

        var result = firstName + lastName + email + textArea;

        if(result == 0){
            return 0
        }
        else{
            return 1
        }
    }

    var contactFormButton = document.querySelector("#contactFormButton");
    contactFormButton.addEventListener("click", () => {
        var result = checkMessageForm();
        if(!result){
            showSnackbar("Message sent succesfully");
            document.querySelector("#contactForm").reset();
        }
        else{
            showSnackbar("Couldn't send a message");
        }
    })
}
if(page=="products.html"){
    var productCardsDiv = document.querySelector("#productCardsDiv");

    window.addEventListener("DOMContentLoaded", () => {
        books.forEach(book => {
            var productCard = document.createElement("div");
            productCard.classList.add("productCard");
            productCard.setAttribute("data-aos", "fade-up")
            productCard.innerHTML = `<div class="productCardImage"><img src='${book.src}' alt=${book.alt} class='productImg'/>
            <div class='overlay'><p>See more</p></div></div>
            <div>
                <h3 class='mb-2'>${book.title}</h3>
                <p class='mb-2'>${book.author}</p>
                <p class='mb-2'>${book.price}</p>
            </div>`;
            productCardsDiv.appendChild(productCard);

            productCard.addEventListener("click", () => {
                openProductPage();
            })
      })

    })

}

if(page=='product-page.html'){
    // navigation.classList.add("nav-light");
}



