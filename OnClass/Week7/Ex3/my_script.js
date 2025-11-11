const first_name_input = document.querySelector("input[name='first_name']")
const button_process = document.querySelector("input[name='process']")

button_process.addEventListener("click", function(event) {
    event.preventDefault()

    let first_name_value = first_name_input.value.trim()
    if (first_name_value === "") {
        alert("Ban phai nhap gia tri co First Name")
        return
    }

    console.log(first_name_value)
}) 