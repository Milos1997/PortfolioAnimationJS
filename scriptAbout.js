const slider = document.querySelector(".slider");
const tekst = document.querySelector("#text");

const tl = new TimelineMax();

tl.fromTo(slider, 2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut })
    .fromTo(tekst, 2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-= 2");