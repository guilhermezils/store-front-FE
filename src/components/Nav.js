import React from "react";
import { Link } from "react-router-dom"
const Nav = () => {
    return(
       <nav>
           <h1>Bass Scores Edition</h1>
           <ul className="nav-links">
               <Link to="/">Home</Link>
               <Link to="/shop">Shop</Link>
               <Link to="/about">About us</Link>
               <Link to="/contact">Contact us</Link>
           </ul>
           <span>SignUp/Login</span>
       </nav>
    )
}


export default Nav;

//other way from Hogwarts

// const Nav = () => {
//     return(
//         <div className="navWrapper">
//         <span className="headerText"> Bass Scores Edition </span> 
//             <div>
//         <button>Home</button>
//         <button>Shop</button>
//         <button>About us</button>
//         <button>Contact us</button>
//             </div>
//         </div>
//     )
// }


// export default Nav;