let box = document.querySelectorAll("#keyboard>div");
let bag="";
for(let i=0;i<=box.length-1;i++){
    box[i].addEventListener("click",myFunction)
}

function myFunction(event){
    let targetResult = event.target.innerText;

    if(targetResult=="C"){
        document.querySelector("#display").innerText = "";
        bag="";
    }else if(targetResult=="="){
        document.querySelector("#display").innerText=eval(bag);
     }else{
        bag=bag+targetResult;
        document.querySelector("#display").innerText = bag;
    }
    
}