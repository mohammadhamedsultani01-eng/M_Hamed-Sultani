import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

   
    
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {

        const exist = cart.find(
            (item) => item.id === product.id
        );

        if (exist) {

            const newCart = cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            setCart(newCart);

        } else {

            setCart([
                ...cart,
                { ...product, quantity: 1 }
            ]);
        }
    };

    const increaseQuantity = (id) => {

        const newCart = cart.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );

        setCart(newCart);
    };

    const decreaseQuantity = (id) => {

        const newCart = cart
            .map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0);

        setCart(newCart);
    };

    const removeFromCart = (id) => {

        const newCart = cart.filter(
            (item) => item.id !== id
        );

        setCart(newCart);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity, 
             
            }}
        >
            {children}
        </CartContext.Provider>
    );
}