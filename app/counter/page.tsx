"use client"
export default function Counter (){
    
        const onClickhandler= ()=>{
            alert("clicked")
        }
    return(
        <div>
            <h1>Counter</h1>
            <button onClick={onClickhandler}></button>
        </div>
    )
}
