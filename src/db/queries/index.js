/* eslint-disable no-useless-catch */
import  { db } from "@/db"
import { collection, doc, getDoc, addDoc, updateDoc } from "firebase/firestore"
import { activeId } from "@/lib/cokieHandler"

const resumesCol = collection(db, "resumes")
const resumeDocRef = id =>doc(db, "resumes", id)

const getResume = async (id)=>{
    try {
        const snap = await getDoc(resumeDocRef(id))
        return snap.data()
    } catch (error) {
        throw error
    }
}

const addResume = async (resumeData) => {
    try {
        return await addDoc(resumesCol, resumeData)
    } catch (error) {
        throw error
    }
}

const updateResume = async (data) => {
    try {
        const resume = await getResume(activeId())
        const updated = {...resume, ...data}
        await updateDoc(resumeDocRef(activeId()), updated)
        return await getResume(activeId())
    } catch (error) {
        throw error
    }
};

export { addResume, updateResume }