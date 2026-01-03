const textarea = document.getElementById('ansa');
const keyboard = document.getElementById('charKeyboard');

keyboard.addEventListener('click', function (e) {
    if (e.target.dataset.char) {
        textarea.focus();
        textarea.value += e.target.dataset.char;
    }
});


const keyboard1 = document.getElementById('charKeyboard1');

keyboard1.addEventListener('click', function (e) {
    if (e.target.dataset.char) {
        textarea.focus();
        textarea.value += e.target.dataset.char;
    }
});