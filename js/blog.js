let div = document.querySelector(".main_div")
let link = document.querySelectorAll('.blog_item_link')
let container = document.querySelector('.blog_container')

link.forEach(elem => {
    elem.addEventListener('click', () => {
        let hidden = elem.querySelector('.hidden')
        hidden.classList.toggle('hidden_active')
    })
})