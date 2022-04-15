//Modal - how to play - credit Florin Pop - How to create a modal, https://www.youtube.com/watch?v=XH5OW46yO8I see README section also
const openModal = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const closeModal = document.getElementById("close");

openModal.addEventListener("click", () => {
    modal_container.classList.add("show");
});

closeModal.addEventListener("click", () => {
    modal_container.classList.remove("show");
});