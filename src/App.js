import './App.css';
import {Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HOmePage/Homepage"
import TodeyPage from "./components/pages/TodeyPafge/TodeyNews"
import Header from './components/Heder';
function App() {
  return (
    <div className="App">
      <Header>
        
      </Header>
      <Routes>
        <Route path="homepage" element={<HomePage />}></Route>
          <Route path="todeyPage" element={<TodeyPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
