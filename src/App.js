import React, { useState } from 'react'
import "react-toastify/dist/ReactToastify.css"
import Navbar from './Navbar'
import "./App.css"
import { ToastContainer, toast } from 'react-toastify';


import BuyPage from './components/BuyPage'
import Cart from './components/Cart'

const App = () => {
  const [inCart, setInCart] = useState([])

  const addCart = item => {
    const isAlreadyInCart = inCart.findIndex(function (array) {
      return array.id === item.id
    })

    if (isAlreadyInCart !== -1) {
      toast("already added in cart", {
        type: "error",
      })
    }

    setInCart([...inCart, item])
  }

  const buyItems = () => {

    setInCart([])

    toast("Item Purchased", {
      type: "success",
    })

  }

  const removeItems = item => {
    setInCart(inCart.filter(singleItem => singleItem.id !== item.id))
  }


  return (
    <div>
      <Navbar title="Shopping cart" inCart={inCart} />
      <div className="container-fluid">
        <ToastContainer />
          <div className="row">
            <div className="col-md-8">
              <BuyPage addInCart={addCart} />
            </div>
            <div className="col-md-4">
              <Cart inCart={inCart} removeItems={removeItems} buyItems={buyItems} />

            </div>

          </div>

      </div>


    </div>
  )
}

export default App