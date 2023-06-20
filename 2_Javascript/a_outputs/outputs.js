//document.write ile ekrana çıktı verme
document.write("İlk ders " + (5+2));

//console.log ile konsolo çıktı verme (console.error(), console.warn() da kullanılabilir.)
console.log("5. satırda hata var! " + (4/2));
console.clear();

//alert ile uyarı poplatma
alert("9.satırda hata var olabilir " + (3*3));

//prompt ile kullanıcıdan string değer alma
let isim = prompt("İsminiz : ");
console.log(isim);

//confirm ile true false değer döndürebiliriz
let sonuc = confirm("silmek istediğinize emin misiniz");
console.log(sonuc);

