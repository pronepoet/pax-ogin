
import './App.css';
import { Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
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
      
        
      </div>
      </div>
   
<Footer />
    </>
  );
}

export default App;
