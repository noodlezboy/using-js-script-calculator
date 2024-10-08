function element(value) {
    document.getElementById('display').value += value;
};

function clearDisplay() {
    document.getElementById('display').value = '';
};
function remove() {
    display.value = display.value.toString().slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }

};
function calculate() {
    if (display.value === '') {
        alert("your must write somthing!");
    }
    else {
        display.value = eval(display.value);
    }
};

