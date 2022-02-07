//Change in screen Size
// let screen = 0;
// window.onresize = function(){
//     screen = window.screen.width;
//     console.log(screen);
//     }

let courses = document.getElementById('nav-courses-main');
let changer = document.getElementById("nav-courses");

let courses2 = document.getElementById('nav-courses-main2');
let changer2 = document.getElementById("nav-projects");

if (window.screen.width > 1500) {
    courses.addEventListener("mouseenter", function () {
        changer.classList.add("nav");
    })

    courses.addEventListener("mouseleave", function () {
        changer.classList.remove("nav");
    })



    courses2.addEventListener("mouseenter", function () {
        changer2.classList.add("nav");
    })

    courses2.addEventListener("mouseleave", function () {
        changer2.classList.remove("nav");
    })
}

// changer.classList.remove("nav");
// changer2.classList.remove("nav");

// For removing Content when website is in Mobile view
let text_removal =  document.getElementById('banner_text_desc2');
let image_removal = document.getElementsByClassName('banner-vector');
if (window.screen.width < 850){
    text_removal.remove();
    image_removal[0].remove();
}


var loader = document.getElementById("preloader");
window.addEventListener("load", () =>{
    loader.style.display = "none";
})
// console.log(window.screen.width);