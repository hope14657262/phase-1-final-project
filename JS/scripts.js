
// ======================typing Animation===================
var typed = new Typed(".typing",{
    strings:[" " ,"Web Developer","Web Designer","Full- Stack Developer","YouTuber"],
    typespeed:1000000,
    BackSpeed:1000000,
    loop:true

})
// ====================== aside===================
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {

    let a = navList[i].querySelector("a");
    a.addEventListener("click",  function ()  
    {
       
        removeBacksection();
        for (let index = 0; index < totalNavList; index++) 
        {
            if(navList[index].querySelector("a").classList.contains("active"))
            {
                addBackSection(index);
                //allSection[index].classList.add("back-section");
            }
            navList[index].querySelector("a").classList.remove("active")
        }
        this.classList.add("active") 
        showSection(this);
       if(window.innerWidth < 1200) 
        {
            asideSectionTogglerBtn();
        }  
    })
}
function removeBacksection()
{
    for (let i = 0; i < totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(show)
{
    for (let i = 0; i < totalSection; i++)
    {
        allSection[i].classList.remove("active")
    }
    let target = show.getAttribute("href").split("#")[1];

    document.querySelector("#" + target).classList.add("active")
    
}
function updateNav(show)
{
    for (let i = 0; i < totalNavList; i++) 
        {
           navList[i].querySelector("a").classList.remove("active");
           let target = show.getAttribute("href").split("#")[1];
           if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
            navList[i].querySelector("a").classList.add("active");
           }
        }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("date-section-index");
    //console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBacksection();
    addBackSection(sectionIndex);
    
})

let navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () =>
    {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open")
    for (let i = 0; i < totalSection; i++) 
        {
      allSection[i].classList.toggle("open");
    }
}