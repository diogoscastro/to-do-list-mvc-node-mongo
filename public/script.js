const closeMessage = document.querySelector("#close-message");
const message = document.querySelector(".message");

closeMessage.addEventListener("click", () => {
  message.computedStyleMap.display = "none";
});

setTimeout(() => {
  message.style.display = "none";
}, 5000);
