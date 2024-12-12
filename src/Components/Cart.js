import { useEffect, useRef, useState } from "react"
import swal from "sweetalert"
import Price from "./price"
function Cart({setProductCount}){
    const [cartItems, setCartItems] = useState ([])
    const productRefs = useRef([])
    // GET Data in localStorage
    useEffect(()=>{
        const storedCart = localStorage.getItem('cart')
        if(storedCart) {setCartItems(JSON.parse(storedCart))}
    },[])

    // Animation on Products
    useEffect(()=>{
        const observer = new IntersectionObserver((entries) =>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
        })
    })
    productRefs.current.forEach((product)=>{
        if(product){
            observer.observe(product)
        }
    })
        return()=>{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            productRefs.current.forEach((product)=>{
                if(product){
                    observer.unobserve(product)
                }
            })
            observer.disconnect()
        }
    },[cartItems])

    // Remove Data in localStorage
    const Remove = (itemId)=>{
        swal({
            title:`Are you sure you want to delete this product?` ,
            buttons: {
                cancel: 'Cancel',
                confirm: 'ok',
            },
        }).then((willDelete)=>{
            if(willDelete){
                const UpDataCartItems = cartItems.filter((productItem)=> productItem.id !== itemId)
                setCartItems(UpDataCartItems)
                localStorage.setItem('cart',JSON.stringify(UpDataCartItems))
                setProductCount(UpDataCartItems.length)
            }
        })
    }

    return(
        <>
        <div className="d-flex m-3 justify-content-around">
            <Price cartItems = {cartItems} Remove={Remove}/>
            <h1 className="pl-5 text-warning">(Hello To Cart Product)</h1>
        </div>
            <div className="container">
                <div className="row">
                    {cartItems.map((item , index)=>(
                            <div className="product col-md-4 col-lg-3 " key={item.id} ref={(el)=>{productRefs.current[index] = el}}>
                                    <div className="box ">
                                    <img className="image img-fluid" src={item.imag} alt="" />
                                    </div>
                                    <div className="card-body bg-dark mb-3 ">
                                    <p className="card-title text-warning">{item.price}</p>
                                    <p className="card-text text-light">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                                    inventore consectetur placeat laudantium consequuntur dolorem?
                                    </p>
                                    <button className="btn btn-outline-warning mb-3" onClick= {()=>Remove(item.id)}>Remove Product</button>
                                    </div>
                                </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Cart