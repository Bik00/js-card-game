
const buttons = document.querySelectorAll('.mdc-button');
for (const button of buttons) {
    mdc.ripple.MDCRipple.attachTo(button);
}

const textFields = document.querySelectorAll('.mdc-text-field');
for (const textField of textFields) {
    mdc.textField.MDCTextField.attachTo(textField);
}

const dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));
const showDialogButton = document.querySelector('#show-dialog');
showDialogButton.addEventListener('click', function () {
    dialog.open();
});

document.addEventListener('DOMContentLoaded', function () {
    const dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));
    dialog.open();
});

const minuteInput = document.getElementById('minute');
const secondInput = document.getElementById('second');

minuteInput.addEventListener('input', function () {
    if (parseInt(minuteInput.value) < 1) {
        minuteInput.value = 1;
    } else if (parseInt(minuteInput.value) > 9) {
        minuteInput.value = 9;
    }
});

secondInput.addEventListener('input', function () {
    if (parseInt(secondInput.value) < 0) {
        secondInput.value = 0;
    } else if (parseInt(secondInput.value) > 59) {
        secondInput.value = 59;
    }
});

// 타이머 생성
const timer = new easytimer.Timer();
const startBtn = document.querySelector('#start');
const timePicker = document.querySelector('.time-picker');
const values = document.querySelector('.values');
const board = document.querySelector('.board_score');

// 타이머 이벤트 리스너 등록
timer.addEventListener('secondsUpdated', () => {

    if (values.classList.contains('game-started')) {
        let dataValues = values.getAttribute('data-time');
        values.textContent = timer.getTimeValues().toString() + " / " + dataValues;
        checkGame(timer.getTimeValues().toString());
    } else {
        values.textContent = timer.getTimeValues().toString();
    }

});

timer.addEventListener('started', () => {
    values.textContent = timer.getTimeValues().toString();
});

timer.addEventListener('reset', () => {
    values.textContent = timer.getTimeValues().toString();
});

timer.addEventListener('targetAchieved', () => {

    let $values = $('.values');
    if ($values.hasClass("game-started")) {
        values.textContent = '완료!'; // 카운트다운 완료
    } else {

        let minute = $("#minute").val();
        let second = $("#second").val();
        let time =  parseInt(minute) * 60 + parseInt(second);
        let converted = convertTimes(time);

        timer.stop();
        timer.start({precision: 'seconds', startValues: {seconds: 0}, target: {seconds: time}});
        $values.html(
            timer.getTimeValues().toString() + " / " + converted
        );
        $values.addClass("game-started");
        $values.attr("data-time", converted);
        $('.card').each(function() {
            $(this).css('transform', 'rotateY(180deg)'); // 모든 카드를 뒤집음
        });
        flippedCards = []; // 배열 초기화
        pauseFlipping = false; // 사용자가 카드를 뒤집을 수 있게 함
    }
});

startBtn.addEventListener('click', () => {
    timer.start({countdown: true, startValues: {seconds: toSeconds(timePicker.value)}});

    timePicker.style.display = 'none';
    values.style.display = 'block';
    board.style.display = 'block';
});

// '시:분:초'를 초로 계산하고, 그 결과값을 반환한다.
function toSeconds(hhmmss) {
    const arr = hhmmss.split(':');
    return (+arr[0]) * 60 * 60 + (+arr[1]) * 60 + (+arr[2]);
}

function convertTimes(time)
{
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    
    return `${hours}:${minutes}:${seconds}`;
}