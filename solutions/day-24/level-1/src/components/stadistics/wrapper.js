import React from 'react'
import Menu from '../Menu/Menu'

const Wrapper = ({Topic, countries}) => {
    return(
        <div className='stadistics'>
            <div className='stadistics-container'>
                <div className='stadistics-wrapper'>
                    <div className='stadistics-wrapper-inner'>
                        <Topic countries={countries} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wrapper