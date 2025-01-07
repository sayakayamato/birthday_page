import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Top from './pages/Top';
import Main from './pages/main'
import Contents1 from './pages/Contents1';
import Contents2 from './pages/Contents2';
import Contents3 from './pages/Contents3';

function App() {
  return (
    <div className="App">
      
      <Router>
            {/* <nav>
                <ul>
                    <li><Link to="/">Top</Link></li>
                    <li><Link to="/main">Main</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav> */}

            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/main" element={<Main />} />
                <Route path="/contents1" element={<Contents1 />} />
                <Route path="/contents2" element={<Contents2 />} />
                <Route path="/contents3" element={<Contents3 />} />
            </Routes>
        </Router>

    </div>
    
  );
}

export default App;

