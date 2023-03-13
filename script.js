const timeline = gsap.timeline({
  duration: 0,
});
//animation ball
timeline.to(".ball", {
  x: 300,
  duration: 2,
  ease: "bounce",
  rotation: 380,
});
timeline.to(".ball", {
  y: -300,
  duration: 3,
  ease: "steps(5)",
  rotation: 90,
});
timeline.to(".ball", {
  x: 590,
  duration: 4,
  ease: "power1.out",
  rotation: 380,
});

//animation balls_letters roulent à droite x
timeline.to(".ball_lettersA", {
  x: 375,
  duration: 3,
  rotation: 380,
  delay: -3.6,
});
timeline.to(".ball_lettersB", {
  x: 335,
  duration: 3,
  delay: -3.5,
  rotation: 380,
});
timeline.to(".ball_lettersC", {
  x: 285,
  duration: 3,
  delay: -3.4,
  rotation: 380,
});
timeline.to(".ball_lettersD", {
  x: 230,
  duration: 3,
  delay: -3.3,
  rotation: 380,
});
timeline.to(".ball_lettersE", {
  x: 155,
  duration: 3,
  delay: -3.2,
  rotation: 380,
});
timeline.to(".ball_lettersF", {
  x: 75,
  duration: 3,
  delay: -3.1,
  rotation: 380,
});

//animation balls_letters tombent y
timeline.to(".ball_lettersA", {
  y: 240,
  duration: 0.6,
  ease: "bounce",
  delay: -1.5,
});
timeline.to(".ball_lettersB", {
  y: 240,
  duration: 0.6,
  ease: "bounce",
  delay: -1.7,
});
timeline.to(".ball_lettersC", {
  y: 240,
  duration: 0.6,
  ease: "bounce",
  delay: -1.8,
});
timeline.to(".ball_lettersD", {
  y: 240,
  duration: 0.6,
  ease: "bounce",
  delay: -1.9,
});
timeline.to(".ball_lettersE", {
  y: 240,
  duration: 0.6,
  ease: "bounce",
  delay: -2,
});
timeline.to(".ball_lettersF", {
  y: 240,
  duration: 0.6,
  ease: "bounce",
  delay: -2.1,
});

//animation balls_letters roulent x à droite
timeline.to(".ball_lettersA", {
  duration: 1,
  rotation: 390,
});
timeline.to(".ball_lettersB", {
  x: 370,
  duration: 2,
  // ease: "power",
  delay: -2,
  rotation: 390,
});
timeline.to(".ball_lettersC", {
  x: 365,
  duration: 2,
  // ease: "power",
  delay: -3,
  rotation: 390,
});
timeline.to(".ball_lettersD", {
  x: 360,
  duration: 2,
  // ease: "power",
  delay: -3,
  rotation: 390,
});
timeline.to(".ball_lettersE", {
  x: 360,
  duration: 2.5,
  // ease: "power",
  delay: -2,
  rotation: 390,
});
timeline.to(".ball_lettersF", {
  x: 360,
  duration: 2,
  // ease: "power",
  delay: -3,
  rotation: 390,
});

//animation balls_letters se recentre à 0 degré rotation
timeline.to(".ball_lettersA", {
  duration: 1,
  rotation: 0,
});
timeline.to(".ball_lettersB", {
  x: 370,
  duration: 2,
  // ease: "power",
  delay: -2,
  rotation: 0,
});
timeline.to(".ball_lettersC", {
  x: 365,
  duration: 2,
  // ease: "power",
  delay: -3,
  rotation: 0,
});
timeline.to(".ball_lettersD", {
  x: 360,
  duration: 2,
  // ease: "power",
  delay: -3,
  rotation: 0,
});
timeline.to(".ball_lettersE", {
  x: 360,
  duration: 2.5,
  // ease: "power",
  delay: -2,
  rotation: 0,
});
timeline.to(".ball_lettersF", {
  x: 360,
  duration: 2,
  // ease: "power",
  delay: -3,
  rotation: 0,
});
