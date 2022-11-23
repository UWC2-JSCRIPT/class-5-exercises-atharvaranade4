// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

//Make abstract event function
function Listener (e){
  let tagName = e.target.tagName.toLowerCase();

    // strikethrough logic
  if (tagName === 'li')
    e.target.classList.add('done')
    e.target.parentNode.classList.add('done')

    //delete logic
  if (e.target.className === 'delete') 
    e.target.parentNode.remove(); 

}

const targetLi = document.querySelector('li')
targetLi.addEventListener('click', (e) => {
  Listener(e);
});

const addListItem = function(e) {
  e.preventDefault();
  let input = document.getElementsByTagName('input')[0];
  let text = input.value; // use this text to create a new <li>
  let newLi = document.createElement('li')
  let span = document.createElement('span')
  span.textContent = text
  let anchorTag = document.createElement('a')
  anchorTag.setAttribute('class', 'delete')
  anchorTag.textContent = 'Delete'
  newLi.appendChild(span)
  newLi.appendChild(anchorTag)

  // add delete and strikethrough logic to new li
  newLi.addEventListener('click', (e) => {
    Listener(e);
  });

  //add newLi to the document
  document.querySelector('ul.today-list').append(newLi); 

  //clear the text field
  input.value = ''

  // Finish function here
}

//Add the new item
document.querySelector('.add-item').addEventListener('click', (e) =>{
  addListItem(e)
})
