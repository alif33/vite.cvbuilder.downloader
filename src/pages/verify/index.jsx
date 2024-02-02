import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { names, colors,fonts } from "../../static/conf.json"
import { useGetInformationQuery } from "../../store/api"
import { useSelector, useDispatch } from "react-redux"
import { setInfo } from "../../store/information/action"
import Spinner from "../../components/spinner"
import PDF from "../../components/PDF"
import html2pdf from "html2pdf.js"
import ReactDOMServer from "react-dom/server"

const data = [
    { id: 1, title: 'Item 1', color: '#3498db' },
    { id: 2, title: 'Item 2', color: '#2ecc71' },
    { id: 3, title: 'Item 3', color: '#e74c3c' },
];

const profileImage = 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.jpg?s=1024x1024&w=is&k=20&c=YYtJJGvb4uXz9Ni9coUC8xitkbZFjp9qlwFR61g_koM=';


function pdfJSX(){
    return(
        <div className="flex h-screen">
            <h1 className="text-5xl">Ismail H Alif</h1>
            <h1 className="">Lorem ipsum</h1>
        </div>
        // <div style={styles.container}>
        //     <div style={styles.header}>
        //         <div style={styles.profileImageContainer}>
        //         <img src={profileImage} alt="Profile" style={styles.profileImage} />
        //         </div>
        //         <div style={styles.personalInfo}>
        //         <h1 style={styles.name}>Your Name</h1>
        //         <p style={styles.jobTitle}>Job Title</p>
        //         <p style={styles.contact}>Email: your.email@example.com | Phone: (123) 456-7890</p>
        //         </div>
        //     </div>

        //     <div style={styles.section}>
        //         <h2 style={styles.sectionHeading}>Education</h2>
        //         <p style={styles.content}>Bachelor of Science in Computer Science | University XYZ | 2022</p>
        //     </div>

        //     <div style={styles.section}>
        //         <h2 style={styles.sectionHeading}>Skills</h2>
        //         <ul style={styles.skillList}>
        //         <li>React.js</li>
        //         <li>JavaScript</li>
        //         <li>HTML/CSS</li>
        //         {/* Add more skills as needed */}
        //         </ul>
        //     </div>
        // </div>
    )
}


const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      padding: '20px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
    },
    profileImageContainer: {
      marginRight: '20px',
      borderRadius: '50%',
      overflow: 'hidden',
      width: '100px',
      height: '100px',
    },
    profileImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    personalInfo: {
      flex: 1,
    },
    name: {
      fontSize: '28px',
      margin: '0',
    },
    jobTitle: {
      fontSize: '18px',
      margin: '5px 0',
      color: '#555',
    },
    contact: {
      fontSize: '14px',
      color: '#777',
    },
    section: {
      marginTop: '20px',
    },
    sectionHeading: {
      fontSize: '24px',
      color: '#3498db',
      margin: '0',
    },
    content: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#333',
    },
    skillList: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
      fontSize: '16px',
    },
  };



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

    const printElement = ReactDOMServer.renderToString(pdfJSX());    

    const options = {
        margin: 10,
        filename: 'my_pdf.pdf', // Change the filename extension to '.png'
        image: { type: 'png', quality: 0.98 }, // Use 'png' instead of 'jpeg'
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

    const handleDownload = ()=>{
        html2pdf().from(printElement).set(options).save();
    }

    return(
        <>

        <button onClick={handleDownload}>Download</button>

            {/* {
                !isCorrect? 
                    <Spinner isLoading={isLoading}/> : 
                        <PDF name={name}/>
            } */}
        </>
    )
}
