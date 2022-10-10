const moon = document.querySelector('#moon')
const start = document.querySelector('#start')
const mountainsBehind = document.querySelector('#mountains_behind')
const text = document.querySelector('#text')
const btn = document.querySelector('#btn')
const mountainsFront = document.querySelector('#mountains_front')
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    const value = window.scrollY
    start.style.left = value * 0.25 + 'px'
    moon.style.top = value * 1.05 + 'px'
    mountainsBehind.style.top = value * 0.5 + 'px'
    mountainsFront.style.top = value * 0 + 'px'
    text.style.marginRight  = value * 4 + 'px'
    text.style.marginTop  = value * 1.5 + 'px'
    btn.style.marginTop  = value * 1.5 + 'px'
    header.style.top = value * 0.5 + 'px'
})