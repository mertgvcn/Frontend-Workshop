// midterm1 %30
// midterm2 %30
// final    %40 

let newRow = "\r\n"; //alt satıra geçmek için kullanılabiliyor.

let midterm1_grade = Number(prompt("Enter midterm1 grade : "));
let midterm2_grade = Number(prompt("Enter midterm2 grade : "));
let final_grade = Number(prompt("Enter final grade : "));

let result = (0.3*(midterm1_grade+midterm2_grade)) + (0.4*final_grade);

if(result>=50) {
    alert("Dersten " + result + newRow + "ortalama ile geçtiniz.")
}else {
    alert("Dersten " + result + newRow + "ortalama ile kaldınız.")
}