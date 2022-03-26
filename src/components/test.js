import { useState } from 'react'
{cart.map(({ name, price, amount }, index) => (
    <div key={`${name}-${index}`}>
        {name} {price}€ x {amount}
        <button className='lmj-cart-toggle-button-withdraw' onClick={() => updateCart([])}>
            retirer
        </button>
    </div>
))}