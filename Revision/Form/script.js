const lastNameInput = document.querySelector("input[name='last_name']")
const firstNameInput = document.querySelector("input[name='first_name']")
const addressInput = document.querySelector("textarea[name='address']")

const genderInput = document.querySelectorAll("input[name='gender']")
const magazineInput = document.querySelectorAll("input[name='magazine']")
const durationInput = document.querySelectorAll("input[name='duration']")
const paymentInput = document.querySelectorAll("input[name='payment']")

const btnProcess = document.querySelector("input[name='process']")
const btnReset = document.querySelector("input[name='reset']")

btnProcess.addEventListener("click", function(event) {
    event.preventDefault()
    var errors = []
    var lastName = lastNameInput.value.trim()
    var firstName = firstNameInput.value.trim()
    var address = addressInput.value.trim()
    var gender = getRadioValue(genderInput)
    var magazines = getCheckBoxValue(magazineInput)
    var duration = getRadioValue(durationInput)
    var payment = getRadioValue(paymentInput)

    if(lastName === "") {
        errors.push("Last Name khong duoc de trong")
    } else if (lastName.length > 35) {
        errors.push("Last Name khong duoc qua 35 ky tu")
    }

    if(firstName === "") {
        errors.push("First Name khong duoc de trong")
    } else if (firstName.length > 35) {
        errors.push("First Name khong duoc qua 35 ky tu")
    }

    if(address === "") {
        errors.push("Address khong duoc de trong")
    }
    if(!gender) {
        errors.push("Hay chon gender")
    }
    if(magazines.length === 0) {
        errors.push("Hay chon it nhat 1 tap chi")
    }
    if(!duration) {
        errors.push("Hay chon duration")
    }
    if(!payment) {
        errors.push("Hay chon payment")
    }

    if(errors.length !== 0) {
        alert(errors.join("\n"))
    } else {
        var lastMagazine = magazines[magazines.length-1]
        var stringMagazines = magazines.slice(0, -1)

        var confirmChoice = confirm(`Do you want to order ${stringMagazines} and ${lastMagazine} for ${duration} years and to pay with ${payment}`)
        if(confirmChoice) {
            if (gender === "Male") {
                alert(`Thank you Mr. ${lastName} ${firstName} very much for your order, we will supply as soon as possible the magazines for you to address \n ${address}`)
            } else {
                alert(`Thank you Mrs. ${lastName} ${firstName} very much for your order, we will supply as soon as possible the magazines for you to address \n ${address}`)
            }
        } else {
            lastNameInput.focus()
        }
    }

    
    // console.log(magazines)
    // console.log(lastMagazine)
})

btnReset.addEventListener("click", function(event) {
    event.preventDefault()
    reset()
    
})

function getRadioValue(nodeList) {
    for(const element of nodeList) {
        if (element.checked) {
            return element.value
        }
    }
}

function getCheckBoxValue(nodeList) {
    var result = []
    nodeList.forEach(element => {
        if(element.checked) {
            result.push(element.value)
        }
    });
    return result
}

function reset() {
    clearText(lastNameInput)
    clearText(firstNameInput)
    clearText(addressInput)
    uncheckCheckBoxAndRadio(magazineInput)
    uncheckCheckBoxAndRadio(genderInput)
    uncheckCheckBoxAndRadio(durationInput)
    uncheckCheckBoxAndRadio(paymentInput)
}

function clearText(text) {
    text.value = ""
}

function uncheckCheckBoxAndRadio(nodeList) {
    nodeList.forEach(element => {
        element.checked = false
    });
}