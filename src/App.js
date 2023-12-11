import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shopcategory from './pages/Shopcategory';
import Shop from './pages/Shop';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './components/footer/Footer'
import men_banner from './components/assets/Assets/banner_mens.png'
import women_banner from './components/assets/Assets/banner_women.png'
import kids_banner from './components/assets/Assets/banner_kids.png'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}></Route>
          <Route path='/women' element={<Shopcategory banner={women_banner} category="women"/>}></Route>
          <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid"/>}></Route>
          <Route path='/product' element={<Products/>}>
            <Route path=':productID' element={<Products/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route> 
          <Route path='/login' element={<Login/>}></Route>


        </Routes>
        
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
