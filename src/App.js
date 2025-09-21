import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const fetchQuestion = () =>{
    
  }
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url(./ques1.png)' }}>

        <Header />
        <Routes>
          <Route path="/" element={<Home name={name} setName={setName}/>} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
