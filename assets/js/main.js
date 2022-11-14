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

window.addEventListener("DOMContentLoaded", () => {
    let pagesAndLinks = navPagesAndLinks.map(item => {
        // var liTag = document.createElement("li");
        // var aTag = document.createElement("a");
        // aTag.href = item.path;
        // aTag.innerHTML = item.name;
        // liTag.appendChild(aTag);
        if(item.path=='#'){
            var liString = `<li><a href='${item.path}' id='loginSignUpModal'>${item.name}</a></li>`;
            return liString;
        }
        var liString = `<li><a href='${item.path}'>${item.name}</a></li>`;
        return liString;
    })
    ul.innerHTML = pagesAndLinks.join("");
})

var loginSignUpModal = document.querySelector("#loginSignUpModal");
console.log(loginSignUpModal)

console.log(document.getElementsByTagName(ul));

//mobile navigation 
var isOpen = false;
document.querySelector("#burger").addEventListener("click", () => {
    if(!isOpen){
        document.querySelector("#burger").classList.add("active");
        document.querySelector("#navUl").classList.add("active");
        isOpen = true;
    }
    else{
        document.querySelector("#burger").classList.remove("active");
        document.querySelector("#navUl").classList.remove("active");
        isOpen = false;
    }
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
