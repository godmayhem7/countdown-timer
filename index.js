
setInterval(()=>{
    let date = new Date()

    let day = date.getDay()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let firstZero = "0"
    let secondZero= "0"
    let thirdZero= "0"
    let fourthZero= "0"
    document.querySelectorAll("h2")[0].innerHTML= firstZero + day
    document.querySelectorAll("h2")[1].innerHTML= secondZero + hours
    document.querySelectorAll("h2")[2].innerHTML= thirdZero + minutes
    document.querySelectorAll("h2")[3].innerHTML= fourthZero + seconds

    if (document.querySelectorAll("h2")[3].innerHTML.length > 2){
        document.querySelectorAll("h2")[3].innerHTML= seconds 
    }
    if (document.querySelectorAll("h2")[2].innerHTML.length > 2){
        document.querySelectorAll("h2")[2].innerHTML= minutes
    }
    if (document.querySelectorAll("h2")[1].innerHTML.length > 2){
        document.querySelectorAll("h2")[1].innerHTML= hours
    }
    if (document.querySelectorAll("h2")[0].innerHTML.length > 2){
        document.querySelectorAll("h2")[0].innerHTML = day
    }
},1000)


document.querySelector("#facebook").addEventListener("mouseover",()=>{
    document.querySelector("#facebook").setAttribute("src","images/facebook-colored.svg")
})

document.querySelector("#facebook").addEventListener("mouseleave",()=>{
    document.querySelector("#facebook").setAttribute("src","images/icon-facebook.svg")
})


document.querySelector("#instagram").addEventListener("mouseover",()=>{
    document.querySelector("#instagram").setAttribute("src","images/instagram-colored.svg")
})

document.querySelector("#instagram").addEventListener("mouseleave",()=>{
    document.querySelector("#instagram").setAttribute("src","images/icon-instagram.svg")
})


document.querySelector("#pinterest").addEventListener("mouseover",()=>{
    document.querySelector("#pinterest").setAttribute("src","images/pintrest-colored.svg")
})

document.querySelector("#pinterest").addEventListener("mouseleave",()=>{
    document.querySelector("#pinterest").setAttribute("src","images/icon-pinterest.svg")
})
