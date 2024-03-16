
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

// 타이머 이벤트 리스너 등록
timer.addEventListener('secondsUpdated', () => {
    values.textContent = timer.getTimeValues().toString();
});
timer.addEventListener('started', () => {
    values.textContent = timer.getTimeValues().toString();
});
timer.addEventListener('reset', () => {
    values.textContent = timer.getTimeValues().toString();
});
timer.addEventListener('targetAchieved', () => {
    values.textContent = '완료!'; // 카운트다운 완료
});

startBtn.addEventListener('click', () => {
    timer.start({countdown: true, startValues: {seconds: toSeconds(timePicker.value)}});

    timePicker.style.display = 'none';
    values.style.display = 'block';
});

// '시:분:초'를 초로 계산하고, 그 결과값을 반환한다.
function toSeconds(hhmmss) {
    const arr = hhmmss.split(':');
    return (+arr[0]) * 60 * 60 + (+arr[1]) * 60 + (+arr[2]);
}