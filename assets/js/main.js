// console.log("OK")

var bodyTag = document.getElementsByTagName("body")[0];
var path = window.location.pathname; // npr. /index.html
var page = path.split("/").pop(); // npr. index.html

//stranice i linkovi stranica: (zamenice se kasnije sa bazom)
const navPagesAndLinks = [
    {
        id: 1,
        name: "Home",
        path: "index.html",
        isDdl: false,
    },
    {
        id: 2,
        name: "Products",
        path: "products.html",
        isDdl: true,
    },
    {
        id: 3,
        name: "About us",
        path: "aboutUs.html",
        isDdl: false,
    },
    {
        id: 4,
        name: "Contact",
        path: "contact.html",
        isDdl: false
    },
]

const navigation = document.getElementsByTagName("nav")[0];

const ul = document.createElement("ul");
navigation.appendChild(ul);

window.addEventListener("DOMContentLoaded", () => {
    let pagesAndLinks = navPagesAndLinks.map(item => {
        // if(item.isDdl){
        //     return ``;
        // }
        return `<li><a href='${item.path}'>${item.name}</a></li>`;
    })
    ul.innerHTML = pagesAndLinks.join("");
})
