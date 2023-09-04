openNav = () => {
    let nav = document.querySelector('.nav-left')
    nav.style.width = "300px"
}

const buttonOpen = document.querySelector('.bi-list')

buttonOpen.addEventListener("click", openNav)

closeNav = () => {
    let nav = document.querySelector('.nav-left')
    nav.style.width = "0px"
}

const buttonClose = document.querySelector('.close-nav')

buttonClose.addEventListener("click", closeNav)