import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Loginpage from './pages/Loginpage';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Loginpage/> } />
        <Route path="home" element={ <Home/> } />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={ <Cart/> } />   
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
