let submitEmail = document.querySelector(".footer_menu-list-input-submit")
let inputEmail = document.querySelector(".footer_menu-list-input")

submitEmail.addEventListener('click', (e) => {
    e.preventDefault()
    let email = inputEmail.value
    inputEmail.value = ""

    alert("Вы подписались на рассылку: " + email)

})