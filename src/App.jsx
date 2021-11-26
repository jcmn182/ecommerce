// react router
import {Routes,Route} from "react-router-dom";
// react dependencies
import {useContext,useEffect} from 'react'
// global states
import {DataContext} from './context/store/DataContext.js'
//components
import {HomeComponent} from './components/HomeComponent.jsx'
import {CartComponent} from './components/CartComponent.jsx'
import {FavoritesComponent} from './components/FavoritesComponent.jsx'
import {CategoryItemComponent} from './components/CategoryItemComponent.jsx'
import {MainLayOut} from './components/layoutComponents/MainLayOut.jsx'

function App() {

  const {getData,products} = useContext(DataContext);

  

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <Routes>
          <Route  element={ <MainLayOut/>}>
            <Route path="/" element={<HomeComponent data={products}/>}/>
            <Route exact path="/category/:item" element={<CategoryItemComponent />} />
            <Route exact path="favorites" element={<FavoritesComponent/>} />
            <Route exact path="cart" element={<CartComponent/>} />
          </Route>
    </Routes>
    </>
  );
}

export default App;
