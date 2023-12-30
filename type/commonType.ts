export type directorType = {
    name: string,
    title: string,
    intro: string,
    facebookUrl: string
}

export type studentType = {
    Name: string,
    Gender: string,
    Physics: number,
    Math: number,
    English: number
}

export type contactTypes = {
        name: string,
        email:string,
        phone:number,
        message:string

}


export type onChangeEventType = {
     target: { value: string, name:string } 
}