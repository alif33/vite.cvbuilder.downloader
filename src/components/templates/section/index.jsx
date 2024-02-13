import { 
    View,  
    Text,
    StyleSheet 
} from "@react-pdf/renderer"


const styles = StyleSheet.create({
    sectionBody: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 60
    },
    sectionParagraph: {

    }
  });


export default function Summary(){
    return(
        <View style={styles.sectionBody}>
            <Text style={styles.sectionParagraph}>Ismail h Alif</Text>
            <Text style={styles.sectionParagraph}>Ismail h Alif</Text>
            <Text style={styles.sectionParagraph}>Ismail h Alif</Text>
        </View>
    )
}