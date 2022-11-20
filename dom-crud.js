// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const newElement = document.createElement('a'); //create element
newElement.innerText = 'Buy Now!'; //add innertext
newElement.setAttribute('id', 'cta'); //set attribute
const pElement = document.querySelector('p'); //query <p>
pElement.after(newElement)

// Access (read) the data-color attribute of the <img>,
// log to the console
const image = document.querySelector('img')
const dataColor = image.getAttribute('data-color')
console.log(dataColor)


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const liItems = document.querySelectorAll('li')
liItems[2].setAttribute('class', 'highlight')

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const element = document.querySelector('main')
element.removeChild(pElement)