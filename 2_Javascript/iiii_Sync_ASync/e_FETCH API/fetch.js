//? Bu API sayesinde AJAX-XMLHttpRequest'in karmaşık kod yapısından kurtulacağız.

//? Şu ana kadar
//* Callback -> Promise'e geçtik
//*     AJAX -> Fetch API'ya geçiyoruz.

//? Kullanımı : 

function getData(url) {
    fetch(url)
        .then((response) => {
            return response.json(); //bize gelen data promise tipinde olduğu için onu json'a çeviriyoruz.
        })                          //Ancak json'da bize bir promise döndürüyor. O yüzden return edip bir then daha yazıp işleyeceğiz.
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

getData("https://jsonplaceholder.typicode.com/users");


//* NOT : Aşağıdaki gibi daha sade yazılabilir. Öğrenmek amaçlı yukarıdaki gibi yazdım.
/*
function getData(url) {
    fetch(url)
        .then((response) => response.json()) //tek satır olduğu için return yazmaya gerek yok
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}
*/