const navigation = document.querySelector(".navigator");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

let mybutton = document.querySelector('#page_up');

// window.addEventListener("scroll", () =>{
//     console.log(document.scrollTop)
//     if (window.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         console.log(document.scrollTop)
//         mybutton.style.display = "block";
//       } else {
//         mybutton.style.display = "none";
//       }
// })

// function scrollFunction() {
//     try {
//         if (document.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//             console.log(document.scrollTop)
//             mybutton.style.display = "block";
//           } else {
//             mybutton.style.display = "none";
//           }
//     } catch (error) {
//         console.log('error')
//     }
  
// }

function topFunction() {
  document.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}