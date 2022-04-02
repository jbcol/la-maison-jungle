import '../styles/Banner.css'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'

function Banner() {
    const [timer, setTimer] = useState(0);

    useEffect(()=>{
        const intervalID =  setInterval(()=>{
            setTimer(timer=>timer +1)
        },1000)

        return ()=> {
            clearInterval(intervalID)
        }

    },[])

    const title = 'La maison jungle'
    return (
        <div className='lmj-banner'>
            <h1 className='lmj-chrono'>Vous êtes sur le site depuis : {timer}s</h1>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}


export default Banner