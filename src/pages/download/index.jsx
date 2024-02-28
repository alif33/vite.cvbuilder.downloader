import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer'
import CV from "../../pages/cv1"

// const MyDoc = () => (
//   <Document>
//     <Page>
//       <Text>Ismail h alif</Text>
//     </Page>
//   </Document>
// )

const App = () => (
  <div>
    <PDFDownloadLink document={<CV />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </div>
)

export default App