//? ÖRNEK 1 :

const add = (a,b,c,d) => {
    console.log(a+b+c+d);   
}

let numbers = [10,20,30,40];

//eski yöntem : add(numbers[0], numbers[1], numbers[2], numbers[3]);

//yeni yöntem :
add(...numbers);



//? ÖRNEK 2 :

const names = ["Ali", "Mert", "TT", "Dilan"];
const names2 = [...names]; //kopyalamış olduk
//eski yöntem :
/*
    names2[0] = names[0];
    names2[1] = names[1];
    names2[2] = names[2];
    names2[3] = names[3];
*/



//? ÖRNEK 3 :

const langs = ["Java", "C#"];
const langs2 = ["PHP", "Python", ...langs]; //birleştirmiş olduk
//eski yöntem : const langs2 = ["PHP", "Python", langs[0], langs[1]];  