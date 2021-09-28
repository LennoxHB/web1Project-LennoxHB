window.addEventListener('load' , (event) => {
    document.querySelectorAll(".activate").forEach(el =>{
        el.addEventListener('click' , (e) => {
            e.target.nextElementSibling.classList.toggle("show")
        });
    });
});