//클래스 : 객체를 손쉽게 만들수 있는 템플릿(거푸집 틀)
// 1. 생성자함수(고전적인 방법)
// 2. 클래스 😍😍

// 생성자 함수
// function Person(name, age){
//     this.name = name;
//     this.age = age;

//     this.sayHello = function(){
//         console.log(`${this.name}가 인사합니다.`)
//     }
// }

// 클래스
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`${this.name}가 인사합니다.`)
    }
    // sayHello = () => {
    //     console.log(`${this.name}가 인사합니다.`)
    // } 이건 가능
    // function name(params){} : 에러 발생
    
}

// 생성자 함수와 클래스는 객체 만드는 방법은 같음
// hani와 chuu는 Person 클래스의 인스턴스다.
const hani = new Person ('하니', 20);
const chuu = new Person ('츄', 22);

console.log(hani);
console.log(chuu);
console.log(hani.name);
chuu.sayHello();


// obj는 그냥 객체이고, 그 어떤 인스턴스도 아니다
const obj = {name: '희진'};