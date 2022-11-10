import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type) =>{
      setAlert({
        msg : message,
        type : type
      })

      setTimeout(()=> {
        setAlert(null);
      },1500)
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#272a45'
      showAlert("Dark Mode has been Enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled","success")
      
    }
  }
  return (
    <>
    <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
              <Route exact path="/about" element={<About/>}></Route>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode}/>}></Route>
          </Routes>
        </div>
    </Router>
    </> 
  );
}

export default App;
