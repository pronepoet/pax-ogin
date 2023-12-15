
import './App.css';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Link, Routes, Route, Switch} from "react-router-dom";
function App() {
  return (
    <>



      <Navbar />

      <div className='main'>
      <div className="container">
        <h2 className='container-header1'>SOMETHING'S MISSING HERE </h2>
        <h3 className='container-header2'>Error 404: We can't seem to find what you're looking for</h3>
      
        <p className="list-header">Check out the helpful links below</p>
  


        
       
          <ul className="list">
            <li>
              <Link to="/">Homepage</Link>
            </li> <br />
            <li>
              <Link to="/Login">Buy Bitcoin</Link>
            </li><br />
            <li>
              <Link to="/">Sell Bitcoin</Link>
            </li><br />
            <li>
              <Link to="/">Wallet</Link>
            </li><br />
            <li>
              <Link to="/">Support FAQ</Link>
            </li>
          </ul>


 <Routes>
 <Route path="/" component={App} />
  <Route path="/Login" element={<Login />} />
 </Routes>

 
      </div>
      </div>
   
<Footer />

    </>
  );
}
export default App;