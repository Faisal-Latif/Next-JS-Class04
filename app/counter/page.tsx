"use client"

import { useState } from "react";
import Button from "../components/button/button"
export default function Counter() {
    var count: number = 0;
    const [countState, setCountState] = useState(0);
    //const [isState, setState] = useState(true);
    //const [email, setEmail] = useState("")
    //const [student, setStudent] = useState({name:'faisal', rollno:123, email:'fsd'})


    const onClickAddhandler = () => {
        //alert("clicked")
        //count = count + 1
        setCountState(countState+1)
        console.log("onClickAddhandler" ,count)
    }

    const onClickMinushandler = () => {
        //alert("clicked")
        //count = count - 1
        setCountState(countState-1)
        console.log("onclickMinushandler" ,count)
    }
    const onClickResethandler = () => {
        setCountState(0)
    }    


        return (
            <div style={{textAlign:"center"}}>
                <h1 style={{background:"orange" , color:"white"}}>Counter</h1>
                <br/>
                <Button title="++++++" onClickhandler={onClickAddhandler} />
                <br/>
                <span style={{background:"yelow", fontSize:"large"}}>{countState}</span>
                <br/>
                <Button title="----------" onClickhandler={onClickMinushandler} />
                <br/>
                <Button title="Reset" onClickhandler={onClickResethandler} />

            </div>
        )
    }
