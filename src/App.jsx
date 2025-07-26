import { Routes, Route } from "react-router-dom";
import TrafficViewer from "./components/TrafficViewer"; 
import Temp from "./components/temp"; // Capitalized for component
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import TrafficReportForm from "./components/TrafficReportForm";
import LiveReports from './components/LiveReports'; // ✅ Add this line


import "./App.css";


function App() {
  return (
    <Routes>
      <Route path="/user" element={<TrafficViewer />} />
      <Route path="/" element={<Temp />} />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/report-traffic" element={<TrafficReportForm />} />
      <Route path="/get-reports" element={<LiveReports />} />
    </Routes>
  );
}

export default App;
