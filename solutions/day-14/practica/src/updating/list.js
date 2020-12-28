import React from 'react'

const itemStyles = {
    padding: '1em',
    borderBottom: '1px solid #CCC',
    marginTop: '0.4em'
  }

class Item extends React.Component {

    handleClick = () => {
        this.props.onRemove(this.props.item)
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.item.id !== this.props.item.id){
            return true
        }
        return false
        
    }

    render(){
        const {item} = this.props
        return(
            <div style={itemStyles}>
                <button onClick={this.handleClick}>X</button>
                <span>{item.text}</span>
            </div>
        )
    }
}

class List extends React.Component {
    state = {
        list:[]
    }

    agregar = (e) =>{
        e.preventDefault()
        const text = e.target[0].value
        const id = Math.random().toString(16)
        const pendiente = {text, id}

        this.setState(state => ({
            list:[
                ...state.list,
                pendiente
            ]
        }))

        e.target[0].value = ''
    }

    eliminar = (item) => {
        this.setState(state =>({
            list: state.list.filter(
                _item =>{
                    return item.id !== _item.id
                }
            )
        }))
    }
    render(){
        return(
            <div>
                <h2>shouldComponentUpdate</h2>
                <form onSubmit={this.agregar}>
                    <input placeholder="Ingresa tus tareas"/>
                    <button>Agregar</button>
                </form>
                <div>
                    {this.state.list.map(item =>(
                        <Item 
                          key={item.id}
                          item={item}
                          onRemove = {this.eliminar}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default List