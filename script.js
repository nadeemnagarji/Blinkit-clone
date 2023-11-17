const phoneNav = document.getElementById("phone-nav")
const PcNav = document.getElementById("big-nav")


function togglenavbar(){
    if(window.innerWidth<900){
        PcNav.style.display="none"
    }else{
        PcNav.style.display="flex"
    }
}

window.addEventListener("resize",togglenavbar)