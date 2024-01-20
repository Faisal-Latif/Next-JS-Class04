
import ContactForm from "@/app/contact/contactForm"
import Link from "next/link"
export default function Contact() {
  return (
    <div>
      <Link href={"/"}>index</Link>
      <br/>
      <Link href={"/about"}>about</Link>
        <h1>Contact</h1>
       <ContactForm/>
      
    </div>
  )
}