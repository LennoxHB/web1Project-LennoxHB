window.addEventListener('load' , (event) => {

    document.querySelectorAll(".activate").forEach(el =>{
        el.addEventListener('click' , (e) => {
            e.target.nextElementSibling.classList.toggle("show")
        });
    });

    document.querySelectorAll(".botNav div").forEach(el =>{
            el.addEventListener('mouseover', (e) => {
                e.target.nextElementSibling.classList.toggle("showBar")
        });
    });
    document.querySelectorAll(".botNav div").forEach(el =>{
        el.addEventListener('mouseout', (e) => {
            e.target.nextElementSibling.classList.toggle("showBar")
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