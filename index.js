/** Initialize MDC Web components. */
const buttons = document.querySelectorAll('.mdc-button');
for (const button of buttons) {
    mdc.ripple.MDCRipple.attachTo(button);
}

const textFields = document.querySelectorAll('.mdc-text-field');
for (const textField of textFields) {
    mdc.textField.MDCTextField.attachTo(textField);
}

/** Custom javascript code. */
const greetMessageEl = document.querySelector('.greet-message');
const greetButton = document.querySelector('.greet-button');
greetButton.addEventListener('click', () => {
    const firstNameInput = document.querySelector('.first-name-input').value;
    const lastNameInput = document.querySelector('.last-name-input').value;
    let name;
    if (firstNameInput || lastNameInput) {
        name = firstNameInput + ' ' + lastNameInput;
    } else {
        name = 'Anonymous';
    }
    greetMessageEl.textContent = `Hello, ${name}!`;
});


const dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));
const showDialogButton = document.querySelector('#show-dialog');
showDialogButton.addEventListener('click', function () {
    dialog.open();
});

document.addEventListener('DOMContentLoaded', function () {
    const dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));
    dialog.open();
});