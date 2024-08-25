// let crsr = document.querySelector('.cursor')
// let blur = document.querySelector('.cursor-blur')
// document.addEventListener("mousemove", function (dets) {
//     // console.log(dets) 
//     crsr.style.left = dets.x + "px"
//     crsr.style.top = dets.y + "px"
//     blur.style.left = dets.x - 30 + "px"
//     blur.style.top = dets.y - 30 + "px"
// })


// var bigcursor = document.querySelectorAll("#nav h4, #card1,#card2,#card3,.slidepara button")
// bigcursor.forEach(function (elem) {
//     elem.addEventListener("mouseenter", function () {
//         crsr.style.scale = 3;
//         crsr.style.border = "0.1px solid white";
//         crsr.style.backgroundColor = "transparent";
//         gsap.to(crsr, {
//             duration: 0.5,
//             scale: 1.2,
//             ease: "power2.inOut"
//         });
//     });
//     elem.addEventListener("mouseleave", function () {
//         crsr.style.scale = 3;
//         crsr.style.border = "0px solid #d0ff00";
//         crsr.style.backgroundColor = "transparent";
//         gsap.to(crsr, {
//             duration: 0.5,
//             scale: 1,
//             ease: "power2.inOut"
//         });
//     });
// });



gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 1,
    height: "80px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -15%",
        end: "top -16%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -15%",
        end: "top -15%",
        scrub: 1
    }
})




let slidingimg = 1;
index(slidingimg);

let slideIndex = 0;
showSlides();

function plusSlides(n) {
    index(slidingimg += n);
}

function currentSlide(n) {
    slidingimg = n;
    index(slidingimg);
}

function index(n) {
    let i;
    let slides = document.getElementsByClassName("imgs")
    let dot = document.getElementsByClassName("dots")
    if (n > slides.length) { slidingimg = 1 }
    if (n < 1) { slidingimg = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }
    // if (slidingimg > 0 && slidingimg <= dot.length) {

    slides[slidingimg - 1].style.display = "block";
    dot[slidingimg - 1].className += " active";
}

function showSlides() {
    let k;
    let slides = document.getElementsByClassName("imgs")
    let dots = document.getElementsByClassName("dots")

    for (k = 0; k < slides.length; k++) {
        slides[k].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    index(slideIndex); // Call index function with current slideIndex

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.opacity = 0;
    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = 1;
    }, 100)

    setTimeout(showSlides, 2000)
}

function updateActiveDot(index) {
    let dots = document.getElementsByClassName("dots")
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[index - 1].className += " active";
}

function index(n) {
    let i;
    let slides = document.getElementsByClassName("imgs")
    let dot = document.getElementsByClassName("dots")
    if (n > slides.length) { slidingimg = 1 }
    if (n < 1) { slidingimg = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }
    slides[n - 1].style.display = "block";
    dot[n - 1].className += " active";
    updateActiveDot(n);
}