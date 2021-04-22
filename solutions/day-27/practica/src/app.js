import React,{useRef} from 'react'


const App = () =>  {
  const ref = useRef(null)
  const onClick = () => {
    /*let value = ref.current.value
    alert(value)*/
    /* let content = ref.current.textContent
       alert(content)*/

    ref.current.style.backgroundColor= "#61dbfb"
    ref.current.style.padding = '50px'
    ref.current.style.textAlign = 'center'
    ref.current.style.color = '#fff'
  }

    return(
      <div className='App'>
        <h1 ref={ref}>Apple's Tree</h1>
        <button onClick={onClick}>Aplly styles</button>
      </div>
    )
}

export default App 