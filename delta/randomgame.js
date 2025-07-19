let h1 = document.querySelector("h1");

function changeColor (color,delay,nextColorChange){
    return new Promise((resolve,reject)=>{
    setTimeout(( )=> {
        h1.style.color = color;
        resolve("color changed");
    },delay); 
     })
};

changeColor("red",1000)
.then(()=>
{   console.log("rred color printed");
    return changeColor("orange",1000);})
    .then(()=>{
    console.log("oranhe printed");
    return changeColor("blue",1000);})
    .then(()=>{
        console.log("black color");

    });
    
    








