const wrapper_1 = document.querySelector(".carousel_container_1")
const carousel_1 = document.querySelector(".carousel_slider_1");
const arrowBtns_1 = document.querySelectorAll(".carousel_container_1 i")
const firstCardWidth_1 = carousel_1.querySelector(".card_1").offsetWidth
const carouselChildrens_1 = [...carousel_1.children]

const wrapper_2 = document.querySelector(".carousel_container_2")
const carousel_2 = document.querySelector(".carousel_slider_2");
const arrowBtns_2 = document.querySelectorAll(".carousel_container_2 i")
const firstCardWidth_2 = carousel_2.querySelector(".card_2").offsetWidth
const carouselChildrens_2 = [...carousel_2.children]

const wrapper_3 = document.querySelector(".carousel_container_3")
const carousel_3 = document.querySelector(".carousel_slider_3");
const arrowBtns_3 = document.querySelectorAll(".carousel_container_3 i")
const firstCardWidth_3 = carousel_3.querySelector(".card_3").offsetWidth
const carouselChildrens_3 = [...carousel_3.children]

let isDrag = false, startX, startScrollLeft_1, startScrollLeft_2, startScrollLeft_3, timeoutId_1, timeoutId_2, timeoutId_3

// get num of img that can fit in the carousel at once
let cardPreview_1 = Math.round(carousel_1.offsetWidth / firstCardWidth_1)
let cardPreview_2 = Math.round(carousel_2.offsetWidth / firstCardWidth_2)
let cardPreview_3 = Math.round(carousel_3.offsetWidth / firstCardWidth_3)

// insert copies of the last few cimg to beginning of car for inf scroll
carouselChildrens_1.slice(-cardPreview_1).reverse().forEach(card => {
    carousel_1.insertAdjacentHTML("afterbegin", card.outerHTML)
})
// insert copies of the first few cimg to beginning of car for inf scroll
carouselChildrens_1.slice(0, cardPreview_1).reverse().forEach(card => {
    carousel_1.insertAdjacentHTML("beforeend", card.outerHTML)
})
// insert copies of the last few cimg to beginning of car for inf scroll
carouselChildrens_2.slice(-cardPreview_2).reverse().forEach(card => {
    carousel_2.insertAdjacentHTML("afterbegin", card.outerHTML)
})
// insert copies of the first few cimg to beginning of car for inf scroll
carouselChildrens_2.slice(0, cardPreview_2).reverse().forEach(card => {
    carousel_2.insertAdjacentHTML("beforeend", card.outerHTML)
})
// insert copies of the last few cimg to beginning of car for inf scroll
carouselChildrens_3.slice(-cardPreview_3).reverse().forEach(card => {
    carousel_3.insertAdjacentHTML("afterbegin", card.outerHTML)
})
// insert copies of the first few cimg to beginning of car for inf scroll
carouselChildrens_3.slice(0, cardPreview_3).reverse().forEach(card => {
    carousel_3.insertAdjacentHTML("beforeend", card.outerHTML)
})

const dragStart_1 = (e) => {
    isDrag = true
    carousel_1.classList.add("dragging")

    startX = e.pageX
    startScrollLeft_1 = carousel_1.scrollLeft
}

const dragging_1 = (e) =>{
    if(!isDrag) return
    carousel_1.scrollLeft = startScrollLeft_1 - (e.pageX - startX)
}

const dragEnd_1 = () => {
    isDrag = false
    carousel_1.classList.remove("dragging")
}

const dragStart_2 = (e) => {
    isDrag = true
    carousel_2.classList.add("dragging")

    startX = e.pageX
    startScrollLeft_2 = carousel_2.scrollLeft
}

const dragging_2 = (e) =>{
    if(!isDrag) return
    carousel_2.scrollLeft = startScrollLeft_2 - (e.pageX - startX)
}

const dragEnd_2 = () => {
    isDrag = false
    carousel_2.classList.remove("dragging")
}
const dragStart_3 = (e) => {
    isDrag = true
    carousel_3.classList.add("dragging")

    startX = e.pageX
    startScrollLeft_2 = carousel_3.scrollLeft
}

const dragging_3 = (e) =>{
    if(!isDrag) return
    carousel_3.scrollLeft = startScrollLeft_2 - (e.pageX - startX)
}

