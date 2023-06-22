//? Session Storage : geçici depo, tarayıcıyı kapatınca sıfırlanır
//? Local Storage   : kalıcı depo
//* Veritabanını kullanmadığımız zaman kullanabileceğimiz yapılardır.



//*Session Storage :

sessionStorage.setItem("1", "Mert"); //key, value string olarak alır
sessionStorage.setItem("2", "Ali");

let value = sessionStorage.getItem("2");
console.log(value);

//sessionStorage.removeItem("2");
//sessionStorage.clear();

//Value değerini array olarak verme ve çekme :
let names = ["Mert", "Ali"];
sessionStorage.setItem("names", JSON.stringify(names)); //names'i arraymişçesine verir

let value2 = JSON.parse(sessionStorage.getItem("names")); //arraye geri döndürüyoruz
console.log(value2);

