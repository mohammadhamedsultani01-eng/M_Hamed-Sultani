import { createContext } from "react";
import { useCart } from "../Hook/useCart";

export const ShopContext = createContext({

    cratItem:null,
    addItem:()=>{},
    removerFromitem:()=>{},
    resetCart:()=>{}
});

export const ShopcontextProvider = (props) => {
   
    const cartValues = useCart(); 

    return (
        <ShopContext.Provider value={cartValues}>
            {props.children}
        </ShopContext.Provider>
    );
};
