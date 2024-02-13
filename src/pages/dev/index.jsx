import React from "react"
import { PDFViewer, Font, Document, Page, StyleSheet, View, Text } from "@react-pdf/renderer"

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



const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Epilogue',
    },
    heading: {
        textAlign: "center"
    },
    topBar: {
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
    },
    header: {
        width: '100%',
        textAlign: 'center',
        marginBottom: 10
    },
    headerTitle: {
        fontSize: 22,
        textTransform: "uppercase",
        paddingTop: 5
    },
    headerSubTitle: {
        fontSize: 12,
        paddingTop: 8,
        opacity: 1
    },
    section: {
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 10
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 12,
        paddingBottom: 2
    },
    sectionHigh: {
        paddingVertical: 10, 
        fontSize: 11, 
        fontWeight: 'bold'
    },
    sectionBody: {
        marginLeft: 45
    },
    sectionParagraph: {
        fontSize: 11,
        lineHeight: 1.5
    }
});




const containerStyle = {
    width: '100%',
    height: '100vh'
}


const Dev = () =>{
    return(
        <PDFViewer style={containerStyle}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View>
                        <Text style={styles.heading}>This is test text.</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}
export default Dev

