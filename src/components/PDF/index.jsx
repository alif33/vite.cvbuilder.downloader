import { PDFViewer, Font } from "@react-pdf/renderer"
import Alpha from "../templates/bita"
import Bita from "../templates/bita"
import Gama from "../templates/bita"
import Delta from "../templates/bita"
import { useSelector } from "react-redux"

Font.register(
    { 
        family: 'Epilogue', 
        fonts: [
            {
                src: `/fonts/epilogue/Epilogue-Regular.ttf`
            },
            {
                src: `/fonts/epilogue/Epilogue-Bold.ttf`,
                fontWeight: 'bold'
            },
            {
                src: `/Roboto-Italic.ttf`,
                fontWeight: 'normal',
                fontStyle: 'italic'
            },
            {
                src: `/Roboto-BoldItalic.ttf`,
                fontWeight: 'bold',
                fontStyle: 'italic'
            }
        ]
    },
    { 
        family: 'Roboto', 
        fonts: [
            {
                src: `/fonts/Roboto-Bold.ttf`
            },
            {
                src: `/Roboto-Bold.ttf`,
                fontWeight: 'bold'
            },
            {
                src: `/Roboto-Italic.ttf`,
                fontWeight: 'normal',
                fontStyle: 'italic'
            },
            {
                src: `/Roboto-BoldItalic.ttf`,
                fontWeight: 'bold',
                fontStyle: 'italic'
            }
        ]
    },
);

const temps = {
    alpha: Alpha,
    bita: Bita,
    // catalyst: Catalyst,
    gama: Gama,
    delta: Delta,
}


const containerStyle = {
    width: '100%',
    height: '100vh'
}


export default function PDF(){
    const { templateName, heading, experience, education, skills, summary } = useSelector(state=>state.information)
    const Template = temps[`${templateName}`] || Alpha


    console.log(heading, "HEAD");


    return(
        <PDFViewer style={containerStyle}>
            <Template
                heading={heading}
                experience={experience}
                education={education}
                skills={skills}
                summary={summary}
            />
        </PDFViewer>
    )
}
 