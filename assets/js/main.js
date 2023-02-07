TweenMax.staggerFrom(".content" , 1, {
  delay: 1,
  opacity:0,
  x: -20,
  ease: Expo.ease
});
TweenMax.staggerFrom(".imgs img" , 1, {
  delay: 2,
  opacity:0,
  x: 20,
  ease: Expo.ease
}, .5);
TweenMax.staggerFrom(".card" , 1, {
  delay: 6,
  opacity:0,
  x: -20,
  ease: Expo.ease
}, .5);
