class Person {

    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo() {
        console.log(this.firstName, this.lastName, this.salary);
    }
}

class Student extends Person {

    constructor(firstName, lastName, salary) {
        super(firstName, lastName, salary);
    }

    writeInfo() {
        super.writeInfo(); //super üst sınıfın objesini temsil eder.
    }
}

const s1 = new Student("mert", "güvo", 10000);
s1.writeInfo();