import { propsType } from "@/type/componentsType";
export default function Tag (props:propsType){
    console.log("props",props.propsTagtype)
    var hello:number=24;
    return(
        <div>Tag Display {hello} 
        <h2>{props.propsTagtype}</h2>
        </div>
    )
}