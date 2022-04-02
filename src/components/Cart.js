import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart, activeCategory, setActiveCategory}) {

    function removeToCart(name, price, amount, index) {
        const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
        if(amount == 1) {
            updateCart(cartFilteredCurrentPlant)
        }else {
            cartFilteredCurrentPlant.splice(index, 0, {name, price, amount: (amount - 1)})
            updateCart(cartFilteredCurrentPlant)
        }
    }

	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
								<button className='lmj-cart-toggle-button-withdraw' 
								onClick={() => removeToCart(name, price, amount, index)}>
									retirer une plante
								</button>
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart