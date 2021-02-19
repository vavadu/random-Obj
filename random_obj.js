const FIRST_NAME = ['Dima', 'Lera', 'Sasha', 'Jama'];
const LAST_NAME = ['Ivanov', 'Serov', 'Pupkin', 'Gele'];
const SEX = ['male', 'female']; 



function getRandomItem(array) {
    return array[getRandomNumber(array.length)]; 
}
function getRandomNumber(max) {
    return  Math.floor(Math.random()*max);
}

function generatePeopleArray(n) {   
    let result = [];
    for (let i = 0; i<n ; i++) {
        let person = {
            lastname: getRandomItem(LAST_NAME),
            firstname: getRandomItem(FIRST_NAME),
            age: getRandomNumber(100),
            sex: getRandomItem(SEX),      
        };
        
        result.push(person); 
        result.sort((prev, next) =>next.age - prev.age);
    }
    return result;
    
}
