class Insan {

    //burda gerekli attributelar olabilir

    constructor(name, surname, age) {
        this.name = name; //üst kısımda bu özellikleri tanımlamaya gerek yok!
        this.surname = surname;
        this.age = age;
    }

    showInfo() {
        console.log(`name: ${this.name} | surname: ${this.surname} | age: ${this.age}`);
    }
}

const person1 = new Insan("mert", "güvo", 21);
person1.showInfo();