"use strict";

let button = document.querySelector('#createButton');
let inputDivCount = document.querySelector('#divCount');
let inputColCount = document.querySelector('#colCount');
let topSection = document.querySelector('#top');

button.addEventListener("click", function(){
    let divCount =+inputDivCount.value;
    let colCount =+inputColCount.value;
    
    let row = document.createElement('div');
    row.className = "row my-5";
    
    let wrapper = document.createElement('div');
    wrapper.className = "wrapper";

    row.appendChild(wrapper);
    
    topSection.firstElementChild.appendChild(row);

    if(divCount > 0 && colCount > 0){
        for(let i = 0; i < divCount; i++){
            let innerDiv = document.createElement('div');
            innerDiv.style.width = 100 / colCount + "%";
            innerDiv.classList.add("inner");
            innerDiv.innerHTML = `<h3>${i+1}</h3>`;
            innerDiv.style.background = RandomColorGenerator();

            wrapper.appendChild(innerDiv);
        }
    }else{
        let errorMsg = document.createElement('div');
        errorMsg.classList.add("alert", "alert-danger");
        errorMsg.innerText = "Please, don't make me angry!";
        
        document.body.insertBefore(errorMsg, topSection);

    }
    
})


function RandomColorGenerator(){
    let symbols = "0123456789abcdef".split("");
    let color = "#";

    for(let i = 1; i <= 8; i++){
        color += symbols[RandomNumberGenerator(0, 15)];
    }

    return color;
}

function RandomNumberGenerator(min, max){
    return min + Math.round(Math.random()*(max-min));
}
