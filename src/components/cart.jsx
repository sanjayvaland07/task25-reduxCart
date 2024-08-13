
import "./cart.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addQty, removeProduct, removeQty } from "../redux/ProductSlice";
function Cart() {
  const [text,setText] = useState("Proceed to Payment")
  const [url, setUrl] = useState("/payment")
  const products = useSelector(state=>state.Products.cartItem)
  const total = useSelector(state=>state.Products.total);
  const dispatch = useDispatch();
  console.log(products);

  
  function handleAddQty(item)
  {
      dispatch(addQty(item))
  }

  function handleRemoveQty(item){
    if(item.qty > 1){
      dispatch(removeQty(item))
    }
    else{
      dispatch(removeProduct(item));
    }
  }

  function handleMainBtn()
  {
      
      if(text === "Proceed to Payment")
      {
        setText("Go to Home");
        setUrl("/");
        console.log('home')
      }
      else if(text === "Go to Home"){
        setText("Proceed to Payment");
        setUrl("/payment");
        console.log('payment')
      }
  }
  
  return (
    // <div className="cart-container">
      <div className="cart">
        <h2>Cart</h2>
        <table>
          <thead>
            <tr>
              <th>image</th>
              <th>Name and price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {
              products?.map((dt,index)=>{
                return (
                  (
                    <tr key={dt.id}>
                        <td className='tbl-img'><img src={dt.image} alt="" /></td>
                        <td>{dt.name} <br />
                            Price : ${dt.price}</td>
                        <td className='qty-btn'><button id='minusbtn' onClick={()=>{handleRemoveQty(dt)}}>-</button><span key={index}>{dt.qty}</span><button id='plusbtn' onClick={()=>{handleAddQty(dt)}}>+</button></td>
                    </tr>
                )
                )
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>Total price : </td>
              <td>${total}</td>
            </tr>
            <tr>
              <td colSpan={3} className="main-td"><Link to={url} className="main-btn" onClick={handleMainBtn}>{text}</Link></td>
            </tr>
          </tfoot>
        </table>
        
      </div>
    // </div>
  );
}

export default Cart;
