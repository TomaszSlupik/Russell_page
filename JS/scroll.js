const scrollTop = document.querySelector('.scrollTop')

const up = () => {
    window.scroll({
           
        top:0
           
    })
   }

scrollTop.addEventListener('click', up)