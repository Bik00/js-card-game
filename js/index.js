
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