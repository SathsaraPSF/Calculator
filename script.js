const display = document.getElementById("display");
const input = Array.from(document.getElementsByClassName("button"));


input.map(button =>{
    button.addEventListener("click", (e)=>{
        console.log("clicked");
        console.log(e);
        console.log(e.target.innerText)

        switch(e.target.innerText){
            case "C":
                display.innerText = " ";
                break;
            
            // case "V":
            //     display.innerText = display.innerText.slice(0, -1);
            //     break;
            case "=":
                try{
                    display.innerText = eval(display.innerHTML);
                }catch{
                    display.innerText ="Error..!!";
                }
                break;

            default:
                display.innerText += e.target.innerText;

        
        }
    })
})





