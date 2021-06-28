import React from 'react'
import TextArea from './TextArea'
const Layout = ({tweet, deleteMessage, editMessage, editField}) => {
    return(
        <div>
            {editField ? <TextArea /> : <p>{tweet}</p>}
            
            <button 
                onClick={deleteMessage}
            >Delete
            </button>
            <button 
                onClick={editMessage}>
                    Edit
            </button>
        </div>
    )
}

export default Layout 