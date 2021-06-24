import React from 'react';





function CartTile(props) {
    console.log(props.item)
    function removeScore(){
        props.onRemoveScore(props.item.id)
        fetch(`http://localhost:3000/carts/${props.item.id}`,
        {
            method: 'DELETE'

        })
        .then(console.log)
    }

    return (
        <div>
              <div className="img">
                 <img key={props.score.id} 
                alt={props.score.name} 
                src={props.score.cover}/>
            </div>  
                <p>{props.score.name}</p>
                <button onClick={removeScore}> Remove </button>

               
                
        </div>
    );
}

export default CartTile;


