

function showPeople(event) {
    event.preventDefault();

    let arr = generatePeopleArray(3);
    
    let n = 3;
    for (i = 0; i < n; i++) {
        let person = arr[i]
        const LI_ELEMENT = document.createElement('li');
        LI_ELEMENT.id = "li";
        LI_ELEMENT.textContent = `${person.firstname} ${person.lastname} ${person.age} ${person.sex}`;
        LI_ELEMENT.className = "active";
        document.querySelector('.list').appendChild(LI_ELEMENT)
    }        
    
    event.target.reset();


}

const FORM = document.getElementById('form')
FORM.addEventListener('submit', showPeople)