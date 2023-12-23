import { contactTypes } from "@/type/commonType"
import { Red_Hat_Display } from "next/font/google"
import { text } from "stream/consumers"

export default function DisplayContact(props:{contactData:contactTypes}) {
  return (
    <div>
        <h1 style={{background: "blue"}}>Name: {props.contactData.name}</h1>
        <h1 style={{background:"yellow"}}>email: {props.contactData.email}</h1>
        <h1 style={{background:"pink"}}>phone: {props.contactData.phone}</h1>
        <h1 style={{background:"brown"}}>message: {props.contactData.message}</h1>
    </div>
  )
}