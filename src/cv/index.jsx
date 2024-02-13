import Alpha from "./alpha"
import Bita from "./bita"
import Catalyst from "./catalyst"
import Gama from "./gama"
import Delta from "./delta"
import { useSelector } from "react-redux"

const temps = {
    alpha: Alpha,
    bita: Bita,
    catalyst: Catalyst,
    gama: Gama,
    delta: Delta,
}

export default function Templates({name}){
    const { heading, experience, education, skills, summary } = useSelector(__ =>__.information)
    const Template = temps[name] || Alpha
    return <Template 
        heading={heading}
        experience={experience}
        education={education}
        skills={skills}
        summary={summary}
    />
}