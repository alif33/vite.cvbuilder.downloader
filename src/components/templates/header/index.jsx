import {  
    View,  
    Text, 
    StyleSheet 
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        textAlign: 'center',
        paddingBottom: 5,
        backgroundColor: '#0C6BA0',
        opacity: 0.2
    },
    title: {
        fontSize: 24,
        opacity: 1
    },
    subtitle: {
        fontSize: 18,
        paddingTop: 8,
        opacity: 1
    },
  });

// Create Document Component
export default function Cv(){
    <View style={styles.header}>
        <Text style={styles.title}>Ismail Hosen Alif</Text>
        <Text style={styles.subtitle}>Myemnsigngh, 2200, Bangladesh | +8801625794888 | cvbuilderpro@live.com</Text>
    </View>
}