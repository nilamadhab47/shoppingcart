import React from 'react'
import {FaRupeeSign} from 'react-icons/fa';

const CartItem = ({product, addInCart}) => {
    return (
        <div>
            <div className="card mt-4 mb-5 p-3" style={{height: "18rem"}}>
                <img src={product.smallPhoto} className="card-img-top" alt=""/>
                    <div className="card-body text-center">
                        <h5 className="card-title text-dark">{product.ProductName}</h5>
                        <p className="card-text secondary">Price :<FaRupeeSign/>{(product.productPrice)/10000}</p>
                        <button type="button" className="btn btn-success" onClick={()=> addInCart(product)}>Add to cart</button>
                    </div>
            </div>
        </div>
    )
}

export default CartItem