
function getUserData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.readyState === 4 && xhr.status === 200) { //xhr işlemleri sırasında oluşabilecek hatalar için bu try 
                    resolve(JSON.parse(xhr.responseText));        //içerisinde bir try-catch daha açılabilir
                }
            } catch (error) {
                reject("Hata : ", error);
            }
        })

        xhr.open("GET", url);
        xhr.send();
    });
}


function getCommentsByUserID(url) {                     //yukarıdaki fonksiyonla aynı kod sadece içine girilcek parametre farklı, 
    return new Promise((resolve, reject) => {       //normalde yukarıdaki fonksiyona daha genel isim vermemiz gerekiyordu
        const xhr = new XMLHttpRequest();           //ama örnek için bu seferlik böyle yazdık.
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.readyState === 4 && xhr.status === 200) { 
                    resolve(JSON.parse(xhr.responseText));       
                }
            } catch (error) {
                reject("Hata : ", error);
            }
        })

        xhr.open("GET", url);
        xhr.send();
    });
}


//*Örnek 1
/*
getUserData("https://jsonplaceholder.typicode.com/users")
.then((data) => {
    data.forEach((user)=> {
        console.log(user.name); //aldığımız datadaki user nameleri çekiyoruz
        
    })
    //burda daha sonra farklı kodlara devam edebiliriz.
})
.catch((err) => {
    console.log(err);
})
*/


//*Örnek 2
getUserData("https://jsonplaceholder.typicode.com/users/3")                                //*elimizle id si 3 olan user'ın özelliklerini getirdik, normalde id'yi parametre ile de alabilirdik
.then((data)=> { //getUserData'dan resolve'lu promise dönerse :
    console.log(data); //id'si 3 olan user'ın özellikleri
    return getCommentsByUserID(`https://jsonplaceholder.typicode.com/comments/${data.id}`) //*return ettiğim için .then'i dışa atıyoruz. 
})                                                                                         //*Normalde return etmeyip içerden .then diye devam edebilirdik.
.then((response) => { 
    console.log(response); //getCommentsByUserID'den resolve'lu promise dönerse değerini console'a yazdır.
})
.catch((error)=> {
    console.log(error); //getUserData'dan reject'li promise dönerse değerini console'a yazdır.
})