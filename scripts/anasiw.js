const textarea = document.getElementById('ansa');
const keyboard1 = document.getElementById('charKeyboard');

keyboard.addEventListener('click', function (e) {
    if (e.target.dataset.char) {
        textarea.focus();
        textarea.value += e.target.dataset.char;
    }
});