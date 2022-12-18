window.onload = function () {
  console.log("first");
};

let form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  let usernameInput = document.getElementById("Username");
  console.log(usernameInput);
});
