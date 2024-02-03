import './App.css';
import FirstPage from './Components/FirstPage/FirstPage';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';
import About from "./Components/Main/Pages/About"
import Blog from './Components/Main/Pages/Blog';
import Contact from './Components/Main/Pages/Contact';
import Resume from './Components/Main/Pages/Resume';
import Skills from './Components/Main/Pages/Skills';
import Help from './Components/Main/Pages/Help';


function App() {
  return (
    <div className="App">
      <Router>
      <FirstPage/>
      <Home/>
      <Main/>
        
         { /*the mistake of routing i did here for refrence go to the Main.js */ }

        {/* <Routes path="/">
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/blog' Component={Blog}/>
        <Route path='/resume' Component={Resume}/>
        <Route path='/skills' Component={Skills}/>
        <Route path='/help' Component={Help}/>
        </Routes> */}
            </Router>
    </div>
  );
}

export default App;
