import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';


function Register() {
    const [customer, setCustomer] = useState(() => {
        const saved = localStorage.getItem("customers");
        return saved ? JSON.parse(saved) : [];
    });

    const [formData, setFormData] = useState({
        First_Name: "",
        Last_Name: "",
        Address: "",
        Whatsapp: "",
        Products: ""
    });

    useEffect(() => {
        localStorage.setItem("customers", JSON.stringify(customer));
    }, [customer]);

    const hadelChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const hadelSubmit = (e) => {
        e.preventDefault();
        
          if (formData.First_Name && formData.Last_Name && formData.Address && formData.Whatsapp && formData.Products) {
    
    alert('You are registered successfully!'); 
    
  } else {
    
    alert('Not registered. Please fill all fields.'); 
    
  }
        if (
            !formData.First_Name.trim() || 
            !formData.Last_Name.trim() || 
            !formData.Address.trim() || 
            !formData.Whatsapp.trim() || 
            !formData.Products.trim()
        ) {
          
            return;
        }

        setCustomer([
            ...customer,
            { ...formData, done: false }
        ]);

        setFormData({
            First_Name: "",
            Last_Name: "",
            Address: "",
            Whatsapp: "",
            Products: ""
        });
    };

    const hadelDelete = (index) => {
        const newData = customer.filter((_, i) => i !== index);
        setCustomer(newData);
    };

    const toggleDone = (index) => {
        const updated = customer.map((item, i) =>
            i === index ? { ...item, done: !item.done } : item
        );
        setCustomer(updated);
    };

    return (
        <div className="Big2">
            <h1 className="R_H mb-1 pt-5 ">Customer Registration Form</h1>

            <form onSubmit={hadelSubmit}>
                <div className="container w-75 text-light ">
                    <label htmlFor="First_Name">First_Name</label>
                    <input
                        id="First_Name"
                        className="form-control mb-2 king "
                        name="First_Name"
                        placeholder="Enter your First Name :"
                        value={formData.First_Name}
                        onChange={hadelChange}
                        required
                        style={{ color: "yellow", fontWeight: "700", fontSize: "20px" }}
                    />
                    
                    <label htmlFor="Last_Name">Last_Name</label>
                    <input
                        id="Last_Name"
                        className="form-control mb-2 king"
                        name="Last_Name"
                        placeholder=" Enter your Last Name :"
                        value={formData.Last_Name}
                        onChange={hadelChange}
                        required
                        style={{ color: "yellow", fontWeight: "600", fontSize: "20px" }}
                    />
                    
                    <label htmlFor="Address">Address</label>
                    <input
                        id="Address"
                        className="form-control mb-2 king"
                        name="Address"
                        placeholder="Enter your exact address : "
                        value={formData.Address}
                        onChange={hadelChange}
                        required
                        style={{ color: "yellow", fontWeight: "600", fontSize: "20px" }}
                    />
                    
                    <label htmlFor="Whatsapp">Whatsapp</label>
                    <input
                        id="Whatsapp"
                        className="form-control mb-2 king"
                        name="Whatsapp"
                        placeholder="Enter your whatsapp number :"
                        value={formData.Whatsapp}
                        onChange={hadelChange}
                        required
                        style={{ color: "yellow", fontWeight: "600", fontSize: "20px" }}
                    />
                    
                    <label htmlFor="Products">Products</label>
                    <textarea
                        id="Products"
                        className="form-control mb-2 king"
                        name="Products"
                        placeholder="Write your all of products which you bought :"
                        value={formData.Products}
                        onChange={hadelChange}
                        required
                        style={{ color: "red", fontWeight: "600", fontSize: "20px" }}
                    ></textarea>

                    <button type="submit" className="btn btn-success w-100 ">
                        Submit
                    </button>

                    {customer.length > 0 && (
                        <table className="table table-dark table-bordered mt-4">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Address</th>
                                    <th>Whatsapp</th>
                                    <th>Products</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {customer.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ textDecoration: item.done ? "line-through" : "none" }}>
                                            {item.First_Name}
                                        </td>
                                        <td style={{ textDecoration: item.done ? "line-through" : "none" }}>
                                            {item.Last_Name}
                                        </td>
                                        <td>{item.Address}</td>
                                        <td>{item.Whatsapp}</td>
                                        <td style={{ textDecoration: item.done ? "line-through" : "none" }}>
                                            {item.Products}
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-warning btn-sm me-2"
                                                onClick={() => toggleDone(index)}
                                            >
                                                Done
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm"
                                                onClick={() => hadelDelete(index)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </form> 
        </div>
    );
}

export default Register;
