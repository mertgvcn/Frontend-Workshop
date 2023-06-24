/*
? Javascript senkron çalışan bir programlama dilidir.

? Asenkron çalışmasına neden olan 3 durum vardır: 
    -Timing (setTimeout() fonksiyonu vb.)
    -Events
    -Http Requests

? Bu yapıları senkrona çevirmek içinde aşağıdaki çözümler geliştirilmiş:
    -Callback
    -Promise
    -Async & Await

? Neden bu durumu çözmek istiyoruz?
    Örneğin bir websitesinde databaseden userid çekeceğiz ve bu zaman gerektiren bir olay.
    Bir sonraki metodumuzda o user'ın postlarını getirmek. Eğer birinci fonksiyon çalışıp tamamlanmadan
    ikinci fonksiyon çalışırsa userid sini gönderemediğimiz için user'ın postlarına ulaşmaya çalışırken
    uygulama patlar. Bu durumları çözmemiz gerekiyor.
    
*/


//*asynchron problem simulation:

function getName() {
    setTimeout(() => {
        console.log = "mert"; //web serverdan kullanıcı ismini request ettik, 1sn sürecek
    }, 1000);
}

function getSurname() {
    setTimeout(() => {
        console.log = "güvercin" //0.5sn sürecek
    }, 500);
}

//yani bu fonksiyonlar çalıştığında soyisim ismin önüne geçecek. Düzeltmemiz gerek