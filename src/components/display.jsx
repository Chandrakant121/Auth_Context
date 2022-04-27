import '../App.css'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'


export const Display = () => {
    const { isAuth, toggleAuth } = useContext(AuthContext)
    return (<div>
        <h2> You Login Successfully Done</h2>
        <h3>Token:- {isAuth}</h3>
    </div>)
}