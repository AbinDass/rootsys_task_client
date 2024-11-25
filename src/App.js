// import './App.css';
import { Route, Routes } from "react-router-dom";
import Userroutes from "./routes/Userroutes";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<Userroutes />}></Route>
            </Routes>
        </div>
    );
}

export default App;
