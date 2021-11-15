/* Morten & Dalena */
// get sections & nav
const sections = document.querySelectorAll(".scroll");
const nav = document.querySelector("nav");

// create circles based on amount of sections
for(let i = 0; i < sections.length; i++){
    const circle = document.createElement("div");
    circle.classList.add("dot");

    // initial active circle
    if (sections[i].getBoundingClientRect().y == 0){
        circle.classList.add("active")
    }

    // make it scroll
    circle.addEventListener("click", (e) => {
        sections[i].scrollIntoView();
    });

    // append to navigation
    nav.append(circle);
}

/* Carlos */
// fill specific dot
const fillDot = (index) => {
    for(let i = 0; i < document.querySelectorAll(".dot").length; i++){
        document.querySelectorAll(".dot")[i].classList.remove("active");
    }
    document.querySelectorAll(".dot")[index].classList.add("active");
}

/* Anders */
// events
document.addEventListener("scroll", (e) => {
    for(let i = 0; i < sections.length; i++){
        if ((sections[i].getBoundingClientRect().y - (window.innerHeight / 2)) <= 0){
            fillDot(i);
        }
    }
});