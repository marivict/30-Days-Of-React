import React from 'react'
import Population from './Population'
import Stadistics from './Stadistics'
import Menu from './Menu'

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