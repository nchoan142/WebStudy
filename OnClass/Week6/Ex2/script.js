function handleFocus() {
    document.forms[0].txt_name.style.color = 'limegreen';
    document.forms[0].txt_name.style.backgroundColor = 'red';
    document.forms[0].txt_name.style.fontSize = '16pt';
}

function handleBlur() {
    document.forms[0].txt_name.style.color = 'white';
    document.forms[0].txt_name.style.backgroundColor = 'violet';
    document.forms[0].txt_name.style.fontSize = '16pt';
}

function handleSelect() {
    document.forms[0].txt_name.style.fontSize = '36pt';
    document.forms[0].txt_name.style.fontFamily = 'Arial';
}

function checkNum(num) {
    if (num == "") {
        alert("Moi ban nhap noi dung");
        return false;
    }
    if (isNaN(num)) {
        alert("Moi ban nhap so")
        return false;
    } else {
        alert("Thank you")
    }
}