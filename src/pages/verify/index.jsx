/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setInfo } from "../../store/information/action"
import { getResume } from "../../db/queries"
import Spinner from "../../components/spinner"
import PDF from "../../components/PDF"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../../db"

export default function Verify(){
    const [isLoading, setIsLoading] = useState(false)
    const { _id } = useParams()
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        setIsLoading(true)
        const resumeDocRef = doc(db, "resumes", _id)
        const unsubscribe = onSnapshot(resumeDocRef, (snap) => {
            if (snap.exists()) {
                console.log(snap.data());
                dispatch(setInfo(snap.data()))
                setIsLoading(false)
            }
        })
        return () => unsubscribe()
    }, [])





    return(
        <>

            {
                isLoading? 
                    <Spinner isLoading={isLoading}/> : 
                        <PDF />
            }
        </>
    )
}
