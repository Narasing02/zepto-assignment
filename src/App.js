
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Authentication from "./Authentication";
import Theme from "./Theme";

function App() {
  return (
    <>
    
      <Routes>
        <Route exact path="/auth" element={<Authentication />} />
        <Route exact path ="/theme-task" element ={<Theme/>}/>
      </Routes>

   
    </>
  );
}

export default App;
