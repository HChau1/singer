const navigation = document.querySelector(".navigator");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

let mybutton = document.querySelector('#page_up');

window.addEventListener("scroll", () =>{
    if (window.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
})
const body = document.querySelector('body')
let winHeight = Math.round(body.offsetWidth)
function changeHeight() {
    let winHeight2 = Math.round(body.offsetWidth)
    if(winHeight2 != winHeight){
        winHeight = winHeight2; 
     }
}
function scroll_1() {
    console.log(winHeight)
    document.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function scroll_2() {
    document.scrollTop = winHeight*950/1480;
    document.documentElement.scrollTop = winHeight*920/1480;
}
function scroll_3() {
    document.scrollTop = winHeight*3870/1480;
    document.documentElement.scrollTop = winHeight*5200/1480;
}
function scroll_4() {
    document.scrollTop = winHeight*6500/1480;
    document.documentElement.scrollTop = winHeight*6400/1480;
}
function scroll_5() {
    document.scrollTop = winHeight*948/1480;
    document.documentElement.scrollTop = winHeight*10;
}

function topFunction() {
  document.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}