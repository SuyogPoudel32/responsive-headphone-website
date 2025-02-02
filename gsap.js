function page1() {
    let time = gsap.timeline();
    time.from(".relative img",{
        opacity:0,
        duration:0.5,
        delay:0.5,
        x:200,
    })
    time.from(".home-left h2",{
        y:50,
        opacity:0,
        duration:0.5,
        delay:0.5,
    },"-=0.6")
    time.from(".home-left p",{
        y:50,
        opacity:0,
        duration:0.5,
        delay:0.5,
    },"-=0.6")

    gsap.from(".content",{
        opacity:0,
        duration:0.4,
        delay:0.3,
        y:-20,
        scrollTrigger:{
            trigger:".content",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 40%",
            scrub:1
        }

    })
}

function page2() {
    let time = gsap.timeline({
        scrollTrigger:{
            trigger:".gsap",
            scroller:"body",
            // markers:true,
            start:"top 120%",
            end:"top 40%",
            scrub:2,
        }
    });
    time.from(".second-page-left-img img",{
        opacity:0,
        duration:0.8,
        delay:0.6,
        x:-100,
    })

    time.from(".gsap",{
        opacity:0,
        duration:0.6,
        delay:0.6,
        y:50,
        stagger:0.5,
    })
}


page1()
page2()