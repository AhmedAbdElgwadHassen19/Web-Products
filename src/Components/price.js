import { useEffect, useState } from "react"


function Price({cartItems, Remove}){
    const [price, setPrice] =useState(0)
    useEffect(()=>{
        calculateTotalPrice(cartItems)
    },[cartItems])

    const calculateTotalPrice = (Products)=>{
        if(Array.isArray(Products)&& Products.every(item => typeof item.price === 'number')){
            const total = Products.reduce((acc , item) => acc + item.price , 0)
            setPrice(total)
        } else{
            console.log('Product are not valid');
        }
    }

    return(
        <>
            <button className="btn btn-outline-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Price$</button>
                <div className="offcanvas offcanvas-start bg-dark text-light" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title m-auto text-warning" id="offcanvasScrollingLabel">Total Price$</h1>
                    <button type="button" className=" btn btn-warning btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                        <ul>
                        {cartItems.map((product , index) => (
                            <li key={index}> 
                                {product.emoji} $ {product.price}
                                <button className="btn btn-warning m-3" onClick={() =>Remove(product.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-light mt-5" >{price} $</h3> 
                    <button className="btn btn-warning" >This Total Price</button>
                </div>
                </div>
        </>
    )
}
export default Price