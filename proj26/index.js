let productImg = document.getElementById('productImg');
let btn = document.querySelectorAll('.btn');
let gbtn = document.getElementById('green');
let bbtn = document.getElementById('black');

gbtn.addEventListener('change',()=>{
    productImg.src = "images/g1.png"

    btn[0].addEventListener('click',(e)=>{
        productImg.src = "images/g1.png";
        for (bt of btn) {
            bt.classList.remove("active");
        }
        e.target.classList.add("active");
    })
    btn[1].addEventListener('click',(e)=>{
        productImg.src = "images/g2.png";
        // productImg.style.width = '170px';
        for (bt of btn) {
            bt.classList.remove("active");
        }
        e.target.classList.add("active");
    })
    btn[2].addEventListener('click',(e)=>{
        productImg.src = "images/g3.png";
        for (bt of btn) {
            bt.classList.remove("active");
        }
        e.target.classList.add("active");
    })
})

bbtn.addEventListener('change',()=>{
    productImg.src = 'images/image1.png'
    btn[0].addEventListener('click', (event) => {
        productImg.src = "images/image1.png";
        for (bt of btn) {
            bt.classList.remove("active");
        }
        event.target.classList.add("active");
    });
    
    btn[1].addEventListener('click', (event) => {
        productImg.src = "images/image2.png";
        for (bt of btn) {
            bt.classList.remove("active");
        }
        event.target.classList.add("active"); 
    });
    
    btn[2].addEventListener('click', (event) => {
        productImg.src = "images/image3.png";
        for (bt of btn) {
            bt.classList.remove("active");
        }
        event.target.classList.add("active");  
    });
    
})
