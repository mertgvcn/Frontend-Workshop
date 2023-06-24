const p1 = Promise.resolve("birinci promise başarılı")
const p2 = Promise.resolve("ikinci promise başarılı")
const p3 = new Promise((resolve, reject)=> {
    resolve("üçüncü promise başarılı");
})

Promise.all([p1,p2,p3])
.then((response)=> {  //*eğer listedeki bütün promiselar resolve dönüyorsa
    for(let value of response) {
        console.log(value); //bütün promiseların değerini yazdır
    }
})
.catch((err)=> { //*eğer promiselardan en az biri yanlışsa
    console.log(err)
}) 