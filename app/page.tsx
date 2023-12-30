import Button from "./components/button/button"
import Card from "@/app/components/card/card"
import Tag from "./tag/tag"
import { useStyleRegistry } from "styled-jsx"
export default function Home() {
  return (

    <div>
      <main>
        
        <h1 style={{ fontSize: "large", textAlign: "center", background: "blue", color: "white" }}>
          Home Page
        </h1>
      </main>
      <Card data="Submit Data" />
      <br />
      <Button title="1-Apply" data="2-Source" />
      <br />
      <span>10-12-23</span>
    </div>
  )
}
