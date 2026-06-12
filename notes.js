const notescontainer=document.querySelector('.notes-container');
const createbtn=document.querySelector('.btn');
let notes=document.querySelectorAll('.input-box');

function shownotes(){
    notescontainer.innerHTML=localStorage.getItem("notes");
}
shownotes();

function updatestorage(){
    localStorage.setItem("notes",notescontainer.innerHTML);
}

createbtn.addEventListener('click',()=>{
let inputbox=document.createElement('p');
let img=document.createElement('img');
inputbox.className='input-box';
inputbox.setAttribute('contenteditable','true');
img.src="images8/delete.png";
notescontainer.appendChild(inputbox).appendChild(img);

})
notescontainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
              updatestorage();

    }
   else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
           nt.onkeyup=updatestorage
        
        })
    }
})


