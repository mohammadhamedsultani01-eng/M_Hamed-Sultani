import { useEffect, useState } from "react"
import './css.css'

function Store() {
    const [cart, setCart] = useState([])

   const addToCart = (things) => {
  const newCart = [...cart, things];

  setCart(newCart);

  localStorage.setItem("cart", JSON.stringify(newCart));
};
    useEffect(()=>{
        const savedCart= localStorage.getItem("cart")

        if(savedCart){
            setCart(JSON.parse(savedCart))
        }
    },[])


    const removeFeild = (id)=>{
        setCart(cart.filter((item)=> item.id !==id ))
    }
  const totalPrice = cart.reduce((sum,item)=>{
    return sum+item.price
  },0)
 
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 500,
            catagory: "Electronic"
        },
        {
            id: 2,
            name: "Phone",
            price: 300,
            catagory: "Electronic"
        },

        {
            id: 3,
            name: "T-Shirt",
            price: 20,
            catagory: "Clothing"
        },
        {
            id: 4,
            name: "Mouse",
            price: 10,
            catagory: "Electronoc"
        }, {
            id: 5,
            name: "Watch",
            price: 100,
            catagory: "Electronic"
        },
        {
            id: 6,
            name: "show",
            price: 5,
            catagory: "Clothing"
        }
    ]
     const [search,setSearch ]= useState("")

  const filtereddItem=products.filter((item)=>(
    item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  ))
    return (
        <>
            <div className="container mt-5">
                <h1 className="text text-primary text-center ">Store</h1>
                <h3 className="text text-secondary text-center">Cart Item :{cart.length}</h3>
                <h6 className="text-success text-center">please for your see things go to the end of items ?</h6>
                <div>
                    <h6>Search Box</h6>
                    <input className="rounded w-25  mb-2" type="text" value={search} onChange={(e)=> setSearch(e.target.value)} />
                </div>
                <div className="row">

                    {filtereddItem.map((pro) => (
                        <div className="col-md-4 mb-4 bg-dark rounded" key={pro.id}>
                            <div className="card h-100">
                                <div className="card-body bg-danger text-light rounded ">
                                    <h5 className="card-title">{pro.name}</h5>
                                    <p className="card-text">Price:{pro.price}</p>
                                    <p className="card-text">Catagory:{pro.catagory}</p>

                                    <button className="btn btn-danger shadow border-2 border-light"
                                        onClick={() => addToCart(pro)}>Add to Card </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-5">
                    <h3 className="text-primary ">Cart List </h3>
                    <h4>Total fo price :{totalPrice}$</h4>
                    {cart.map((item, index) => (
                        <div className="col-sm-3 " key={index}>
                            <div className="card ">
                                <div className="card h-100">
                                    <div className="card-body bg-success text-light rounded">
                                        <div className="card-title">

                                            <h5>product :{item.name}</h5>
                                            <h5> price :{item.price}$</h5>
                                            <button className="btn btn-danger btn-sm" onClick={()=>removeFeild(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </>
    )
} export default Store