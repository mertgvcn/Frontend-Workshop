//? Map - Data Structure (key, value)

/*
    map.set(key,value);
    map.get(key);
    map.size;
    map.delete(key);
    map.has(key); [içinde var mı bakıyor; true,false döndürür]
*/

//! MAP ÜZERİNDEKİ DEĞERLERİ GEZME:

const myMap = new Map();
myMap.set(34, "istanbul");
myMap.set(31, "hatay");
myMap.set(35, "izmir");
myMap.set(6, "ankara");

//1.yöntem
for (let value of myMap) {
    //console.log(value); //key,value pairini array şeklinde döner
    console.log(value[0], value[1]); //key,value pairini ayrı ayrı döner
}

//2.yöntem
for (let [key, value] of myMap) { //destructuring
    console.log(key, value);
}



//! MAP KEY ve VALUE'ları AYIKLAMA

for (let key of myMap.keys()) {
    console.log(key);
}

for (let value of myMap.values()) {
    console.log(value);
}



//! MAP => ARRAY GEÇİŞ

const array = Array.from(myMap); //2D array : array = [[34,"istanbul"],[35,"izmir"],...];
console.log(array);



//! ARRAY => MAP GEÇİŞ

const array2 = [
    [1, "mert"],
    [2, "yusuf"],
    [3, "emir"],
    [4, "ali"]
]

const myMap2 = new Map(array2);
console.log(myMap2);



//! NOT :
/*eğer map oluştururken key kısmına şu şekilde key verirsek :

    map.set([1,2,3], "value");

  map.get([1,2,3]) dediğimizde atadığımız value'ya ulaşamayız. Nedeni ise [1,2,3]'ün referans tip olması.

  
  Eğer aşağıdaki gibi yazarsak kodumuz çalışır:

    key = [1,2,3];
    map.set(key, "value");
    map.get(key);
*/