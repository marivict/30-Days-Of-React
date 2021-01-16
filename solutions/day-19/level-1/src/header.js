import React from 'react'
import CatsMediaWeight from './components/catsMediaWeight'
import CatsMediaLife from './components/catsMediaLife'


const Header = ({breeds}) => {
    return(
        <header>
            <h1>30 days of React</h1>
            <h2>Cats Paradise</h2>
            <p>There are {breeds.length} cats breeds</p>
            <p className="flex-alignment">On Average a cat can weight <span className="heading-gray"><span><CatsMediaWeight breeds={breeds} /></span></span>Kg and live <span className="heading-gray"><span><CatsMediaLife breeds={breeds} /></span></span> years </p>
        </header>
    )
}

export default Header