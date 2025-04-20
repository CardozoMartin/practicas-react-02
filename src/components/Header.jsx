import React from 'react'
import martin from '../assets/Lionel.webp'
const Header = ({nombre}) => {
    return (
        <div>
            <h1>{nombre}</h1>
            <img src={martin} alt="" />
        </div>
    )
}

export default Header