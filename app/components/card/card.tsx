import { cardprops } from "@/type/componentsType"
var cardName:string="Pakistan Zindabad"
export default function Card (props:cardprops){

    console.log("props",props.data)
    return(
    
        <div>Card Components Display {props.data}
        <h2>{cardName}</h2>
        </div>
    )
}