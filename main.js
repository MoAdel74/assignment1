let btns = document.querySelectorAll("button");
let imgs = Array.from(document.images);

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    btns.forEach((btn) => {
      btn.classList.remove("choosen");
      button.classList.add("choosen");
    });
    // imgs.forEach((img) => {
    //   img.style.display = "none";
    // });
  });
});
