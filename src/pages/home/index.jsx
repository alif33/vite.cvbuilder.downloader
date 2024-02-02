import { useGetInformationQuery } from "../../store/api"
export default function Home(){
    const {data} = useGetInformationQuery("65ba7fcd544e501129af8239")
    

    return(
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ab.</h1>
    )
}
