import { useContext } from "react";

import { CartContext } from "./cartcontext";

function Cart() {

    const {
        cart,
        increaseQuantity,
        decreaseQuantity
    } = useContext(CartContext);

    return (
        <div
            className="container-fluid py-4"
            style={{
                backgroundColor: "black",
                minHeight: "100vh"
            }}
        >
            <h2
                className="text-center mb-4 text-warning"
            >
                Shopping Cart
            </h2>

            {
                cart.length === 0 ? (
                    <h2 className="text-center text-light">
                        Cart is empty now!
                    </h2>
                ) : (
                    <div className="row">

                        {cart.map((item) => (

                            <div
                                className="col-md-3 mb-4"
                                key={item.id}
                            >

                                <div
                                    className="card h-100"
                                    style={{
                                        backgroundColor: "#111",
                                        border: "2px solid gold",
                                        color: "white"
                                    }}
                                >

                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="card-img-top"
                                        style={{
                                            height: "250px",
                                            objectFit: "cover"
                                        }}
                                    />

                                    <div className="card-body text-center">

                                        <h5>{item.name}</h5>

                                        <h6>{item.price} AF</h6>

                                        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">

                                            <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                            >
                                                -
                                            </button>

                                            <h5>
                                                {item.quantity}
                                            </h5>

                                            <button
                                                className="btn btn-success"
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                            >
                                                +
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>
                )
            }
        </div>
    );
}

export default Cart;