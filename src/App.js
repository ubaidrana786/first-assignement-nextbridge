import './App.css';
import { Header } from './components/Header';
import {Footer} from "./components/Footer"
import Movies from './components/movies';

function App() {
  
  return (
    <div >
      <Header/>
      <div className='container mt-5'>
      <Movies />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
