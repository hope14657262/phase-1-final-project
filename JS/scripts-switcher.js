// toggle style switcher=======
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style -switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
        {
            document.querySelector(".style-switcher").classList.remove("open");
        }
})
//==================================Them colors============
let alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title")) 
        {
            style.removeAttribute("disabled");
        }
        else
    {
        style.setAttribute("disabled","true");
        document.querySelector(".style-switcher").classList.remove("open");
    }
    })
    
}
//==================================Theme light and dark mode============
let dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",() =>{
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("sun");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("sun"))
        {
           dayNight.querySelector("i").classList.add("fa-moon");
    }
    else
    {
          dayNight.querySelector("i").classList.add("fa-sun");
    }
})