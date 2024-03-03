let aboutmeButton = document.getElementById("aboutme__overlay-button");
let aboutmeOverlay = document.getElementById("aboutme__overlay");

aboutmeButton.addEventListener("click", function () {
  aboutmeOverlay.classList.add("aboutme__overlay--active");
  aboutmeOverlay.classList.remove("aboutme__overlay--inactive");
  console.log("working");
});

closeAboutmeButton.addEventListener("click", function () {
  aboutmeOverlay.classList.add("aboutme__overlay--inactive");
  aboutmeOverlay.classList.remove("aboutme__overlay--active");
})
