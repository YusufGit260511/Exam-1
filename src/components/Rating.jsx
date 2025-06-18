import React from 'react'

import fullstar from '../assets/fullstar.png'
import halfstar from '../assets/halfstar.png'
import emptystar from '../assets/emptystar.png'

const Rating = ({ value }) => {
  return (
    <div className='flex items-center gap-[4px]'>
        {[1, 2, 3, 4, 5].map((i) => {
            if (value >= i) return <img key={i} src={fullstar} alt="full" />
            if (value >= i - 0.5) return <img key={i} src={halfstar} alt="half" />
            return <img key={i} src={emptystar} alt="empty" />
        })}
    </div>
  )
}

export default Rating
