import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart"
import { Link } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core"

library.add(faShoppingCart)
function Navbar({productCount }){
  
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-warning sticky-top">
              <div className="container-fluid">
                <Link to={'/'} className="navbar-brand" >Sopping</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav text-alien-center me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to={'/cart'} className="nav-link active" aria-current="page" >(Cart)</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" >($Price)</Link>
                    </li>
                  </ul>

                  <li className="shopping-cart">
                  <FontAwesomeIcon icon={faShoppingCart} className="my-icon"/>
                  <span className="badge text-dark">{productCount}</span>
                  
                  </li>

                </div>
              </div>
            </nav>
        </>
    )
}
export default Navbar