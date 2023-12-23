"use client"
import { log } from "console"
import { buttonProps } from "@/type/componentsType"
var count : number = 1;
function Button(props:buttonProps){
    console.log("props",props.title,props.data)
    return(
    
        <button onClick={()=> alert ("clicked")} >Submit {props.title},{props.data}</button>
    
    )
}
export default Button