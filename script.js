let menu = document.querySelector(".menu");
// .nav .right ul
let menu_btns = document.querySelector(".nav .right");
menu.addEventListener("click", () => {
    menu_btns.style.left = "0px";
    menu_btns.style.top = "0px";
    menu.style.transform = "rotate(90deg)";
    close.style.display = "inline-block";
    menu.style.transition = "all 0.8s ease-in-out";
    setTimeout(() => {
        menu.style.opacity = "0%";
        setTimeout(() => {
            menu.style.display = "none";
        }, 200);
    }, 800);
})

let close = document.querySelector(".close-menu");

close.addEventListener("click", () => {
    menu.style.display = "inline-block";
    setTimeout(() => {
        menu.style.transform = "rotate(0deg)";
        menu_btns.style.left = "-65%";
        menu.style.opacity = "100%";
        close.style.display = "none";
    }, 50);

})

const smoothscroll=(selector,offset)=>{
    document.querySelectorAll(selector).forEach(element => {
        element.addEventListener("click",(e)=>{
            e.preventDefault();
            
            const targetId=element.getAttribute("href");
            const target=document.querySelector(targetId);
            if (target) {
                target.style.scrollMarginTop = `${offset}px`;
                target.scrollIntoView({
                    behavior:"smooth",
                });
            }
        });
    });
};

smoothscroll('a[href="#section1"]',50);
smoothscroll('a[href="#section2"]',150);
smoothscroll('a[href="#about-me"]',100);
smoothscroll('a[href="#contact"]',50);
smoothscroll('a[href="#projects"]',50);





// let trigger = document.querySelector("#go-to-top");
let trigger = document.querySelector("#footerHr");

let footer = document.querySelector(".footer");

let firstHr=document.querySelector("#firsthr");
let topslider=document.querySelector(".top-slider");





