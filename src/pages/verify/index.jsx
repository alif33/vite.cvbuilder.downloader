import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { names, colors,fonts } from "../../static/conf.json"
import { useGetInformationQuery } from "../../store/api"
import { useSelector, useDispatch } from "react-redux"
import { setInfo } from "../../store/information/action"
import Spinner from "../../components/spinner"
import Template from "../../components/template"

export default function Verify(){
    const [isCorrect, setIsCorrect] = useState(false)
    const { name, color, font, _id } = useParams()
    const validate = names.includes(name) && colors.includes(color) && fonts.includes(font)
    const { data, isLoading, isError } = useGetInformationQuery(_id)
    const { heading } = useSelector(state=>state.information)
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        if (!validate) {
        //    return navigate("/404") 
        }else{
            if (!isLoading && isError) {
            //    return navigate("/404") 
            }
            dispatch(setInfo(data))
            setIsCorrect(true)
            // navigate("/download")
            
            // real action
            // http://localhost:5173/#/pdf/bita/cyan-500/propins/65b7fcd544e501129af8239


        }
    }, [isLoading])

    console.log(heading, "HEAD");

    return(
        <>
            {
                !isCorrect? 
                    <Spinner isLoading={isLoading}/> : 
                        <Template/>
            }
        </>
    )
}
