console.log("gaba");

// import "./style.css";

let homeButton = document.querySelector(".homeB")
let menuButton = document.querySelector(".menuB")
let aboutButton = document.querySelector(".aboutB")

let homePage = document.querySelector(".home");
let menuPage = document.querySelector(".menu");
let aboutPage = document.querySelector(".about");


// fucking sucks but it works

function switchPage(choice){
    console.log("function work");

    if (choice == "home"){
        console.log("home");
        homePage.classList.add("on");
        homePage.classList.remove("off");
        menuPage.classList.add("off");
        menuPage.classList.remove("on");
        aboutPage.classList.add("off");
        aboutPage.classList.remove("on");
    }
    if (choice == "menu"){
                console.log("menu");

        homePage.classList.add("off");
        homePage.classList.remove("on");
        menuPage.classList.add("on");
        menuPage.classList.remove("off");
        aboutPage.classList.add("off");
        aboutPage.classList.remove("on");
    }

    if (choice == "about"){
                console.log("about");

        homePage.classList.add("off");
        homePage.classList.remove("on");
        menuPage.classList.add("off");
        menuPage.classList.remove("on");
        aboutPage.classList.add("on");
        aboutPage.classList.remove("off");
    }

};


homeButton.addEventListener("click", () => {
    switchPage("home")
});

menuButton.addEventListener("click", () => {
    switchPage("menu")
});

aboutButton.addEventListener("click", () => {
    switchPage("about")
});

/* i guess store all three as an object. i
just need to make it so one has the flex 
display while the other two have none.

i'm sorry. i'd work on more right now if i 
could but they just got on call and i'm 
distracted.


also when you do it don't forget to remove
the css and js links since npx auto fills
that in.
*/