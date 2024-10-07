const numbersDiv = document.querySelector('.numbers');
const drawButton = document.querySelector('#draw');
const resetButton = document.querySelector('#reset');

const lottoNumbers = [];
const colors = ['orange', 'skyblue', 'tomato', 'gray', 'lightgreen'];

// 추첨 버튼에 관련된 이벤트
drawButton.addEventListener('click', () =>{
    while(lottoNumbers.length < 6){
        let ran = Math.floor(Math.random() * 45) +1;
        // console.log(ran);
        if(lottoNumbers.indexOf(ran) == -1){        // 중복 배제 : indexOf는 같은 값이 없으면 -1
            lottoNumbers.push(ran);
            paintNumber(ran);
        }
    }
    console.log(lottoNumbers);
});

// 요소 추가 및 디스 플레이
function paintNumber(number){
    const eachDiv = document.createElement('div');
    let colorIndex = Math.floor(number / 10);
    eachDiv.style.backgroundColor = colors[colorIndex];
    eachDiv.classList.add('eachnum');
    eachDiv.textContent = number;
    numbersDiv.appendChild(eachDiv);
}

// 지우기 버튼 이벤트
resetButton.addEventListener('click', ()=>{
    lottoNumbers.splice(0, 6);
    // console.log(lottoNumbers);
    numbersDiv.innerHTML = '';
})