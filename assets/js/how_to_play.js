//Modal - how to play
const openModal = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const closeModal = document.getElementById("close");

openModal.addEventListener("click", () => {
    modal_container.classList.add("show");
});

closeModal.addEventListener("click", () => {
    modal_container.classList.remove("show");
});