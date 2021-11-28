// react router
import {Routes,Route} from "react-router-dom";
//components
import {HomeComponent} from './components/HomeComponent.jsx'
import {CartComponent} from './components/CartComponent.jsx'

import {MainLayOut} from './components/layoutComponents/MainLayOut.jsx'

function App() {

  return (
    <>
    <Routes>
          <Route  element={ <MainLayOut/>}>
            <Route path="/" element={<HomeComponent/>}/>
            <Route exact path="cart" element={<CartComponent/>} />
          </Route>
    </Routes>
    </>
  );
}

export default App;
