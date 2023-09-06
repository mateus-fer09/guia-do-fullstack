const nav = document.querySelector('.nav')
let prevScrollPos = window.pageYOffset

window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset
    if (prevScrollPos > currentScrollPos) {
        nav.style.top = '0'
    } else {
        nav.style.top = '-100px'
    }

    prevScrollPos = currentScrollPos
})

const buttonOpen = document.querySelector('.bi-list')
const buttonClose = document.querySelector('.bi-x-lg')
const menu = document.querySelector('.navigation')

openNav = () => {
    menu.style.width = "100%"
}

closeNav = () => {
    menu.style.width = "0%"
}

buttonOpen.addEventListener("click", openNav)
buttonClose.addEventListener("click", closeNav)