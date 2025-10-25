function addition(form) {
    number1 = eval(form.a.value);
    number2 = eval(form.b.value);
    result = number1 + number2;
    form.result.value = result;
}

function subtraction(form) {
    number1 = eval(form.a.value);
    number2 = eval(form.b.value);
    result = number1 - number2;
    form.result.value = result;
}

function multiplicaton(form) {
    number1 = eval(form.a.value);
    number2 = eval(form.b.value);
    result = number1 * number2;
    form.result.value = result;
}

function division(form) {
    number1 = eval(form.a.value);
    number2 = eval(form.b.value);
    result = number1 / number2;
    form.result.value = result;
}

function power(form) {
    number1 = eval(form.a.value);
    number2 = eval(form.b.value);
    result = Math.pow(number1, number2)
    form.result.value = result;
}

