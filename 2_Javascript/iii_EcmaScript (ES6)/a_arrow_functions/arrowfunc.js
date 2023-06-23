//Temel yazım şekli
const yazdir1 = ()=> {
    console.log("merhaba")
}


//Parametre alırsa
const yazdir2 = (firstname, lastname) => {
    console.log("merhaba", firstname, lastname)
}


//Tek satırlık işlem yapacaksa
const yazdir3 = (firstname, lastname) => console.log("merhaba", firstname, lastname)


//Tek satırda returnlu işlemlerde
const yazdirr4 = (x,y) => {
    return x*y;
}
const yazdir4 = (x,y) => x*y //yukarıdaki gibi yazmaya gerek yok
const yazdir5 = () => "merhaba"


//Tek paramatre varsa (paranteze gerek yok)
const yazdir6 = firstname => console.log("merhaba", firstname)
const yazdir7 = x => x*x*x
