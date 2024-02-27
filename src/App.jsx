import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verify from "./pages/verify";
import Editor from "./pages/editor";
import NotFound from "./pages/notFound";
import Dev from "./pages/dev";
import CV1 from "./pages/cv1";
import Cv2 from "./pages/CV2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/download/:_id" element={<Verify />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/cv1" element={<CV1 />} />
        <Route path="/cv2" element={<Cv2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
