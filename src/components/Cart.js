import React from 'react'

const Cart = ({inCart, buyItems, removeItems}) => {
    let amount = 0 ;

    inCart.forEach(item => (
        amount = parseFloat(amount) + parseFloat(item.productPrice/10000)
    ))
  return (
    <div className="container-fluid" >
        <h1 className="text-success">Your Cart</h1>
        <ul className="list-group">
            {inCart.map(item =>(
                <li className="list-group-item" key={item.id} >
                    <div className="row">
                        <div className="col">
                            <img className="h-25" src={item.tinyPhoto} alt="" />
                        </div>
                        <div className="col text-center">
                            <div className="text-center">{item.ProductName}</div>
                            <span>price : {item.productPrice}</span>
                            <button className="btn btn-primary" onClick={()=> removeItems(item)}>Remove</button>
                        </div>
                    </div>
                </li>
            ))}

        </ul>
        {/* if cart is empty */}
        {
            inCart.length >= 1 ? (
                <div className="card">
                    <h4 className="card-header">
                        Grand Total
                    </h4>
                    <div className="card-body">
                        your amount for {inCart.length} product is {amount}
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" onClick={buyItems}>Pay here</button>
                    </div>
                </div>

            ) : (
                <h1 className="text-warning">Your Cart is empty</h1>
            )
        }
    </div>
  )
}

export default Cart