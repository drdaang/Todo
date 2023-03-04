let array = [
    {
        id:1,
        title:'MyFirstNote',
        text:'This is my first note',
    },
];
let taskBtn=document.querySelector('#task-btn');
const title=document.querySelector('.input-title');
const note=document.querySelector('.input-note');
let cardSection=document.querySelector('.card-section');  




taskBtn.addEventListener('click',function(event){
    
    
    const newDiv = document.createElement("div");
    const newContent=document.createTextNode(`<div class="card">
    <h2>${title.value}</h2>
    <p>${note.value}</p>
    <button class="btn">Done</button>
</div>`);
newDiv.appendChild(newContent);
cardSection.innerHTML += newDiv.innerText;
console.log(cardSection);
title.value="";
note.value="";
    
});

window.addEventListener('DOMContentLoaded',()=>{
    let dispNote=array.map((item)=>{
        return `<div class="card">
        <h2>${item.title}</h2>
        <p>${item.text}</p>
        <button class="btn">Done</button>
    </div>`;
    });
    
    // function what(){
    //     document.querySelector('.card-section').innerHTML = dispNote;
    // }
    // what();
    cardSection.innerHTML=dispNote;
    dispNote=dispNote.join('');            
    
    // console.log(dispNote);
});
