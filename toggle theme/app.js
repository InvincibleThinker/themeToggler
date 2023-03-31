const darkButoon = document.getElementById('dark')
const lightButoon = document.getElementById('light')
const solarButton = document.getElementById('solar')
const body = document.body

const theme = localStorage.getItem('theme')
const isSolar = localStorage.getItem('isSolar')

darkButoon.addEventListener('click', () => {
    body.classList.replace('light', 'dark')
    localStorage.setItem('theme', 'dark')
})


lightButoon.addEventListener('click', () => {
    body.classList.replace('dark', 'light')
    localStorage.setItem('theme', 'light')
})


solarButton.addEventListener('click', () => {
    
    if(body.classList.contains('solar')) {
        body.classList.remove('solar')
        solarButton.style.cssText = `
            --bg-solar: var(--yellow)
        `
        solarButton.innerText = 'Solarize'
        localStorage.removeItem('isSolar')
    } else {
        body.classList.add('solar')
        solarButton.style.cssText = `
            --bg-solar: white
        `
        solarButton.innerText = 'Normalize'
        localStorage.setItem('isSolar', true)
    }   


})