//Select All Elements
const formWrapper = document.querySelector(".form-wrapper")
const form = document.querySelector("#form")
const searchInput = document.querySelector("#input_search")
const buttonWrapper = document.querySelector(".button-wrapper")
const searchButton = document.querySelector("#button_search")
const clearButton = document.querySelector("#button_clear")
const imagesWrapper = document.querySelector(".images-wrapper")


//Main
runEventListeners();


//Functions
function runEventListeners() {
    form.addEventListener("submit", search);
    clearButton.addEventListener("click", clear);
}

function search(e) {
    let input = searchInput.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${input}`, { //bu api daha korumalı olduğu için key falan istiyor
        method: "GET",
        headers: {
            Authorization: "Client-ID 4rjG9DRySPznS3Y4vFBXAQ69Rda-WNIrEPAqQxFw24s"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            let images = Array.from(data.results);
            images.forEach((image) => {
                addImageToUI(image.urls.small); //image objesinin url objesinin small değerini verdik
            })
        })
        .catch((err) => console.log(err))

    e.preventDefault();
}

function addImageToUI(imgURL) {
    /*
    <div class="card">
        <img src="" alt="">
    </div>
    */

    const div = document.createElement("div");
    div.className = "card";

    const img = document.createElement("img");
    img.setAttribute("src", imgURL);
    img.height = "300";
    img.width = "300";

    div.appendChild(img);
    imagesWrapper.appendChild(div);
}

function clear() {
    searchInput.value = "";

    //Trick: parent'ın içini boşalttığımız için elemanlar silinmiş oluyor
    imagesWrapper.innerHTML = "";

    /* Uzun yol :
    Array.from(imagesWrapper.children).forEach((child)=> {
        child.remove()
    })
    */
}