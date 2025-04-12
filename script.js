//your code here

let mode=document.querySelector("#swap");
        let currentMode="Light";

        mode.addEventListener("click",()=>{
            if(currentMode==="Light"){
                currentMode="Dark"
                let body=document.querySelector("body");
                body.style.backgroundColor="black";
                body.style.color="white";
				mode.style.color="white";
				mode.style.backgroundColor="blue";
                
            }
            else{
                let body=document.querySelector("body");
                body.style.backgroundColor="white";
                body.style.color="black";
                currentMode="Light"
				mode.style.color="black";
				mode.style.backgroundColor="silver";
            }
        })