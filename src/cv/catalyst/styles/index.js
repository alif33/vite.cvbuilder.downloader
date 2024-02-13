export default function styles(size){
    const container ={
        sm: "px-2 py-1",
        md: "px-9 py-3",
        lg: "px-9 py-3",
    }

    const body ={
        sm: "border border-2 bg-white shadow-lg h-[300px] bg-black",
        md: "border border-4 bg-white shadow-lg h-screen",
        lg: "border border-4 bg-white shadow-lg h-screen",
    }

    const head ={
        sm: "px-2 pt-2 pb-1",
        md: "px-9 pt-5 pb-3",
        lg: "px-9 pt-5 pb-3",
    }

    const contacts ="bg-black text-white"
    const summary ={
        sm: "px-2 py-1",
        md: "px-9 py-3",
        lg: "px-9 py-3",
    }
    const experience ={
        sm: "px-2 py-1",
        md: "px-9 py-3",
        lg: "px-9 py-3",
    }
    const skills ={
        sm: "px-2 py-1",
        md: "px-9 py-3",
        lg: "px-9 py-3",
    }
    const education ={
        sm: "px-2 py-1",
        md: "px-9 py-3",
        lg: "px-9 py-3",
    }

    // const



    // const head = size==="sm"? "h-[300px] px-2 py-2": "h-screen px-9 py-7"
    // const summary = size==="sm"? "h-[300px] px-2 py-2": "h-screen px-9 py-7"
    // const summaryTitle = size==="sm"? "h-[300px] px-2 py-2": "h-screen px-9 py-7"
    // const summaryDesc = size==="sm"? "h-[300px] px-2 py-2": "h-screen px-9 py-7"
    // const experience = size==="sm"? "h-[300px] px-2 py-2": "h-screen px-9 py-7"
    // const experienceTitle = size==="sm"? "h-[300px] px-2 py-2": "h-screen px-9 py-7"
    // const experienceDesc = size==="sm"? "h-[300px] px-2 py-2": "h-screen px-9 py-7"
    // const h1 = size==="sm"? "text-[10px] font-medium": "text-xl font-bold"
    // const h3 = size==="sm"? "text-[6px] font-medium": "text-xs font-semibold"
    // const h5 = size==="sm"? "text-[4px]": "text-sh5"
    // const pp = size==="sm"? "py-1": "py-3"
    return{
        container: container[size],
        body: body[size],
        head: head[size],
        contacts,
        summary: summary[size],
        experience: experience[size],
        skills: skills[size],
        education: education[size],
        // h1,
        // h3,
        // h5,
        // pp
    }
}