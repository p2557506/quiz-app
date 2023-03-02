import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Settings/>} />
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/finalScreen" element={<FinalScreen/>}/>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
