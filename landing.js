// const timeLine = gsap.timeline({defaults: {ease: 'power1.out'}});
// timeLine.to('.rocket', {transformOrigin: "right center", rotation: -30})
// timeLine.fromTo(".rocket", { xPercent: 40, y: 50}, {x: 100, y: -800, duration: 3, ease: "none" });
// timeLine.to('.intro', {y: "-100%", duration: 1}, "-=1");

// gsap.set("#turkey", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});
// gsap.to("#turkey", {duration: 5, motionPath:"#path"});
gsap.from('.turkey', {duration:1, y:'-100%'})
gsap.to('.turkey',{duration:2, x:'50%', delay:1})
gsap.to('.turkey',{duration:1, x:'100%', ease:'slow', delay:3})
gsap.to('.turkey',{duration:1, opacity:0, delay:4})

gsap.to('.golden_ticket',{duration:1,opacity:1,delay:2.5})
TweenMax.to('.golden_ticket',5,{rotation:1440, repeat:-1})

// https://greensock.com/docs/v3/Installation
// https://www.youtube.com/watch?v=m6PDUIF24v4