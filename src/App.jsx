import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom"

import Image from "./pages/image"
import Editor from "./pages/editor"
import Download from "./pages/download"
import Preview from "./pages/preview"
import NotFound from "./pages/notFound"
import Catalyst from "./templates/catalyst"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/image" element={<Image />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/getcv/:_id" element={<Download />} />
        <Route path="/preview/:name" element={<Preview />} />
        <Route path="/cat" element={<Catalyst />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
