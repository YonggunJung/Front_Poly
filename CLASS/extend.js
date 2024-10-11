// class Tiger{
//     constructor(color){
//         this.color = color
//     }
//     eat(){
//         console.log('먹자');
//     }
//     sleep(){
//         console.log('잔다')
//     }
// }

// class Dog{
//     constructor(color){
//         this.color = color
//     }
//     eat(){
//         console.log('먹자');
//     }
//     sleep(){
//         console.log('잔다');
//     }
//     play(){
//         console.log('놀자');
//     }
// }

class Animal{
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('먹자');
    }
    sleep(){
        console.log('자자');
    }
}

// 타이거 클래스가 Animal 껄 다 들고 왔다.
class Tiger extends Animal{};
const tiger = new Tiger('노랑');
console.log(tiger)
tiger.sleep();

class Dog extends Animal{
    constructor(color, owner){
        super(color);
        this.owner = owner;
    }
    play(){
        console.log('놀자')
    }
    // 오버라이딩 overriding
    eat(){
        super.eat();
        console.log('개같이 마이무~')
    }
};

const dog = new Dog('흰둥이', '짱구');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();