import { directorType } from "@/type/componentsType";
export default function about() {
    const listOfdirectors: directorType[] = [{
        name: "Faisal",
        title: "CEO",
        intro: "something",
        facebookurl: "fb.com"
    },
    {
        name: "Burhan",
        title: "CEO",
        intro: "something",
        facebookurl: "fb.com"

    },
    {
        name: "Hadi",
        title: "CEO",
        intro: "something",
        facebookurl: "fb.com"

    }
    ]
    return (
        <div>
            <h1>List of Directors</h1>

            {listOfdirectors.map((item, index) => {
                return (
                    <div>
                        {index == 1 ?
                            <>
                                <h1>Name:{item.name}</h1>
                                <h1>Title:{item.title}</h1>
                                <h1>Intro:{item.intro}</h1>
                                <h1>Facebookurl:{item.facebookurl}</h1>
                                </>
                    : ""}
                            
                    </div>
                )
            })}
        </div>
    )
}