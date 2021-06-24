import CartTile from "./CartTile";


function Cart (props) {

    // const handleClick = () => {
    //     fetch('http://localhost:3000/carts',{
    //         headers: {
    //             Authorization: `Bearer ${localStorage.token}`
    //         }
    //     })
    //     .then (response => response.json())
    //     .then (result => console.log(result))
    // }

    console.log(props.cart.user.carts)
    let renderCart = props.cart.user.carts.map(item => <CartTile 
        Key={item.id}
        score={item.score}
        item={item}
         onRemoveScore={props.onRemoveScore}/>)

    return (
        <ul>
            {renderCart}
        </ul>
    //   <button onClick={handleClick}>My Cart</button> 
    )
  
}


export default Cart;