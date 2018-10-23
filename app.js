var items = document.querySelectorAll(".timeline li");
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
        }
    }
}
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);

var modal = document.getElementById("simpleModal");
var modalBtn = document.getElementById("modalBtn");
var closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

var modalTwo = document.getElementById("simpleModalTwo");
var modalBtnTwo = document.getElementById("modalBtnTwo");
var closeBtnTwo = document.getElementsByClassName("closeBtnTwo")[0];

modalBtnTwo.addEventListener("click", openModalTwo);
closeBtnTwo.addEventListener("click", closeModalTwo);
window.addEventListener("click", outsideClickTwo);

function openModalTwo() {
    modalTwo.style.display = "block";
}

function closeModalTwo() {
    modalTwo.style.display = "none";
}

function outsideClickTwo(e) {
    if (e.target == modalTwo) {
        modalTwo.style.display = "none";
    }
}

var modalThree = document.getElementById("simpleModalThree");
var modalBtnThree = document.getElementById("modalBtnThree");
var closeBtnThree = document.getElementsByClassName("closeBtnThree")[0];

modalBtnThree.addEventListener("click", openModalThree);
closeBtnThree.addEventListener("click", closeModalThree);
window.addEventListener("click", outsideClickThree);

function openModalThree() {
    modalThree.style.display = "block";
}

function closeModalThree() {
    modalThree.style.display = "none";
}

function outsideClickThree(e) {
    if (e.target == modalThree) {
        modalThree.style.display = "none";
    }
}

var modalFour = document.getElementById("simpleModalFour");
var modalBtnFour = document.getElementById("modalBtnFour");
var closeBtnFour = document.getElementsByClassName("closeBtnFour")[0];

modalBtnFour.addEventListener("click", openModalFour);
closeBtnFour.addEventListener("click", closeModalFour);
window.addEventListener("click", outsideClickFour);

function openModalFour() {
    modalFour.style.display = "block";
}

function closeModalFour() {
    modalFour.style.display = "none";
}

function outsideClickFour(e) {
    if (e.target == modalFour) {
        modalFour.style.display = "none";
    }
}

var modalFive = document.getElementById("simpleModalFive");
var modalBtnFive = document.getElementById("modalBtnFive");
var closeBtnFive = document.getElementsByClassName("closeBtnFive")[0];

modalBtnFive.addEventListener("click", openModalFive);
closeBtnFive.addEventListener("click", closeModalFive);
window.addEventListener("click", outsideClickFive);

function openModalFive() {
    modalFive.style.display = "block";
}

function closeModalFive() {
    modalFive.style.display = "none";
}

function outsideClickFive(e) {
    if (e.target == modalFive) {
        modalFive.style.display = "none";
    }
}

var modalSix = document.getElementById("simpleModalSix");
var modalBtnSix = document.getElementById("modalBtnSix");
var closeBtnSix = document.getElementsByClassName("closeBtnSix")[0];

modalBtnSix.addEventListener("click", openModalSix);
closeBtnSix.addEventListener("click", closeModalSix);
window.addEventListener("click", outsideClickSix);

function openModalSix() {
    modalSix.style.display = "block";
}

function closeModalSix() {
    modalSix.style.display = "none";
}

function outsideClickSix(e) {
    if (e.target == modalSix) {
        modalSix.style.display = "none";
    }
}

var modalSeven = document.getElementById("simpleModalSeven");
var modalBtnSeven = document.getElementById("modalBtnSeven");
var closeBtnSeven = document.getElementsByClassName("closeBtnSeven")[0];

modalBtnSeven.addEventListener("click", openModalSeven);
closeBtnSeven.addEventListener("click", closeModalSeven);
window.addEventListener("click", outsideClickSeven);

function openModalSeven() {
    modalSeven.style.display = "block";
}

function closeModalSeven() {
    modalSeven.style.display = "none";
}

function outsideClickSeven(e) {
    if (e.target == modalSeven) {
        modalSeven.style.display = "none";
    }
}
