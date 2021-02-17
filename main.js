

function showPeople(event) {
    event.preventDefault();
    let n = 10;
    let arr = generatePeopleArray(n);
    
    
    arr.forEach ( function(element) {
        let person = element; 
        const liElement = document.createElement('li');
        liElement.id = "li"+ arr.indexOf(element);
        liElement.textContent = `${person.firstname} ${person.lastname} ${person.age} ${person.sex}`;
        liElement.className = "active";
        document.querySelector('.list').appendChild(liElement)
    });        
    
    event.target.reset();


}

const FORM = document.getElementById('form')
FORM.addEventListener('submit', showPeople)

function ready(callbackFunction){
    if(document.readyState != 'loading')
      callbackFunction(event)
    else
      document.addEventListener("DOMContentLoaded", callbackFunction)
  }
  ready(event => {
    // console.log('DOM is ready.')
    
  })