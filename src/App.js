import { BrowserRouter, Route, Routes } from "react-router-dom";
import Habits from "./pages/habits";
import './styles/reset.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='habitos' element={<Habits/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
