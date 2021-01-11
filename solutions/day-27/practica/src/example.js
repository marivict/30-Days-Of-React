import React,{useState, useEffect, useRef} from 'react'

const Example = () => {
    const [name, setName] = useState('')
    const [products, setProducts] = useState([])
    const entrada = useRef()

    useEffect(() =>{
        setTimeout(()=>{
            if(name === entrada.current.value){
                fetch('https://universidad-react-api-test.luxfenix.now.sh/products?name=' + name)
                .then(res => res.json())
                .then(data => setProducts(data.products))
            }
        }, 600)

        
    }, [name])
    const handleInput = (e) => {
        setName(e.target.value)
    }

    return(
        <div>
            <input
                type="text"
                onChange={handleInput}
                ref={entrada}
            />
            <div>
                <br />
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </div>
        </div>
    )
}

export default Example