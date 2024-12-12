import {Link } from "react-router-dom"
import AllData from "../AllData";
import {React , useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


function ProductList({setProductCount}) {
    const [icons , setIcon] = useState({})
// Animation on Products
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

    // Save ICon 
    useEffect(()=>{
        const saveIcon = JSON.parse(localStorage.getItem('icon')) || {}
        setIcon(saveIcon)
    },[])
// Save Products in localStorage
    const AddToCart = (product)=>{
        const cartItems = JSON.parse(localStorage.getItem('cart')) || []
        cartItems.push(product)
        localStorage.setItem('cart' , JSON.stringify(cartItems))
        setProductCount(cartItems.length)
    }

    // Icon Heart
    const IconClick = (id)=>{
        const UPDataIcon = {
            ...icons , [id] : !icons[id]
        }
        setIcon(UPDataIcon)
        localStorage.setItem('icon' , JSON.stringify(UPDataIcon))
    }

    let product = AllData.map((item) => {
    return (
        <div className="product col-md-4 col-lg-3 " key={item.id} >
            <div className="box ">
                <img className="image img-fluid"  src={item.imag} alt="" />
            </div>
            <div className="card-body bg-dark mb-3 ">
                <p className="card-title text-warning">{item.price}</p>
                <p className="card-text text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                inventore consectetur placeat laudantium consequuntur dolorem?
                </p>
                <button className="btn btn-outline-warning mb-3 ms-5 mx-3"onClick={()=> AddToCart(item)}>Add Product</button>
                <FontAwesomeIcon icon={faHeart} fontSize={'30px'} 
                onClick={()=> IconClick(item.id)} color={icons[item.id] ? 'red' : 'rgba(150, 150 ,150 ,05)'} className="ms-3"/>
            </div>
        </div>
    );
});
    return (
        <>
            
            <Link to={'/'} className="btn btn-outline-warning p-2 m-3 ">ALL Product</Link>
            <Link to={'/wardrobe'} className="btn btn-outline-warning p-2 m-3">Wardrobe</Link>
            <Link to={'/tables'} className="btn btn-outline-warning p-2 m-3">A-dining table</Link>
            <Link to={'/sofa'}  className="btn btn-outline-warning p-2 m-3">Sofa</Link>
        <div className="container">
            <div className="row m-3 ">
                {product}
            </div>
        </div>
    </>
);
}
export default ProductList;
