import { 
    View,  
    Text,
    StyleSheet 
} from "@react-pdf/renderer"
import { NodeParser } from "../../../../lib/nodeParser"


const styles = StyleSheet.create({
    sectionBody: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 60,
        fontSize: 12
    },
    sectionParagraph: {

    }
  });

export default function Ul({ htmlContent }){
    // const htmlContent = '<ul><li>Html</li><li>Css</li><li>Js</li></ul><p>lorem <b>Ipsum</b> is the best <i>text</i> generator.</p>';
    const nodes = NodeParser(htmlContent)
    return(
        <View style={styles.sectionBody}>
            {nodes.map((el, index)=>{
                if(el.type==="ul"){
                    return(
                        <View key={index}>
                            {el.data.map((ul, dx)=>{
                                if(ul.type==="li"){
                                    return(
                                        <Text key={dx}>
                                            {ul.data.map((li, ix)=>{
                                                if(li.type==="text"){
                                                    return(
                                                        <Text key={ix}>{li.data}</Text>
                                                    )
                                                }
                                                
                                            })
                                            }
                                        </Text>
                                    )
                                }
                            })}
                        </View>
                    )
                }
            })}
        </View>
    )
}