window.addEventListener('load' , (event) => {

    document.querySelectorAll(".activate").forEach(el =>{
        el.addEventListener('click' , (e) => {
            e.target.nextElementSibling.classList.toggle("show")
        });
    });

    //add an image that follows the curser while the element is hovered.
    document.querySelectorAll(".expertsList").forEach(el =>{
        el.addEventListener('mouseover' , (e) =>{
            let img = document.createElement('img');
            img.src = "img/sillhouette.jpg"
            img.className = "expertPortrait"
            el.append(img);
            el.addEventListener('mousemove' , (m) =>{
                img.style.left = m.pageX + 'px'
                img.style.top = m.pageY + 'px'
            })
            el.addEventListener('mouseout' , (e) =>{
                img.remove()  
            })
        })
    })

    // let prevPos = 0
    // window.addEventListener('scroll', (e) =>{
    //     pos = window.scrollY
    //     if (pos > prevPos){
    //         console.log("scrolldown")
    //     }else{
    //         console.log("scrollup")
    //     }
    //     prevPos = pos
    // });
});