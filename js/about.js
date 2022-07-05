const a=document.querySelector('body,html');

function get(){
   a.scrollTo({
       top:10000,
       behavior:'smooth'
   });
}
function show(){
    document.querySelector('#form').style.display="block";
}
function hide(){
    document.querySelector('#form').style.display="none";
}