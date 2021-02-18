

function showPeople(event) {
    event.preventDefault();

    let n = getRandomNumber(20);
    let arr = generatePeopleArray(n);

    
    const container = document.querySelector('#person-container');
    container.innerHTML = '';

    arr.forEach ( function(person, i) {   

        const trElement = document.createElement('tr');
        trElement.id = "person-container";


        createElementTh(trElement, person.firstname);
        createElementTh(trElement, person.lastname);
        createElementTh(trElement, person.age);
        createElementTh(trElement, person.sex);
        
        container.appendChild(trElement)
        trElement.className = "active";
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

function createElementTh(trElement, value) {
    var nameElement = document.createElement('td');
    nameElement.textContent = value;
    trElement.appendChild(nameElement)
}
