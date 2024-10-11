// 정적 프로퍼티, 메서드
// 클래스
class Person{
    static MAX_NUMBER = 4;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`${this.name}가 인사합니다.`)
    }
    
    static makePerson(){
        return new Person('하니', 20)
    }
}

const hani = Person.makePerson();
console.log(hani);