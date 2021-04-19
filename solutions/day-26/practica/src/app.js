import React, {createContext, useState} from 'react'
import Image from './image'

import './style.css'
export const ThemeContext = createContext()

const App = () => {
    
    const [day, setDay] = useState('day')

    const toggle = () => {
        setDay( day === 'day'? 'night' : 'day')  
    }
    return(
        <ThemeContext.Provider value={{day, toggle}}>
            <div>
                <Image />
            </div>
        </ThemeContext.Provider>
    )
}

export default App