import { createContext, useState } from "react";

export const ShopContext =createContext(null)


export const ShopcontextProvider=(props)=>{

    const [cratItem,setCartItem]=useState([])
    
  


    const addItem = (itemId)=>{
        if(!cratItem?.find((item)=> item.id===itemId))
        setCartItem([...cratItem,{id:itemId,count:1}])
        else
            setCartItem(cratItem.map((item)=>{
        if(item.id===itemId)
            return{...item,count:item.count+1}
        else return item
        }))
      
    }
    const removerFromitem=(itemId)=>{
        setCartItem(cratItem.map((i)=>{
            if(i.id===itemId)
                return {...i,count:i.count===0?0:i.count-1}
            else
              return i  
        }))
    }
    const contextValue = {cratItem,addItem,removerFromitem}

    return <ShopContext.Provider value={contextValue} > {props.children}</ShopContext.Provider>
}