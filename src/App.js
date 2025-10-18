// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import Users from './Users';
import CreateUser from './CreateUser';
import NewProduct from './NewProduct';
import UpdateProduct from './UpdateProduct';
import Products from './Products';
import ProductMenu from './ProductMenu';
import Menu from './Menu';
import Order from './Order';
import About from './About';
import Contact from './Contact';
import YourOrder from './YourOrder';
import MascaraMenu from './MascaraMenu';
import Shampo from './Shampo';
import Rouge from './Rouge';
import Parfum from './Parfum';
import Shadow from './Shadow';
import Eyeliner from './Eyeliner';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/register' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login  />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/menu' element={<Menu />}></Route>
      <Route path='/shampomenu' element={<Shampo />}></Route>
      <Route path='/rouag' element={<Rouge />}></Route>
      <Route path='/parfum' element={<Parfum />}></Route>
      <Route path='/meascara' element={<MascaraMenu />}></Route>
      <Route path='/shadow' element={<Shadow />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/order' element={<Order />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/register/home' element={<Home/>}></Route>
      <Route path='/YourOrder' element={<YourOrder />}></Route>
      <Route path='/product' element={<ProductMenu />}></Route>
      <Route path='/eyeliner' element={<Eyeliner />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
      <Route path='user/create/home' element={<Users/>}></Route>
          <Route path="users" element={<Users/>}></Route>
          <Route path="user/create" element={<CreateUser/>}></Route>
          <Route path="products" element={<Products/>}></Route>
          <Route path="product/create" element={<NewProduct/>}></Route>
          <Route path="products/:id" element={<UpdateProduct/>}></Route>
      </Route>
    </Routes>    
    
   
    </div>
  );
}

export default App;
