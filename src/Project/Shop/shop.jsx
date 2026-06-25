import React from "react"
import { PRUDUCT } from "../Pruduct/pruduct"
import { NewProduct } from "./f_product"
export const Shop=()=>{
    return (
     <React.Fragment>
        <h1 className="App">Shop</h1>
        <div className="row">
            {PRUDUCT.map((PruducData)=>{
    
             return <NewProduct key={PruducData.id} data={PruducData}/>
            })}
        </div>
     </React.Fragment>
    ) 
}