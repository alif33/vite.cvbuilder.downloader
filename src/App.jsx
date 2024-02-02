import { 
  HashRouter, 
  Routes, 
  Route
} from "react-router-dom";
import Verify from "./pages/verify"
import NotFound from "./pages/notFound"
import Template from "./components/template"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/pdf/:name/:color/:font/:_id" element={<Verify/>} /> 
        <Route path="/download" element={<Template/>} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App



