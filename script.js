$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

// Countdown timer

const setSeconds = (s) => {
  document.querySelector("#seconds").textContent = s + "s";
};

const setMinutes = (m) => {
  document.querySelector("#minutes").textContent = m + "m";
};

const setHours = (h) => {
  document.querySelector("#hours").textContent = h + "h";
};

var x = setInterval(() => {
  var now = new Date();
  var endDate = new Date("March 9, 2022 10:00:00");
  var diff = endDate - now;

  var hours = Math.floor(diff / 3.6e6);
  var minutes = Math.floor((diff % 3.6e6) / 6e4);
  var seconds = Math.floor((diff % 6e4) / 1000);
  setHours(hours);
  setMinutes(minutes);
  setSeconds(seconds);
}, 1000);

const registerForm = document.getElementsByClassName("form")[0];
registerForm.onsubmit = (e) => {
  e.preventDefault();
  const regEx = new RegExp("-", "g");
  let formDate = e.target[3].value.replace(regEx, "/");
  console.log(formDate);
  let date = new Date("2001/01/01");
  let formDateObj = new Date(formDate);
  if (e.target[2].value.length != 10 || formDateObj > date) {
    alert("Error");
  } else {
    alert(`You have been registered for ${e.target[4].value}`);
  }
};

function reverseString(str) {
  // empty string
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
