export default function fontSizes(size){
    const heading ={
        sm: "text-[10px] font-medium",
        md: "text-xl font-bold",
        lg: "text-xl font-bold",
    } 
    
    const subheading ={
        sm: "text-[10px] font-medium",
        md: "text-xl font-bold",
        lg: "text-xl font-bold",
    } 

    const sectionTitle ={
        sm: "text-[6px] font-medium",
        md: "text-xs font-semibold",
        lg: "text-xs font-semibold",
    } 

    const title ={
        sm: "text-[5px]",
        md: "text-xs",
        lg: "text-xs",
    } 
    
    const paragraph ={
        sm: "text-[4px]",
        md: "text-sh5",
        lg: "text-sh5",
    } 
    
    return{
        heading: heading[size],
        subheading: subheading[size],
        sectionTitle: sectionTitle[size],
        title: title[size],
        paragraph: paragraph[size],
    }
}