//todo -> SELECTING ELEMENTS (GLOBAL)

const form_add_todo = document.querySelector("#form_add_todo"); //buton yerine form üzerinden de submit'i yakalayabiliriz. (bu şekilde entera basınca da kabul ediyor)
const input_add_todo = document.querySelector("#input_add_todo");
const todo_list = document.querySelector(".list-group");
const first_card_body = document.querySelectorAll(".card-body")[0];
const btn_clear_todos = document.querySelector("#btn_clear_todos");
const search_todo = document.querySelector("#input_search_todo");

let todos = []; //storage için kullanacağız

//todo -> MAIN

runEvents();


//todo -> FUNCTIONS

function runEvents() {
    form_add_todo.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    todo_list.addEventListener("click", removeTodo); //her biri için tek tek uğraşmamak için direkt çarpıya vermedik!
    btn_clear_todos.addEventListener("click", removeAllTodos);
    search_todo.addEventListener("keyup", filterTodo);
}

//ADDING TODO
function addTodo(e) {
    const inputText = input_add_todo.value.trim(); //trim, sağdan soldan boşluk varsa temizle demek

    if (inputText == null || inputText == "") {
        showAlert("warning", "Please enter a value!")
    } else {
        //Adding to UI
        addTodo_UI(inputText);
        //Addign to Storage
        addTodo_Storage(inputText);
        //Show an alert
        showAlert("success", "New Todo Added");
    }

    e.preventDefault(); //submit ettikten sonra sayfanın yeniden yüklenmesini engellemek için 
}

function addTodo_UI(newTodo) {
    //<li class="list-group-item">To Do 1 <a href="#" style="float:right; text-decoration: none;">X</a></li> 

    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "removeTodo";
    a.style = "float:right; text-decoration: none;";
    a.textContent = "X";

    li.appendChild(a);
    todo_list.appendChild(li);

    input_add_todo.value = ""; //ekledikten sonra içi sıfırlansın.
}

function addTodo_Storage(newTodo) {
    checkTodosFromStorage(); //daha önceden todos var mıydı kontrol etmek gerekiyor.

    todos.push(newTodo); //arrayin içine yeni todo'yu atıyoruz
    localStorage.setItem("todos", JSON.stringify(todos)); //local storage'a geri array olarak atıyoruz.
}

function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach(function (todo) {
        addTodo_UI(todo);
    });
}

//REMOVING TODO
function removeTodo(e) {
    if (e.target.className == "removeTodo") { //liste üzerinde tıklanılan "X" ise;
        let todo_to_remove = e.target.parentElement //çarpının(<a>) parent'ı <li> etiketi, silmemiz gereken element.

        //removing both ui and storage
        removeTodo_UI(todo_to_remove);
        removeTodo_Storage(todo_to_remove);
    }
}

function removeTodo_UI(removeTodo) {
    removeTodo.remove();
}

function removeTodo_Storage(removeTodo) {
    checkTodosFromStorage();

    todos.forEach(function (todo, index) { //bu şekilde değer,index yakalıyoruz   
        if (todo + "X" === removeTodo.textContent) { // todo+"X" dememizin sebebi, removeTodo.textContent çıktısı a etiketinden dolayı "AliX" şeklinde oluyor 
            todos.splice(index, 1); //indexten başlayıp 1 değer sil dedik ve sadece kendisini silmiş olduk. 
            console.log(todos);
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos)); //local storage'a array halinde geri attık
}

function removeAllTodos() {
    const delete_todos = document.querySelectorAll(".list-group-item");
    if (delete_todos.length > 0) {
        //remove from UI
        delete_todos.forEach(function(todo) {
            todo.remove();
        });

        //remove from Storage
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));

        showAlert("success", "Todos deleted successfuly!");
    } else {
        showAlert("warning", "There is no Todo to be deleted!")
    }
}

//FILTER
function filterTodo(e) {
    const filter_input = e.target.value.toLowerCase().trim();
    const todoList = document.querySelectorAll(".list-group-item");

    if(todoList.length > 0) {
        
        todoList.forEach(function(todo) {
            if(todo.textContent.toLowerCase().trim().includes(filter_input)) {
                todo.setAttribute("style", "display: block");
            }else {
                todo.setAttribute("style", "display: none !important"); // !important yazmanın sebebi bootstrapte inputun flex özelliğinin açık olması
            }
        })

    }else {
        showAlert("warning", "There is no todo for filtering!");
    }
}

//SUPPORT
function showAlert(type, msg) {
    //<div class="alert alert-success" role="alert">message!</div>

    const alert = document.createElement("div");
    alert.className = "alert alert-" + type + " mt-3";
    //alert.className = `alert alert-${type} mt-2`; //bu şekilde de yazılabilir
    alert.style.height = "40px";
    alert.style.display = "flex"; //heighti azaltınca yazı aşağıya kayıyordu diye flex,center özelliği verdik.
    alert.style.alignItems = "center";
    alert.textContent = msg;

    first_card_body.appendChild(alert);

    //3 saniye gözüksün :
    setTimeout(function () {
        alert.remove();
    }, 3000);
}

function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) { //boşsa tanımlıyoruz.
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); //doluysa var olanları array halinde todos değişkenine atıyoruz.
    }
}