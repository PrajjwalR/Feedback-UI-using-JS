let ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById('btn');
let container = document.getElementById('container');
let selectedRating = "";

ratingEls.forEach((ratingEls) => {
    ratingEls.addEventListener('click', (event) => {

        removeActive()
        selectedRating = event.target.innerText || event.target.parentNode.innerText
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })
});

btnEl.addEventListener('click', () => {
    if (selectedRating !== "") {
        container.innerHTML = `
        <strong> Thank You! </strong>
        <br>
        <br>
        <strong> Feedback:- ${selectedRating}</strong>
        <br>
        <br>
        <p>
        We will use your feedback to improve our customer support.
        </p>
        `
    }
})

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove('active');
    });
}