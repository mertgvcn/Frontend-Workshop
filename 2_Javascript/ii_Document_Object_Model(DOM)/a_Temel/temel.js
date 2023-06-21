//? SELECTORS**********************************************************************************(65.Video) 

const searchButton = document.getElementById("button-search-todo");
//console.log(searchButton);

const buttons = document.getElementsByClassName("btn"); //*btn classını içeren tüm elementleri seçer
//console.log(buttons);
const addButton = buttons[0]; //*ilk elemanı seçtik

const todo_list = document.getElementsByTagName("li"); //*li etiketini içeren tüm elementleri seçer
//console.log(todo_list);
//console.log(todo_list[0]);


//? Element'in attribute'una ulaşma**********************************************************************
//*Yukarıda yaptıklarımızın hepsi, komple html satırını yakalıyor. 

//*Örneğin styleına erişmek
//console.log(addButton.getAttribute("style"));

//*Örneğin class listesine erişmek
//console.log(searchButton.classList);
//console.log(searchButton.classList[0]);


//? Text Üzerinde Değişiklik*****************************************************************************
let addButton_text = addButton.textContent; //*Direkt String'i seçer. Örneğin "Add"
let addButton_html = addButton.innerHTML;   //*Html olarak alır. Örneğin "<b>Add<b>"
//console.log(addButton_text + " - " + addButton_html);
addButton.innerHTML = "<i><b>ADD</b><i>" //*Yazı tipini değiştirebiliyoruz, eğer text content yazsaydık bold ve italik yapmazdı ve etiketleri string olarak görürdü



//! NOT: Yukarıdaki selectorlere ek olarak daha genel bir selector var;

const addButton2 = document.querySelector("#button-add-todo"); //*Direkt css teki gibi seçebiliyoruz

const buttons2 = document.querySelectorAll(".btn"); //*Çoklu sonuç dönecekse bu şekilde hepsini seçebiliyoruz.
const searchButton2 = document.querySelector(".btn")[1];

const todo_list2 = document.querySelectorAll("li");
const todo_1 = document.querySelector("li")[0];
const todo_last = document.querySelector("li:last-child");

//*Bir örnek: 
const todo_list_evens = Array.from(document.querySelectorAll("li:nth-child(even)"));
todo_list_evens.forEach(function(todo) {
   todo.style.backgroundColor = "lightgrey"; //getAttribute yerinde direkt element.attribute şeklinde de çağırabiliyoruz.
});
//sonraki derste style kullanımı daha iyi anlaşılıyor
