window.addEventListener('load' , (event) => {
    document.querySelectorAll(".topNav").forEach(el =>{
        el.addEventListener('mouseenter', (event) => {
            event.target.style.background ="red";
        });
    });
    document.querySelectorAll(".topNav").forEach(el =>{
        el.addEventListener('mouseleave', (event) => {
            event.target.style.background ="rgb(34, 228, 253)";
        });
    });



    // document.querySelectorAll(".topNav").forEach(el => {
    //         el.style.background = "red"
    // });
});