let inputBox= document.getElementById('display');
let buttons=document.querySelectorAll('button');
let buttonArray=Array.from(buttons);
let string='';
buttonArray.forEach(btn =>{
   btn.addEventListener('click',(e) => {
    if(e.target.innerHTML=='DEL'){
      string=string.substring(0,string.length-1);
      inputBox.value=string;
    }else if(e.target.innerHTML=='AC'){
       string='';
       inputBox.value=string;
    }else if(e.target.innerHTML=='='){
       string=eval(string);
       inputBox.value=string;
    }
    else{
      string+=e.target.innerHTML;
      inputBox.value=string;
    }
     
     
   });
});