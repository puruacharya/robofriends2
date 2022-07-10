import React from 'react'
import './card.css'


const Card = ({name, email, id}) => {
    
        return( 
        <div className='bg-light-green dib br3 pa4 ma2 grow bw2 shadow-5'>
            <img alt="Robot" src="https://robohash.org/23.238.193.4.png?100x100" />
            <h3>{name}</h3>
            <h5>{email}</h5>
            <h6>{id}</h6>

        </div>
        )
    
}

export default Card