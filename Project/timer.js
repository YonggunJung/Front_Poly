// 변수 설정
let timerInterval;
let totalseconds = 0;
let remainingSeconds = 0;
let isPause = false;

// 버튼 요소 가져오기
const startButton = document.querySelector(".strar-btn")
const pauseButton = document.querySelector(".pause-btn")
const resumeButton = document.querySelector(".resume-btn")
const resetButton = document.querySelector(".reset-btn")

// 각 버튼에 이벤트 리스너 추가
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resumeButton.addEventListener('click', resumeTimer);
resetButton.addEventListener('click', resetTimer);

//타이머 함수
function startTimer(){

}

//타이머 일시 정지 함수
function pauseTimer(){
    
}

//타이머 재시작 함수
function resumeTimer(){
    
}

//타이머 리셋 함수
function resetTimer(){
    
}

// 화면 시간 업데이트 함수
function updateDisplay(){

}

// 종료음 재생 함수
function playEndSound(){
    // document.querySelector("#endSound").play();
    const endSound = document.querySelector("#endSound").play();
    endSound.play();
}