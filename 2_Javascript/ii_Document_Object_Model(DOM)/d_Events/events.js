//en kral yöntem aşağıdaki gibi

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