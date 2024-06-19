const images = document.querySelectorAll(".img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    removeActive();
    image.classList.add("active");
  });
});

function removeActive() {
  images.forEach((image) => {
    image.classList.remove("active");
  });
}
