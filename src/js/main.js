
const oNav = {
    init(){
        document.documentElement.className = "js-enabled"

        const eNav = document.querySelector("#main");

        window.addEventListener("scroll", (event)=>{
            if (scrollY > eNav.offsetTop){
                document.body.classList.add("fixed-nav");
            }else if (scrollY <= eNav.offsetTop){
                document.body.classList.remove("fixed-nav");
            }
        })
    }
}