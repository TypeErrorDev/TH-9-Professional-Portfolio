/////////////////////////////////////////////////////////////////
///////////// EVENTLISTENER TO VALIDATE MESSAGE /////////////////
/////////////////////////////////////////////////////////////////

// Just ensure to use a fake name/email ;)

const name = document.getElementById("name");
const email = document.getElementById("email");
const validateMessage = document.getElementById("send");

validateMessage.addEventListener("click", (e) => {
  if (email.value === "" && name.value === "") {
    e.preventDefault();
    alert(
      "Please make sure you enter your full name and a complete email address"
    );
  } else if (name.value === "") {
    e.preventDefault();
    alert("Please make sure you enter your full name");
  } else if (email.value === "") {
    e.preventDefault();
    alert("Please make sure you enter a complete email address ");
  } else {
    alert(
      `Thank you stopping by! Please reach out to me via my LinkedIn or Twitter page. `
    );
  }
});

/////////////////////////////////////////////////////////////////
///////////// EVENTLISTENER TO ADD HIDDEN CLASS /////////////////
/////////////////////////////////////////////////////////////////

/* Toggle between showing and hiding the navigation menu links when 
the user clicks on the hamburger menu / bar icon */
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

menu.addEventListener("click", (e) => {
  if (e.target === btn && e.target === menu) {
    menu.classList.add("hidden");
  }
});

/////////////////////////////////////////////////////////////////
/////////////////// NAV DOT FUNCTIONALITY ///////////////////////
/////////////////////////////////////////////////////////////////

// function updateList() {
//   const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
//     return (
//       Math.abs(a.getBoundingClientRect().top) -
//       Math.abs(b.getBoundingClientRect().top)
//     );
//   });

//   document
//     .querySelectorAll(".selected-circle")
//     .forEach((c) => c.classList.remove("selected-circle"));

//   document
//     .querySelectorAll(".nav-dot")
//     [[...document.querySelectorAll("h1, h2")].indexOf(titles[0])].classList.add(
//       "selected-circle"
//     );
// }

// updateList();
// window.addEventListener("scroll", () => {
//   updateList();
// });
