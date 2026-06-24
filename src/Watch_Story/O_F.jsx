import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Watches from "./pages/watches";
import Cart from "./pages/cart";
import Register from "./pages/register";
import { Navbar } from "./Component/navbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

import { CartProvider } from "./pages/cartcontext";

function App() {
    return (
        <CartProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/watches" element={<Watches />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;