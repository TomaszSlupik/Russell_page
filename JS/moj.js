
const burgermenu = document.querySelector('.burgermenu')
const burgermenunone = document.querySelector('.burgermenunone')
const navtext = document.querySelector('.navtext')
const navtextflex = document.querySelector('.navtextflex')
const paw = document.querySelector('.paw')
const pawtwo = document.querySelector('.pawtwo')
const pawnone = document.querySelector('.pawnone')
const navtexthero = document.querySelector('.navtexthero')
const keyclose = document.querySelector('.keyclose')
const keycloseblock = document.querySelector('.keycloseblock')



const showMenu = () => {
    navtext.classList.toggle('navtextflex')
    paw.classList.toggle('pawnone')
    pawtwo.classList.toggle('pawnone')
    navtexthero.classList.toggle('pawnone')
    keyclose.classList.toggle('keycloseblock')
    burgermenu.classList.toggle('burgermenunone')
    
}


burgermenu.addEventListener('click', showMenu)
keyclose.addEventListener('click', showMenu)


const footeryear = document.querySelector('.footeryear')
const handleYear = () => {
    const year = (new Date).getFullYear()
    footeryear.innerText = year
}

handleYear()