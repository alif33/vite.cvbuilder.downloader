import { parseJSON } from "../../lib/jsonParser"
import { createSlice } from "@reduxjs/toolkit"

export const informationSlice = createSlice({
    name: "information",
    initialState: {
        hasLoading: false,
        heading: {
            firstName: "",
            surName: "",
            city: "",
            country: "",
            postalCode: "",
            phone: "",
            email: ""
        },
        experience: [{
            jobTitle: "",
            employer: "",
            jobCity: "",
            jobCountry: "",
            jobStartingDate: "",
            email: "",
            description: ""
        }],
        education: [{
            institutionName: "", 
            institutionLocation: "", 
            qualification: "", 
            studyField: "", 
            graduationYear: "",
            description: ""
        }],
        skills: "",
        summary: "",
        appear: {}
    },
    reducers: {
        setInfo: (state, action) => {
            const data = action.payload
            console.log(data, "DATA")
            state.heading.firstName = data?.info?.firstName || ""
            state.heading.surName = data?.info?.surName || ""
            state.heading.country = data?.info?.country || ""
            state.heading.city = data?.info?.city || ""
            state.heading.phone = data?.info?.phone || ""
            state.heading.email = data?.info?.email || ""
            
            if(data?.info?.experience.length>0){
                const experience = parseJSON(data?.info?.experience)
                if (experience) {
                    state.experience = experience
                }
            }

            if(data?.info?.education.length>0){
                const education = parseJSON(data?.info?.education)
                if (education) {
                    state.education = education
                }
            }
            
            if(data?.info?.skills && data?.info?.skills.length>0){
                state.skills = JSON.parse(data?.info?.skills)
            }
            
            if(data?.info?.summary && data?.info?.summary.length>0){
                state.summary = JSON.parse(data?.info?.summary)
            }
        },
    }
})