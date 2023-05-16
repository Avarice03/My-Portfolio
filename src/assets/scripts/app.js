new fullpage("#fullpage", {
  //options here

  anchors: ["home", "skills", "projects", "contact", "footer"],
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  slidesNavigation: true,
  slidesNavPosition: "bottom",
  responsiveWidth: 1100,
  scrollOverflow: true,
});

const menuButton = document.querySelector(".menuButton");
const submitBtn = document.querySelector("#submitBtn");

menuButton.addEventListener("click", Menu);
submitBtn.addEventListener("click", sendEmail);

const scriptURL =
  "https://script.google.com/macros/s/AKfycby9rHXNNTohmk-EDm_b8vX3kLRJ20iEQhaCCu_msa2-ubNl8s2utJjm8spGite1f2Pk/exec";
const form = document.getElementById("submit-to-google-sheet");

function Menu(e) {
  let list = document.querySelector("ul");
  if (this.name === "menu") {
    this.name = "close";
    list.classList.add("top-[64px]");
    list.classList.add("opacity-100");
  } else {
    this.name = "menu";
    list.classList.remove("top-[64px]");
    list.classList.remove("opacity-100");
  }
}

function validateEmail(email) {
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
    alert("Email sent successfully");
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}

function sendEmail() {}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageInput");

  const name = nameInput.value;
  const email = emailInput.value;

  if (validateEmail(email)) {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
      })
      .catch((error) => console.error("Error!", error.message));
    name.textContent = "";
  }
});
