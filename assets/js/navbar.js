function openNav(){
  document.querySelector("header").style.display="flex";
  document.querySelector("header a").style.display="flex";
  document.querySelector("header").style.animation="1s menu forwards";
}
function closeNav(){
  document.querySelector("header").style.animation="1s closeMenu forwards alternate-reverse";
}