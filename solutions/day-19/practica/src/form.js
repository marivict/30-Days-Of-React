import React,{useState} from 'react'

// Getting data from an input field
export const Form = () =>{
    const [firstname, setFirstname] =useState('')

    const handleChange = (e) => {
        const label = e.target.value
        setFirstname(label)
    }
    return(
        <div>
            <label htmlFor='fistname'>Firstname</label>
            <input 
                type='text'
                id='firstname'
                placeholder='Firstname'
                value={firstname}
                onChange={handleChange}
            />
            <h1>{firstname}</h1>
        </div>
    )
}

// Getting multiple input data from form

export const MultipleForm = () => {
    const initialState ={
        firstname: '',
        lastName: '',
        country: '',
        title: ''
    }

    const [formData, setData] = useState(initialState)

    const onChange = (e) => {
        const {name, value} = e.target
        setData({...formData, [name] : value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
    }

    const {firstname, lastName, country, title } = formData
    return(
        <div>
            <h3>Add Student</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type="text"
                        name='firstname'
                        placeholder='Firstname'
                        value={firstname}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name='lastName'
                        placeholder='Lastname'
                        value={lastName}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name='country'
                        placeholder='Country'
                        value={country}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name='title'
                        placeholder='Title'
                        value={title}
                        onChange={onChange}
                    />
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}