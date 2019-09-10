//DOM VARIABLES
let btn = document.getElementById('btn');
let checkbox1 = document.getElementById("defaultInline1");
let checkbox2 = document.getElementById("defaultInline2");
let checkbox3 = document.getElementById("defaultInline3");
let men = document.getElementById("mensProducts");
let women = document.getElementById("womenProducts");
let children = document.getElementById("childrenProducts");

//Handle PRODUCT Button Click Events
btn.addEventListener('click', ()=>{
    checkbox1.checked = true;
    checkbox2.checked = true;
    checkbox3.checked = true;

    if(men.style.display == "none" ){
        men.style.display = "block";
    }
    if(women.style.display == "none"){
        women.style.display = "block";
    }
    if(children.style.display == "none"){
        children.style.display = "block";
    }
   
});

//HANDLE CHECKBOX CLICKS
checkbox1.addEventListener('change', ()=>{
    if(checkbox1.checked){
        men.style.display = "block";
    }else{
        men.style.display = "none";
    }
});

checkbox2.addEventListener('change', ()=>{
    if(checkbox2.checked){
        women.style.display = "block";
    }else{
        women.style.display = "none";
    }
});

checkbox3.addEventListener('change', ()=>{
    if(checkbox3.checked){
        children.style.display = "block";
    }else{
        children.style.display = "none";
    }
});
