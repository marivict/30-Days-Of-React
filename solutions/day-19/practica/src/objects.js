import React, {useState} from 'react'

const ObjectExample = () => {
    const [state, setState] = useState({
        clicks: 0,
        title:''
    })

    const handleClick = () =>{
        setState({
            ...state,
            clicks: state.clicks + 1
        })
    }

    const handleInput = (e) =>{
        const title = e.target.value
        setState({
            ...state,
            title
        })
    }

    
    return(
        <div>
            <input 
              type="text"
              value={state.title}
              onChange ={handleInput}
            />
            <button onClick={handleClick}>Clicks({state.clicks})</button>
            <h2>{state.title}</h2>
        </div>
    )
}

export default ObjectExample