const textarea = document.getElementById('tirra');
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

function directMode() {
    let textarea = document.getElementById("tirra").value;
    let lastchar = textarea.charAt(textarea.length - 1);
    let lastsecondchar = textarea.charAt(textarea.length - 2);
    if (lastchar == '=') {
        switch (lastsecondchar) {
            case 'c':
                document.getElementById("tirra").value = textarea.substring(0, textarea.length - 2) + 'č';
                break;
            case 'd':
                document.getElementById("tirra").value = textarea.substring(0, textarea.length - 2) + 'ḍ';
                break;
            case 'g':
                document.getElementById("tirra").value = textarea.substring(0, textarea.length - 2) + 'ǧ';
                break;
            case 'h':
                document.getElementById("tirra").value = textarea.substring(0, textarea.length - 2) + 'ḥ';
                break;
            case 'r':
                document.getElementById("tirra").value = textarea.substring(0, textarea.length - 2) + 'ṛ';
                break;
            case 's':
                document.getElementById("tirra").value = textarea.substring(0, textarea.length - 2) + 'ṣ';
                break;
            case 't':
                document.getElementById("tirra").value = textarea.substring(0, textarea.length - 2) + 'ṭ';
                break;
            case 'z':
                document.getElementById("tirra").value = textarea.substring(0, textarea.length - 2) + 'ẓ';
                break;
            case 'e':
                document.getElementById("tirra").value = textarea.substring(0, textarea.length - 2) + 'ɛ';
                break;
            case 'y':
                document.getElementById("tirra").value = textarea.substring(0, textarea.length - 2) + 'ɣ';
                break;
            case 'E':
                document.getElementById("tirra").value = textarea.substring(0, textarea.length - 2) + 'Σ';
                break;
            case 'Y':
                document.getElementById("tirra").value = textarea.substring(0, textarea.length - 2) + 'Γ';
                break;
        }
    }
}

function focusTextarea() {
    document.getElementById('tirra').focus();
}

function appendChar(char) {
    document.getElementById("tirra").value += char;
}