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

//books

const books = [
    {
        id: 1,
        title: "Killing Secrects",
        author: "Fergus Wormald",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/KillingSecrets.jpg",
        alt: "Killing Secrects",
        month: "11",
    },
    {
        id: 2,
        title: "Killing Secrects2",
        author: "Fergus Wormald",
        description: "killingSecrets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae dignissimos dolore expedita architecto, at adipisci maiores fuga qui perspiciatis, a harum eaque consequuntur aliquid repellat, explicabo iure? At, aperiam?Reprehenderit deleniti, odio veniam sint maiores aperiam ullam! Impedit assumenda nulla fugiat dolorem non, odio magni! Libero minima sed natus deleniti quibusdam, magni, fuga magnam asperiores perspiciatis, eligendi placeat ipsam.",
        src: "assets/img/books/KillingSecrets.jpg",
        alt: "Killing Secrects",
        month: "12",
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
    if(item.path==page){
        liTag.classList.add("activePage");
    }
    if(page==''){
        document.querySelector("#navUl").firstElementChild.classList.add("activePage");
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

var modal = document.createElement("div");
modal.setAttribute("id", "loginSignUpModal");

modal.innerHTML = "<span id='closeLoginSignUpModalButton'></span><div id='loginSignUpButtonsDiv'><div id='buttonColor'></div><input type='button' id='loginButton' class='loginSignUpButtons active' value='Log in'/><input type='button' id='signUpButton' class='loginSignUpButtons' value='Sign Up'/></div><div><form id='loginSignUpForm' name='loginSignUpForm'></form></div>";

bodyTag.appendChild(modal);

function openLoginSignUpModal(){
    var modal = document.querySelector("#loginSignUpModal");
    modal.classList.add("active");
    modal.style.height = "450px";
    openOrCloseMobileNavigation();
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
        loginSignUpForm.innerHTML = "<p>Create a new account: </p><div class='formDiv d-flex flex-direction-column'><input type='text' id='inputTextSignUp' name='inputTextSignUp' class='input-field' placeholder='Username'/></div><div class='formDiv d-flex flex-direction-column'><input type='password' id='inputPasswordSignUp' name='inputPasswordSignUp' class='input-field' placeholder='Password'/></div><div class='formDiv d-flex flex-direction-column'><input type='password' id='inputRepeatedPasswordSignUp' name='inputRepeatedPasswordSignUp' class='input-field' placeholder='Repeat password'/></div><input type='button' name='confirmSignUpButton' id='confirmSignUpButton' class='modalButton' value='Sign Up'/>";
    }
    else{
        loginSignUpForm.innerHTML = "<p>Log into your account:</p><div class='formDiv d-flex flex-direction-column'><input type='text' id='inputTextLogin' name='inputTextLogin' class='input-field' placeholder='Username'/></div><div class='formDiv d-flex flex-direction-column'><input type='password' id='inputPasswordLogin' name='inputPasswordLogin' class='input-field' placeholder='Password'/></div><input type='button' name='confirmLoginButton' id='confirmLoginButton' class='modalButton' value='Log In'/>";
    }
}
function scrollNavigation(){
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        navigation.style.backgroundColor = 'var(--gray)'
    }
    else{
        navigation.style.backgroundColor = '';
    }
}
window.addEventListener("scroll", () => {
    scrollNavigation();
})

if(page=='index.html'){
// swiper.js
const headerImagesSwiper = new Swiper('.headerImagesSwiper', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    effect: 'fade',
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

  var bookOfTheMonthImg = document.querySelector("#bookOfTheMonthDiv img");
  var bookOfTheMonthName = document.querySelector("#bookOfTheMonthName");
  var bookOfTheMonthAuthor = document.querySelector("#bookOfTheMonthAuthor");
  var bookOfTheMonthNameDescription = document.querySelector("#bookOfTheMonthNameDescription");
  var date = new Date();
  var todaysMonth = date.getMonth()
  console.log(todaysMonth)
  window.addEventListener("DOMContentLoaded", () => {
    books.forEach(book => {
        if(book.month == (todaysMonth + 1)){
            bookOfTheMonthName.innerHTML = book.title;
            bookOfTheMonthAuthor.innerHTML = book.author;
            bookOfTheMonthNameDescription.innerHTML = book.description;
            bookOfTheMonthImg.src = book.src;
            bookOfTheMonthImg.alt = book.alt
        }
    })
  })

}



