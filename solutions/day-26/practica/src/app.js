import React,{useState, useContext} from 'react'


// Home Component

const MyContext = React.createContext()
// MyContext se vuelve un objeto 
// Ahor puedes acceder a {Provider y Consumer}


const Nieto = () => {
  //Forma Tradicional
  // <MyContext.Consumer>
  //   {(context) => (
  //     <div>
  //       <h1>Nieto{context.counter}</h1>
  //       <button onClick={context.handleClick}>Nieto Dispatcher</button>
  //     </div>
  //   )}
  // </MyContext.Consumer>
  const context = useContext(MyContext)
  return(
    <div>
      <h1>Nieto{context.counter}</h1>
      <button onClick={context.handleClick}>Nieto Dispatcher</button>
  </div>
  )
}

const Hijo = () => {
  return(
    <div>
      <h1>Hijo</h1>
      <Nieto />
    </div>
  )
}



const App = () =>  {

 
  const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 2)
    }

    return(
      <MyContext.Provider value={{
        counter, 
        handleClick
      }}>
        <div>
            <h1>{counter}</h1>
            <button onClick={handleClick}>Aumentarx2</button>
            <Hijo />
        </div>
      </MyContext.Provider>
    )
}



export default App 