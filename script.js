let crsr = document.querySelector('.cursor')
let blur = document.querySelector('.cursor-blur')


document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 30 + "px"
    blur.style.top = dets.y - 30 + "px"
});

var h4all = document.querySelectorAll("#nav h4, #card1,#card2,#card3,.slidepara button,.dots,.one,.two,.three,.copyright a,.buttns");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 2;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -8%",
        end: "top -9%",
        scrub: 2,
    },
});


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

let waiting = document.querySelector('.waiting h3');
let cadiefont = document.querySelectorAll('.cadie .one , .cadie .two , .cadie .three');
cadiefont.forEach((Element) => {
    Element.addEventListener('mouseover', () => {
        waiting.style.textShadow = ' 2px 0 0 rgb(46, 156, 42),0 1px 0 rgb(46, 156, 42),-1px 0 0 rgb(46, 156, 42),0 -1px 0 rgb(46, 156, 42)';
    })

    Element.addEventListener('mouseout', () => {
        waiting.style.textShadow = '1px 0 0 rgb(255, 255, 255),0 1px 0 rgb(255, 255, 255),-1px 0 0 rgb(255, 255, 255),0 -1px 0 rgb(255, 255, 255)';
    })
})




function scrollToTop() {
    const threshold = 200;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
//   window.addEventListener('scroll', function() {

//   if (scrollPosition > threshold) {
//     arrow.classList.add('i');
//     console.log("Added class 'i'");
//   } else {
//     arrow.classList.remove('i');
//     console.log("Removed class 'i'");
//   }
//   });


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


document.getElementById("slayy").addEventListener("click",function(){
    document.querySelector(".popup").style.display="flex";
})

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";
})

