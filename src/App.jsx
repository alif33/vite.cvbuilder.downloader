import { 
  HashRouter, 
  Routes, 
  Route
} from "react-router-dom";
import Verify from "./pages/verify"
import NotFound from "./pages/notFound"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/:name/:color/:font/:_id" element={<Verify/>} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App



