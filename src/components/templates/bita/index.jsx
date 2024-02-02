import { 
    Document,
    Page, 
    View,  
    Text,
    Svg,
    Line,
    StyleSheet 
} from "@react-pdf/renderer"

const styles = StyleSheet.create({
    page: {
        width: 794,
        height: 1122,
        backgroundColor: '#fff',
        // fontFamily: 'Roboto',
        fontFamily: 'Epilogue',
        // padding: 20,
    },
    header: {
        width: '100%',
        textAlign: 'center',
        paddingBottom: 20,
        // backgroundColor: '#0C6BA0',
        opacity: 0.2
    },
    headerTitle: {
        paddingTop: 20,
        paddingBottom: 10,
        fontSize: 30,
        opacity: 1
    },
    headerSubTitle: {
        fontSize: 18,
        paddingTop: 8,
        opacity: 1
    },
    section: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 15
    },
    sectionTitle: {
        fontWeight: 'bold'
    },
    sectionBody: {
        marginLeft: 60
    },
    sectionParagraph: {

    }
  });

export default function Bita({heading, experience, education}){

    return(
        <Document>
            <Page size={[794, 1122]} style={styles.page}>
                {/* Head */}
                <View style={{...styles.section, marginTop: 30}}>
                    <Svg height="15" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={30} stroke="#2a9294"/></Svg>
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{heading?.firstName} {heading?.surName}</Text>
                    <Text style={styles.headerSubTitle}>{heading?.city}, 2200, Bangladesh | {heading?.phone} | {heading?.email}</Text>
                </View>
                {/* Summary */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Summary</Text>
                    <Svg height="3" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={2} stroke="#2a9294"/></Svg>
                    <View style={styles.sectionBody}>
                        <Text style={styles.sectionParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum praesentium ea fuga exercitationem, cupiditate ratione iste assumenda eos officia optio magnam fugiat vel ipsam numquam? Necessitatibus, quaerat.</Text>
                    </View>
                </View>
                {/* Experience */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Experience</Text>
                    <Svg height="3" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={2} stroke="#2a9294"/></Svg>
                    <View style={styles.sectionBody}>
                        {
                            experience && experience.map((exp, index)=>(
                                <View key={index}>
                                    <Text style={{paddingVertical: 10}}>{exp?.jobTitle}</Text>
                                    <Text style={{paddingBottom: 15, fontSize: 14}}>{exp?.employer}, {exp?.jobCity}</Text>
                                    <Text style={styles.sectionParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum praesentium ea fuga exercitationem, cupiditate ratione iste assumenda eos officia optio magnam fugiat vel ipsam numquam? Necessitatibus, quaerat.</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>
                {/* Skills */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Skills</Text>
                    <Svg height="3" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={2} stroke="#2a9294"/></Svg>
                    <View style={styles.sectionBody}>
                        <Text style={styles.sectionParagraph}>• Html</Text>
                        <Text style={styles.sectionParagraph}>• Css</Text>
                    </View>
                </View>
                {/* Education */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Education</Text>
                    <Svg height="3" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={2} stroke="#2a9294"/></Svg>
                    <View style={styles.sectionBody}>
                        {
                            education && education.map((edu, index)=>(
                                <View key={index}>
                                    <Text style={{paddingVertical: 10}}>{edu?.institutionName} - {edu?.institutionLocation}</Text>
                                    <Text style={{paddingBottom: 15, fontSize: 14}}>{edu?.employer}, {edu?.jobCity}</Text>
                                    <Text style={styles.sectionParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum praesentium ea fuga exercitationem, cupiditate ratione iste assumenda eos officia optio magnam fugiat vel ipsam numquam? Necessitatibus, quaerat.</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>
            </Page>
        </Document>
    )
}