import React, { useContext } from "react"
import { PRUDUCT } from "../Pruduct/pruduct"
import { NewProduct } from "../Shop/f_product"
import { ShopContext } from "../Context/shopContext"

export const Cart = () => {
    const { cratItem,resetCart } = useContext(ShopContext)
    return (
        <React.Fragment>
            <h1 style={{ textAlign: "center" }}>Your cart Item :</h1>
            <div className="row">
                {PRUDUCT.map((p) => {
                    if (cratItem?.some((i) => i.id === p.id && i.count > 0)) {
                        return <NewProduct key={p.id} data={p} />
                    }
                    return null;
                }
                )
                }

            </div>
        <button className="btn btn-warning m-3 " onClick={resetCart}>Reset</button>
        </React.Fragment>
        

    )

}
