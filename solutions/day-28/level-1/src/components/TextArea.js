import React from 'react'

const TextArea = ({cancelEdit, tweet, edit}) => {
    const onChangeTextArea = () => {
        
    }
    return(
        <div>
            <textarea value={tweet}></textarea>
            <button onClick={edit}>Save</button>
            <button onClick={() => {cancelEdit()}}>Cancel</button>
        </div>
    )
}

export default TextArea