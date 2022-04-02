import { useState, useEffect } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/Layout.css'

function App() {
    const savedCart = localStorage.getItem('cart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
    const [isFooteerShown, updateIsaFooterShown] = useState(true)

    useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

    useEffect(() => {
        alert('Bienvenue dans La maison jungle')
    }, [])
    return (
        <div>
            <Banner>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart}/>
                <ShoppingList cart={cart} updateCart={updateCart}/>
            </div>
            <button onClick={()=> updateIsaFooterShown(!isFooteerShown)}>
                Cacher/afficher
            </button>
            {isFooteerShown && <Footer/>}
        </div>
    )
}

export default App