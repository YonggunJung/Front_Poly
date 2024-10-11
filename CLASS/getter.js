// 속성 접근자: getter  /   setter
// 메서드인데 속성처럼 접근이 가능하게 해주는 특수한 메서드
// 외부에서 보면 메서드가 아닌 속성처럼 보임

let user = {
    name: "Jone",
    surname: "Smith",

    // 함순대 get을 쓰면 속성처럼 불러온다.
    get fullName(){
        return `${this.name}${this.surname}`;
    },

    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    }
};

console.log(user.fullName);
user.fullName = "손 흥민"
console.log(user.fullName);