const dragEnd_3 = () => {
    isDrag = false
    carousel_3.classList.remove("dragging")
}

arrowBtns_1.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel_1.scrollLeft += btn.id === "left left_1" ? -firstCardWidth_1 : firstCardWidth_1
    })
})
arrowBtns_2.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel_2.scrollLeft += btn.id === "left left_2" ? -firstCardWidth_2 : firstCardWidth_2
        
        console.log("carousel scrollleft: " + Math.ceil(carousel_2.scrollLeft))
        console.log("carousel scrollwidth: " + carousel_2.scrollWidth)
        console.log("carousel offset: " + carousel_2.offsetWidth)
    })
})
arrowBtns_3.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel_3.scrollLeft += btn.id === "left left_3" ? -firstCardWidth_3 : firstCardWidth_3
    })
})

const infiniteScroll_1 = () => {
    if(carousel_1.scrollLeft === 0){
        carousel_1.scrollLeft = carousel_1.scrollWidth - (2 * carousel_1.offsetWidth)
    } else if (Math.ceil(carousel_1.scrollLeft) === carousel_1.scrollWidth - carousel_1.offsetWidth){
        carousel_1.scrollLeft = carousel_1.offsetWidth
    }

    clearTimeout(timeoutId_1)
    if(!wrapper_1.matches(":hover")) autoPlay_1(); 
}
const infiniteScroll_2 = () => {
    if(carousel_2.scrollLeft === 0){
        carousel_2.scrollLeft = carousel_2.scrollWidth - (2 * carousel_2.offsetWidth)
    } else if (Math.ceil(carousel_2.scrollLeft) === carousel_2.scrollWidth - carousel_2.offsetWidth){
        carousel_2.scrollLeft = carousel_2.offsetWidth
    }

    clearTimeout(timeoutId_2)
    if(!wrapper_2.matches(":hover")) autoPlay_2(); 
}
const infiniteScroll_3 = () => {
    if(carousel_3.scrollLeft === 0){
        carousel_3.scrollLeft = carousel_3.scrollWidth - (2 * carousel_3.offsetWidth)
    } else if (Math.ceil(carousel_3.scrollLeft) === carousel_3.scrollWidth - carousel_3.offsetWidth){
        carousel_3.scrollLeft = carousel_3.offsetWidth
    }

    clearTimeout(timeoutId_3)
    if(!wrapper_3.matches(":hover")) autoPlay_3(); 
}

const autoPlay_1 = () => {
    timeoutId_1 = setTimeout(() => carousel_1.scrollLeft += firstCardWidth_1, 1000)
}
const autoPlay_2 = () => {
    timeoutId_2 = setTimeout(() => carousel_2.scrollLeft += firstCardWidth_2, 1000)
}
const autoPlay_3 = () => {
    timeoutId_3 = setTimeout(() => carousel_3.scrollLeft += firstCardWidth_3, 1000)
}

autoPlay_1()
autoPlay_2()
autoPlay_3()

carousel_1.addEventListener("mousedown", dragStart_1);
carousel_2.addEventListener("mousedown", dragStart_2);
carousel_3.addEventListener("mousedown", dragStart_3);

carousel_1.addEventListener("mousemove", dragging_1);
carousel_2.addEventListener("mousemove", dragging_2);
carousel_3.addEventListener("mousemove", dragging_3);

document.addEventListener("mouseup", dragEnd_1);
document.addEventListener("mouseup", dragEnd_2);
document.addEventListener("mouseup", dragEnd_3);

carousel_1.addEventListener("scroll", infiniteScroll_1)
carousel_2.addEventListener("scroll", infiniteScroll_2)
carousel_3.addEventListener("scroll", infiniteScroll_3)

wrapper_1.addEventListener("mouseenter", () => clearTimeout(timeoutId_1));
wrapper_2.addEventListener("mouseenter", () => clearTimeout(timeoutId_2));
wrapper_3.addEventListener("mouseenter", () => clearTimeout(timeoutId_3));

wrapper_1.addEventListener("mouseleave", autoPlay_1);
wrapper_2.addEventListener("mouseleave", autoPlay_2);
wrapper_3.addEventListener("mouseleave", autoPlay_3); 
