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
      `Thank you reaching out to me! Please check out my Socials for daily updates on my projects. `
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
