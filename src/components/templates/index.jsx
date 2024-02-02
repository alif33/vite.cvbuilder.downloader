import { 
    Document,
    Page, 
    View,  
    Text,
    Svg,
    Line,
    StyleSheet 
} from "@react-pdf/renderer"
import Layout from "../PDF"
import { useSelector } from "react-redux"

const styles = StyleSheet.create({
    page: {
        width: 794,
        height: 1122,
        backgroundColor: '#fff',
        // fontFamily: 'Helvetica'
        // padding: 20,
    },
    header: {
        width: '100%',
        textAlign: 'center',
        marginBottom: 300,
        backgroundColor: '#0C6BA0',
        opacity: 0.2
    },
    headerTitle: {
        fontSize: 24,
        opacity: 1
    },
    headerSubTitle: {
        fontSize: 18,
        paddingTop: 8,
        paddingBottom: 200,
        opacity: 1
    },
    section: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 15
    },
    sectionBody: {
        marginLeft: 170
    },
    sectionParagraph: {

    }
  });

const MyDocument = () => {
    const { heading, education } = useSelector(state=>state.information)


    console.log(heading);
    console.log(education);


    return(

    <Layout>
        <Document>
            <Page size={[794, 1122]} style={styles.page}>
                {/* Head */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{heading?.firstName} {heading?.surName}</Text>
                    <Text style={styles.headerSubTitle}>{heading?.city}, 2200, Bangladesh | {heading?.phone} | {heading?.email}</Text>
                </View>
                {/* Summary */}
                <View style={styles.section}>
                    <Text>Summary</Text>
                    <Svg height="3" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={2} stroke="rgb(0,0,0)"/></Svg>
                    <View style={styles.sectionBody}>
                        <Text style={styles.sectionParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum praesentium ea fuga exercitationem, cupiditate ratione iste assumenda eos officia optio magnam fugiat vel ipsam numquam? Necessitatibus, quaerat.</Text>
                    </View>
                </View>
                {/* Experience */}
                <View style={styles.section}>
                    <Text>Experience</Text>
                    <Svg height="3" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={2} stroke="rgb(0,0,0)"/></Svg>
                    <View style={styles.sectionBody}>
                        <Text style={styles.sectionParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum praesentium ea fuga exercitationem, cupiditate ratione iste assumenda eos officia optio magnam fugiat vel ipsam numquam? Necessitatibus, quaerat.</Text>
                    </View>
                </View>
                {/* Skills */}
                <View style={styles.section}>
                    <Text>Skills</Text>
                    <Svg height="3" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={2} stroke="rgb(0,0,0)"/></Svg>
                    <View style={styles.sectionBody}>
                        <Text style={styles.sectionParagraph}>• Html</Text>
                        <Text style={styles.sectionParagraph}>• Css</Text>
                    </View>
                </View>
                {/* Education */}
                <View style={styles.section}>
                    <Text>Education</Text>
                    <Svg height="3" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={2} stroke="rgb(0,0,0)"/></Svg>
                    <View style={styles.sectionBody}>
                        <Text style={styles.sectionParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum praesentium ea fuga exercitationem, cupiditate ratione iste assumenda eos officia optio magnam fugiat vel ipsam numquam? Necessitatibus, quaerat.</Text>
                    </View>
                </View>
            </Page>
        </Document>
    </Layout>
    
    )
};

export default MyDocument