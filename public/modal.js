//Close modal
document.querySelector(".unlove").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("is-active");
});

//Open modals
let elements = document.querySelectorAll(".love");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", () => {
    document.querySelector(".modal").classList.add("is-active");
  });
}
