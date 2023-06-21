//? STYLE YAPISI***************************************************************************
//"w3 schools html dom style object" sitesinden yapılara bakabilirsin.

const todo_first = document.querySelector("li:first-child");
//* todo_first.style.color = "white";
//* todo_first.style.backgroundColor = "blue";
//* todo_first.style.fontWeight = "bold";
//* todo_first.style.paddingLeft = "30px";
//* todo_first.style.borderRadius = "20px";


//? PARENT-CHILDEREN-SIBLING ILIŞKISI******************************************************

const row = document.querySelector(".row");
console.log(row);

card_list = row.children[1];   //2. çocuğuna eriştik.
container = row.parentElement; //parent'ı olan containera eriştik

empty = row.nextSibling; //olsaydı bir sonraki kardeşine erişebilirdik
empty2 = row.previousSibling; //olsaydı bir önceki kardeşine erişebilirdik
empty3 = row.nextSibling.nextSibling.children[0]; //bu şekilde de kullanılabiliyor LinkedList gibi

