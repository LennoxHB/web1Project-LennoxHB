window.addEventListener('load' , (event) => {
    
    let date = new Date();

    //Expands an element when clicked on
    document.querySelectorAll(".activate").forEach(el =>{
        el.addEventListener('click' , (e) => {
            e.target.nextElementSibling.classList.toggle("show")
        });
    });

    //Couldn't think of a suitable API for the site, so heres a random one.
    //Gets historical data for holidays
    (async () =>{
        let res = await fetch("https://api.getfestivo.com/v2/holidays?country=NZ&year=2020&api_key=972458e42cb140131e377e39fcf17512")
        let data = await res.json()
        console.log(data.holidays[0].name)
    })()
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