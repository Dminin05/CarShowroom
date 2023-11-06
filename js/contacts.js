let button = document.querySelector('.contacts_submit')
let inputs = document.querySelectorAll('.contacts_name')

button.addEventListener('click', (e) => {
    e.preventDefault()
    inputs.forEach( elem => {
        elem.value = ''
    })
    alert("Мы скоро с вами свяжемся")
})