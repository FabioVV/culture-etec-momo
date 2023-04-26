let a = document.querySelector('#msg')

setTimeout(() =>{
    a.classList.add('removed')
    a.addEventListener('transitionend',() => {
        a.remove()
    })
}, 1500)