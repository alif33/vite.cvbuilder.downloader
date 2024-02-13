export default function styles(size){
        const body ={
            sm: "h-[300px] px-2 py-2 bg-black",
            md: "h-screen px-9 py-7",
            lg: "h-screen px-9 py-7",
        }

        const section ={
            sm: "py-1",
            md: "py-3",
            lg: "py-3",
        } 

        const sectionBody ={
            sm: "ml-7 pt-1",
            md: "ml-10 pt-2",
            lg: "ml-10 pt-2",
        } 

        const hrTop = "border-t-[10px]"
        const hr = "border-t-[1px]"

        const head = size==="sm"? "h-[300px] px-2 py-2": "h-screen px-9 py-7"
    return{
        body: body[size],
        head,
        hrTop,
        hr,
        section: section[size],
        sectionBody: sectionBody[size],
    }
}