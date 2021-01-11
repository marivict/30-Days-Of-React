import React,{useState, useEffect} from 'react'

const FetchingWithEffect = () => {
    const [users, setUsers] = useState([])
    const [isFetching, setFetching] = useState(true)

    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then(res => res.json())
        .then(users => {
            setUsers(users) 
            setFetching(false)
        })
    }, [])

    return(
        <div>
            {isFetching && <h1>Cargando...</h1>}
            <ul>
                {users.map(user =>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchingWithEffect