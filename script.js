const timeline = gsap.timeline({
  duration: 0,
});

timeline.to(".ball", {
  x: 270,
  duration: 2,
 ease: "bounce",
});
timeline.to(".ball", {
  y: -245,
  duration: 2,
ease: "elastic",
});
timeline.to(".ball", {
  x: 580,
  duraiton: 1,
  ease: "expo",
});


gsap.to(".ball_letters", {
  y: 250,
  backgroundColor: "blue",
  duration: 3,
  delay: 4.6,
  ease: "bounce",
  stagger: {
    each: 0.1,
  
  }
    
})