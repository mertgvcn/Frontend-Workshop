/*
    ? Global Scope   : Her yerden erişilebilir
    ? Function Scope : Function ve içindeki statementlara özeldir.
    ? Block Scope    : Tanımlandığı statement'a özeldir
*/

/*---------------------------------
var a = 5; //global scope

function method1() {
    var b = 4; //function scope

    if(true) {
        let c = 2; //block scope 
    }
}
----------------------------------*/

/*
    ? var   : block scope özelliği yok, 
    ?         aynı değişken ismini iki kere tanımlamaya izin veriyor

    ? let   : block scope özelliği var, 
    ?         aynı değişken ismini iki kere oluşturamıyorsun

    ? const : block scope özelliği var, 
    ?         aynı değişken ismini iki kere oluşturamıyorsun,
    ?         değişkenin değerini değiştiremiyorsun.

*/

const user1 = {  //objenin yapısını değiştiremeyiz ama değişkenlerine yeni değer atayabiliriz.
    username : "mert",
    password : "1234"
}

user1.username = "yusuf mert"
console.log(user)