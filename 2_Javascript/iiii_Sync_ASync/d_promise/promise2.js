//! Daha gelişmiş kullanım : 

let check = true;

function createPromise() {
    return new Promise((resolve, reject) => { //bize bir promise dönecek
        if(check) {
            resolve("Promise Başarılı Oldu"); //başarılı olursa resolve'lu promise döner
        }else {
            reject("Promise Başarısız Oldu"); //başarısız olursa reject'li promise döner
        }
    })
}

createPromise()
.then((response) => { //resolve'lu promisi yakalar ve içindeki değeri değişkene atar
    console.log(response); 
}) 
.catch((error)=> { //reject'li promisi yakalar ve içindeki değeri değişkene atar
    console.log(error);
})
.finally(()=> {
    console.log("Her Halükarda Çalışır") 
}) 

//javadaki try-catch-finally yapısı gibidir.