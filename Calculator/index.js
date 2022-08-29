let output="";
let buttonList=document.querySelectorAll('button');
Array.from(buttonList).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            exp= eval(output);
            document.querySelector('input').value = exp;
        }
        else{
        console.log(e.target)
        output= output + e.target.innerHTML;
        document.querySelector('input').value = output;
        }
        })
    })




































       