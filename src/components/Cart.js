function Cart () {

    const handleClick = () => {
        fetch('http://localhost:3000/carts',{
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
        .then (response => response.json())
        .then (result => console.log(result))
    }
    // const cart = () => {
    //     fetch('http://localhost:3000/carts',{
    //         headers: {
    //             Authorization: `Bearer ${localStorage.token}`
    //         }
    //     })
    //     .then (response => response.json())
    //     .then (result => console.log(result))
    // }

    return (
        
      <button onClick={handleClick}>My Cart</button> 
    )
    // return (
    //     <div className="products-list">
    //         { cart.score ? (<div>
    //             <img src={cart.score.image} alt={cart.score.image}/>
    //             <h1>{cart.score.price}$</h1>
    //             <h2>{cart.score.name}</h2>
                
    //             {/* <button className="delete-btn" onClick={() => removeCartItem()}>Remove</button> */}
    //         </div>): (
    //             <div>
    //                 Loading... Please Wait.
    //             </div>
    //             )
    //         }
    //     </div> 
    // )
}


export default Cart;