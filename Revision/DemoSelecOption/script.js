const selectedTransport = document.querySelector("select[name='transport']")
const btnSubmit = document.querySelector("input[name='submit']")
const displayText = document.querySelector("#display-text")

btnSubmit.addEventListener("click", function(event) {
    event.preventDefault()
    var transport = selectedTransport.value
    displayText.textContent = `Ban vua chon ${transport}`
    console.log(transport)
})