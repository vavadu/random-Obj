

function showPeople(event) {
    event.preventDefault();

    let n = getRandomNumber(20);
    let arr = generatePeopleArray(n);
    
    const container = document.querySelector('.list');
    arr.forEach ( function(person, i) {
        const liElement = document.createElement('li');
        liElement.id = "li"+ i;
        liElement.textContent = `${person.firstname} ${person.lastname} ${person.age} ${person.sex}`;
        container.appendChild(liElement)
    });        
}

function ready(callbackFunction){
    if(document.readyState != 'loading')
       callbackFunction()
    else
       document.addEventListener("DOMContentLoaded", callbackFunction)
}

ready(() => {
    const form = document.getElementById('form');
    form.addEventListener('submit', showPeople);
});
