const navLinks = document.querySelectorAll('.nav-link')
const hamburger = document.querySelector('.hamburger')
const navBarMenu = document.querySelector('.nav-wrapper')

const reset = () => {
    navLinks.forEach((navLink) => navLink.classList.remove('active'))
}

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
        if(!navLink.classList.contains('active')) reset()

        navLink.classList.toggle('active')
    })
})

hamburger.addEventListener('click', (e) => {
    navLinks.forEach((navLink) => {
        if(navLink.classList.contains('active')) reset()
    })
    navBarMenu.classList.toggle('active')
    hamburger.classList.toggle('show')
})