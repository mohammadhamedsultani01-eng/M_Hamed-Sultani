import '../App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { Shop } from './Shop/shop'
import { Cart } from './Cart/cart'
import { Nav } from './Nav'
import { ShopcontextProvider } from './Context/shopContext';
import { Welcome } from './welcome/welcome';
function App() {
  return (
    <div >

      <ShopcontextProvider>
        <Router>
          <Nav />
          <Welcome />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopcontextProvider>
    </div>
  )
} export default App;