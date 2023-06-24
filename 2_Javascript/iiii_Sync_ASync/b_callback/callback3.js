//*eski kodlarda şöyle bir yapıyla karşılaşmak mümkün:

function getName(callback) {
    setTimeout(() => {
        let name = "mert"; //web serverdan kullanıcı ismini request ettik, 1sn sürecek
        callback(name);
    }, 1000);
}

function getSurname(name, callback) {
    setTimeout(() => {
        let surname = "güvo" //isme göre soyisim bulacak, 0.5sn sürecek
        callback(surname);
    }, 500);
}

//callback2 de yaptığımız işlemin farklı bir yazım şekli
getName((name)=> {
    getSurname(name, (surname)=> {
        console.log(name, surname);
    })
})

/* 
     ancak bu şekildeki yazımlar complexity arttıkça okunmaz hale geliyor ve içiçe bir sürü
  fonksiyon oluyor. Bu duruma callback hell deniliyor. O yüzden callback temelini bilmek iyi
  ama kullanışlı bir yöntem değil.
*/
