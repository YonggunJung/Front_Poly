// 배열
const numbers = [1, 2, 3, 4, 5];
const fluits = ['apple', 'banana', 'cherry'];
const mixed = [1, 'hello', {name: 'Robin'}, [2, 3]];
//console.log(mixed);

// console.log(fluits.length);
// console.log(fluits[0]);
// console.log(fluits[2]);

// 끝에 요소 추가 push, 끝요소 삭제 pop
fluits.push('melon');
console.log(fluits);

// 특정 위치에 요소 추가 / 삭제
fluits.splice(1, 2);    // 인덱스 1부터 2개요소 삭제
console.log(fluits);

// Math 객체(내장 객체 : Math.메서드())
// 난수 생성 : 0 ~ 0.9999999999999
console.log(Math.random());

//Math.floor()
// 소숫점 내림하여 작은 정수 반환
console.log(Math.floor(4.9));
console.log(Math.floor(4.1));
console.log(Math.floor(-4.9));

// 1 ~ 10 사이의 난수 발생
const randomInt = Math.floor((Math.random() * 10)) +1;
console.log(randomInt);