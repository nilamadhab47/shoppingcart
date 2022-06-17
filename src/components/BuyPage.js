import React, {useEffect, useState} from 'react'
import  Axios  from 'axios'

// import{random, commerce} from 'faker'
import casual  from 'casual-browserify'
import CartItem from './CartItem'


const url = "http://myjson.dit.upm.es/api/bins/hccz"


const BuyPage = ({addInCart}) => {
    const [product, setProduct] = useState([])

    const fetchPhotos = async () => {
        const {data} = await Axios.get(url)

        const {photos} = data


        const allProducts = photos.map(photo =>({
            smallPhoto : photo.src.medium,
            tinyPhoto : photo.src.tiny,
            ProductName: casual.company_name ,
            productPrice: casual.unix_time ,
            Id : casual.uuid, 
        }))

        setProduct(allProducts)
    }

    

    useEffect(()=>{
         fetchPhotos()   
    }, [])

  return (


    <div className="container-fluid bg-transparent">
        <h1 className="text-success text-center">Buy Product</h1>
        <div className="row text-danger">
            {product.map(product =>(

                <div className="col-md-4" key={product.Id}>
                <CartItem product={product} addInCart={addInCart}/>

                </div>


            ))}
            
        </div>
    </div>

    

  )
}

export default BuyPage