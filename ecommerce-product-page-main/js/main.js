// edit the card
const cart=document.querySelector(".cart-img")
const box=document.querySelector(".box")
const landing=document.querySelector(".landing")
cart.addEventListener("click",()=>{
    if(box.style.display==="none"){
        box.style.display="block"
    }
    else{
        box.style.display="none"
    }
})
const menu =document.querySelector(".menu")
const social_links=document.querySelector(".social-links")
menu.addEventListener("click",()=>{
    if(social_links.style.display==="none"){
        social_links.style.display="block"
    }
    else{
        social_links.style.display="none"
    }
})


// edit the cart counter  


const textcounter =document.querySelector(".counter")
let counter=0
const plus=document.querySelector(".plus")
const minus=document.querySelector(".minus")
const offerCounter=document.querySelector(".offer")
const addToCart=document.querySelector(".add-to-cart")
const empty = document.querySelector(".empty")
const cartContent = document.querySelector("cart-content")
plus.addEventListener("click",()=>{
    counter++
    textcounter.innerHTML=counter
})
minus.addEventListener("click",()=>{
    counter--
    textcounter.innerHTML=counter
})
// 
const offerImg=document.querySelector(".offer-img")
const result=document.querySelector(".result")
addToCart.onclick=()=>{
    empty.style.display="none"
    if(empty.style.display==="none"){
        result.style.display="block"
        offerCounter.innerHTML=`Fall limited Edition Sneakers 
        $125.00 * ${textcounter.innerHTML}`
        result.innerHTML=`$${textcounter.innerHTML*125.00}.00`
    }
}
const landingimg=document.querySelector(".landingimg")
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")
const img4 = document.querySelector(".img4")
img1.addEventListener("click",()=>{
    let source=img1.src
    landingimg.src=source
})
img2.addEventListener("click",()=>{
    let source=img2.src
    landingimg.src=source
})
img3.addEventListener("click",()=>{
    let source=img3.src
    landingimg.src=source
})
img4.addEventListener("click",()=>{
    let source=img4.src
    landingimg.src=source
})

// light box
let lightBox=document.createElement("div")
lightBox.id="lightbox"
document.body.append(lightBox)
landingimg.onclick=()=>{
    lightBox.classList.add("active")
    let lightboximg=document.createElement("img")
    landingimg.classList.add="lightboximg"
    lightboximg.style.height="450px"
    lightboximg.style.width="450px"
    lightboximg.style.position="relative"
    lightboximg.style.borderRadius="10px"
    lightboximg.src=landingimg.src
    lightBox.append(lightboximg)
    const close =document.createElement("div")
    close.style.cssText="height:60px;cursor:pointer;width:60px;position:absolute;top:10%;right:29%;color:orange;"
    close.innerHTML="X"
    lightBox.append(close)
    close.addEventListener("click",()=>{
        lightBox.classList.remove("active")
        lightboximg.style.display="none"
    })
}