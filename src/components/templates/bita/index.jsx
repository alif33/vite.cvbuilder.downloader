import { 
    Document,
    Page, 
    View,  
    Text,
    Svg,
    Line,
    StyleSheet 
} from "@react-pdf/renderer"
import Summary from "../section/ul"
import { NodeParser } from "../../../lib/nodeParser";

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Epilogue',
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

const processNodesForPDF = (nodes) => {
    return nodes.map((node, index) => {
      if (node.type === 'text') {
        return <Text key={index}>{node.data}</Text>;
      } else if (node.type === 'ul') {
        return (
          <View key={index}>
            {processNodesForPDF(node.data)}
          </View>
        );
      } else if (node.type === 'li') {
        return (
          <Text key={index} style={{ marginLeft: 10 }}>
            {processNodesForPDF(node.data)}
          </Text>
        );
      } else if (node.type === 'p') {
        return (
          <Text key={index}>
            {processNodesForPDF(node.data)}
          </Text>
        );
      }else if(node.type === 'span'){
        return (
            <Text key={index}>
              {processNodesForPDF(node.data)}
            </Text>
          );
      } else if (node.type === 'b') {
        // Add extra spaces after bold text
        return (
          <Text key={index}>
            <Text style={{ fontWeight: 'bold' }}>{processNodesForPDF(node.data)}</Text>{' '}
          </Text>
        );
      } else if (node.type === 'i') {
        return <Text key={index} style={{ fontStyle: 'italic' }}>{processNodesForPDF(node.data)}</Text>;
      }
      return null;
    });
  };
  


export default function Bita({heading, experience, education, summary, skills}){

    const __summary = NodeParser(summary) || false
    
    console.log(__summary, "SUM");

    return(
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Head */}
                <View style={styles.topBar}>
                    <Svg height="15" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={30} stroke="#2a9294"/></Svg>
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{heading?.firstName} {heading?.surName}</Text>
                    <Text style={styles.headerSubTitle}>{heading?.city}, 2200, {heading?.country} | {heading?.phone} | {heading?.email}</Text>
                </View>

                {/* Summary */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Summary</Text>
                    <Svg height="3" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={2} stroke="#2a9294"/></Svg>
                        <View style={{...styles.sectionParagraph, marginLeft: 50}}>
                            {processNodesForPDF(__summary)}
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
                                    <Text style={styles.sectionHigh}>{exp?.jobTitle}</Text>
                                    <Text style={{paddingBottom: 10, fontSize: 12}}>{exp?.employer}, {exp?.jobCity}</Text>
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
                                    <Text style={styles.sectionHigh}>{edu?.institutionName} - {edu?.institutionLocation}</Text>
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