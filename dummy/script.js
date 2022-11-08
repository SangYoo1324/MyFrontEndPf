let alertMsg = document.getElementById("alert");
let customAlert = function(String){
alertMsg.innerHTML+=String;
alertMsg.style.display="block";

};

let btn = document.getElementById("trigger");
btn.addEventListener('click',()=>{
customAlert("shibal");
});

setTimeout();


const deleteBtn= document.getElementById("btn-delete");
const editBtn =document.getElementById("btn-edit");
 if(editBtn.getAttribute("data-post-username") ){
 deleteBtn.style.display = 'block';
 editBtn.style.display = 'block';
 }