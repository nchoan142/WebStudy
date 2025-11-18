const first_name_input = document.querySelector("input[name='first_name']")
const last_name_input = document.querySelector("input[name='last_name']")
const magazine_input = document.querySelectorAll("input[name='choice']")

const gender_input = document.querySelectorAll("input[name='gender']")
const duration_input = document.querySelectorAll("input[name='duration']")
const payment_input = document.querySelectorAll("input[name='payment_option']")

const button_process = document.querySelector("input[name='process']")


button_process.addEventListener("click", function(event) {
    event.preventDefault()

    let first_name_value = first_name_input.value.trim()
    let last_name_value = last_name_input.value.trim()
    let selectedMagazines = getCheckboxValue(magazine_input)
    let gender_value = getRadioValue(gender_input)
    let duration_value = getRadioValue(duration_input)
    let payment_value = getRadioValue(payment_input)
    // if (first_name_value === "") {
    //     alert("Ban phai nhap gia tri co First Name")
    //     return
    // }

    // console.log(first_name_value, last_name_value)
    console.log(first_name_value)
    console.log(last_name_value)
    console.log(selectedMagazines)
    console.log(gender_value)
    console.log(duration_value)
    console.log(payment_value)
}) 

function getCheckboxValue(checkboxs) {
    let values = []
    checkboxs.forEach(element => {
        if(element.checked) {
            values.push(element.value)
        }
    });
    return values
}

function getRadioValue(radios) {
    for (const element of radios) {
        if (element.checked) {
            return element.value
        }
    }
    return null
}