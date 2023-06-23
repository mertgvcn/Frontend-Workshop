//todo -> SELECTING ELEMENTS (GLOBAL)

const form_add_todo = document.querySelector("#form_add_todo"); //buton yerine form üzerinden de submit'i yakalayabiliriz.
const input_add_todo = document.querySelector("#input_add_todo");
const todo_list = document.querySelector(".list-group");

let todos = []; //storage için kullanacağız

//todo -> RUN

runEvents();


//todo -> FUNCTIONS

function runEvents() {
    form_add_todo.addEventListener("submit", addTodo);
}

function addTodo(e) {
    const inputText = input_add_todo.value.trim(); //trim, sağdan soldan boşluk varsa temizle demek

    if (inputText == null || inputText == "") {
        alert("Please type an text!");
    } else {
        //Adding to UI
        addTodo_UI(inputText);
        //Addign to Storage
        addTodo_Storage(inputText);
    }

    e.preventDefault();
}

function addTodo_UI(newTodo) {
    //<li class="list-group-item">To Do 1 <a href="#" style="float:right; text-decoration: none;">X</a></li> 

    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = newTodo; 

    const a = document.createElement("a");
    a.href = "#";
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

function checkTodosFromStorage() {
    if(localStorage.getItem("todos") === null) { //boşsa tanımlıyoruz.
        todos = []; 
    }else {
        todos = JSON.parse(localStorage.getItem("todos")); //doluysa var olanları todos değişkenine atıyoruz.
    }
}