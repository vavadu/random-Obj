function random(x) {
    let result = x[Math.floor(Math.random()*x.length)];
    return result;
}


function gen(n) {
    let firstName = ['Dima', 'Lera', 'Sasha', 'Jama'];
    let lastName = ['Ivanov', 'Serov', 'Pupkin', 'Gele'];
    let sex = ['male', 'female'];
    let  result = {};
    for (let i = 0; i<n ; i++) {
        // result = new Object();
        result['lastname'] = random(lastName);
        result['firstname'] = random(firstName);
        result['age'] = Math.floor(Math.random() * Math.floor(100));
        result['sex'] = random(sex); 

        console.log(result);
            
    }
return 
   
}
gen(3);

