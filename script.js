let h1 = document.querySelector("h1");
let btn = document.querySelector(".btn");
let red = Math.floor(Math.random()*255);
let blue = Math.floor(Math.random()*255);
let green = Math.floor(Math.random()*255);
h1.innerText = `RGB (${red}, ${blue}, ${green})`;


let box = document.querySelector(".box");
box.style.backgroundColor = `rgb(${red},${blue},${green})`;

btn.addEventListener('click',()=>{
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    h1.innerText = `RGB (${red}, ${blue}, ${green})`;
    let box = document.querySelector(".box");
    box.style.backgroundColor = `rgb(${red},${blue},${green})`;
})