
//! CALLBACK : Fonksiyonu fonksiyona parametre olarak verme

function getName(callback) {
    setTimeout(() => {
        console.log("mert"); //web serverdan kullanıcı ismini request ettik, 1sn sürecek
        callback();
    }, 1000);
}

function getSurname() {
    setTimeout(() => {
        console.log("güvercin"); //isme göre soyisimi bulacak, 0.5sn sürecek
    }, 500);
}

getName(getSurname); //1sn sonra mert'i, üstüne 0.5sn sonra güvercini yazdırıcak.

//ikisini nasıl aynı anda 1.5sn sonra yazdırabiliriz? > callback2.js