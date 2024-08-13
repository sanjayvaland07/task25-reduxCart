import './payment.css'
function Payment()
{
    return (
        <div className="payment-con">
            <div className="radio-btns">
            <label htmlFor="">Cash on Delivery</label>
            <input type="radio" name="pay-method" id="" />
            <label htmlFor="">Credit Card</label>
            <input type="radio" name="pay-method" id="" checked readOnly/>
            </div>
            <div className="form">
                <div className="inputbox">
                    <label htmlFor="">Enter Your Card Number</label>    
                    <input type="text" name="" id="" placeholder='Card Number' />
                </div>
                <div className="inputbox">
                    <label htmlFor="">Enter Your Card's Exepiry Date</label>
                    <input type="text" name="" id="" placeholder='Exepiry date' />
                </div>
                <div className="inputbox">
                    <label htmlFor="">Enter Your CVV Number</label>
                    <input type="text" name="" id="" placeholder='Card CVV' />
                </div>
            </div>
            <button className='payment-btn'>Confirm Payment</button>
        </div>
    )
}

export default Payment;