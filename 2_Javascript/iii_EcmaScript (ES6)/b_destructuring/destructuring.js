const vehicles = ["mustang", "f-150", "expedition"];

//old way:
/*
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
*/

//with destructuring:
const [car,truck,suv] = vehicles; 


//* objelerde biraz farklı : 

const employee = {
    firstName : "mert",
    lastName : "güvo",
    salary : 5000,
    age : 21
}

//isim = employee.firstName
//soyisim = employee.lastName demek yerine : 

let {firstName, lastName, salary, age} = employee; //kıvırcık parantez ve key değeriyle kullanmak önemli

//eğer key değerleriyle tutmak istemiyorsak :
let {firstName: isim, lastName: soyisim, salary: maas, age: yas} = employee; //şeklinde farklı değişkenlerde tutabiliriz
