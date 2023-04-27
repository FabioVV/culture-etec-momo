let a = document.querySelector('#msg')

setTimeout(() =>{
    a.classList.add('removed')
    a.addEventListener('transitionend',() => {
        a.remove()
    })
}, 1500)



function setActive(){
    
    let inactiveB = document.querySelectorAll('.inactive')


    for(let i = 0; i < inactiveB.length; i++){
    if(document.location.href.indexOf(inactiveB[i].href) >= 0){
            inactiveB[i].classList.add('active')
    }
    
    }

}



window.onload = setActive