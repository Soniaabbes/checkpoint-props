
import './App.css';
import FullName from './Components/Profile/FullName';

import 'bootstrap/dist/css/bootstrap.min.css';
import ExperiencePro from './Components/Profile/ExperiencePro';
import Address from './Components/Profile/Address';
import Formations from './Components/Profile/Formations';


function App() {
  return (
    <div className="App">

       <img src=
       ' /PhotoProfil.png' alt='Profile' ></img>
       <FullName/>
       <Formations/>
       <ExperiencePro/>
       <Address/>
    
    </div>
  );
}

export default App;
