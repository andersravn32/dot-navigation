const circles = document.querySelectorAll(".circle");
const section = document.querySelector(".one");

// Start circle
circles[0].classList.add("active");

// Functions
const scrollHandler = (pageNr) => {
  if (pageNr == 1) {
    scrollFunc(0);
  }
  if (pageNr == 2) {
    scrollFunc(window.innerHeight);
  }
  if (pageNr == 3) {
    scrollFunc(window.innerHeight * 2);
  }
  if (pageNr == 4) {
    scrollFunc(window.innerHeight * 3);
  }
  if (pageNr == 5) {
    scrollFunc(window.innerHeight * 4);
  }
};

const scrollFunc = (top) => {
  window.scroll({
    top,
    behavior: "smooth",
  });
};

const addActive = (number) => {
  circles.forEach((circle) => {
    circle.classList.remove("active");
    // Add active class to the item
    circles[number - 1].classList.add("active");
  });
};

// Event Listeners
document.addEventListener("click", (e) => {
  const item = e.target;

  // On Circle click
  if (item.classList.contains("circle")) {
    // Remove active classes
    if (!item.classList.contains("active")) {
      circles.forEach((circle, index) => {
        circle.classList.remove("active");
        // Add active class to the item
        item.classList.add("active");
      });
    }
    // Scroll
    scrollHandler(item.classList[1]);
  }
});
window.addEventListener("scroll", () => {
  let top = section.getBoundingClientRect().top;

  // Change y to + value
  top = Math.abs(top); //y - y * 2;

  console.log(
    `top value: ${Math.floor(top)}, window size: ${
      window.innerHeight
    }, previousPage: ${window.innerHeight / 1.5}, nextPage: ${
      window.innerHeight * 1.5
    }`
  );

  //First page
  if (top < window.innerHeight / 1.5) {
    addActive(1);
  }
  //Second page
  if (top > window.innerHeight / 1.5 && top < window.innerHeight * 1.5) {
    addActive(2);
  }
  //Third page
  if (top > window.innerHeight * 1.5 && top < window.innerHeight * 2.5) {
    addActive(3);
  }
  //Fourth page
  if (top > window.innerHeight * 2.5 && top < window.innerHeight * 3.5) {
    addActive(4);
  }
  //Fifth page
  if (top > window.innerHeight * 3.5) {
    addActive(5);
  }
});
