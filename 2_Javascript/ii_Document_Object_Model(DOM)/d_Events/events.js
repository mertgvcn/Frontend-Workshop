/*

 ?Mouse events
 *DOMContentLoaded : document yüklendiğinde  ör:  document.addEventListener("DOMContentLoaded", run());
 *load             : window yüklendiğinde    ör:  window.addEventListener("load", run());
 *click            : tıklandığında
 *dblclick         : çift tıklandığında
 *mouseover        : mousela üzerine gelince (mesela cardbody seçtik, içindeki diğer elementlerin üzerine gelince yeniden çalışıyor)
 *mouseout         : mousela üzerinden gidince (yukarıdaki gibi)
 *mouseenter       : mousela üzerine gelince (bu sefer içindeki elementler için ayrıca çalışmıyor)
 *mouseleave       : mousela üzerinden gidince (yukarıdaki gibi)

 */

const clearButton = document.querySelector("#btn_clear_todos");

clearButton.addEventListener("click", changeTitle);

function changeTitle() {
    document.querySelectorAll(".card-header")[1].textContent = "Your Todos List";
}

/*
function changeTitle(e) {
    console.log(e.type);                ->  event type'ını döner. 
    console.log(e.target);              ->  html yapısını döner
    console.log(e.target.textContent);  ->  html yapısındaki textcontenti döner.
}
*/

//--------------------------------------------------------------------------------------------------------------

/*

 ?Keyboard events
 *keypress : harf ve sayılarda tetiklenir
 *keydown  : klavyeden herhangi bir tuşa basıldığında tetiklenir
 *keyup    : klavyeden herhangi bir tuştan elimizi çektiğimizde tetiklenir

 */

//add todo'ya yazdığımız, title'ı güncellesin:


const input = document.querySelector("#input_addTodo");
const title = document.querySelectorAll(".card-header")[0];

input.addEventListener("keyup", run)

function run(e) {
    title.textContent = e.target.value;
}


//--------------------------------------------------------------------------------------------------------------


/*

?Input events
*focus           : inputun içine girilince
*blur            : inputun içinden çıkılınca  
*copy,paste,cut  : input içindeki metin copy,paste,cut yapılınca
*select          : input içindeki metin seçilince ctrl+a ya da mousela

 */

input.addEventListener("focus", focused)

function focused(e) {
    console.log(e.type);
}