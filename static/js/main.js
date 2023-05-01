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



let myIndex = 0;
carousel();

function carousel() {

  let x = document.getElementsByClassName("slides");
  for  (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}



window.onload = setActive