"use client"
import { log } from "console"
import { buttonProps } from "@/type/componentsType"
import { text } from "stream/consumers";
var count : number = 1;
function Button(props:buttonProps){
    console.log("props",props.title,props.data)
    return(
    
        <button onClick={props.onClickhandler} style={{background:"pink", fontSize:"large"}} >{props.title}{props.data}</button>
    
    )
}
export default Button