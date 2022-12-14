
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
        month: "12",
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
        author: "Adeline Palmerston",
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
]

const navigation = document.getElementsByTagName("nav")[0];
navigation.classList.add("nav-container", "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "uppercase", "nav-light");

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
        loginSignUpForm.innerHTML = "<p>Create a new account: </p><div class='formDiv d-flex flex-direction-column'><input type='text' id='inputTextSignUp' name='inputTextSignUp' class='input-field' placeholder='Username'/></div><div class='formDiv d-flex flex-direction-column'><input type='password' id='inputPasswordSignUp' name='inputPasswordSignUp' class='input-field' placeholder='Password'/></div><div class='formDiv d-flex flex-direction-column'><input type='password' id='inputRepeatedPasswordSignUp' name='inputRepeatedPasswordSignUp' class='input-field' placeholder='Repeat password'/></div><input type='button' name='confirmSignUpButton' id='confirmSignUpButton' class='modalButton button' value='Sign Up'/>";
    }
    else{
        loginSignUpForm.innerHTML = "<p>Log into your account:</p><div class='formDiv d-flex flex-direction-column'><input type='text' id='inputTextLogin' name='inputTextLogin' class='input-field' placeholder='Username'/></div><div class='formDiv d-flex flex-direction-column'><input type='password' id='inputPasswordLogin' name='inputPasswordLogin' class='input-field' placeholder='Password'/></div><input type='button' name='confirmLoginButton' id='confirmLoginButton' class='modalButton button' value='Log In'/>";
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
        path: "assets/img/headerImageAnsweringTheSun.jpg",
        // path: "assets/img/kn2.jpeg",
        alt: "Answering The Sun",
    },
    {
        id: 2,
        path: "assets/img/headerImageDangerousIllusion.jpg",
        // path: "assets/img/books/KillingSecrets.jpg",
        alt: "Dangerous Illusion",
    },
    {
        id: 3,
        path: "assets/img/headerImageTheSilverTower.jpg",
        // path: "assets/img/kn2.jpeg",
        alt: "The Silver Tower",
    },
  ]

  headerImages.forEach(image => {
    swiper.addSlide(image.id, `<div class="swiper-slide"><img src="${image.path}" alt="${image.alt}"></div>`);
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
        920: {
          slidesPerView: 5,
          spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
          spaceBetween: 40
        }
      }
  });

  var top5Slider1 = document.querySelector('.top5Slider').swiper;
  recommendedBooks.forEach(image => {
    top5Slider1.addSlide(image.id, `<div class="swiper-slide" ><img src="${image.path}" alt="${image.alt}" class="img-fluid"><div class='overlay'><p>See more</p></div></div>`);
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
            <input type='button' value='Add to cart' class='button' onclick='showSnackbar("Item added to cart")'/>
        </div>
        <div>
            <img src="${book.src}" alt="${book.alt}" class="img-fluid"/>
        </div>`
        }
    })
  })

  //contact form

    //name
    var regexFirstName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}$/;
    var formFirstName = document.querySelector("#formName");
    //last name
    var regexLastName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}$/;
    var formLastName = document.querySelector("#formLastName");
    //email
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var formEmail = document.querySelector("#formEmail");
    //textarea
    var regexTextArea = /[0-9a-zA-Z]{5,}/;
    var formTextArea = document.querySelector("#formTextArea");

    //check contact form function
    formCorrect = 0;

    function checkForm(regexPattern, formElement){
        var regex = regexPattern;
        var regexMatch = regex.test(formElement.value);
        if(regexMatch){
            formElement.style.borderColor = "initial";
            formCorrect ++;
        }
        else{
            formElement.style.borderColor = "red";
        }
    }

    document.getElementById("contactFormButton").addEventListener("click", () =>{
        formCorrect = 0;
        
        checkForm(regexFirstName, formFirstName);
        checkForm(regexLastName, formLastName);
        checkForm(regexEmail, formEmail);
        checkForm(regexTextArea, formTextArea);
    
        if(formCorrect<4){
            showSnackbar("Couldn't send a message")
            console.log("neuspesno")
        }
        else{
            showSnackbar("Message sent succesfully");
            document.querySelector("#contactForm").reset();
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

    function openProductPage(){
        window.open("product-page.html", "_self");
    }
}



