import { useContext } from "react";
import { ShopContext } from "../Context/shopContext";

export const NewProduct = (props) => {

  const { id, Name, image, price } = props.data;
  const { cratItem, addItem, removerFromitem } = useContext(ShopContext)
  const inInCart = cratItem?.some((item) => item.id === id)
  return (
    <div className="col-3">
      <br />
      <img alt="nothing now !" src={image} className="w-100 border border-primary border-3 rounded-5 " />
      {id}
      <h4 className="text mx-auto"> {Name}</h4>
      <p>Pric :{price}Af</p>
      <button className="btn bg-primary my-2" onClick={() => addItem(id)}>+</button>
      <span className="mx-2">{cratItem?.filter((row) => row.id === id)[0]?.count}</span>
      {inInCart && <button className="btn bg-primary my-2" onClick={() => removerFromitem(id)}>-</button>}

      <br />
    </div>

  )
}