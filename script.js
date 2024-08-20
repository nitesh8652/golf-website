 crsr=document.querySelector('.cursor')
document.addEventListener("mousemove",function(dets){
    // console.log(dets)
    crsr.style.left=dets.clientX+"px"
    crsr.style.top=dets.clientY+"px"
})

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







