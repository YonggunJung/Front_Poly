// 접근제어자 : 클래스의 속성이나 메서드에 접근할 수 있는 범위
// private, public, protected
// public : 기본적 개념, 클래스 외부에서 자유롭게 접근
// private: 비공개, 외부에서 접근할 수 없음. 자바스트립트 에서는 #
// protected: 아직 지원 X

class Person{
    #name;
    #age;

    #type = '여성'; // 미리 초기화된 데이터
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }

    sayHello(){
        console.log(`${this.name}가 인사합니다.`)
    }
}

const hani = new Person('하니', 20);
console.log(hani);
console.log(hani.age);
// console.log(hani.#age);  //#field는 외부에서 사용 불가