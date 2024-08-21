 let crsr=document.querySelector('.cursor')
let blur=document.querySelector('.cursor-blur')
// document.addEventListener("mousemove",function(dets){
//     // console.log(dets) 
//     crsr.style.left=dets.x+"px"
//     crsr.style.top=dets.y+"px"
//     blur.style.left=dets.x-30+"px"
//     blur.style.top=dets.y-30+"px"
// })

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:1,
height:"80px" ,
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
    start:"top -15%",
    end:"top -16%",
    scrub:1
}
})

gsap.to("#main",{
backgroundColor:"#000",
scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    start:"top -15%",
    end:"top -15%",
    scrub:1
}
})







