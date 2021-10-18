window.addEventListener('load' , (event) => {

    document.querySelectorAll(".activate").forEach(el =>{
        el.addEventListener('click' , (e) => {
            e.target.nextElementSibling.classList.toggle("show")
        });
    });

    let prevPos = 0
    window.addEventListener('scroll', (e) =>{
        pos = window.scrollY
        if (pos > prevPos){
            console.log("scrolldown")
        }else{
            console.log("scrollup")
        }
        prevPos = pos
    });
});