import Button from "./components/button/button"
import Card from "@/app/components/card/card"
import Tag from "./tag/tag"

export default function Home() {
  return (
    <div>
      <h1>
      Home Page
      </h1>
     <Card data="Submit Data"/>
     <br/>
     <Button title="1-Apply" data="2-Source"/>
     <br/>
     <span>10-12-23</span>
    </div>
      )
}
