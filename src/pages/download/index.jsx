import { PDFDownloadLink } from '@react-pdf/renderer'
import CV from "../../pages/cv1"
import Button from '../../ui/button/download'
import PulseLoader from "react-spinners/PulseLoader"
import Header from '../../components/header'

const App = () => (
  <div className="min-h-screen">
      <Header/>
      <div className="flex justify-center mt-40">
        <PDFDownloadLink document={<CV />} fileName="somename.pdf">
          {({ loading }) => (loading ? <PulseLoader color="#36d7b7" /> : <Button>Download Pdf</Button>)}
        </PDFDownloadLink>
      </div>
  </div>
)

export default App