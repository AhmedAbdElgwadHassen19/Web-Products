import { Link } from "react-router-dom"
import React from "react"
import ProductAllData from "../AllData"
import { useEffect } from "react"

const selectedIdes = [3 , 6 , 10 , 13 , 14 ]
const selectedProducts = ProductAllData.filter(product => selectedIdes.includes(product.id))
function Tables({setProductCount}){
    // Animation Products
    useEffect(()=>{
        const products = document.querySelectorAll('.product')
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('show')
            }else{
                entry.target.classList.remove('show')
            }
            })
        })
        products.forEach(product => {
        observer.observe(product)
        })
    },[])
    // Save Products in localStorage
    const AddToCart = (product)=>{
        const cartItems = JSON.parse(localStorage.getItem('cart')) || []
        cartItems.push(product)
        localStorage.setItem('cart' , JSON.stringify(cartItems))
        setProductCount(cartItems.length)
    }
    return(
        <>
            <Link to={'/'} className="btn btn-outline-warning p-2 m-3 ">ALL Product</Link>
            <Link to={'/wardrobe'} className="btn btn-outline-warning p-2 m-3">Wardrobe</Link>
            <Link to={'/tables'} className="btn btn-outline-warning p-2 m-3">A dining table</Link>
            <Link to={'/sofa'} className="btn btn-outline-warning p-2 m-3">Sofa</Link>


            <div className="container">
            <h1>Welcome To A dining Table</h1>
                <div className="row m-3 ">
                    {selectedProducts.map (product =>(
                        <div className="product col-md-4 col-lg-3" key={product.id}>
                            <div className="box">
                                <img className="image img-fluid" src={product.imag} alt=""/>
                            </div>
                            <div className="card-body bg-dark mb-3">
                            <p className="card-title text-warning">{product.price}</p>
                                    <p className="card-text text-light">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                                    inventore consectetur placeat laudantium consequuntur dolorem?
                                    </p>
                                    <button className="btn btn-outline-warning mb-3"onClick={()=> AddToCart(product)}>Add Product</button>
                            </div>
                        </div>
                    ))}
                    
                </div>
        </div>
        </>
    )
}
export default Tables