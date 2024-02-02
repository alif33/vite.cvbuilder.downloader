import { useEffect, useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';

const containerStyle = {
    width: '100%',
    height: '100vh',
};

export default function Layout({ children }){
    const [loading, setLoading] = useState(false);
    

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 3000)
    }, [])
    return(
        <>
            {loading? 
                <h1>loading...</h1>: 
                <PDFViewer style={containerStyle}>
                    {!loading && children}
                </PDFViewer>}
        </>
        
    )
}
 