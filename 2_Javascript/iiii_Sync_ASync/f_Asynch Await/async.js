//? Promise yapısında okunabilirliği azaltan then-> then-> then zinciri oluşabiliyor.
//? Aşağıda bir örneği hem promise, hem async yapılarını kullanarak yapıp farkı göreceğiz

//?Amacımız bir postu ve yorumlarını getirmek

//*Promise ve Fetch kullanarak :
/*
document.querySelector("#btn").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((post) => {
            console.log(post);
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                .then((response) => response.json())
                .then((comments) => console.log(comments))
        })
})
*/


//*Async ve Fetch kullanarak :
/*
document.querySelector("#btn").addEventListener("click", async() => { //async -> fonksiyonun başına tanımlanır ve fonksiyonun promise dönmesini sağlar
    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1"); //await -> diğer satıra geçmeden bekle, sadece async etiketkli fonksiyonlarda kullanılabilir.
    const post = await responsePost.json();

    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
    const comments = await responseComments.json();

    console.log(comments);
})
*/

//! NOT : DAHA DA KISA HALİ
document.querySelector("#btn").addEventListener("click", async() => {  //json komutunu direkt aldık ama await'i de almamız gerektiğini unutmuyoruz
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json(); 
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
    console.log(post, comments);
})