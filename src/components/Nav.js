import React from "react";

const Nav = () => {
    return(
       <nav>
           <h1>Bass Scores Edition</h1>
           <ul className="nav-links">
               <li>Home</li>
               <li>Shop</li>
               <li>About us</li>
               <li>Contact us</li>
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