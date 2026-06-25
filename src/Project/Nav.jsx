import { Link } from 'react-router-dom'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { ShopContext } from './Context/shopContext'
import './CSs/css.css'
export const Nav = () => {

    const { cratItem } = useContext(ShopContext)
    const itemCount = cratItem?.reduce((prev, curent) => {

        return prev + curent.count
    }, 0)
    return (
        <div className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
                <a href='/' className="navbar-brand">Sultan Big</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className='nav-link bs-warning text-light' >Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="cart" className='nav-link text-light'>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            {itemCount > 0 ? <span className='cart-item-count'>{itemCount}</span> : <sup>no selected even now !</sup>}
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}