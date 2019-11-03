init()
function init(){
    let scroll = new SmoothScroll('a')
    let about = document.querySelector('.about')
    let skills = document.querySelector('.skills')
    let work = document.querySelector('.project')
    let footer = document.querySelector('.footer')
    
    setTimeout(() => {
        about.style.display = 'flex'
        skills.style.display = 'flex'
        work.style.display = 'block'
        footer.style.display = 'block'
    }, 5000);
  
    
}
