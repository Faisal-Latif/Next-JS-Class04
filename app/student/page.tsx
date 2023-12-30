import { studentType } from "@/type/commonType"
const studentRecord : studentType []= [{
    Name:"Faisal",
    Gender:"Male",
    Physics:80,
    Math:50,
    English:90
},
{
    Name:"Burhan",
    Gender:"Male",
    Physics:68,
    Math:78,
    English:60,
},
{
    Name:"Abdul Hadi",
    Gender:"Male",
    Physics:40,
    Math:48,
    English:90
}]
export default function Student () {
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Math</th>
                    <th>Physics</th>
                    <th>English</th>
                </tr>
                {studentRecord.map((student,index)=>{
                    return(
                        <tr key={index}>
                        <td>{student.Name}</td>
                        <td>{student.Gender}</td>
                        <td>{student.Physics}</td>
                        <td>{student.Math}</td>
                        <td>{student.English}</td>
                        </tr>

                    )
                })
                }
            </table>
        </div>
    )
}