import React,{useState} from 'react'

const TextArea = ({
    cancelEdit, 
    tweet, 
    edit,
    id,
    setEditField
}) => {

    const [textareaMessage, setTextareaMessage] = useState(tweet)

    const onChangeTextArea = (e) => {
        setTextareaMessage(e.target.value)
    }

    return(
        <div>
            <textarea onChange={onChangeTextArea} value={textareaMessage}></textarea>
            <button onClick={() =>{edit(id, setEditField, textareaMessage)}}>Save</button>
            <button onClick={() => {cancelEdit()}}>Cancel</button>
        </div>
    )
}

export default TextArea