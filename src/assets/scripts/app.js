new fullpage("#fullpage", {
  //options here

  anchors: [
    "homeSection",
    "skillsSection",
    "projectsSection",
    "contactSection",
    "footerSection",
  ],
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  slidesNavigation: true,
  slidesNavPosition: "bottom",
  responsiveWidth: 1100,
  scrollOverflow: true,
});

const menuButton = document.querySelector(".menuButton");

menuButton.addEventListener("click", Menu);

function Menu(e) {
  let list = document.querySelector("ul");
  if (this.name === "menu"){
    this.name = "close";
    list.classList.add("top-[64px]");
    list.classList.add("opacity-100");
  } else {
    this.name = "menu";
    list.classList.remove("top-[64px]");
    list.classList.remove("opacity-100");
  }
}
