//!------------------------------------------  CREATING AN ELEMENT -------------------------------------------

//* ORNEK 1 ************************************************************************************************** 
// yeni buton ekleme

const link = document.createElement("a");

//link özellikleri
link.id = "go_to_google"
link.className = "btn btn-dark btn-sm mt-4";
link.href = "https://www.google.com.tr";
link.target = "_blank";
link.innerHTML = "Google";
link.style.height = "40px";
link.style.paddingTop = "8px";
link.style.fontWeight = "bold";

//şimdi oluştuduğum bu elementi, row'un en altına yerleştireceğim
const x = document.querySelector(".row");
x.appendChild(link); //sona ekler


//* ORNEK 2 ************************************************************************************************** 
// yeni todo ekleme

const new_todo = document.createElement("li");
const todo_link = document.createElement("a"); //içindeki a etiketi

//aşağıdakinden kopya çekebiliriz.
//<li class="list-group-item">To Do 1 <a href="#" style="float:right; text-decoration: none;">x</a></li>

//new todo özellikleri
new_todo.className = "list-group-item";
new_todo.innerHTML = "To Do 6";

//içindeki a etiketi özellikleri
todo_link.href = "#";
todo_link.style.float = "right";
todo_link.style.textDecoration = "none";
todo_link.innerHTML = "X";

new_todo.appendChild(todo_link); //önce a yı li nin içine atıyorum

//şimdi bu yapıyı tek olan ul etiketinin sonuna ekleyelim
const todos = document.querySelector("ul");
todos.appendChild(new_todo);



//!------------------------------------------  REMOVING AN ELEMENT -------------------------------------------

//Search Butonunu kaldıralım
const searchButton = document.querySelector("#button-search-todo");
searchButton.remove();

//alternatif yöntem:
//const buttons = document.querySelectorAll(".btn");
//buttons[1].remove();



//!------------------------------------------- REPLACING AN ELEMENT ------------------------------------------

//My to-do list yazan header'ı büyütüp değiştirelim
const card_todos = document.querySelectorAll(".card")[1]; //değiştirmek istediğim şeyin atasını seçtim

//<h5 class="card-header">My To-Do List</h5>
const newTitle = document.createElement("h4");
newTitle.className = "card-header";
newTitle.textContent = "MY TODO LIST";

card_todos.replaceChild(newTitle, card_todos.childNodes[1]); //yeni element, eski element(node tipinde yazmak gerek)
