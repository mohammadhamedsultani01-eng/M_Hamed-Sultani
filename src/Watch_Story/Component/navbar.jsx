import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../pages/cartcontext";

export function Navbar() {
    const { cart } = useContext(CartContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid rounded p-1 bg-dark">
                    <h1 className="navbar-brand text-danger show">Sultan Watch Story</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active text-light"> <FaHome />  Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/watches' className="nav-link text-light">Watches</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/register' className="nav-link text-light">Register</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-3">
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link text-light position-relative">
                                    <FaShoppingCart size={23} />
                                    {cart.length > 0 && (
                                        <span className="position-absolute top-2 start-100 translate-middle badge rounded-pill bg-danger">
                                            {cart.length}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
