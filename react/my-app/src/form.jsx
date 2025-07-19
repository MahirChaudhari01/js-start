import './App.css'
const Form = ()=>{
    function handleClick(){
        console.log("Hii my nameis Mahir");
        
    }
    return(
        <div>
           
            <button onClick={handleClick}>
                ClickMe
            </button>
        </div>
    )
}

export default Form;