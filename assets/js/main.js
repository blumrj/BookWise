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

// window.addEventListener("DOMContentLoaded", () => {
//     let pagesAndLinks = navPagesAndLinks.map(item => {
//         var liTag = document.createElement("li");
//         var aTag = document.createElement("a");
//         aTag.href = item.path;
//         aTag.innerHTML = item.name;
//         liTag.appendChild(aTag);
//         ul.appendChild(liTag)
//         if(item.path=='#'){
//             aTag.setAttribute("id", "loginSignUpModal")
//         }
//         // var liString = `<li><a href='${item.path}'>${item.name}</a></li>`;
//         return liTag;
//     })
//     // ul.innerHTML = pagesAndLinks.join("");
// })

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
function mobileNavigation(){

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
    mobileNavigation()
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
var loginSignUpModal = document.querySelector("#loginSignUpModalButton");
console.log(loginSignUpModal);
loginSignUpModal.addEventListener("click", () => {
    console.log("otvoreno");
    mobileNavigation()
    createModal()
})

function createModal(){
    var div = document.createElement("div");
    div.setAttribute("id", "loginSignUpModal")
    bodyTag.appendChild(div);
    console.log("uradjeno")
}