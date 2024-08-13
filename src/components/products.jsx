import { useDispatch } from 'react-redux'
import laptop1 from '../assets/laptop1.png'
import laptop2 from '../assets/laptop2.png'
import laptop3 from '../assets/laptop3.png'
import laptop4 from '../assets/laptop4.png'
import laptop5 from '../assets/laptop5.png'
import laptop6 from '../assets/laptop6.png'
import laptop7 from '../assets/laptop7.png'
import laptop8 from '../assets/laptop8.png'
import './products.css'
import {addProduct} from '../redux/ProductSlice'

const items = [
    {id : 0, image : laptop1, name : "HP 17 Laptop, 17.3 HD+ Display, 11th Gen Intel Core i3-1125G4 Processor", price : 491, qty : 1},
    {id : 1, image : laptop2, name : "Lenovo IdeaPad 1 Student Laptop, Intel Dual Core Processor, 20GB RAM", price : 389, qty : 1},
    {id : 2, image : laptop3, name : "Acer Aspire 3 A315-24P-R7VH Slim Laptop AMD Ryzen 3 7320U", price : 299, qty : 1},
    {id : 3, image : laptop4, name : "Dell Inspiron 15 3511 15.6 Inch Laptop, Intel Core i3-1115G4, 8GB DDR4 RAM,", price : 334, qty : 1},
    {id : 4, image : laptop5, name : "Acer Nitro V Gaming Laptop Intel Core i5-13420H NVIDIA GeForce RTX 4050,", price : 777, qty : 1},
    {id : 5, image : laptop6, name : "ASUS ROG Strix G16 Gaming Laptop NVIDIA® GeForce RTX™ 4060 Intel Core i7-13650HX", price : 1309, qty : 1},
    {id : 6, image : laptop7, name : "HP Victus 15 Gaming Laptop AMD Ryzen 5 7535HS NVIDIA GeForce RTX 2050", price : 670, qty : 1},
    {id : 7, image : laptop8, name : "Lenovo Legion 5i Gaming Laptop NVIDIA GeForce RTX 4070 8GB Intel Core i7-14650HX,", price : 1499, qty : 1},
]


function Products(){
    const dispatch = useDispatch();
    
    function handleAddItem(item)
    {   
        dispatch(addProduct(item));
    }
    return (
        <div className="products-list">
            <h1>products</h1>
            <div className="items">
                {
                    items.map((item)=>{
                        return (
                            <div className="box" key={item.id}>
                            <div className="item-img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="item-detail">
                                <h3>{item.name}</h3>
                                <p>Price : ${item.price}</p>
                            <button onClick={()=>handleAddItem(item)}>Add to cart</button>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products;