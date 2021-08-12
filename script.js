const menubars = document.getElementById("menu-bars");
const overlay  = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1,nav2,nav3,nav4,nav5];
function toggleNavbar (){
    // Toggle Menu bars
    menubars.classList.toggle("change");
    // toggle menu:active or not
    overlay.classList.toggle("overlay-active");
    if(overlay.classList.contains("overlay-active")){
        // Animate In - Overlay
        overlay.classList.replace("overlay-slide-left","overlay-slide-right")
        //Animate In - Nav Items
        navItems.forEach((element,index)=>{
            element.classList.replace(`slide-out-${index+1}`,`slide-in-${index+1}`)
        });      
    }else{
        // Animate Out - Overlay
        overlay.classList.replace("overlay-slide-right","overlay-slide-left")
        // Animate Out Nav Items
        navItems.forEach((element,index)=>{
            element.classList.replace(`slide-in-${index+1}`,`slide-out-${index+1}`)
        });
    }
}

// Event Listeners
menubars.addEventListener("click", toggleNavbar);
navItems.forEach(element =>{
    element.addEventListener("click", toggleNavbar)
})
