import React from 'react'
import Bestdeals from './Bestdeals'

const Deals = () => {
  return (
    <div className='dailydeals-container'>
        <div className='dailydeals-heading'>
            <h1>Daily Deals</h1>
            <a href='#' style={{marginRight: '2rem', textDecoration:'none', color:'black'}}>View All</a>
        </div>
        <div className='dailydeals-content'>
        <img src='/dailydeals.webp' alt='dailydeals' />
        </div> 
    </div>      
    )
}
export default Deals
