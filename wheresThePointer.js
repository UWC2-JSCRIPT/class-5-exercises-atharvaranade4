// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

let tdScope = document.querySelectorAll('td')
tdScope.forEach(td =>{
    td.addEventListener('click', (e) =>{
        td.innerText = `X: ${e.clientX}, Y: ${e.clientY}`
    })
})