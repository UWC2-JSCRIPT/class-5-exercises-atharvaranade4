// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.

const counterDisplay = document.querySelector('.counter')
let counter = 0;
counterDisplay.innerHTML = counter;

const plusClick = document.querySelector('.plus-btn')
plusClick.addEventListener('click', () => {
    counter++
    counterDisplay.innerHTML = counter;
})

const minusClick = document.querySelector('.minus-btn')
minusClick.addEventListener('click', () => {
    counter--
    counterDisplay.innerHTML = counter;
})