import React from "react";
import { Link } from "react-router-dom"
function Nav() {
    return(
       <nav>
           <h1>Bass Scores Edition</h1>
           <ul className="nav-links">
               <Link exact to="/">Home</Link>
               <Link exact to="/Shop">Shop</Link>
               <Link exact to="/about">About us</Link>
               <Link exact to="/contactus">Contact us</Link>
               <Link exact to="/loginsignup">Login/SignUp</Link>
               <Link exact to="/Cart">Cart</Link>
           </ul>
           
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