let button = document.querySelector('.contacts_submit')
let inputs = document.querySelectorAll('.contacts_name')

button.addEventListener('click', (e) => {
    e.preventDefault()
    let count = 0;
    inputs.forEach( elem => {
        if (elem.value.length > 0) {
            count++
        }
    })
    if (count === 4) {
        inputs.forEach( elem => {
            elem.value = ''
        })
        alert("Мы скоро с вами свяжемся")
    } else {
        alert("Заполните все поля")
    }

})