//? FOR OF loop :

let names = ["emir", "ali", "yusuf", "mert"];

//old way 
names.forEach((name) => { //tek parametre, tek satır özelliği de kullanılabilirdi
    console.log(name)
});

//for of :
for(let name of names) {
    console.log(name, names.indexOf(name)); //value,key
} 


//? FOR IN loop:

for(let name_index in names) {
    console.log(name_index, names[name_index]); //key,value
}
