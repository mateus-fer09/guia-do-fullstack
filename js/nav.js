const buttonClose = document.querySelector('.close-nav')
const buttonOpen = document.querySelector('.bi-list')
const main = document.getElementById('main')
const navLeft = document.querySelector('.nav-left')


openNav = () => {
    navLeft.style.width = "300px"
    if (window.innerWidth >= 580) {
        main.style.marginLeft = "300px"
    }
}

closeNav = () => {
    navLeft.style.width = "0px"
    main.style.marginLeft = "0px"
}

buttonOpen.addEventListener("click", function() {
    openNav()
})

buttonClose.addEventListener("click", function() {
    closeNav()
})