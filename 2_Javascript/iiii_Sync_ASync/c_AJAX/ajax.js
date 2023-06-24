//? AJAX = Asynchronous JavaScript and XML 
//? ReadyState , Status gibi kavramları "https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp" linkinden bakabilirsin

//! Kullanacağımız web server (fake rest api): 
//*  https://jsonplaceholder.typicode.com/comments

//! Kullanacağımız route : [GET, .../comments?postId=1] şeklinde olacak.


function prepareURL(url, id) {
    if (id === null) {
        return url;
    }

    return `${url}?postId=${id}`; //route
}

function getComments(url, id) {
    let editedURL = prepareURL(url, id);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => { //readystate'de bir değişiklik meydana gelirse:
        if (xhr.readyState === 4 && xhr.status === 200) { //readystate=4 (response işlendi ve hazır), status=200 (veri seçerken ve getirirken başarılı olundu)
            console.log(JSON.parse(xhr.responseText)); //stringi array formatına çevirdik
        }
    });

    //url'e get isteği açıp göndermemiz gerekiyor
    xhr.open("GET", editedURL); 
    xhr.send(); 
}


//getComments("https://jsonplaceholder.typicode.com/comments", null); -> id'ye bakmaksızın bütün verileri çeker

getComments("https://jsonplaceholder.typicode.com/comments", 1); //idsi 1 olanları getirir
