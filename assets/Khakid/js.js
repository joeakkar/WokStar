 
let show =document.querySelector(".show");
let chec =document.querySelector(".bnt");

chec.addEventListener("click",function(){
    show.classList.toggle("active");
});
   


let printing =document.getElementById('print');

printing.addEventListener("click",function(){
     print();
});