//ikisini nasıl aynı anda 1.5sn sonra yazdırabiliriz?

function getName(callback) {
    setTimeout(() => {
        let name = "mert"; //web serverdan kullanıcı ismini request ettik, 1sn sürecek
        callback(name);
    }, 1000);
}

function getSurname(name) {
    setTimeout(() => {
        let surname = "güvo" //isme göre soyisim bulacak, 0.5sn sürecek
        console.log(name, surname);
    }, 500);
}

getName(getSurname);